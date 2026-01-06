import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const EmptyOrders = ({ type }) => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 p-8 rounded-full mb-6">
                <FaHamburger className="text-6xl text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No {type} Orders</h3>
            <p className="text-gray-500 mb-8 max-w-xs mx-auto">
                Looks like you haven't placed any orders in this category yet.
            </p>
            <Link to="/" className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Order Now
            </Link>
        </div>
    );
};

export default EmptyOrders;
