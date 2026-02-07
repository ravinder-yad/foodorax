const express = require('express');
const router = express.Router();
const {
    getFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood,
} = require('../controllers/foodController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.route('/all').get(getFoods);
router.route('/add').post(protect, admin, createFood);
router.route('/:id').get(getFoodById);
router.route('/update/:id').put(protect, admin, updateFood);
router.route('/delete/:id').delete(protect, admin, deleteFood);

module.exports = router;
