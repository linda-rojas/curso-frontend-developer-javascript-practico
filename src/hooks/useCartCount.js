import { useState, useEffect } from "react";

export function useCartCount() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Escucha el evento personalizado y sincroniza
  useEffect(() => {
    const handleCartUpdated = () => {
      const updated = localStorage.getItem("cart");
      setCartItems(updated ? JSON.parse(updated) : []);
    };

    window.addEventListener("cartUpdated", handleCartUpdated);
    window.addEventListener("storage", handleCartUpdated); // por si cambia desde otra pestaña

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
      window.removeEventListener("storage", handleCartUpdated);
    };
  }, []);

  return {
    cartItems,
    cartCount: cartItems.length,
  };
}
