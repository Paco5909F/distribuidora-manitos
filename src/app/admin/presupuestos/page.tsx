"use client";

import { useState, useMemo, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Product, applySmartSearch } from "@/services/products";
import { Search, Plus, Trash2, FileDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import dynamic from "next/dynamic";
import type { BudgetItem, BudgetData } from "@/components/admin/BudgetPDF";

// Importamos aislando totalmente el motor PDF de Next.js
const PDFButton = dynamic(
  () => import("@/components/admin/PDFButton"),
  {
    ssr: false,
    loading: () => (
      <button disabled className="w-full flex items-center justify-center gap-3 py-4 bg-gray-200 text-gray-400 rounded-xl font-bold uppercase tracking-widest text-sm">
        <div className="w-4 h-4 rounded-full border-2 border-gray-400 border-t-transparent animate-spin" />
        Iniciando Componente PDF...
      </button>
    )
  }
);

export default function PresupuestosPage() {
  const [fechaElegida, setFechaElegida] = useState(() => new Date().toISOString().split('T')[0]);
  const [cliente, setCliente] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [condicionIva, setCondicionIva] = useState("Consumidor Final");
  const [observaciones, setObservaciones] = useState("");
  const [ajusteTipo, setAjusteTipo] = useState<"ninguno" | "descuento" | "recargo">("ninguno");
  const [ajustePorcentaje, setAjustePorcentaje] = useState(0);

  const localidadesPredefinidas = ["Junín", "Chacabuco", "Chivilcoy", "Salto", "Buenos Aires"];

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const [items, setItems] = useState<BudgetItem[]>([]);

  useEffect(() => {
    if (search.length < 2) {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoadingSearch(true);
      
      let query = supabase.from("productos")
        .select(`
          id,
          nombre,
          precio,
          categoria:categorias(nombre),
          activo
        `)
        .eq("activo", true);
        
      query = applySmartSearch(query, search);
      const { data, error } = await query.limit(50);
      
      if (!error && data) {
        const formatted = data.map((p: any) => ({
          id: p.id,
          nombre: p.nombre,
          precio: p.precio,
          categoria: p.categoria?.nombre || 'General',
          activo: p.activo
        }));
        setSearchResults(formatted);
      }
      setLoadingSearch(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [search]);

  const addItem = (prod: Product) => {
    const precioBase = prod.precio ?? 0;
    setItems(prev => {
      const exists = prev.find(i => i.producto_id === prod.id);
      if (exists) {
        return prev.map(i => i.producto_id === prod.id ? { ...i, cantidad: i.cantidad + 1, precio: precioBase } : i);
      }
      return [...prev, { producto_id: prod.id, nombre: prod.nombre, precio: precioBase, cantidad: 1 }];
    });
    setSearch("");
    setSearchResults([]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(i => i.producto_id !== id));
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) return;
    setItems(items.map(i => i.producto_id === id ? { ...i, cantidad: qty } : i));
  };

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }, [items]);

  const ajusteValor = useMemo(() => {
    if (ajusteTipo === "ninguno") return 0;
    const factor = ajusteTipo === "descuento" ? -1 : 1;
    return subtotal * (ajustePorcentaje / 100) * factor;
  }, [subtotal, ajusteTipo, ajustePorcentaje]);

  const totalFinal = subtotal + ajusteValor;

  const { fechaFormatted, validezFormatted } = useMemo(() => {
    try {
      const dateParts = fechaElegida.split('-');
      const d = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));

      const v = new Date(d);
      v.setDate(v.getDate() + 15);

      return {
        fechaFormatted: d.toLocaleDateString('es-AR'),
        validezFormatted: v.toLocaleDateString('es-AR')
      };
    } catch (e) {
      return { fechaFormatted: '', validezFormatted: '' };
    }
  }, [fechaElegida]);

  const budgetData: BudgetData = {
    cliente,
    condicionIva,
    localidad,
    fecha: fechaFormatted,
    fechaValidez: validezFormatted,
    items,
    subtotal,
    ajusteTexto: ajusteTipo !== "ninguno" ? `${ajusteTipo === "descuento" ? "Descuento" : "Recargo"} (${ajustePorcentaje}%)` : undefined,
    ajusteValor: ajusteTipo !== "ninguno" ? ajusteValor : undefined,
    total: totalFinal,
    observaciones
  };

  const fileName = useMemo(() => {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const clientSanitized = cliente ? cliente.replace(/\s+/g, '-').substring(0, 20) : "Cliente";
    return `Presupuesto-${clientSanitized}-${dd}${mm}.pdf`;
  }, [cliente]);

  const wppText = encodeURIComponent(`Hola ${cliente ? cliente : ''}, aquí le envío el resumen de su presupuesto calculado por $${totalFinal.toLocaleString('es-AR')}.`);
  const wppLink = `https://wa.me/?text=${wppText}`;

  return (
    <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 animate-in fade-in duration-500 pb-20">

      <div className="w-full xl:w-5/12 flex flex-col gap-6">
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-black font-heading tracking-tight mb-1">Generador de Presupuestos</h1>
            <p className="text-sm text-gray-500 font-medium">Arma la lista y expórtala en PDF en segundos.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Nombre del Cliente</label>
                <input
                  type="text"
                  value={cliente}
                  onChange={e => setCliente(e.target.value)}
                  placeholder="Ej: El Jilguero"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary focus:border-b-2 font-medium text-foreground bg-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Fecha Emisión</label>
                <input
                  type="date"
                  value={fechaElegida}
                  onChange={e => setFechaElegida(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary focus:border-b-2 font-medium text-foreground bg-transparent transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Localidad</label>
                <div className="relative group">
                  <select
                    value={localidad === "" ? "" : (localidadesPredefinidas.includes(localidad) ? localidad : "otra")}
                    onChange={e => {
                      const val = e.target.value;
                      if (val === "otra") {
                        // Al elegir "otra", ponemos un espacio para forzar que sea manual 
                        // y que el input se muestre inmediatamente.
                        setLocalidad(" ");
                      } else {
                        setLocalidad(val);
                      }
                    }}
                    className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary focus:border-b-2 font-medium text-foreground bg-transparent transition-all text-sm cursor-pointer"
                  >
                    <option value="">Seleccione...</option>
                    {localidadesPredefinidas.map(l => <option key={l} value={l}>{l}</option>)}
                    <option value="otra">Otra (Escribir abajo)</option>
                  </select>
                  {(localidad === " " || (!localidadesPredefinidas.includes(localidad) && localidad !== "")) && (
                    <input
                      type="text"
                      value={localidad === " " ? "" : localidad}
                      onChange={e => setLocalidad(e.target.value)}
                      placeholder="Escribe la localidad..."
                      autoFocus
                      className="w-full mt-2 border-b border-primary py-1.5 outline-none font-medium text-foreground bg-transparent transition-all text-xs"
                    />
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Condición IVA</label>
                <select
                  value={condicionIva}
                  onChange={e => setCondicionIva(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary focus:border-b-2 font-medium text-foreground bg-transparent transition-all text-sm cursor-pointer"
                >
                  <option value="Consumidor Final">Consumidor Final</option>
                  <option value="Responsable Inscripto">Responsable Inscripto</option>
                  <option value="Monotributista">Monotributista</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-2">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Ajuste de Total</label>
                <div className="flex gap-2">
                  <select
                    value={ajusteTipo}
                    onChange={e => setAjusteTipo(e.target.value as any)}
                    className="flex-1 border-b border-gray-300 py-2 outline-none focus:border-primary focus:border-b-2 font-medium text-foreground bg-transparent transition-all text-sm cursor-pointer"
                  >
                    <option value="ninguno">Sin ajuste</option>
                    <option value="descuento">Descuento</option>
                    <option value="recargo">Recargo</option>
                  </select>
                  {ajusteTipo !== "ninguno" && (
                    <div className="flex items-center gap-1 w-20">
                      <input
                        type="number"
                        value={ajustePorcentaje}
                        onChange={e => setAjustePorcentaje(parseFloat(e.target.value) || 0)}
                        className="w-full border-b border-primary py-2 outline-none text-right font-black text-xs bg-transparent"
                      />
                      <span className="text-xs font-bold text-gray-400">%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 relative">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Agregar Producto al listado</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar en el catálogo..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 text-sm font-medium transition-all"
              />
            </div>

            {search.length >= 2 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
                {loadingSearch ? (
                  <div className="p-4 text-center text-sm text-gray-400 font-medium animate-pulse">Buscando...</div>
                ) : searchResults.length > 0 ? (
                  searchResults.map(prod => (
                    <button
                      key={prod.id}
                      onClick={() => addItem(prod)}
                      className="w-full text-left p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex flex-col pr-4">
                        <span className="text-sm font-bold text-foreground line-clamp-1">{prod.nombre}</span>
                        <span className="text-xs font-semibold text-primary">{prod.categoria}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black whitespace-nowrap">
                          ${(prod.precio ?? 0).toLocaleString("es-AR")}
                        </span>
                        <div className="bg-primary/10 text-primary p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Plus size={16} />
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-sm text-gray-400 font-medium">No se encontraron productos.</div>
                )}
              </div>
            )}
          </div>

          <div className="mt-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Observaciones / Notas (Opcional)</label>
            <textarea
              value={observaciones}
              onChange={e => setObservaciones(e.target.value)}
              placeholder="Agregar aclaraciones, condiciones o detalles relevantes del presupuesto."
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-1 text-sm font-medium transition-all resize-none"
            />
          </div>

        </div>
      </div>

      <div className="w-full xl:w-7/12 flex flex-col gap-6">
        <div className="bg-white p-4 sm:p-6 md:p-10 md:rounded-[2rem] shadow-sm border-t md:border border-gray-100 flex flex-col h-full pb-64 md:pb-6">

          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <h2 className="text-xl font-black font-heading">Lista de Ítems</h2>
            <div className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-lg">
              {items.length} {items.length === 1 ? 'producto' : 'productos'}
            </div>
          </div>

          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-gray-300 gap-4 py-20 border-2 border-dashed border-gray-100 rounded-2xl">
              <FileDown size={48} className="text-gray-200" />
              <p className="font-medium text-sm text-center px-4">Busca productos a la izquierda para armar el presupuesto.</p>
            </div>
          ) : (
            <div className="flex flex-col flex-grow">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-900">
                      <th className="py-3 px-2 text-xs font-black uppercase tracking-widest text-gray-400 w-1/2">Producto</th>
                      <th className="py-3 px-2 text-xs font-black uppercase tracking-widest text-gray-400">Cant</th>
                      <th className="py-3 px-2 text-xs font-black uppercase tracking-widest text-gray-400 text-right">Subtotal</th>
                      <th className="py-3 px-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.producto_id} className="border-b border-gray-100 group">
                        <td className="py-4 px-2">
                          <p className="text-sm font-bold text-foreground leading-snug pr-4">{item.nombre}</p>
                          <p className="text-xs font-medium text-gray-400 mt-1">${item.precio.toLocaleString('es-AR')} c/u</p>
                        </td>
                        <td className="py-4 px-2">
                          <input
                            type="number"
                            min="1"
                            value={item.cantidad}
                            onChange={(e) => updateQuantity(item.producto_id, parseInt(e.target.value) || 1)}
                            className="w-14 sm:w-16 h-12 sm:h-10 px-2 text-center bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm font-bold outline-none focus:border-primary focus:ring-1"
                          />
                        </td>
                        <td className="py-4 px-2 text-right">
                          <span className="text-sm font-black text-foreground">
                            ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-right">
                          <button
                            onClick={() => removeItem(item.producto_id)}
                            className="text-gray-300 hover:text-red-500 transition-colors p-3 sm:p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:mt-auto pt-4 md:pt-8 flex flex-col gap-4 fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] px-4 pb-6 md:relative md:border-t-0 md:bg-transparent md:shadow-none md:p-0">
                <div className="flex flex-col gap-2 border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
                    <span className="text-lg font-bold text-foreground">${subtotal.toLocaleString('es-AR')}</span>
                  </div>
                  {ajusteTipo !== "ninguno" && (
                    <div className="flex justify-between items-center text-primary">
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {ajusteTipo === "descuento" ? "Descuento" : "Recargo"} ({ajustePorcentaje}%)
                      </span>
                      <span className="text-sm font-black">
                        {ajusteTipo === "descuento" ? "-" : "+"}${Math.abs(ajusteValor).toLocaleString('es-AR')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-end py-2">
                  <span className="text-lg font-black text-gray-800 uppercase tracking-tight">Total Final</span>
                  <span className="text-4xl font-black text-primary">${totalFinal.toLocaleString('es-AR')}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-4 md:mt-6">
                  <PDFButton
                    data={budgetData}
                    fileName={fileName}
                  />


                  <a
                    href={wppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-xl font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#20BE5C] transition-colors"
                  >
                    <WhatsAppIcon size={18} />
                    Enviar
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}
