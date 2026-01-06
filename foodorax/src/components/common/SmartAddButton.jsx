import { useCart } from "../../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const SmartAddButton = ({ item, className = "" }) => {
    const { cartItems, addToCart, decreaseQty } = useCart();

    // Find if item is in cart
    const cartItem = cartItems.find((ci) => ci.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;

    if (qty === 0) {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(item);
                }}
                className={`bg-white text-primary font-bold px-8 py-2 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all uppercase text-sm ${className}`}
            >
                Add
            </button>
        );
    }

    return (
        <div className={`flex items-center bg-white rounded-lg shadow-md border border-primary overflow-hidden ${className}`} onClick={(e) => e.stopPropagation()}>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    decreaseQty(item.id);
                }}
                className="w-8 h-8 flex items-center justify-center text-primary hover:bg-red-50 transition-colors"
            >
                <FaMinus size={10} />
            </button>
            <span className="w-8 h-8 flex items-center justify-center font-bold text-primary text-sm bg-red-50/50">
                {qty}
            </span>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(item);
                }}
                className="w-8 h-8 flex items-center justify-center text-primary hover:bg-red-50 transition-colors"
            >
                <FaPlus size={10} />
            </button>
        </div>
    );
};

export default SmartAddButton;
