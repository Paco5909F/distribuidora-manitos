"use client";

import { useState, useEffect } from "react";
import { Search, Plus, Edit2, Trash2, Image as ImageIcon, AlertCircle, RefreshCw, X } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useAdminProducts } from "@/hooks/useAdminProducts";
import { useAdminCategories } from "@/hooks/useAdminCategories";
import { Product as DbProduct } from "@/services/products";

const processImageLocally = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const size = 800; // Target Box 800x800
      canvas.width = size;
      canvas.height = size;

      if (!ctx) return reject("No 2d context");

      // Fill Background White
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, size, size);

      // Math for Contain with 40px Padding
      const padding = 40;
      const innerSize = size - padding * 2;
      const ratio = Math.min(innerSize / img.width, innerSize / img.height);
      const newWidth = img.width * ratio;
      const newHeight = img.height * ratio;
      const offsetX = (size - newWidth) / 2;
      const offsetY = (size - newHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject("Blob generation failed");
        },
        "image/webp",
        0.85
      );
    };
    img.onerror = () => reject("Image failed to load");
    img.src = objectUrl;
  });
};

export default function ProductManager() {
  const supabase = createClient();
  
  // Custom Hooks para abstracción y manejo de estados (Loading, Error, Empty, Success)
  const { categories, state: catState, errorMessage: catError, fetchCategories } = useAdminCategories();
  const { products, state: prodState, errorMessage: prodError, fetchProducts } = useAdminProducts();
  
  const [search, setSearch] = useState("");
  const [viewerImage, setViewerImage] = useState<string | null>(null);
  
  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  // Form State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [file, setFile] = useState<File | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchProducts(search);
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [search, fetchProducts]);

  const resetForm = () => {
    setEditingId(null);
    setNombre("");
    setPrecio("");
    setCategoriaId("");
    setFile(null);
    setMsg("");
    setImageError(false);
  };

  const selectForEdit = (prod: DbProduct) => {
    setEditingId(prod.id);
    setNombre(prod.nombre);
    setPrecio(prod.precio?.toString() || "");
    setCategoriaId(prod.categoria_id?.toString() || "");
    setFile(null);
    setMsg("");
    setImageError(false);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    
    let currentId = editingId;
    
    if (editingId) {
      // UPDATE
      const { error } = await supabase
        .from("productos")
        .update({ 
          nombre, 
          precio: parseFloat(precio) || 0, 
          categoria_id: parseInt(categoriaId) 
        })
        .eq("id", editingId);
        
      if (error) {
        setMsg("Error actualizando: " + error.message);
        setLoading(false);
        return;
      }
    } else {
      // INSERT
      const { data: newP, error } = await supabase
        .from("productos")
        .insert([{ 
          nombre, 
          precio: parseFloat(precio) || 0, 
          categoria_id: parseInt(categoriaId),
          activo: true 
        }])
        .select('id').single();
        
      if (error || !newP) {
        setMsg("Error guardando: " + error?.message);
        setLoading(false);
        return;
      }
      currentId = newP.id;
    }

    if (file && currentId) {
      try {
        setMsg(editingId ? "Actualizando producto y procesando imagen..." : "Producto creado resolviendo imagen...");
        const processedBlob = await processImageLocally(file);
        const filePath = `productos/${currentId}.webp`;
        const { error: uploadError } = await supabase.storage
          .from("imagenes") 
          .upload(filePath, processedBlob, { upsert: true, contentType: "image/webp" });

        if (uploadError) {
          setMsg(`Guardado, pero falló la imagen: ${uploadError.message}`);
        }
      } catch (err) {
        console.error("Image processing error", err);
        setMsg("Guardado, pero la optimización visual de la imagen falló.");
      }
    }

    const nb = Date.now();
    setMsg(editingId ? "Producto actualizado exitosamente." : "Producto agregado exitosamente.");
    fetchProducts(search, nb);
    if (!editingId) resetForm();
    setLoading(false);
  };

  const handleDeleteImage = async () => {
    if (!editingId) return;
    if (!confirm("¿Seguro que deseas borrar la imagen de este producto?")) return;
    setLoading(true);
    
    // Tratamos de borrar ambos formatos por si cambió la extensión
    await supabase.storage.from("imagenes").remove([`productos/${editingId}.jpg`, `productos/${editingId}.webp`]);
    
    const nb = Date.now();
    setMsg("Imagen removida con éxito.");
    fetchProducts(search, nb);
    setImageError(true);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que deseas eliminar este producto DEFINITIVAMENTE? Esto borrará su imagen y todos sus datos sin posibilidad de recuperación.")) return;
    setLoading(true);
    setMsg("Eliminando imagen del bucket...");
    
    // 1. Borramos la imagen física de Storage
    await supabase.storage.from("imagenes").remove([`productos/${id}.jpg`, `productos/${id}.webp`]);
    
    // 2. Borramos el producto físicamente de la base de datos (Hard Delete)
    setMsg("Eliminando producto de la base de datos...");
    const { error } = await supabase.from("productos").delete().eq("id", id);
    
    if (!error) {
      setMsg("Producto e imagen eliminados por completo.");
      fetchProducts(search);
      if (editingId === id) resetForm();
    } else {
      setMsg("Error al eliminar producto: " + error.message);
    }
    setLoading(false);
  };

  return (
    <>
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mt-8 overflow-hidden flex flex-col lg:flex-row">
      
      {/* Lado Izquierdo: Buscador y Lista */}
      <div className="w-full lg:w-1/2 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-3">
               <h2 className="text-xl font-heading font-black text-foreground">Catálogo Completo</h2>
               <span className="bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">{products.length} Items</span>
             </div>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar para editar o eliminar..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 text-sm font-medium transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow border border-gray-100 rounded-xl bg-gray-50/50 overflow-hidden shadow-sm">
          <div className="flex-grow overflow-y-auto max-h-[500px] p-2">
            {prodState === 'loading' && (
               <div className="flex flex-col items-center justify-center p-12 text-gray-400">
                  <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-primary animate-spin mb-4" />
                  <p className="text-sm font-bold uppercase tracking-widest">Cargando inventario...</p>
               </div>
            )}
            
            {prodState === 'error' && (
               <div className="flex flex-col items-center justify-center p-12 text-red-500 bg-red-50 rounded-xl m-2 border border-red-100">
                  <AlertCircle size={32} className="mb-3" />
                  <p className="text-sm font-bold uppercase tracking-widest mb-4">{prodError}</p>
                  <button onClick={() => fetchProducts(search)} className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-bold border border-red-200 hover:bg-red-600 hover:text-white transition-colors">
                     <RefreshCw size={16} /> Reintentar
                  </button>
               </div>
            )}

            {prodState === 'empty' && (
               <div className="text-center p-12 text-gray-400">
                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                   <Search size={24} className="text-gray-400" />
                 </div>
                 <p className="text-sm font-bold uppercase tracking-widest">No se encontraron productos</p>
               </div>
            )}

            {prodState === 'success' && (
               <div className="flex flex-col gap-2">
                  {paginatedProducts.map(prod => (
                    <div key={prod.id} className={`flex items-center justify-between p-3 rounded-lg border transition-all ${editingId === prod.id ? 'bg-primary/5 border-primary/20' : 'bg-white border-transparent hover:border-gray-200 shadow-sm'}`}>
                      <div className="flex items-center gap-4 cursor-pointer flex-grow" onClick={() => selectForEdit(prod)}>
                        <div className="w-12 h-12 bg-white rounded-md border border-gray-100 flex items-center justify-center relative overflow-hidden shrink-0">
                          {prod.image_url ? (
                            <img 
                              src={prod.image_url} 
                              alt={prod.nombre} 
                              style={{width:'100%', height:'100%', objectFit:'contain', padding:'2px', cursor:'zoom-in'}} 
                              onClick={(e) => {
                                e.stopPropagation();
                                setViewerImage(prod.image_url || null);
                              }}
                              onError={(e) => { 
                                if (prod.image_url_fallback && !e.currentTarget.src.includes('.jpg')) {
                                  e.currentTarget.src = prod.image_url_fallback;
                                } else {
                                  e.currentTarget.style.display = 'none';
                                }
                              }} 
                            />
                          ) : <ImageIcon className="text-gray-200" size={20} />}
                        </div>
                          <div>
                            <h3 className="text-sm font-bold text-foreground leading-tight">{prod.nombre}</h3>
                            <div className="flex gap-3 mt-1">
                              <p className="text-[10px] font-black text-primary uppercase">Precio: ${prod.precio?.toLocaleString('es-AR')}</p>
                            </div>
                          </div>
                      </div>
                      <div className="flex items-center gap-2 px-2 shrink-0">
                         <button onClick={() => selectForEdit(prod)} className="p-2 text-gray-400 hover:text-primary transition-colors bg-gray-50 hover:bg-white rounded-full"><Edit2 size={16} /></button>
                         <button onClick={() => handleDelete(prod.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-white rounded-full"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
            )}
          </div>
          
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-white shrink-0">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-500 rounded-lg text-xs font-black uppercase tracking-widest hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-all shadow-sm"
              >
                Anterior
              </button>
              <span className="text-xs font-bold text-gray-400 tracking-widest">
                {currentPage} DE {totalPages}
              </span>
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-500 rounded-lg text-xs font-black uppercase tracking-widest hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-all shadow-sm"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lado Derecho: Editor / Creador */}
      <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-gray-50/30 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-black text-foreground">
            {editingId ? "Editar Producto" : "Nuevo Producto"}
          </h2>
          {editingId && (
            <button onClick={resetForm} className="text-xs font-bold text-primary hover:text-foreground flex items-center gap-1 uppercase tracking-widest px-3 py-1.5 bg-primary/10 rounded-full transition-colors">
               <Plus size={14} /> Crear Nuevo
            </button>
          )}
        </div>
        
        <form onSubmit={handleSaveProduct} className="flex flex-col gap-5 flex-grow">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Nombre del Producto</label>
            <input 
              type="text" 
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 font-medium transition-all"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Precio ($)</label>
              <input 
                type="text" 
                required
                value={precio ? Number(precio.toString().replace(/[^0-9.]/g, '')).toLocaleString('es-AR') : ""}
                onChange={(e) => {
                  const val = e.target.value.replace(/\./g, '');
                  const parsed = parseFloat(val.replace(',', '.'));
                  if (!isNaN(parsed) || val === '') {
                    setPrecio(val.replace(',', '.'));
                  }
                }}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 font-black transition-all"
              />
            </div>
          </div>

          <div>
             <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Categoría</label>
             <select 
               required
               value={categoriaId} 
               onChange={(e) => setCategoriaId(e.target.value)}
               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 font-medium transition-all text-sm"
             >
                <option value="">Seleccione una categoría...</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
             </select>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Fotografía (Opcional)</label>
            <div className="flex items-center gap-4">
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:uppercase file:tracking-wider file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all cursor-pointer"
              />
              {editingId && !imageError && (
                <button 
                  type="button" 
                  onClick={handleDeleteImage} 
                  className="shrink-0 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2.5 rounded-xl transition-colors outline-none" 
                  title="Eliminar imagen actual del servidor"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
            {editingId && (
              <div className="flex flex-col gap-2 mt-3 p-4 bg-white border border-gray-100 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center relative overflow-hidden shrink-0">
                    <>
                      <img 
                        src={products.find(p => p.id === editingId)?.image_url} 
                        alt="Preview" 
                        style={{width:'100%', height:'100%', objectFit:'contain', padding:'2px', cursor:'zoom-in', display: imageError ? 'none' : 'block'}} 
                        onClick={() => setViewerImage(products.find(p => p.id === editingId)?.image_url || null)}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          setImageError(true);
                        }}
                        onLoad={(e) => {
                          e.currentTarget.style.display = 'block';
                          setImageError(false);
                        }}
                      />
                      {imageError && (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="text-gray-200" size={20} />
                        </div>
                      )}
                    </>
                  </div>
                  <div>
                    {!imageError ? (
                      <>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Archivo en Storage</p>
                        <code className="text-xs font-mono text-primary bg-primary/5 px-2 py-1 rounded">productos/{editingId}.webp</code>
                      </>
                    ) : (
                      <>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Estado de Imagen</p>
                        <span className="text-xs font-medium text-gray-400">Sin archivo asociado</span>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">Nota: Subir una imagen reemplazará automáticamente la actual.</p>
              </div>
            )}
          </div>

          {msg && (
            <div className={`p-3 rounded-lg text-sm font-bold text-center border ${msg.includes("Error") ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
              {msg}
            </div>
          )}

          <div className="mt-auto pt-4">
            <button 
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-4 bg-foreground text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors disabled:opacity-50 shadow-lg shadow-black/5"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (editingId ? "Actualizar Producto" : "Guardar Nuevo Producto")}
            </button>
          </div>
        </form>
      </div>

    </div>

      {viewerImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setViewerImage(null)}>
          <button 
            onClick={() => setViewerImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-10 bg-black/20 hover:bg-black/40 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-4xl h-[80dvh] flex items-center justify-center">
            <img 
              src={viewerImage} 
              alt="Visor" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}

    </>
  );
}
