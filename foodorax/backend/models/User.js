const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: function () { return !this.googleId; }, // password is required only if not google login
    },
    phone: {
        type: String,
        required: false, // Could be optional for google login initially
    },
    image: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    googleId: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
