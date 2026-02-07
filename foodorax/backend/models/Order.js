const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Food',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'],
        default: 'pending',
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'Online'],
        default: 'COD',
    },
    paymentId: {
        type: String, // For online payments
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
