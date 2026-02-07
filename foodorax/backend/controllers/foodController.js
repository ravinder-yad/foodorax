const Food = require('../models/Food');

// @desc    Fetch all foods
// @route   GET /api/food/all
// @access  Public
const getFoods = async (req, res) => {
    const foods = await Food.find({});
    res.json(foods);
};

// @desc    Fetch single food
// @route   GET /api/food/:id
// @access  Public
const getFoodById = async (req, res) => {
    const food = await Food.findById(req.params.id);

    if (food) {
        res.json(food);
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
};

// @desc    Create a food
// @route   POST /api/food/add
// @access  Private/Admin
const createFood = async (req, res) => {
    const {
        name,
        price,
        description,
        image,
        category,
        countInStock,
    } = req.body;

    const food = new Food({
        name,
        price,
        description,
        image,
        category,
        stock: countInStock || 0,
        rating: 0,
    });

    const createdFood = await food.save();
    res.status(201).json(createdFood);
};

// @desc    Delete a food
// @route   DELETE /api/food/delete/:id
// @access  Private/Admin
const deleteFood = async (req, res) => {
    const food = await Food.findById(req.params.id);

    if (food) {
        await food.deleteOne();
        res.json({ message: 'Food removed' });
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
};

// @desc    Update a food
// @route   PUT /api/food/update/:id
// @access  Private/Admin
const updateFood = async (req, res) => {
    const {
        name,
        price,
        description,
        image,
        category,
        countInStock,
    } = req.body;

    const food = await Food.findById(req.params.id);

    if (food) {
        food.name = name || food.name;
        food.price = price || food.price;
        food.description = description || food.description;
        food.image = image || food.image;
        food.category = category || food.category;
        food.stock = countInStock || food.stock;

        const updatedFood = await food.save();
        res.json(updatedFood);
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
};

module.exports = {
    getFoods,
    getFoodById,
    createFood,
    deleteFood,
    updateFood,
};
