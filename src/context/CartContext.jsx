import React, { createContext, useContext, useState, useEffect } from 'react';
import { businessConfig } from '../data/businessConfig';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('urban_tadka_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('urban_tadka_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const addToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (dishId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== dishId));
  };

  const updateQuantity = (dishId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === dishId ? { ...item, quantity: newQty } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const sendOrderToWhatsApp = (customerNotes = '') => {
    if (cartItems.length === 0) return;

    let messageLines = [`*NEW ORDER FROM URBAN TADKA WEBSITE*\n`];
    cartItems.forEach((item, index) => {
      messageLines.push(`${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`);
    });
    messageLines.push(`\n*Estimated Total: ₹${totalPrice}*`);
    if (customerNotes.trim()) {
      messageLines.push(`\nSpecial Instructions: ${customerNotes}`);
    }
    messageLines.push(`\nPlease confirm item availability and let me know the preparation time!`);

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isDrawerOpen,
        setIsDrawerOpen,
        sendOrderToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
