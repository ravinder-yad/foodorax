import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaStar, FaClock, FaHeart, FaPercent, FaLeaf } from "react-icons/fa";
import FilterBar from "../components/restaurants/FilterBar";
import SkeletonCard from "../components/restaurants/SkeletonCard";

// Extensive Mock Data for "Resturants Wall" (Extended for Load More)
const INITIAL_DATA = [
    { id: 1, name: "Burger King", rating: 4.5, time: "25-30 min", price: "₹200", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500", tags: ["Burger", "Fast Food"], offer: "50% OFF", promoted: true, veg: false },
    { id: 2, name: "Pizza Hut", rating: 4.2, time: "30-40 min", price: "₹400", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500", tags: ["Pizza", "Italian"], offer: "Free Coke", promoted: false, veg: false },
    { id: 3, name: "Green Bowl", rating: 4.8, time: "15-20 min", price: "₹300", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500", tags: ["Healthy", "Salads"], offer: "20% OFF", promoted: true, veg: true },
    { id: 4, name: "KFC", rating: 4.1, time: "20-25 min", price: "₹350", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500", tags: ["Chicken", "American"], offer: "", promoted: false, veg: false },
    { id: 5, name: "Subway", rating: 4.6, time: "10-15 min", price: "₹250", img: "https://images.unsplash.com/photo-1509722747755-e9921675cf3e?w=500", tags: ["Sandwich", "Healthy"], offer: "Flat ₹50 OFF", promoted: false, veg: false },
    { id: 6, name: "Biryani Blues", rating: 4.3, time: "40-45 min", price: "₹500", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500", tags: ["Biryani", "Indian"], offer: "Free Delivery", promoted: true, veg: false },
    { id: 7, name: "Pure Veg Delights", rating: 4.0, time: "30-35 min", price: "₹150", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500", tags: ["North Indian", "Thali"], offer: "10% OFF", promoted: false, veg: true },
    { id: 8, name: "Sushi House", rating: 4.7, time: "50-60 min", price: "₹800", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500", tags: ["Asian", "Sushi"], offer: "", promoted: true, veg: false },
];

// Replicate data to simulate "Load More"
const ALL_RESTAURANTS = [
    ...INITIAL_DATA,
    ...INITIAL_DATA.map((item, i) => ({ ...item, id: item.id + 10, name: `${item.name} Express`, img: `https://source.unsplash.com/random/500x500?food&sig=${i + 10}` })),
    ...INITIAL_DATA.map((item, i) => ({ ...item, id: item.id + 20, name: `${item.name} Pro`, img: `https://source.unsplash.com/random/500x500?dinner&sig=${i + 20}` }))
];

const Restaurants = () => {
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(8);
    const [loadingMore, setLoadingMore] = useState(false);

    // Simulate Page Load
    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);

    const handleLoadMore = () => {
        setLoadingMore(true);
        // Simulate network request for more data
        setTimeout(() => {
            setVisibleCount(prev => prev + 4);
            setLoadingMore(false);
        }, 1000);
    };

    const currentRestaurants = ALL_RESTAURANTS.slice(0, visibleCount);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">

            {/* 1. Header Section */}
            <div className="bg-white pt-8 pb-4 shadow-sm relative z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900">Restaurants Near You</h1>
                            <div className="flex items-center gap-2 text-gray-500 mt-1 cursor-pointer hover:text-primary transition-colors">
                                <FaMapMarkerAlt />
                                <span className="underline decoration-dotted">Connaught Place, New Delhi</span>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search restaurant or dish..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-medium"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Filter Bar (Sticky) */}
            <FilterBar />

            {/* 3. Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Smart Section: Recommended (Only showing if not loading) */}
                {!loading && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="bg-yellow-100 p-1 rounded">🔥</span> Recommended for You
                        </h2>
                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                            {INITIAL_DATA.slice(0, 4).map(res => (
                                <Link to={`/restaurant/${res.id}`} key={res.id} className="min-w-[280px] bg-white rounded-2xl p-3 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                                    <div className="h-32 rounded-xl overflow-hidden relative">
                                        <img src={res.img} className="w-full h-full object-cover" />
                                        {res.promoted && <span className="absolute top-2 left-2 bg-gray-900/80 text-white text-[10px] font-bold px-2 py-1 rounded">AD</span>}
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="font-bold text-gray-900 truncate">{res.name}</h3>
                                        <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                                            <span>{res.time}</span>
                                            <span className="flex items-center gap-1 bg-green-50 text-green-700 px-1 rounded font-bold">{res.rating}★</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <h2 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-primary pl-3">All Restaurants ({ALL_RESTAURANTS.length})</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {loading ? (
                        // Show 8 Skeletons while loading
                        [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
                    ) : (
                        currentRestaurants.map((res) => (
                            <Link
                                to={`/restaurant/${res.id}`}
                                key={res.id}
                                className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 overflow-hidden relative flex flex-col"
                            >
                                {/* Image Area */}
                                <div className="relative h-56 overflow-hidden">
                                    <img src={res.img} alt={res.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

                                    {/* Offer Badge */}
                                    {res.offer && (
                                        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-extrabold text-blue-600 shadow-sm flex items-center gap-1 uppercase tracking-wide">
                                            <FaPercent /> {res.offer}
                                        </div>
                                    )}

                                    {/* Promoted Tag */}
                                    {res.promoted && (
                                        <div className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md shadow-lg">
                                            Promoted
                                        </div>
                                    )}

                                    {/* Fav Button */}
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                                        <FaHeart />
                                    </button>
                                </div>

                                {/* Content Area */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors truncate w-3/4">{res.name}</h3>
                                        <div className="bg-green-600 text-white px-2 py-0.5 rounded-md flex items-center gap-1 text-sm font-bold shadow-sm">
                                            {res.rating} <FaStar size={10} />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-4">
                                        {res.veg && <FaLeaf className="text-green-500" title="Pure Veg" />}
                                        <span className="truncate">{res.tags.join(", ")}</span>
                                        <span>•</span>
                                        <span>{res.price} for two</span>
                                    </div>

                                    <div className="mt-auto border-t border-gray-50 pt-3 flex justify-between items-center text-sm font-medium text-gray-500">
                                        <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-bold uppercase">
                                            <FaClock /> {res.time}
                                        </span>
                                        <span className="group-hover:translate-x-1 transition-transform text-primary font-bold text-xs uppercase cursor-pointer">
                                            View Menu &rarr;
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                {/* Pagination / End */}
                {!loading && (
                    <div className="mt-12 text-center pb-8">
                        {visibleCount < ALL_RESTAURANTS.length ? (
                            <button
                                onClick={handleLoadMore}
                                disabled={loadingMore}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-3 rounded-full transition-colors flex items-center gap-2 mx-auto disabled:opacity-50"
                            >
                                {loadingMore ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                                        Loading...
                                    </>
                                ) : (
                                    "Load More Restaurants"
                                )}
                            </button>
                        ) : (
                            <p className="text-gray-500 font-medium">You've reached the end! 🍽️</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Restaurants;
