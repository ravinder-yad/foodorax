import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate Login API
        setTimeout(() => {
            setLoading(false);
            if (formData.email && formData.password) {
                toast.success("Welcome back! Login Successful.");
                navigate("/");
            } else {
                toast.error("Please enter valid credentials.");
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden">

                {/* Left: Illustration & Brand */}
                <div className="hidden md:flex w-1/2 bg-primary items-center justify-center p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-4xl font-extrabold mb-4">Foodora<span className="text-yellow-400">X</span></h1>
                        <p className="text-lg opacity-90 mb-8">Order delicious food from the best restaurants near you.</p>
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/delivery-man-riding-scooter-4903673-4089069.png"
                            alt="Delivery"
                            className="w-64 drop-shadow-2xl animate-float"
                        />
                    </div>
                </div>

                {/* Right: Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="text-center md:text-left mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back! 👋</h2>
                        <p className="text-gray-500 mt-2">Login to continue ordering your favorite meal.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-bold text-gray-700">Password</label>
                                <Link to="/forgot-password" class="text-xs text-primary font-bold hover:underline">Forgot Password?</Link>
                            </div>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-12 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-red-600 hover:shadow-red-500/30 transition-all flex justify-center items-center gap-2 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Logging In...
                                </>
                            ) : (
                                "Login to Account"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-sm text-gray-400 font-medium">OR</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white py-2.5 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-600 text-sm">
                            <FaGoogle className="text-red-500" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white py-2.5 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-600 text-sm">
                            <FaMobileAlt className="text-blue-500" /> Phone OTP
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            New to FoodoraX? <Link to="/signup" className="text-primary font-bold hover:underline">Create Account</Link>
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-green-600 bg-green-50 py-2 rounded-lg">
                            <FaShieldAlt /> Your data is 100% secure with us.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
