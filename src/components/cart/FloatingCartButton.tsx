"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

export default function FloatingCartButton() {
  const { itemCount, setIsCartOpen } = useCart();

  if (itemCount === 0) return null;

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center animate-in zoom-in-90 border-2 border-white/20"
      aria-label="Abrir carrito"
    >
      <ShoppingCart size={24} />
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
        {itemCount}
      </div>
    </button>
  );
}
