"use client";

import Image from "next/image";
import { Product } from "@/services/products";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  // Format price as ARS
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.precio);

  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
      onClick={() => onClick(product)}
    >
      {/* Container force background white and object-contain */}
      <div className="relative w-full aspect-square bg-white border-b border-gray-50 flex items-center justify-center p-4">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.nombre}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        
        {/* Fallback shown if no image_url or if image fails to load */}
        <div className={`flex items-center justify-center text-gray-300 border-2 border-dashed border-gray-100 rounded-xl absolute inset-4 bg-white ${product.image_url ? 'hidden' : ''}`}>
          <span className="text-sm font-medium">Sin imagen</span>
        </div>
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <span className="text-xs font-bold tracking-wider text-primary/80 uppercase mb-2 line-clamp-1">
          {product.categoria || "Sin Categoría"}
        </span>
        <h3 className="font-heading font-bold text-sm md:text-base text-foreground leading-snug line-clamp-2 mb-3 flex-grow">
          {product.nombre}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg md:text-xl font-black text-foreground">
            {formattedPrice}
          </span>
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
