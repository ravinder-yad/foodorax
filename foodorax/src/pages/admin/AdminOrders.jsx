import AdminSidebar from "../../components/admin/AdminSidebar";
import { useState } from "react";
import toast from "react-hot-toast";

const AdminOrders = () => {
    // Mock Recent Orders
    const [orders, setOrders] = useState([
        { id: 1001, user: "Amit Kumar", items: "2x Burger, 1x Coke", amount: 350, status: "Preparing", time: "10:30 AM" },
        { id: 1002, user: "Sneha Singh", items: "1x Pizza, Garlic Bread", amount: 550, status: "Out for Delivery", time: "11:00 AM" },
        { id: 1003, user: "Rahul Verma", items: "1x Biryani", amount: 220, status: "Delivered", time: "11:15 AM" },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
        toast.success(`Order #${id} marked as ${newStatus}`);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Preparing': return 'bg-orange-100 text-orange-700';
            case 'Out for Delivery': return 'bg-purple-100 text-purple-700';
            case 'Delivered': return 'bg-green-100 text-green-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <AdminSidebar />
            <div className="ml-64 flex-1 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Management</h1>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="p-4 font-bold text-gray-600">Order ID</th>
                                <th className="p-4 font-bold text-gray-600">Customer</th>
                                <th className="p-4 font-bold text-gray-600">Items</th>
                                <th className="p-4 font-bold text-gray-600">Total</th>
                                <th className="p-4 font-bold text-gray-600">Current Status</th>
                                <th className="p-4 font-bold text-gray-600">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold text-gray-900">#{order.id}</td>
                                    <td className="p-4 text-gray-700">{order.user}</td>
                                    <td className="p-4 text-gray-500 text-sm">{order.items}</td>
                                    <td className="p-4 font-bold">₹{order.amount}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <select
                                            className="bg-white border border-gray-300 text-gray-700 py-1 px-3 rounded-lg text-sm focus:outline-none focus:border-primary cursor-pointer"
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value="Preparing">Preparing</option>
                                            <option value="Out for Delivery">Out for Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;
