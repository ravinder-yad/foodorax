import { FaStar, FaClock, FaHeart, FaMotorcycle, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

// Mock Data
const restaurants = [
    { id: 1, name: "Burger King", rating: 4.5, time: "25-30 min", price: "₹200 for two", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80", tags: ["Burger", "American"], offer: "50% OFF" },
    { id: 2, name: "Pizza Hut", rating: 4.2, time: "30-40 min", price: "₹400 for two", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", tags: ["Pizza", "Italian"], offer: "Free Coke" },
    { id: 3, name: "KFC", rating: 4.3, time: "20-25 min", price: "₹300 for two", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80", tags: ["Chicken", "Fast Food"], offer: "Bucket Saver" },
    { id: 4, name: "Subway", rating: 4.6, time: "15-20 min", price: "₹250 for two", img: "https://images.unsplash.com/photo-1509722747755-e9921675cf3e?w=500&q=80", tags: ["Healthy", "Sandwich"], offer: "Flat ₹100 OFF" },
];

const RestaurantList = ({ title }) => {
    return (
        <div className="w-full px-4 md:px-12 py-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Best in Town</span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-1">{title}</h2>
                </div>
                <button className="text-gray-500 font-bold hover:text-primary hover:underline transition-colors">View All</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {restaurants.map((res) => (
                    <Link
                        to={`/restaurant/${res.id}`}
                        key={res.id}
                        className="group block bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative"
                    >
                        {/* Offer Badge */}
                        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                            <FaTag /> {res.offer}
                        </div>

                        {/* Favorite Button */}
                        <button className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
                            <FaHeart />
                        </button>

                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={res.img}
                                alt={res.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1 text-gray-700">
                                <FaClock className="text-green-500" /> {res.time}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{res.name}</h3>
                                <div className="bg-green-600 text-white px-2 py-0.5 rounded-md flex items-center gap-1 text-sm font-bold shadow-sm">
                                    {res.rating} <FaStar size={10} />
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm mb-4 font-medium flex gap-2">
                                {res.tags.join(" • ")}
                            </p>

                            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                <span className="text-gray-700 font-bold text-sm">{res.price}</span>
                                <span className="text-primary bg-red-50 px-2 py-1 rounded flex items-center gap-1 text-xs font-bold uppercase tracking-wide">
                                    <FaMotorcycle /> Free Delivery
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RestaurantList;
