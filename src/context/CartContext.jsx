import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Вспомогательная функция для превращения "400 000 сум" в число 400000
  const parsePrice = (priceStr) => {
    if (typeof priceStr === "number") return priceStr;
    if (!priceStr) return 0;
    return parseInt(priceStr.toString().replace(/\D/g, "")) || 0;
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Исправленная функция для Telegram (без NaN)
  const getTelegramLink = (username) => {
    const message = cartItems
      .map((item) => {
        const itemPrice = parsePrice(item.price);
        const subtotal = itemPrice * item.quantity;
        return `${item.name} x${item.quantity} — ${subtotal.toLocaleString()} сум`;
      })
      .join("\n");

    const total = cartItems.reduce((acc, item) => {
      return acc + parsePrice(item.price) * item.quantity;
    }, 0);

    const fullText = encodeURIComponent(
      `Привет! Мой заказ:\n\n${message}\n\nИтого: ${total.toLocaleString()} сум`
    );

    return `https://t.me/${username}?text=${fullText}`;
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        totalItems, 
        getTelegramLink,
        parsePrice // экспортируем, чтобы использовать в Cart.jsx
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}