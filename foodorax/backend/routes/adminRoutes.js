const express = require('express');
const router = express.Router();
const {
    getUsers,
    deleteUser,
} = require('../controllers/adminController');
const { getOrders, updateOrderStatus } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

// User Management
router.route('/users').get(protect, admin, getUsers);
router.route('/users/:id').delete(protect, admin, deleteUser);

// Order Management (Reusing order controller functions for admin view)
router.route('/orders').get(protect, admin, getOrders);
router.route('/order-update/:id').put(protect, admin, updateOrderStatus);

module.exports = router;
