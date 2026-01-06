import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const categories = [
    { id: 1, name: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", count: "25 Places" },
    { id: 2, name: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", count: "18 Places" },
    { id: 3, name: "Biryani", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80", count: "12 Places" },
    { id: 4, name: "Chinese", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80", count: "30 Places" },
    { id: 5, name: "Chicken", img: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=500&q=80", count: "15 Places" },
    { id: 6, name: "Dessert", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80", count: "20 Places" },
];

const CategorySection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Eat what makes you happy</span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Explore Categories</h2>
                </div>

                <div className="hidden md:flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                        <FaArrowRight className="rotate-180" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((cat) => (
                    <Link
                        to={`/category/${cat.name.toLowerCase()}`}
                        key={cat.id}
                        className="group relative h-48 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url('${cat.img}')` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-4 w-full">
                            <h3 className="text-white text-xl font-bold tracking-wide group-hover:text-accent transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-gray-300 text-xs font-semibold mt-1 flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {cat.count} <FaArrowRight className="text-accent" />
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
