"use client";

import { useState, memo } from "react";
import { Product } from "@/services/products";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = memo(function ProductCard({
  product,
  onClick,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  // Format price as ARS
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.precio);

  return (
    <article
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full hover:-translate-y-1 relative"
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
            unoptimized={true}
            className={`absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 ${imageError ? "hidden" : ""}`}
            onError={() => setImageError(true)}
          />
        ) : null}

        {/* Fallback shown if no image_url or if image fails to load */}
        <div
          className={`flex items-center justify-center text-gray-300 border-2 border-dashed border-gray-100 rounded-xl absolute inset-4 bg-white ${product.image_url && !imageError ? "hidden" : ""}`}
        >
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id: product.id,
                nombre: product.nombre,
                categoria: product.categoria || "General",
                precio: product.precio,
                image_url: product.image_url,
              });
            }}
            className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            title="Agregar al carrito"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
});

export default ProductCard;
