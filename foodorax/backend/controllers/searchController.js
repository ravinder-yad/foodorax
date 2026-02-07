const Food = require('../models/Food');

// @desc    Search foods
// @route   GET /api/search?q=
// @access  Public
const searchFoods = async (req, res) => {
    const keyword = req.query.q;

    let foods;

    if (keyword) {
        // Search by name, category, or description
        foods = await Food.find({
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { category: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
            ],
        });
    } else {
        // If query is blank, return popular items (e.g. sorted by rating descending)
        // You could also add Trending (e.g. by order count if tracked) or Recommended
        foods = await Food.find({}).sort({ rating: -1 }).limit(12);
    }

    res.json(foods);
};

module.exports = {
    searchFoods,
};
