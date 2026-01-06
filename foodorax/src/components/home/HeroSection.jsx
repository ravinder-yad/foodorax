import { FiSearch, FiMapPin, FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* 1. High-Quality Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
            ></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 to-black/40"></div>

            {/* 2. Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between">

                {/* Text Content */}
                <div className="md:w-1/2 space-y-8">
                    <div className="inline-block bg-accent/20 backdrop-blur-md border border-accent/30 text-accent px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase shadow-lg animate-pulse">
                        Hungry? We got you. 🍔
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                        Delicious Food, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Delivered Hot.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-200 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Order from the best local restaurants with easy, on-demand delivery. Freshness guaranteed.
                    </p>

                    {/* Glassmorphism Search Bar */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-xl">

                        {/* Location */}
                        <div className="flex items-center px-4 py-3 bg-white/10 rounded-xl text-white w-full md:w-auto border border-white/5 mx-1 md:mx-0">
                            <FiMapPin className="text-accent text-lg mr-2" />
                            <select className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer option:text-black min-w-[120px]">
                                <option value="ny" className="text-black">New York</option>
                                <option value="la" className="text-black">Los Angeles</option>
                                <option value="ch" className="text-black">Chicago</option>
                            </select>
                        </div>

                        {/* Search Input */}
                        <div className="flex-1 flex items-center px-4 py-3 w-full border-l border-white/10">
                            <input
                                type="text"
                                placeholder="Search food or restaurants..."
                                className="w-full bg-transparent focus:outline-none text-white placeholder-gray-300 font-medium"
                            />
                        </div>

                        {/* Button */}
                        <button className="bg-primary hover:bg-red-600 text-white p-4 rounded-xl shadow-lg transition-transform transform active:scale-95 flex items-center justify-center w-full md:w-auto">
                            <FiSearch size={20} />
                        </button>
                    </div>
                </div>

                {/* 3. Floating Elemets (Visual Interest) */}
                <div className="md:w-1/2 relative hidden md:block h-[400px]">
                    {/* Main Hero Plate Image (Could be separate transparent PNG for parallax, simulating here) */}
                    {/* Floating Badge 1 */}
                    <div className="absolute top-10 right-20 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl animate-float z-20 max-w-xs border-l-4 border-accent">
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-100 p-3 rounded-full text-2xl">🔥</div>
                            <div>
                                <h4 className="font-extrabold text-gray-800">Super Fast</h4>
                                <p className="text-xs text-gray-500">30 min delivery</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge 2 */}
                    <div className="absolute bottom-20 left-10 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl animate-float z-20 max-w-xs border-l-4 border-green-500" style={{ animationDelay: "2s" }}>
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-3 rounded-full text-2xl">🥗</div>
                            <div>
                                <h4 className="font-extrabold text-gray-800">Fresh Food</h4>
                                <p className="text-xs text-gray-500">100% Quality Check</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge 3 */}
                    <div className="absolute top-1/2 right-10 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl animate-float z-20 max-w-xs border-l-4 border-primary" style={{ animationDelay: "4s" }}>
                        <div className="flex items-center gap-3">
                            <div className="bg-red-100 p-3 rounded-full text-2xl">😋</div>
                            <div>
                                <h4 className="font-extrabold text-gray-800">Top Rated</h4>
                                <p className="text-xs text-gray-500">4.8+ Stars</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
