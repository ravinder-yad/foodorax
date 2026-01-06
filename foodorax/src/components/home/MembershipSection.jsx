import { FaCrown, FaCheck } from "react-icons/fa";

const MembershipSection = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-2xl">

                    {/* Decorative Gold Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -ml-16 -mb-16 animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-10">

                        {/* Context */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                                <FaCrown /> Limited Time Offer
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Foodora Gold</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0">
                                Unlock 60% OFF on dining, free delivery on all orders, and exclusive access to events.
                            </p>
                            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300">
                                Get Gold Membership @ ₹99/mo
                            </button>
                        </div>

                        {/* Visual/Card */}
                        <div className="md:w-1/2 flex justify-center perspective-1000">
                            <div className="relative w-80 h-52 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-yellow-500/30 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-500 p-6 flex flex-col justify-between group">
                                <div className="flex justify-between items-start">
                                    <span className="text-yellow-500 font-extrabold text-2xl tracking-tighter">GOLD</span>
                                    <FaCrown className="text-4xl text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-gray-500 text-sm tracking-[0.2em] mt-8">
                                    8892 2291 0092 1129
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase">Member Name</div>
                                        <div className="text-white font-bold tracking-widest">RAHUL SHARMA</div>
                                    </div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png" alt="Visa" className="h-8 opacity-70" />
                                </div>

                                {/* Glossy Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipSection;
