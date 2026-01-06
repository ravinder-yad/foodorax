import { FaMobileAlt, FaHandshake, FaCheckCircle, FaShippingFast, FaShieldAlt, FaMapMarkedAlt, FaCreditCard, FaHamburger } from "react-icons/fa";

const InfoSection = () => {
    return (
        <div className="bg-white overflow-hidden">

            {/* 1. How It Works - Visual Timeline */}
            <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 text-center">

                    <div className="mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Easy Process</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
                            How <span className="text-primary">FoodoraX</span> Works
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 -z-0 border-t-2 border-dashed border-gray-300"></div>

                        {[
                            { step: "01", title: "Choose Location", desc: "Check restaurants nearby", icon: <FaMapMarkedAlt />, color: "bg-blue-100 text-blue-600" },
                            { step: "02", title: "Order Food", desc: "Select your favorite food", icon: <FaHamburger />, color: "bg-orange-100 text-orange-600" },
                            { step: "03", title: "Fast Delivery", desc: "Receive at your doorstep", icon: <FaShippingFast />, color: "bg-green-100 text-green-600" }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center group">
                                <div className={`w-24 h-24 rounded-full ${item.color} flex items-center justify-center text-4xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 ring-8 ring-white`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500 font-medium">{item.desc}</p>

                                {/* Step Number Badge */}
                                <div className="absolute top-0 right-10 md:right-20 bg-gray-900 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm shadow-md">
                                    {item.step}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Why Choose Us - Bento Grid Style */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900">Why People Choose Us?</h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">We don't just deliver food; we deliver an experience. Fast, fresh, and fully reliable.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group text-center">
                            <div className="bg-red-50 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                                <FaShippingFast className="text-4xl text-primary" />
                            </div>
                            <h3 className="font-bold text-2xl mb-3 text-gray-800">Super Fast Delivery</h3>
                            <p className="text-gray-500 leading-relaxed">Our fleet is designed for speed. We verify every route to ensure 30-min delivery.</p>
                        </div>

                        {/* Card 2 - Featured */}
                        <div className="bg-primary p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-4 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="bg-white/20 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <FaShieldAlt className="text-4xl text-white" />
                            </div>
                            <h3 className="font-bold text-2xl mb-3">100% Safe & Hygienic</h3>
                            <p className="text-white/90 leading-relaxed">We strictly monitor temperature and packaging. Safety is our #1 priority.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group text-center">
                            <div className="bg-blue-50 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform duration-300">
                                <FaCheckCircle className="text-4xl text-blue-500" />
                            </div>
                            <h3 className="font-bold text-2xl mb-3 text-gray-800">Best Prices & Offers</h3>
                            <p className="text-gray-500 leading-relaxed">Crazy discounts every day. We guarantee the best food prices in your area.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. App Download + Partner (Refined) */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* App Download */}
                    <div className="bg-gray-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl group">
                        <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                            <h2 className="text-4xl font-extrabold mb-4">Mobile App Coming Soon</h2>
                            <p className="text-gray-400 mb-8 text-lg font-medium">Experience the fastest food delivery app with live tracking.</p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition shadow-lg">
                                    <FaMobileAlt /> Get the App
                                </button>
                            </div>
                        </div>
                        <FaMobileAlt className="absolute -bottom-10 -right-4 text-[12rem] text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>

                    {/* Partner */}
                    <div className="bg-accent rounded-3xl p-10 md:p-14 text-gray-900 relative overflow-hidden flex flex-col justify-center shadow-2xl group">
                        <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                            <h2 className="text-4xl font-extrabold mb-4">Partner With Us</h2>
                            <p className="text-gray-800 mb-8 text-lg font-medium">Own a restaurant? Join FoodoraX and increase your sales by 300%.</p>
                            <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition shadow-lg w-fit flex items-center gap-2">
                                <FaHandshake /> Join as Partner
                            </button>
                        </div>
                        <FaHandshake className="absolute -bottom-6 -right-6 text-[12rem] text-white/20 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoSection;
