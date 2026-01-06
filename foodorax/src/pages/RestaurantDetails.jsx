import { useParams, Link } from "react-router-dom";
import { FaStar, FaClock, FaMapMarkerAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import { FiShoppingCart, FiPlus } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const RestaurantDetails = () => {
    const { id } = useParams();
    const { addToCart, cartCount, cartItems } = useCart();

    // Calculate total price for mobile view (simplified for now)
    const cartTotal = cartItems.length * 100; // Mock total per item roughly

    // Mock Data (matches IDs from list)
    const restaurant = {
        name: id === "1" ? "Burger King" : "Foodora Special",
        rating: 4.5,
        time: "25-30 min",
        location: "Downtown, New York",
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1920&q=80",
        menu: [
            { id: 101, name: "Whopper Meal", price: "₹249", desc: "Large burger + Fries + Coke", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
            { id: 102, name: "Chicken Wings", price: "₹199", desc: "Spicy & crispy wings (6 pcs)", img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500" },
            { id: 103, name: "Veggie Wrap", price: "₹149", desc: "Loaded with fresh veggies", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500" },
        ]
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Hero Banner */}
            <div className="relative h-72 md:h-96">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${restaurant.img}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 max-w-7xl mx-auto">
                    <div className="flex justify-between items-end">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{restaurant.name}</h1>
                            <div className="flex items-center gap-4 text-sm md:text-base font-medium opacity-90">
                                <span className="flex items-center gap-1"><FaStar className="text-yellow-400" /> {restaurant.rating} (500+ ratings)</span>
                                <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-primary" /> {restaurant.location}</span>
                                <span className="flex items-center gap-1"><FaClock className="text-green-400" /> {restaurant.time}</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-primary transition-colors"><FaHeart size={20} /></button>
                            <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-primary transition-colors"><FaShareAlt size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-primary pl-4">Recommended Menu</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {restaurant.menu.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-32 h-32 flex-shrink-0">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mt-1">{item.desc}</p>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-lg font-bold text-gray-800">{item.price}</span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-red-50 text-red-600 px-4 py-1.5 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center gap-1 active:scale-95"
                                    >
                                        ADD <FiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Cart Button (Mobile) */}
            {cartCount > 0 && (
                <div className="fixed bottom-4 left-4 right-4 md:hidden">
                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-xl flex justify-between px-6 items-center">
                        <span>{cartCount} Items</span>
                        <span className="flex items-center gap-2">View Cart <FiShoppingCart /></span>
                    </button>
                </div>
            )}

        </div>
    );
};

export default RestaurantDetails;
