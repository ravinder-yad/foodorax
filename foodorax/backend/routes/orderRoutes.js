const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrderById,
    getMyOrders,
    getOrders,
    updateOrderStatus,
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.route('/create').post(protect, createOrder);
router.route('/my-orders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);

// Admin
router.route('/admin/all').get(protect, admin, getOrders);
router.route('/status/:id').put(protect, admin, updateOrderStatus);

module.exports = router;
