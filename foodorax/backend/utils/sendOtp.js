const nodemailer = require('nodemailer');

const sendOtp = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Your Foodorax OTP Code',
            text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
            html: `<h1>Your OTP code is ${otp}</h1><p>It is valid for 5 minutes.</p>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};

module.exports = sendOtp;
