import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Calculate total price dynamically
    const cartTotal = cartItems.reduce((total, item) => {
        // Handle price strings like "₹200" or raw numbers
        const price = typeof item.price === 'string'
            ? parseFloat(item.price.replace(/[^0-9.]/g, ''))
            : item.price;
        return total + (price * item.qty);
    }, 0);

    const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                toast.success(`Updated quantity for ${item.name}`);
                return prev.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            toast.success(`${item.name} added to cart! 🛒`);
            return [...prev, { ...item, qty: 1 }];
        });
    };

    const decreaseQty = (itemId) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === itemId);
            if (existing.qty === 1) {
                toast.error("Item removed from cart");
                return prev.filter((i) => i.id !== itemId);
            }
            return prev.map((i) =>
                i.id === itemId ? { ...i, qty: i.qty - 1 } : i
            );
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId));
        toast.error("Item removed from cart");
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, decreaseQty, removeFromCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
