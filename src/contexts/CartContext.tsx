"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { TENANT_CONFIG } from "@/config/constants";
import { createClient } from "@/utils/supabase/client";

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
  syncCartWithDatabase: () => Promise<{ success: boolean; messages: string[] }>;
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
    const savedCart = localStorage.getItem(TENANT_CONFIG.storage.cartKey);
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
      localStorage.setItem(TENANT_CONFIG.storage.cartKey, JSON.stringify(cart));
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

  const syncCartWithDatabase = async () => {
    if (cart.length === 0) return { success: true, messages: [] };

    const supabase = createClient();
    const ids = cart.map(i => i.id);
    
    try {
      const { data: dbProducts, error } = await supabase
        .from('v_productos')
        .select('id, precio, activo, categoria')
        .in('id', ids);

      if (error) throw error;

      let hasChanges = false;
      const messages: string[] = [];
      
      const newCart = cart.map(item => {
        const dbItem = dbProducts?.find(p => p.id === item.id);
        
        // Producto no existe o fue desactivado
        if (!dbItem || !dbItem.activo) {
          hasChanges = true;
          messages.push(`El producto "${item.nombre}" ya no está disponible y fue removido.`);
          return null;
        }

        // Cambio de precio
        if (dbItem.precio !== item.precio) {
          hasChanges = true;
          messages.push(`El precio de "${item.nombre}" se actualizó de $${item.precio} a $${dbItem.precio}.`);
          return { ...item, precio: dbItem.precio, categoria: dbItem.categoria };
        }

        return item;
      }).filter(Boolean) as CartItem[];

      if (hasChanges) {
        setCart(newCart);
        return { success: false, messages };
      }

      return { success: true, messages: [] };
    } catch (error) {
      console.error("Error sincronizando carrito:", error);
      return { success: false, messages: ["Error de conexión al verificar productos. Intenta nuevamente."] };
    }
  };

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
        syncCartWithDatabase,
      }}
    >
      {children}
      {toastMessage && (
        <div 
          className="fixed z-[99999] bg-primary text-white px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgba(14,165,233,0.3)] animate-in fade-in slide-in-from-bottom-8 flex items-center gap-3 border border-white/20 left-1/2 -translate-x-1/2 w-max"
          style={{ bottom: '32px', top: 'auto' }}
        >
          <div className="bg-white/20 rounded-full p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm font-bold tracking-wide">{toastMessage}</span>
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
