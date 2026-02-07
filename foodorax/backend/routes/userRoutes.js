const express = require('express');
const router = express.Router();
const {
    getUserProfile,
    updateUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

router.delete('/delete', protect, async (req, res) => {
    // User requested deletion
    const user = await require('../models/User').findById(req.user._id);

    if (user) {
        await user.deleteOne();
        res.json({ message: 'User deleted' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
