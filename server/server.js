require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const jwt = require('jsonwebtoken'); // Not mandatory if only using Firebase tokens

// Models
const User = require('./models/User');
const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Removed Google Auth client
const admin = require('./firebase'); // Import initialized admin
const { v4: uuidv4 } = require('uuid');
const SSLCommerzPayment = require('sslcommerz-lts');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const paypal = require('@paypal/checkout-server-sdk');

// PayPal Setup
const environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
);
const paypalClient = new paypal.core.PayPalHttpClient(environment);

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = process.env.IS_LIVE === 'true'; //true for live, false for sandbox

// Middleware
app.use(cors());
app.use(express.json());

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Request Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Test Route
app.get('/', (req, res) => res.send('Server is alive!'));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/laundryheap';
console.log('Using MONGODB_URI:', JSON.stringify(MONGODB_URI));
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('DB Connection Error:', err));


// --- Routes ---

// Firebase Auth Route (Sync/Login)
app.post('/api/auth/firebase', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Auth attempt with token:', token ? `${token.substring(0, 10)}...` : 'Token missing');

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { name, email, picture, uid } = decodedToken;

        let user = await User.findOne({ email });
        if (!user) {
            // Use Firebase UID as googleId for consistency or migrate schema
            user = await User.create({ name, email, googleId: uid, picture });
        }

        // In a real app, you might issue your own session JWT here too, 
        // or just rely on the Firebase token for API access.
        // For simplicity, we'll return the user data.
        res.json({ user });
    } catch (error) {
        console.error('Auth Error:', error);
        res.status(401).json({ message: 'Invalid token' });
    }
});

// Middleware to Verify Firebase Token
const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Middleware auth attempt with token:', token ? `${token.substring(0, 10)}...` : 'Token missing');
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { email, name, uid, picture } = decodedToken;

        // Find the user in our DB or create if missing (JIT Provisioning)
        let user = await User.findOne({ email });

        if (!user) {
            // Auto-create user if they have a valid Firebase token but aren't in Mongo yet
            user = await User.create({
                name: name || 'User',
                email: email,
                googleId: uid,
                picture: picture || ''
            });
        }

        req.userId = user._id; // Set local DB ID for relational lookups
        next();
    } catch (err) {
        console.error('Auth Middleware Error:', err);
        return res.status(403).json({ message: 'Forbidden' });
    }
};

// Helper to parse "Today", "Tomorrow", etc into actual Dates
const parseRelativeDate = (dateStr) => {
    const date = new Date();
    if (dateStr === 'Today') return date;
    if (dateStr === 'Tomorrow') {
        date.setDate(date.getDate() + 1);
        return date;
    }
    // Handle days of week (e.g. 'Monday')
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const targetIndex = days.indexOf(dateStr);
    if (targetIndex !== -1) {
        const currentIndex = date.getDay();
        let diff = targetIndex - currentIndex;
        if (diff <= 0) diff += 7;
        date.setDate(date.getDate() + diff);
        return date;
    }
    return new Date(dateStr); // Fallback
};

// --- Payment/Booking Routes ---

