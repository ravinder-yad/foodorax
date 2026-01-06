import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const { cartCount } = useCart();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                        Foodora<span className="text-accent">X</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {["Home", "Restaurants", "Orders"].map((item) => {
                            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className={`relative group font-medium text-lg transition-colors duration-300 ${isActive(path) ? "text-accent" : "hover:text-accent text-white/90"
                                        }`}
                                >
                                    {item}
                                    <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-accent transition-all duration-300 ${isActive(path) ? "w-full" : "w-0 group-hover:w-full"
                                        }`}></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/cart" className="relative group hover:scale-110 transition-transform duration-300">
                            <FiShoppingCart size={24} className="text-white/90 group-hover:text-white" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent text-primary font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-bounce-short">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Link
                            to="/login"
                            className="bg-white text-primary font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 hover:shadow-xl transition-all duration-300 active:scale-95 transform"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="focus:outline-none text-white/90 hover:text-accent transition-colors duration-300 p-2"
                        >
                            {open ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-red-600 px-4 pt-2 pb-6 space-y-2 shadow-inner">
                    {["Home", "Restaurants", "Orders", "Cart"].map((item) => {
                        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                onClick={() => setOpen(false)}
                                to={path}
                                className={`block text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ${isActive(path)
                                        ? "bg-white/10 text-accent pl-6"
                                        : "text-white/90 hover:bg-white/5 hover:pl-6 hover:text-accent"
                                    }`}
                            >
                                {item}
                            </Link>
                        );
                    })}
                    <div className="pt-4">
                        <Link
                            onClick={() => setOpen(false)}
                            to="/login"
                            className="block w-full bg-white text-primary text-center font-bold py-3 rounded-xl shadow-md hover:bg-gray-100 transition-colors active:scale-98"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
