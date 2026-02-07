const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const sendOtp = require('../utils/sendOtp');
const Otp = require('../models/Otp');
const bcrypt = require('bcryptjs');

// @desc    Register a new user
// @route   POST /api/auth/signup
const registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// @desc    Login user & get token
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

// @desc    Send OTP to email
// @route   POST /api/auth/send-otp
const sendOtpToUser = async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP

    const otpData = await Otp.create({
        email,
        otp,
    });

    const isSent = await sendOtp(email, otp);

    if (isSent) {
        res.status(200).json({ message: 'OTP sent successfully' });
    } else {
        res.status(500).json({ message: 'Error sending OTP' });
    }
};

// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    const otpRecord = await Otp.findOne({ email, otp });

    if (otpRecord) {
        await Otp.deleteOne({ _id: otpRecord._id });
        res.status(200).json({ message: 'OTP verified successfully' });
    } else {
        res.status(400).json({ message: 'Invalid OTP' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    sendOtpToUser,
    verifyOtp,
};
