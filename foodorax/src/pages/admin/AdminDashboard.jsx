import AdminSidebar from "../../components/admin/AdminSidebar";
import { FaShoppingCart, FaRupeeSign, FaStore, FaMotorcycle } from "react-icons/fa";

const AdminDashboard = () => {
    const stats = [
        { title: "Total Revenue", value: "₹1,24,000", icon: FaRupeeSign, color: "bg-green-500" },
        { title: "Today's Orders", value: "145", icon: FaShoppingCart, color: "bg-blue-500" },
        { title: "Active Restaurants", value: "34", icon: FaStore, color: "bg-orange-500" },
        { title: "Delivery Partners", value: "12", icon: FaMotorcycle, color: "bg-purple-500" },
    ];

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <AdminSidebar />
            <div className="ml-64 flex-1 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
                                <h3 className="text-2xl font-extrabold text-gray-900">{stat.value}</h3>
                            </div>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${stat.color}`}>
                                <stat.icon size={20} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity (Mock) */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">#{1023 + i}</div>
                                    <div>
                                        <p className="font-bold text-gray-900">New Order from Rahul</p>
                                        <p className="text-xs text-gray-500">2 mins ago</p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-lg">Preparing</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
