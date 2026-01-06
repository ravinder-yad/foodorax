import { FaCheckCircle, FaTimesCircle, FaClock, FaRedo, FaChevronRight, FaDotCircle } from "react-icons/fa";

const OrderCard = ({ order, isLive }) => {
    // Status Color Logic
    const getStatusColor = (status) => {
        switch (status) {
            case 'Order Placed': return 'text-blue-500 bg-blue-50';
            case 'Preparing': return 'text-orange-500 bg-orange-50';
            case 'Out for Delivery': return 'text-purple-500 bg-purple-50';
            case 'Delivered': return 'text-green-500 bg-green-50';
            case 'Cancelled': return 'text-red-500 bg-red-50';
            default: return 'text-gray-500 bg-gray-50';
        }
    };

    const statusColor = getStatusColor(order.status);

    return (
        <div className={`bg-white rounded-2xl p-6 shadow-sm border ${isLive ? 'border-primary/30 shadow-md ring-1 ring-primary/20' : 'border-gray-100'} hover:shadow-lg transition-all duration-300 mb-6`}>

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                    <img src={order.img} alt={order.restaurant} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">{order.restaurant}</h3>
                        <p className="text-xs text-gray-500 font-medium">Order #{order.id} • {order.date}</p>
                        <p className="text-sm font-semibold text-gray-700 mt-1">₹{order.amount}</p>
                    </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2 ${statusColor}`}>
                    {order.status === 'Cancelled' ? <FaTimesCircle /> : (isLive ? <FaDotCircle className="animate-pulse" /> : <FaCheckCircle />)}
                    {order.status}
                </div>
            </div>

            {/* Live Progress Bar (Only for Live Orders) */}
            {isLive && (
                <div className="mb-6 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-primary h-full rounded-full transition-all duration-1000 relative"
                        style={{ width: order.progress + '%' }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
            )}

            {/* Items */}
            <div className="text-sm text-gray-600 mb-6 border-b border-gray-50 pb-4">
                {order.items.map((item, i) => (
                    <span key={i} className="mr-2">
                        {item} {i < order.items.length - 1 && "•"}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
                {isLive ? (
                    <button className="bg-primary text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                        Track Order <FaChevronRight size={12} />
                    </button>
                ) : (
                    <div className="flex gap-3">
                        <button className="text-primary font-bold text-sm flex items-center gap-2 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors">
                            <FaRedo /> Reorder
                        </button>
                        {order.status === 'Delivered' && (
                            <button className="text-gray-500 font-bold text-sm border border-gray-200 hover:border-gray-400 px-4 py-2 rounded-lg transition-colors">
                                Rate Food
                            </button>
                        )}
                    </div>
                )}
                <button className="text-xs text-gray-400 hover:text-gray-600 font-medium">View Details</button>
            </div>

        </div>
    );
};

export default OrderCard;
