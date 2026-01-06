import { FaArrowRight, FaTag } from "react-icons/fa";

const CartBill = ({ total }) => {
    const deliveryFee = total > 500 ? 0 : 40;
    const taxes = total * 0.05; // 5% Tax
    const grandTotal = total + deliveryFee + taxes;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6">Bill Details</h3>

            {/* Breakdown */}
            <div className="space-y-3 mb-6 border-b border-gray-100 pb-6 text-gray-600">
                <div className="flex justify-between">
                    <span>Item Total</span>
                    <span className="font-semibold">₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className={deliveryFee === 0 ? "text-green-600 font-bold" : "font-semibold"}>
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Taxes & Charges (5%)</span>
                    <span className="font-semibold">₹{taxes.toFixed(2)}</span>
                </div>
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                    <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>
                <button className="text-sm font-bold text-primary px-3 py-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    APPLY
                </button>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">To Pay</span>
                <span className="text-2xl font-extrabold text-gray-900">₹{grandTotal.toFixed(0)}</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-xl hover:bg-red-600 hover:shadow-red-500/30 transition-all flex justify-between items-center px-6 group active:scale-95">
                <span>Proceed to Pay</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Safety Note */}
            <p className="text-xs text-gray-400 text-center mt-4">
                Safe & Secure Payment | 100% Authentic Food
            </p>
        </div>
    );
};

export default CartBill;
