"use client";

import { useState, useEffect, useCallback } from "react";
import { getProducts, getCategories, Product } from "@/services/products";
import ProductCard from "./ProductCard";
import { Search, ChevronLeft, ChevronRight, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const ITEMS_PER_PAGE = 24;

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  // Filters
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setPage(1); // reset to page 1 on search
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const [debugMsg, setDebugMsg] = useState<string>("");

  // Load Categories
  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
      if (data.length === 0) setDebugMsg("getCategories devolvió 0 items.");
    }).catch(err => {
      setDebugMsg("Error en getCategories: " + err.message);
    });
  }, []);

  // Load Products
  const loadProducts = useCallback(async () => {
    setLoading(true);
    const { data, count } = await getProducts({
      page,
      limit: ITEMS_PER_PAGE,
      category: selectedCategory,
      search: debouncedSearch,
    });
    setProducts(data);
    setTotalProducts(count);
    setLoading(false);
  }, [page, selectedCategory, debouncedSearch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1); // reset to page 1 on category change
  };

  const createWhatsAppLink = (product: Product) => {
    const message = `Hola Distribuidora Manitos, me interesa consultar el precio y disponibilidad de: *${product.nombre}*`;
    return `https://wa.me/5492352407359?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar: Filters & Search */}
      <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4 sticky top-[100px]">
          <h3 className="font-heading font-black text-lg text-foreground">Buscador</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Ej: Collares, Pretales..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {debugMsg && <p className="text-red-500 text-xs font-bold border border-red-500 p-2 rounded-lg">{debugMsg}</p>}
          <h3 className="font-heading font-black text-lg text-foreground mt-4">Categorías</h3>
          <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto pr-2 styled-scrollbar">
            <button
              onClick={() => handleCategoryChange("Todas")}
              className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${selectedCategory === "Todas" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              Todas las categorías
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => handleCategoryChange(c.nombre)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === c.nombre ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {c.nombre}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content: Grid & Pagination */}
      <main className="flex-1 flex flex-col gap-8">
        {/* Results Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
          <span>Mostrando {products.length} de {totalProducts} productos</span>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : products.length === 0 ? (
          <div className="w-full h-64 flex flex-col items-center justify-center bg-white rounded-3xl border border-gray-100 p-8 text-center space-y-4">
            <Search className="text-gray-300 w-16 h-16" />
            <h3 className="font-heading text-xl font-bold text-gray-800">No se encontraron productos</h3>
            <p className="text-gray-500">Intenta con otra búsqueda o categoría.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-bold px-4">
              Página {page} de {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative w-full max-w-3xl bg-white md:rounded-3xl rounded-t-3xl md:h-auto h-[90dvh] shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col md:flex-row animate-in slide-in-from-bottom-10 md:zoom-in-95 duration-300">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/5 hover:bg-black/10 rounded-full transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>

            {/* Image Container */}
            <div className="w-full md:w-1/2 aspect-square md:min-h-[400px] bg-white relative border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center p-4 md:p-8 shrink-0">
              {selectedProduct.image_url ? (
                <img
                  src={selectedProduct.image_url}
                  alt={selectedProduct.nombre}
                  loading="lazy"
                  className="object-contain p-6 w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}

              {/* Fallback */}
              <div className={`w-full h-full flex flex-col items-center justify-center text-gray-300 border-2 border-dashed border-gray-100 rounded-2xl absolute inset-0 m-6 bg-white ${selectedProduct.image_url ? 'hidden' : ''}`}>
                <span className="text-lg font-medium">Sin imagen</span>
              </div>
            </div>

            {/* Details Container */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col flex-grow">
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
                {selectedProduct.categoria || "Sin Categoría"}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground leading-tight mb-4">
                {selectedProduct.nombre}
              </h2>

              <div className="mt-auto pt-6 flex flex-col gap-6 border-t border-gray-100">
                <div>
                  <span className="text-sm font-semibold text-gray-400 block mb-1">Precio Unitario</span>
                  <span className="text-3xl font-black text-foreground">
                    {new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(selectedProduct.precio)}
                  </span>
                </div>

                <a
                  href={createWhatsAppLink(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#25D366] text-white rounded-xl font-bold tracking-widest uppercase text-sm shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle size={20} />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
