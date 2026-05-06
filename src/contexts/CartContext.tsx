"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  cantidad: number;
  image_url?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "cantidad">, cantidad?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, cantidad: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  total: number;
  itemCount: number;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cargar de localStorage
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("manitos_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart", e);
      }
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("manitos_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (item: Omit<CartItem, "cantidad">, cantidad: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + cantidad } : i
        );
      }
      return [...prev, { ...item, cantidad }];
    });
    showToast("Producto agregado con éxito");
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: number, cantidad: number) => {
    if (cantidad <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, cantidad } : i))
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        total,
        itemCount,
        showToast,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-[200] bg-gray-900/95 backdrop-blur text-white px-5 py-3 rounded-xl shadow-2xl animate-in fade-in slide-in-from-right-8 flex items-center gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span className="text-sm font-semibold tracking-wide">{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
