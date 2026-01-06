import { Link } from "react-router-dom";
import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartBill from "../components/cart/CartBill";

const Cart = () => {
    const { cartItems, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-4">
                <div className="bg-white p-8 rounded-full shadow-lg mb-6 animate-bounce-short">
                    <FaShoppingBag className="text-6xl text-gray-200" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 max-w-sm">Looks like you haven't made your choice yet. Explore our top restaurants now!</p>
                <Link to="/restaurants" className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition-all hover:shadow-xl">
                    Browse Restaurants
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-8 pb-32">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-primary transition-colors">
                        <FaArrowLeft />
                    </Link>
                    <h1 className="text-3xl font-extrabold text-gray-900">Your Cart ({cartItems.length})</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left: Cart Items */}
                    <div className="flex-1">
                        <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl mb-6 flex items-center gap-3 text-yellow-800 text-sm font-medium">
                            <span>🎉</span> You saved ₹120 on this order!
                        </div>

                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}

                        <Link to="/restaurants" className="block text-center border-2 border-dashed border-gray-300 text-gray-500 font-bold py-4 rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all mt-6">
                            + Add More Items
                        </Link>
                    </div>

                    {/* Right: Bill Details */}
                    <div className="lg:w-96">
                        <CartBill total={cartTotal} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
