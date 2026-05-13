"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/utils/supabase/client";
import { Plus, Edit2, Trash2, Search, Eye, EyeOff } from "lucide-react";

interface Category {
  id: number;
  nombre: string;
  created_at: string;
  activo: boolean;
}

export default function CategoryManager() {
  const supabase = createClient();
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Editor State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [nombre, setNombre] = useState("");

  const fetchCategories = useCallback(async () => {
    const { data } = await supabase
      .from("categorias")
      .select("*")
      .order("nombre");
    if (data) setCategories(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const resetForm = () => {
    setEditingId(null);
    setNombre("");
    setMsg("");
  };

  const selectForEdit = (cat: Category) => {
    setEditingId(cat.id);
    setNombre(cat.nombre);
    setMsg("");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    if (editingId) {
      // Editar
      const { error } = await supabase
        .from("categorias")
        .update({ nombre })
        .eq("id", editingId);

      if (error) setMsg("Error: " + error.message);
      else {
        setMsg("Categoría actualizada!");
        resetForm();
        fetchCategories();
      }
    } else {
      // Crear nueva
      const { error } = await supabase.from("categorias").insert([{ nombre }]);

      if (error) setMsg("Error al crear: " + error.message);
      else {
        setMsg("¡Categoría creada!");
        resetForm();
        fetchCategories();
      }
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (
      !confirm(
        "¿Seguro que deseas eliminar esta categoría? Solo se borrará si no hay productos activos usándola.",
      )
    )
      return;

    // Verificar si hay productos activos
    const { data: activeProducts } = await supabase
      .from("productos")
      .select("id")
      .eq("categoria_id", id)
      .eq("activo", true)
      .limit(1);

    if (activeProducts && activeProducts.length > 0) {
      alert(
        "No puedes eliminar esta categoría porque está vinculada a productos ACTIVOS.",
      );
      return;
    }

    // Desvincular productos inactivos (borrado lógico previo) para no violar llave foránea
    await supabase
      .from("productos")
      .update({ categoria_id: null })
      .eq("categoria_id", id)
      .eq("activo", false);

    // Intentar borrar la categoría
    const { error } = await supabase.from("categorias").delete().eq("id", id);
    if (error) {
      alert(
        "No puedes eliminar esta categoría por razones de integridad en la base de datos.",
      );
    } else {
      fetchCategories();
    }
  };

  const handleToggleVisibility = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from("categorias")
      .update({ activo: !currentStatus })
      .eq("id", id);
    if (!error) {
      fetchCategories();
    } else {
      alert("Error al cambiar visibilidad");
    }
  };

  const filteredCategories = categories.filter((c) =>
    c.nombre.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Lado Izquierdo: Lista Paginada/Filtrada */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col h-full overflow-hidden bg-white">
        <div className="mb-6 shrink-0">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
              size={20}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar categoría..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 text-sm font-medium transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow border border-gray-100 rounded-xl bg-gray-50/50 overflow-hidden shadow-sm">
          <div className="flex-grow overflow-y-auto max-h-[500px] p-2">
            {filteredCategories.length === 0 ? (
              <div className="text-center p-8 text-gray-400 font-medium text-sm">
                No se encontraron categorías.
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filteredCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${editingId === cat.id ? "bg-primary/5 border-primary/20" : "bg-white border-transparent hover:border-gray-200 shadow-sm"}`}
                  >
                    <div
                      className="flex items-center gap-4 cursor-pointer flex-grow"
                      onClick={() => selectForEdit(cat)}
                    >
                      <div>
                        <h3
                          className={`text-sm font-bold leading-tight uppercase relative ${cat.activo ? "text-foreground" : "text-gray-400 line-through"}`}
                        >
                          {cat.nombre}
                        </h3>
                        <p className="text-[10px] font-bold text-gray-400 tracking-wider mt-1">
                          ID: {cat.id} {!cat.activo && "• OCULTA"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-2 shrink-0">
                      <button
                        onClick={() =>
                          handleToggleVisibility(cat.id, cat.activo)
                        }
                        className={`p-2 transition-colors bg-gray-50 hover:bg-white rounded-full ${cat.activo ? "text-primary hover:text-primary" : "text-gray-400 hover:text-foreground"}`}
                        title={
                          cat.activo
                            ? "Ocultar categoría del catálogo público"
                            : "Mostrar categoría en el catálogo público"
                        }
                      >
                        {cat.activo ? <Eye size={16} /> : <EyeOff size={16} />}
                      </button>
                      <button
                        onClick={() => selectForEdit(cat)}
                        className="p-2 text-gray-400 hover:text-primary transition-colors bg-gray-50 hover:bg-white rounded-full"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-white rounded-full"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lado Derecho: Editor */}
      <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-gray-50/30 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-100">
        <div className="flex items-center justify-between mb-6 shrink-0">
          <h2 className="text-xl font-heading font-black text-foreground">
            {editingId ? "Editar Categoría" : "Nueva Categoría"}
          </h2>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-bold text-primary hover:text-foreground flex items-center gap-1 uppercase tracking-widest px-3 py-1.5 bg-primary/10 rounded-full transition-colors"
            >
              <Plus size={14} /> Empezar de cero
            </button>
          )}
        </div>

        <form onSubmit={handleSave} className="flex flex-col gap-5 flex-grow">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">
              Nombre Corto
            </label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
              placeholder="Ej: COLCHONETAS"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 font-medium transition-all"
            />
          </div>

          <div className="mt-4 shrink-0 mt-auto pt-6">
            <button
              type="submit"
              disabled={loading || !nombre.trim()}
              className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest bg-primary text-white hover:bg-secondary transition-colors shadow-lg shadow-primary/30 disabled:opacity-50 disabled:shadow-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {loading
                ? "Procesando..."
                : editingId
                  ? "Guardar Cambios"
                  : "Agregar Categoría"}
            </button>
            <div className="h-6 mt-3 text-center">
              {msg && (
                <span
                  className={`text-xs font-bold ${msg.includes("Error") ? "text-red-500" : "text-green-500"}`}
                >
                  {msg}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
