import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]); // [{ id, qty }]
  const [wishlist, setWishlist] = useState([]); // [id]

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { id: product.id, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((wId) => wId !== id) : [...prev, id]
    );
  };

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const value = {
    cart,
    setCart,
    addToCart,
    updateQty,
    removeFromCart,
    wishlist,
    toggleWishlist,
    cartCount,
    wishlistCount: wishlist.length,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
