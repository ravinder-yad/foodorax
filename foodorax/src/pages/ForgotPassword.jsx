import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaKey } from "react-icons/fa";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API Call
        setTimeout(() => {
            setLoading(false);
            if (email) {
                setSubmitted(true);
                toast.success("Reset link sent to your email!");
            } else {
                toast.error("Please enter your registered email.");
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 relative overflow-hidden">

                {/* Back Button */}
                <Link to="/login" className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 transition-colors">
                    <FaArrowLeft />
                </Link>

                <div className="text-center mt-8 mb-8">
                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-sm">
                        <FaKey size={32} />
                    </div>
                    <h1 className="text-2xl font-extrabold text-gray-900">Forgot Password?</h1>
                    <p className="text-gray-500 mt-2 text-sm">
                        No worries! Enter your email address below and we'll send you a link to reset your password.
                    </p>
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-red-600 transition-all flex justify-center items-center gap-2 active:scale-95 disabled:opacity-70"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Sending Link...
                                </>
                            ) : (
                                "Send Reset Link"
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="text-center bg-green-50 p-6 rounded-xl border border-green-100 animate-fadeIn">
                        <h3 className="text-lg font-bold text-green-800 mb-2">Link Sent Successfully! 📧</h3>
                        <p className="text-sm text-green-700">
                            Check your email <strong>{email}</strong> for instructions to reset your password.
                        </p>
                        <button
                            onClick={() => navigate('/login')}
                            className="mt-6 text-sm font-bold text-green-700 hover:underline"
                        >
                            Back to Login
                        </button>
                    </div>
                )}

                <div className="mt-8 text-center border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-500">
                        Need help? <a href="#" className="font-bold text-gray-700 hover:underline">Contact Support</a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;
