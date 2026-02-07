const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    sendOtpToUser,
    verifyOtp,
} = require('../controllers/authController');

const { check, validationResult } = require('express-validator');

// Validation middleware
const validateSignup = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

router.post('/signup', validateSignup, registerUser);
router.post('/login', loginUser);
router.post('/send-otp', sendOtpToUser);
router.post('/verify-otp', verifyOtp);
// Google login route can be added here if using a specific strategy or just use login endpoint with google token verification

module.exports = router;
