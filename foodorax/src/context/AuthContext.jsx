import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check for persisted user on load
    useEffect(() => {
        const storedUser = localStorage.getItem("foodorax_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("foodorax_user", JSON.stringify(userData));
        toast.success(`Welcome back, ${userData.name}!`);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("foodorax_user");
        toast.success("Logged out successfully");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