// Initialize Booking and Payment
app.post('/api/bookings/init', authenticate, async (req, res) => {
    try {
        const { serviceType, pickupDate, pickupSlot, address } = req.body;
        const user = await User.findById(req.userId);

        if (!user) return res.status(404).json({ message: 'User not found' });

        // Mock price logic
        const totalAmount = 1000;
        const paidAmount = totalAmount * 0.10; // 10% advance (100 BDT)
        const tran_id = uuidv4();

        const data = {
            total_amount: paidAmount,
            currency: 'BDT',
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: `${process.env.BASE_URL}/api/payment/success/${tran_id}`,
            fail_url: `${process.env.BASE_URL}/api/payment/fail/${tran_id}`,
            cancel_url: `${process.env.BASE_URL}/api/payment/cancel/${tran_id}`,
            ipn_url: `${process.env.BASE_URL}/api/payment/ipn`,
            shipping_method: 'Courier',
            product_name: `Laundry Service - ${serviceType}`,
            product_category: 'Service',
            product_profile: 'general',
            cus_name: user.name,
            cus_email: user.email,
            cus_add1: address,
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            ship_name: user.name,
            ship_add1: address,
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: '1000',
            ship_country: 'Bangladesh',
        };

        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then(async (apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL;

            // Create pending booking in DB
            await Booking.create({
                userId: req.userId,
                serviceType,
                pickupDate: parseRelativeDate(pickupDate),
                pickupSlot,
                address,
                totalAmount,
                paidAmount,
                transactionId: tran_id,
                status: 'Pending',
                paymentStatus: 'Pending'
            });

            res.send({ url: GatewayPageURL });
        });

    } catch (error) {
        console.error('Payment Init Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Success Route
app.post('/api/payment/success/:tranId', async (req, res) => {
    const { tranId } = req.params;
    try {
        await Booking.findOneAndUpdate(
            { transactionId: tranId },
            {
                paymentStatus: 'Paid',
                status: 'Confirmed'
            }
        );
        res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
    } catch (err) {
        console.error('Payment Success Update Error:', err);
        res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);
    }
});

// Fail Route
app.post('/api/payment/fail/:tranId', async (req, res) => {
    const { tranId } = req.params;
    try {
        await Booking.findOneAndUpdate(
            { transactionId: tranId },
            {
                paymentStatus: 'Failed',
                status: 'Failed'
            }
        );
        res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);
    } catch (err) {
        res.status(500).send('Error');
    }
});

// Cancel Route
app.post('/api/payment/cancel/:tranId', async (req, res) => {
    const { tranId } = req.params;
    try {
        await Booking.findOneAndDelete({ transactionId: tranId });
        res.redirect(`${process.env.FRONTEND_URL}/booking?payment=cancel`);
    } catch (err) {
        res.status(500).send('Error');
    }
});

// --- NEW: Stripe Payment Route ---
app.post('/api/bookings/init-stripe', authenticate, async (req, res) => {
    try {
        const { serviceType, pickupDate, pickupSlot, address } = req.body;
        const totalAmount = 1000;
        const paidAmount = totalAmount * 0.10;
        const tran_id = uuidv4();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'bdt',
                    product_data: { name: `Laundry Booking (10% Advance) - ${serviceType}` },
                    unit_amount: Math.round(paidAmount * 100), // Paisa
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/api/payment/success/${tran_id}`,
            cancel_url: `${process.env.BASE_URL}/api/payment/cancel/${tran_id}`,
            metadata: { tran_id }
        });

        await Booking.create({
            userId: req.userId,
            serviceType,
            pickupDate: parseRelativeDate(pickupDate),
            pickupSlot,
            address,
            totalAmount,
            paidAmount,
            transactionId: tran_id,
            status: 'Pending',
            paymentStatus: 'Pending'
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Stripe Init Error Details:', error);
        res.status(500).json({ message: 'Stripe error', error: error.message });
    }
});

// --- NEW: PayPal Payment Route ---
app.post('/api/bookings/init-paypal', authenticate, async (req, res) => {
    try {
        const { serviceType, pickupDate, pickupSlot, address } = req.body;
        const totalAmount = 1000;
        const paidAmount = totalAmount * 0.10;
        const tran_id = uuidv4();

        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: (paidAmount / 100).toFixed(2) // Simulating BDT to USD for demo
                },
                description: `Laundry Booking (10% Advance) - ${serviceType}`,
                custom_id: tran_id
            }],
            application_context: {
                return_url: `${process.env.BASE_URL}/api/payment/success/${tran_id}`,
                cancel_url: `${process.env.BASE_URL}/api/payment/cancel/${tran_id}`
            }
        });

        const order = await paypalClient.execute(request);

        await Booking.create({
            userId: req.userId,
            serviceType,
            pickupDate: parseRelativeDate(pickupDate),
            pickupSlot,
            address,
            totalAmount,
            paidAmount,
            transactionId: tran_id,
            status: 'Pending',
            paymentStatus: 'Pending'
        });

        const approvalUrl = order.result.links.find(link => link.rel === 'approve').href;
        res.json({ url: approvalUrl });
    } catch (error) {
        console.error('PayPal Init Error Details:', error);
        res.status(500).json({ message: 'PayPal error', error: error.message });
    }
});

// Get User Bookings
app.get('/api/bookings', authenticate, async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.userId }).sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
