const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    serviceType: { type: String, required: true }, // e.g., 'Wash', 'Dry Cleaning'
    pickupDate: { type: Date, required: true },
    pickupSlot: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'Pending' }, // Pending, Confirmed, Completed, Failed
    totalAmount: { type: Number, required: true },
    paidAmount: { type: Number, default: 0 },
    transactionId: { type: String, unique: true },
    paymentStatus: { type: String, default: 'Pending' }, // Pending, Paid, Failed
    currency: { type: String, default: 'BDT' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
