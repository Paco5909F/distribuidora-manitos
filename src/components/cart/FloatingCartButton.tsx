"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

export default function FloatingCartButton() {
  const { itemCount, setIsCartOpen } = useCart();

  if (itemCount === 0) return null;

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-24 right-6 md:bottom-28 md:right-10 z-[60] bg-primary text-white p-4 rounded-full shadow-[0_10px_40px_rgba(14,165,233,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center animate-in zoom-in-90 border-2 border-white/20"
      aria-label="Abrir carrito"
    >
      <ShoppingCart size={24} />
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
        {itemCount}
      </div>
    </button>
  );
}
