import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp, FaAndroid, FaApple, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 relative">

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all hover:-translate-y-2 active:scale-95"
                title="Back to Top"
            >
                <FaArrowUp />
            </button>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand Section */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-white mb-4">Foodora<span className="text-primary">X</span></h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Taste at the Speed of X. We connect you with the best restaurants in your city for quick, fresh, and delicious food delivery.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links (Replaced Company) */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Home</Link></li>
                            <li><Link to="/restaurants" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> All Restaurants</Link></li>
                            <li><Link to="/orders" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> My Orders</Link></li>
                            <li><Link to="/cart" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Cart</Link></li>
                            <li><Link to="/login" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Login</Link></li>
                        </ul>
                    </div>

                    {/* 3. Legal & Account */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">Account & Legal</h3>
                        <ul className="space-y-3">
                            <li><Link to="/signup" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Create Account</Link></li>
                            <li><Link to="/forgot-password" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Forgot Password</Link></li>
                            <li><Link to="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Privacy Policy</Link></li>
                            <li><Link to="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* 4. App Download & Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">Install App</h3>
                        <p className="text-gray-400 mb-4 text-sm">Get the best food experience on our app.</p>
                        <div className="flex flex-col gap-3 mb-8">
                            <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-colors text-left border border-gray-700">
                                <FaAndroid className="text-2xl text-green-400" />
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-gray-400">Get it on</div>
                                    <div className="font-bold text-white leading-none">Google Play</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-colors text-left border border-gray-700">
                                <FaApple className="text-2xl text-white" />
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-gray-400">Download on the</div>
                                    <div className="font-bold text-white leading-none">App Store</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">
                        © 2026 FoodoraX Technologies Pvt. Ltd. All rights reserved.
                    </p>

                    {/* Developer Credit */}
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                        <span>Made with ❤️ by</span>
                        <span className="text-white font-bold bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Ravinder Yadav</span>
                    </div>
                </div>

                {/* Locations */}
                <div className="mt-8 text-center text-xs text-gray-600">
                    WE DELIVER TO: Delhi • Mumbai • Bangalore • Hyderabad • Chennai • Pune • Jaipur • Lucknow • Ahmedabad • Chandigarh
                </div>
            </div>
        </footer>
    );
};

export default Footer;
