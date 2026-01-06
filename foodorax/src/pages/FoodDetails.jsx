import { useParams, Link } from "react-router-dom";
import { FaStar, FaClock, FaHeart, FaArrowLeft, FaLeaf } from "react-icons/fa";
import SmartAddButton from "../components/common/SmartAddButton";
import { useState } from "react";

const FoodDetails = () => {
    const { id } = useParams();
    const [isLiked, setIsLiked] = useState(false);

    // MOCK DATA (Ideally fetched from API based on ID)
    const product = {
        id: parseInt(id) || 1,
        name: "Maharaja Mac Burger",
        restaurant: "Burger King",
        price: 249,
        rating: 4.5,
        time: "25-30 mins",
        desc: "A double-decker toasted sesame bun, sandwiching one veg & one chicken patty, rich habanero sauce, fiery jalapenos, and onions.",
        ingredients: ["Sesame Bun", "Chicken Patty", "Cheese Slice", "Jalapenos", "Habanero Sauce"],
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        isVeg: false
    };

    return (
        <div className="min-h-screen bg-white pb-32">

            {/* Hero Image */}
            <div className="relative w-full h-80 md:h-[500px]">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />

                {/* Nav Buttons */}
                <Link to="/" className="absolute top-6 left-6 bg-white/30 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all shadow-lg">
                    <FaArrowLeft size={20} />
                </Link>
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`absolute top-6 right-6 p-3 rounded-full shadow-lg transition-all ${isLiked ? 'bg-white text-red-500' : 'bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-red-500'}`}
                >
                    <FaHeart size={20} className={isLiked ? "animate-bounceShort" : ""} />
                </button>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                {product.isVeg ? (
                                    <span className="border border-green-600 p-[2px] rounded-sm"><div className="w-2 h-2 bg-green-600 rounded-full"></div></span>
                                ) : (
                                    <span className="border border-red-600 p-[2px] rounded-sm"><div className="w-2 h-2 bg-red-600 rounded-full"></div></span>
                                )}
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{product.restaurant}</span>
                            </div>
                            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{product.name}</h1>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded-lg flex items-center gap-1 text-sm mb-1">
                                {product.rating} <FaStar size={10} />
                            </span>
                            <span className="text-xs text-gray-400">500+ ratings</span>
                        </div>
                    </div>

                    {/* Price & Time */}
                    <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                        <span className="text-3xl font-extrabold text-gray-900">₹{product.price}</span>
                        <div className="h-8 w-[1px] bg-gray-200"></div>
                        <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                            <FaClock className="text-gray-400" /> {product.time}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {product.desc}
                        </p>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Ingredients</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.ingredients.map((ing, i) => (
                                <span key={i} className="flex items-center gap-2 bg-orange-50 text-orange-800 px-4 py-2 rounded-full text-sm font-medium border border-orange-100">
                                    <FaLeaf size={12} className="text-orange-400" /> {ing}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Sticky Mobile Action Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:static md:shadow-none md:p-0 md:bg-transparent md:mt-8 md:text-center md:flex md:justify-center z-40">
                <div className="flex items-center justify-between md:gap-8 max-w-4xl mx-auto w-full">
                    <div className="md:hidden">
                        <p className="text-xs text-gray-400 uppercase font-bold">Total Price</p>
                        <p className="text-2xl font-extrabold text-gray-900">₹{product.price}</p>
                    </div>
                    <div className="w-1/2 md:w-auto">
                        <SmartAddButton item={product} className="w-full md:w-64 md:py-4 md:text-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodDetails;
