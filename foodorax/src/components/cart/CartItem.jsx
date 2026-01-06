import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { addToCart, decreaseQty, removeFromCart } = useCart();

    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 animate-fadeIn">
            {/* Image */}
            <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />

            {/* Info */}
            <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{item.price}</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-end gap-2">
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 active:bg-gray-300 transition-colors"
                    >
                        <FaMinus size={10} />
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center font-bold text-gray-800 bg-white text-sm">
                        {item.qty}
                    </span>
                    <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-green-100 active:bg-green-200 transition-colors"
                    >
                        <FaPlus size={10} />
                    </button>
                </div>
                {/* Remove Btn (Optional) */}
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1 font-medium"
                >
                    <FaTrash size={10} /> Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
