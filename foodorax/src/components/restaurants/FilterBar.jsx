import { FaFilter, FaChevronDown } from "react-icons/fa";

const FilterBar = () => {
    return (
        <div className="sticky top-16 z-40 bg-white shadow-sm border-b border-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto scrollbar-hide items-center">

                {/* Main Filter Icon */}
                <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 flex-shrink-0">
                    Filters <FaFilter className="text-primary" />
                </button>

                {/* Sort Dropdown */}
                <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 flex-shrink-0">
                    Sort By <FaChevronDown size={10} />
                </button>

                {/* Quick Filters */}
                {["Fast Delivery", "Rating 4.0+", "Pure Veg", "Offers", "Rs. 300-600", "Less than Rs. 300"].map((filter, i) => (
                    <button
                        key={i}
                        className="whitespace-nowrap border border-gray-200 bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors flex-shrink-0"
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
