const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true, // Should be cloudinary url
    },
    category: {
        type: String, // e.g., "Veg", "Non-Veg", "Dessert", "Drinks"
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
