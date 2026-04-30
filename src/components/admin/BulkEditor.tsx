"use client";

import { useState, useEffect } from "react";
import { getCategories } from "@/services/products";
import { bulkUpdatePrices } from "@/app/admin/actions";

interface Category {
  id: number;
  nombre: string;
}

export default function BulkEditor() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [editType, setEditType] = useState("percentage");
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleApply = async () => {
    if (!selectedCat || !val) {
      setMessage("Selecciona categoría y valor.");
      return;
    }
    const num = parseFloat(val);
    if (isNaN(num)) return;

    setLoading(true);
    setMessage("");

    const res = await bulkUpdatePrices(selectedCat, editType, num);
    if (res.success) {
      setMessage("Precios actualizados masivamente con éxito.");
      setVal("");
    } else {
      setMessage("Error al actualizar: " + res.error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8">
      <h2 className="text-xl font-heading font-black text-foreground mb-4">Edición Masiva de Precios</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="text-sm font-bold text-gray-700 mb-1 block">Categoría</label>
          <select 
            value={selectedCat} 
            onChange={(e) => setSelectedCat(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none"
          >
            <option value="">Seleccione...</option>
            {categories.map(c => (
              <option key={c.id} value={c.nombre}>{c.nombre}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700 mb-1 block">Operación</label>
          <select 
            value={editType} 
            onChange={(e) => setEditType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none"
          >
            <option value="percentage">Aumentar porcentaje (+%)</option>
            <option value="fixed">Suma Fija (+$)</option>
            <option value="replace">Reemplazo exacto ($)</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700 mb-1 block">Valor Numérico</label>
          <input 
            type="number" 
            step="0.01"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Ej: 15.5"
            className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none"
          />
        </div>

        <div>
          <button 
            onClick={handleApply}
            disabled={loading}
            className="w-full py-2 bg-primary text-white font-bold rounded-xl disabled:opacity-50"
          >
            {loading ? "Aplicando..." : "Aplicar"}
          </button>
        </div>
      </div>
      {message && <p className="mt-4 text-sm font-medium text-primary">{message}</p>}
    </div>
  );
}
