const express = require('express');
const router = express.Router();
const { searchFoods } = require('../controllers/searchController');

router.route('/').get(searchFoods);

module.exports = router;
