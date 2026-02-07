const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Food = require('../models/Food');

// @desc    Create new order
// @route   POST /api/order/create
// @access  Private
const createOrder = async (req, res) => {
    const {
        orderItems,
        msg, // optional message?
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400).json({ message: 'No order items' });
        return;
    } else {
        const order = new Order({
            user: req.user._id,
            items: orderItems,
            totalAmount: totalPrice,
            address: shippingAddress,
            paymentMethod,
            status: 'pending', // Default
        });

        const createdOrder = await order.save();

        // Clear cart
        await Cart.findOneAndDelete({ user: req.user._id });

        res.status(201).json(createdOrder);
    }
};

// @desc    Get order by ID
// @route   GET /api/order/:id
// @access  Private
const getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id)
        .populate('user', 'name email')
        .populate('address');

    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

// @desc    Get logged in user orders
// @route   GET /api/order/my-orders
// @access  Private
const getMyOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
};

// @desc    Get all orders
// @route   GET /api/admin/orders
// @access  Private/Admin
const getOrders = async (req, res) => {
    const orders = await Order.find({})
        .populate('user', 'id name')
        .sort({ createdAt: -1 });
    res.json(orders);
};

// @desc    Update order status
// @route   PUT /api/admin/order-update/:id
// @access  Private/Admin
const updateOrderStatus = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.status = req.body.status || order.status;

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

module.exports = {
    createOrder,
    getOrderById,
    getMyOrders,
    getOrders,
    updateOrderStatus,
};
