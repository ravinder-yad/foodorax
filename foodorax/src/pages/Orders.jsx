import { useState } from "react";
import OrderCard from "../components/orders/OrderCard";
import EmptyOrders from "../components/orders/EmptyOrders";

const ORDERS_DATA = [
    {
        id: "12345",
        restaurant: "Burger King",
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
        items: ["Whopper Meal", "Chicken Wings", "Pepsi"],
        amount: 450,
        date: "Today, 12:30 PM",
        status: "Preparing",
        progress: 40,
        type: "active"
    },
    {
        id: "12346",
        restaurant: "Pizza Hut",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        items: ["Pepperoni Pizza", "Garlic Bread"],
        amount: 600,
        date: "Yesterday, 8:00 PM",
        status: "Delivered",
        type: "past"
    },
    {
        id: "12347",
        restaurant: "Subway",
        img: "https://images.unsplash.com/photo-1509722747755-e9921675cf3e?w=500",
        items: ["Veggie Delight Sub", "Cookies"],
        amount: 350,
        date: "2 days ago",
        status: "Cancelled",
        type: "cancelled"
    },
    {
        id: "12348",
        restaurant: "KFC",
        img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
        items: ["Bucket Meal", "Coke"],
        amount: 550,
        date: "Last week",
        status: "Delivered",
        type: "past"
    }
];

const Orders = () => {
    const [activeTab, setActiveTab] = useState("active");

    const filteredOrders = ORDERS_DATA.filter(order => order.type === activeTab);

    return (
        <div className="min-h-screen bg-gray-50 pb-20 pt-8">
            <div className="max-w-3xl mx-auto px-4">

                {/* Header */}
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">My Orders</h1>
                <p className="text-gray-500 mb-8">Track active orders and view your order history.</p>

                {/* Tabs - Sticky */}
                <div className="sticky top-20 z-30 bg-gray-50 pb-4">
                    <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 flex">
                        {[
                            { id: "active", label: "Active Orders" },
                            { id: "past", label: "Past Orders" },
                            { id: "cancelled", label: "Cancelled" }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-3 text-sm md:text-base font-bold rounded-lg transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-primary text-white shadow-md"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                isLive={activeTab === 'active'}
                            />
                        ))
                    ) : (
                        <EmptyOrders type={activeTab} />
                    )}
                </div>

                {/* Footer Help */}
                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p>Need help with an order?</p>
                    <button className="text-primary font-bold hover:underline mt-1">Contact Support</button>
                </div>
            </div>
        </div>
    );
};

export default Orders;
