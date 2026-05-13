"use client";

import { useState, useEffect, useCallback } from "react";
import { getProducts, getCategories, Product } from "@/services/products";

interface Category {
  id: number;
  nombre: string;
}
import ProductCard from "./ProductCard";
import { Search, ChevronLeft, ChevronRight, X, ShoppingCart, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

import { useDebounce } from "@/hooks/useDebounce";

const ITEMS_PER_PAGE = 24;

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  // Filters
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalImageError, setModalImageError] = useState(false);
  const [modalQuantity, setModalQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleOpenModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
    setModalImageError(false);
  }, []);

  // Debounce search
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Reset page when search changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

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

  const [errorMsg, setErrorMsg] = useState("");

  // Load Products
  const loadProducts = useCallback(async () => {
    setLoading(true);
    setErrorMsg("");
    const { data, count, error } = await getProducts({
      page,
      limit: ITEMS_PER_PAGE,
      category: selectedCategory,
      search: debouncedSearch,
    });
    
    if (error) {
      setErrorMsg("Ocurrió un problema al cargar los productos. Por favor, reintenta en unos instantes.");
    }
    
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
    setSearchQuery(""); // Limpiar búsqueda al cambiar categoría
    setPage(1); // reset to page 1 on category change
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (document.activeElement as HTMLElement)?.blur(); // Ocultar teclado en mobile
    document.getElementById("productos-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar: Filters & Search */}
      <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4 sticky top-[100px]">
          <h3 className="font-heading font-black text-lg text-foreground">Buscador</h3>
          <form className="relative flex items-center" onSubmit={handleSearchSubmit}>
            <Search className="absolute left-3 text-gray-400" size={18} />
            <input
              type="text"
              enterKeyHint="search"
              placeholder="Ej: Collares, Pretales..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 p-1 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors flex items-center justify-center"
              aria-label="Buscar"
            >
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </form>

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
      <main id="productos-grid" className="flex-1 flex flex-col gap-8 scroll-mt-24">
        {/* Results Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
          <span>Mostrando {products.length} de {totalProducts} productos</span>
        </div>

        {/* Grid */}
        {errorMsg ? (
          <div className="w-full bg-red-50 text-red-600 p-8 rounded-3xl border border-red-100 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
               <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="font-heading font-black text-xl mb-2 text-center">Algo salió mal</h3>
            <p className="text-sm font-medium text-center max-w-md opacity-80 mb-6">{errorMsg}</p>
            <button onClick={() => loadProducts()} className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-xl transition-colors">
              Reintentar
            </button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full opacity-60">
                <div className="w-full aspect-square bg-gray-100 animate-pulse border-b border-gray-50 shrink-0" />
                <div className="p-4 md:p-5 flex flex-col gap-3">
                  <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="w-full min-h-[300px] flex flex-col items-center justify-center bg-white rounded-3xl border border-gray-100 p-8 text-center animate-in fade-in zoom-in-95 duration-500 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <Search className="text-gray-300 w-10 h-10" />
            </div>
            <h3 className="font-heading text-2xl font-black text-gray-800 mb-2">No encontramos nada</h3>
            <p className="text-gray-500 font-medium max-w-md">No hay productos que coincidan con &quot;{searchQuery || selectedCategory}&quot;. Intenta con otra búsqueda o selecciona &quot;Todas las categorías&quot;.</p>
            {(searchQuery || selectedCategory !== "Todas") && (
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("Todas"); setPage(1); }}
                className="mt-6 text-primary font-bold hover:bg-primary/5 px-6 py-2 rounded-full transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onClick={handleOpenModal} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Página anterior"
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
              aria-label="Página siguiente"
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] flex items-end md:items-center justify-center p-4 md:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative w-full max-w-3xl bg-white md:rounded-3xl rounded-t-3xl max-h-[100dvh] md:max-h-[90vh] shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col md:flex-row animate-in slide-in-from-bottom-10 md:zoom-in-95 duration-300">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Cerrar detalle de producto"
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/5 hover:bg-black/10 rounded-full transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>

            {/* Image Container */}
            <div className="w-full md:w-1/2 aspect-square md:min-h-[400px] bg-white relative border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center p-4 md:p-8 shrink-0">
              {selectedProduct.image_url ? (
                <Image
                  src={selectedProduct.image_url}
                  alt={selectedProduct.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={true}
                  className={`absolute inset-0 w-full h-full object-contain p-6 ${modalImageError ? 'hidden' : ''}`}
                  onError={() => setModalImageError(true)}
                />
              ) : null}

              {/* Fallback */}
              <div className={`flex flex-col items-center justify-center text-gray-300 border-2 border-dashed border-gray-100 rounded-2xl absolute inset-6 bg-white ${selectedProduct.image_url && !modalImageError ? 'hidden' : ''}`}>
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

                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2 border border-gray-100">
                    <span className="text-sm font-bold text-gray-500 ml-2">Cantidad</span>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                        aria-label="Disminuir cantidad"
                        className="w-10 h-10 rounded-lg hover:bg-white flex items-center justify-center text-gray-600 transition-colors shadow-sm"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="text-xl font-black w-8 text-center">{modalQuantity}</span>
                      <button 
                        onClick={() => setModalQuantity(modalQuantity + 1)}
                        aria-label="Aumentar cantidad"
                        className="w-10 h-10 rounded-lg hover:bg-white flex items-center justify-center text-gray-600 transition-colors shadow-sm"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart({
                        id: selectedProduct.id,
                        nombre: selectedProduct.nombre,
                        categoria: selectedProduct.categoria || "General",
                        precio: selectedProduct.precio,
                        image_url: selectedProduct.image_url
                      }, modalQuantity);
                    }}
                    className="w-full py-4 px-6 bg-primary text-white rounded-xl font-black tracking-widest uppercase text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={20} />
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
