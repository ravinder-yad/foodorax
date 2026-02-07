const express = require('express');
const router = express.Router();
const {
    getCart,
    addToCart,
    removeFromCart,
    updateCartItem,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCart);
router.route('/add').post(protect, addToCart);
router.route('/update').put(protect, updateCartItem);
router.route('/remove/:id').delete(protect, removeFromCart);

module.exports = router;
