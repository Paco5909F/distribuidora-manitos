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
    showToast(item.nombre);
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
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] bg-white border border-gray-100 px-6 py-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-top-4 flex items-center gap-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Agregado al carrito</span>
            <span className="text-sm md:text-base font-black text-slate-800 uppercase leading-none max-w-[200px] md:max-w-[300px] truncate">{toastMessage}</span>
          </div>
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
