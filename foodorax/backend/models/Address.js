const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    fullAddress: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
    },
    addressType: {
        type: String, // 'Home' or 'Work'
        default: 'Home',
    },
}, { timestamps: true });

module.exports = mongoose.model('Address', addressSchema);
