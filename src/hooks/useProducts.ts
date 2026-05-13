"use client";

import { useState, useMemo } from "react";
import { Product } from "@/services/products";

export function useProducts(initialProducts: Product[]) {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrado reactivo puramente para el motor de búsqueda local
  const filteredProducts = useMemo(() => {
    if (!search.trim()) return initialProducts;
    return initialProducts.filter((p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, initialProducts]);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // clear after animation
  };

  return {
    search,
    setSearch,
    filteredProducts,
    selectedProduct,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
}
