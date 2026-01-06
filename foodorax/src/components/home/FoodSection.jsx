import { FaUtensils, FaLeaf, FaFire } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const FoodSection = () => {
    const { addToCart } = useCart();

    const sections = [
        {
            title: "Recommended for You",
            subtitle: "Based on your past orders",
            icon: <FaUtensils className="text-primary" />,
            items: [
                { id: 201, name: "Paneer Butter Masala", price: "₹220", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500" },
                { id: 202, name: "Chicken Biryani", price: "₹180", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" },
            ]
        },
        {
            title: "Budget Friendly Eats",
            subtitle: "Meals under ₹199",
            icon: <FaFire className="text-orange-500" />,
            items: [
                { id: 203, name: "Aloo Paratha", price: "₹80", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500" },
                { id: 204, name: "Egg Roll", price: "₹60", img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500" },
            ]
        },
        {
            title: "Healthy & Veg",
            subtitle: "Pure veg delights",
            icon: <FaLeaf className="text-green-500" />,
            items: [
                { id: 205, name: "Greek Salad", price: "₹150", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500" },
                { id: 206, name: "Veg Bowl", price: "₹140", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500" },
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {sections.map((sec, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{sec.title}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">{sec.subtitle}</p>
                            </div>
                            <div className="bg-white p-3 rounded-full shadow-sm">
                                {sec.icon}
                            </div>
                        </div>
                        <div className="p-4 space-y-4">
                            {sec.items.map((item, i) => (
                                <div key={i} className="flex gap-4 items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                    <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{item.name}</h4>
                                        <span className="text-sm font-semibold text-gray-600">{item.price}</span>
                                    </div>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="text-primary font-bold text-sm bg-red-50 px-3 py-1 rounded-lg group-hover:bg-primary group-hover:text-white transition-all active:scale-95"
                                    >
                                        ADD
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodSection;
