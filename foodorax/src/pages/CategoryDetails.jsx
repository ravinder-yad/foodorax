import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RestaurantList from "../components/home/RestaurantList";

const CategoryDetails = () => {
    const { slug } = useParams();

    // Format slug to Title Case for display (e.g., "burger" -> "Burger")
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-4 transition-colors">
                        <FaArrowLeft className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 border-l-8 border-primary pl-6">
                        Best <span className="text-primary">{categoryName}</span> Near You
                    </h1>
                    <p className="mt-2 text-gray-600 ml-8 text-lg">
                        Showing top results for <span className="font-bold">"{categoryName}"</span>
                    </p>
                </div>

                {/* Reusing RestaurantList for now - In real app, we would filter based on slug */}
                <RestaurantList title={`Top Rated ${categoryName} Places`} />

                <div className="mt-12">
                    <RestaurantList title={`New ${categoryName} Spots`} />
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;
