const express = require('express');
const router = express.Router();
const {
    addAddress,
    getAddresses,
    deleteAddress,
    updateAddress,
} = require('../controllers/addressController');
const { protect } = require('../middleware/authMiddleware');

router.route('/add').post(protect, addAddress);
router.route('/list').get(protect, getAddresses);
router.route('/update/:id').put(protect, updateAddress);
router.route('/delete/:id').delete(protect, deleteAddress);

module.exports = router;
