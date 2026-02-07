const Cart = require('../models/Cart');
const Food = require('../models/Food');

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.food');
    if (cart) {
        res.json(cart);
    } else {
        res.json({ items: [], totalPrice: 0 });
    }
};

// @desc    Add item to cart
// @route   POST /api/cart/add
// @access  Private
const addToCart = async (req, res) => {
    const { foodId, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        cart = new Cart({ user: req.user._id, items: [] });
    }

    const foodIndex = cart.items.findIndex(item => item.food.toString() === foodId);

    if (foodIndex > -1) {
        cart.items[foodIndex].quantity += Number(quantity);
    } else {
        cart.items.push({ food: foodId, quantity: Number(quantity) });
    }

    // Calculate total price
    // This is expensive if we have to query Food every time, but necessary for accuracy
    // Alternatively, we could trust the frontend price but that is insecure.
    // Let's populate and calculate.

    // However, to populate we need to save first or use a separate loop.
    // Let's fetch the food price.
    const food = await Food.findById(foodId);
    if (!food) {
        res.status(404).json({ message: 'Food not found' });
        return;
    }

    // Recalculate total price of all items
    // Better to loop through all items and fetch prices, or keep price in cart item (but price might change).
    // For now, let's just save and then do a full recalculation or incremental.
    // Incremental:
    cart.totalPrice += food.price * Number(quantity);

    await cart.save();

    // Return populated cart
    const populatedCart = await Cart.findById(cart._id).populate('items.food');
    res.json(populatedCart);
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/update
// @access  Private
const updateCartItem = async (req, res) => {
    const { foodId, quantity } = req.body; // New absolute quantity? Or delta? Usually absolute in PUT.

    const cart = await Cart.findOne({ user: req.user._id }).populate('items.food');

    if (!cart) {
        res.status(404).json({ message: 'Cart not found' });
        return;
    }

    const itemIndex = cart.items.findIndex(item => item.food._id.toString() === foodId);

    if (itemIndex > -1) {
        const item = cart.items[itemIndex];
        // Adjust total price
        // Remove old price contribution
        cart.totalPrice -= item.food.price * item.quantity;

        if (quantity > 0) {
            item.quantity = quantity;
            // Add new price contribution
            cart.totalPrice += item.food.price * quantity;
        } else {
            // Remove item if quantity is 0
            cart.items.splice(itemIndex, 1);
        }

        await cart.save();
        res.json(cart);
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/remove/:id
// @access  Private
const removeFromCart = async (req, res) => {
    const foodId = req.params.id;
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.food');

    if (cart) {
        const itemIndex = cart.items.findIndex(item => item.food._id.toString() === foodId);

        if (itemIndex > -1) {
            const item = cart.items[itemIndex];
            cart.totalPrice -= item.food.price * item.quantity;
            cart.items.splice(itemIndex, 1);

            await cart.save();
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } else {
        res.status(404).json({ message: 'Cart not found' });
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    updateCartItem,
};
