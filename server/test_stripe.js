require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function testStripe() {
    try {
        console.log("Testing Stripe with key:", process.env.STRIPE_SECRET_KEY ? "Present (Starts with " + process.env.STRIPE_SECRET_KEY.substring(0, 7) + ")" : "MISSING");
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'bdt',
                    product_data: { name: 'Test Product' },
                    unit_amount: 5000,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:5000/success',
            cancel_url: 'http://localhost:5000/cancel',
        });
        console.log("Success! Session URL:", session.url);
    } catch (error) {
        console.error("Stripe Error Details:");
        console.error("Message:", error.message);
        console.error("Type:", error.type);
        console.error("Code:", error.code);
        console.error("Param:", error.param);
    }
}

testStripe();
