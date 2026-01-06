import { Link, useLocation } from "react-router-dom";
import { FaChartLine, FaBox, FaStore, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";

const AdminSidebar = () => {
    const { pathname } = useLocation();

    const menu = [
        { name: "Dashboard", path: "/admin/dashboard", icon: FaChartLine },
        { name: "Orders", path: "/admin/orders", icon: FaBox },
        { name: "Restaurants", path: "/admin/restaurants", icon: FaStore },
        { name: "Users", path: "/admin/users", icon: FaUsers },
        { name: "Settings", path: "/admin/settings", icon: FaCog },
    ];

    return (
        <div className="w-64 bg-gray-900 min-h-screen text-white fixed left-0 top-0 flex flex-col p-4 z-50">
            <h1 className="text-2xl font-extrabold mb-10 text-center tracking-wider">
                Admin<span className="text-primary">Panel</span>
            </h1>

            <nav className="flex-1 space-y-2">
                {menu.map((item) => {
                    const active = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${active ? "bg-primary text-white shadow-lg shadow-red-900/50 font-bold" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                }`}
                        >
                            <item.icon /> {item.name}
                        </Link>
                    )
                })}
            </nav>

            <button className="flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-xl transition-colors mt-auto font-bold">
                <FaSignOutAlt /> Logout
            </button>
        </div>
    );
};

export default AdminSidebar;
