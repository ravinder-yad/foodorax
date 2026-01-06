import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaShieldAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate Signup API
        setTimeout(() => {
            setLoading(false);
            if (formData.name && formData.email && formData.password) {
                toast.success(`Account created! Welcome, ${formData.name}.`);
                navigate("/");
            } else {
                toast.error("Please fill all fields.");
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden flex-row-reverse">

                {/* Right: Illustration & Brand (Flipped for variety) */}
                <div className="hidden md:flex w-1/2 bg-gray-900 items-center justify-center p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-20"></div>
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-4xl font-extrabold mb-4">Join <span className="text-primary">FoodoraX</span></h1>
                        <p className="text-lg opacity-90 mb-8">Unlock exclusive deals, free delivery, and more!</p>
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/burger-5863025-4897344.png"
                            alt="Burger 3D"
                            className="w-56 drop-shadow-2xl animate-float"
                        />
                    </div>
                </div>

                {/* Left: Signup Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="text-center md:text-left mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">Create Account 🚀</h2>
                        <p className="text-gray-500 mt-2">Sign up to start your food journey.</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

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
                            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
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

                        {/* Signup Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-red-600 hover:shadow-red-500/30 transition-all flex justify-center items-center gap-2 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Creating Account...
                                </>
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-sm text-gray-400 font-medium">OR</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    {/* Social Login */}
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white py-2.5 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-600 text-sm">
                        <FaGoogle className="text-red-500" /> Sign up with Google
                    </button>

                    {/* Footer */}
                    <div className="mt-8 text-center text-sm">
                        <p className="text-gray-500">
                            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login here</Link>
                        </p>

                        <p className="text-xs text-gray-400 mt-6 max-w-xs mx-auto">
                            By creating an account, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;
