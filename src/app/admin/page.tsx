"use client";

import Link from 'next/link';
import { Package, FileText, ArrowRight, TrendingUp, Users, Box } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AdminDashboard() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    supabase.from('productos').select('*', { count: 'exact', head: true }).eq('activo', true)
      .then(({ count }) => { if (count) setTotalProducts(count); });
  }, []);

  return (
    <div className="max-w-6xl animate-in fade-in duration-500 pb-20">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary via-[#0284c7] to-[#0ea5e9] rounded-[2rem] p-8 md:p-12 mb-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_20px_60px_-15px_rgba(14,165,233,0.4)]">
         {/* Patrón Decorativo de Fondo */}
         <div className="absolute inset-0 opacity-40 bg-[url('/pattern.svg')] mix-blend-color-dodge"></div>
         <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
         
         <div className="z-10 text-white md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-3">Panel de Control General</h1>
            <p className="text-white/70 font-medium text-lg leading-relaxed max-w-xl">
               Supervisa el inventario en tiempo real, genera presupuestos al instante y mantén actualizado todo tu ecosistema de catálogo comercial.
            </p>
         </div>

         <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm z-10 w-full md:w-48 mt-8 md:mt-0">
             <span className="text-white/50 text-xs font-black uppercase tracking-widest mb-1">Total Catálogo</span>
             <span className="text-5xl font-black text-white">{totalProducts}</span>
             <span className="text-primary text-xs font-bold mt-2 flex items-center gap-1"><TrendingUp size={14}/> Activos</span>
         </div>
      </div>

      <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Accesos Rápidos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Inventario Card */}
        <Link href="/admin/productos" className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-300">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white">
            <Package size={28} />
          </div>
          <h2 className="text-xl font-black font-heading tracking-tight mb-2 text-foreground group-hover:text-blue-600 transition-colors">Maestro de Inventario</h2>
          <p className="text-sm font-medium text-gray-500 mb-8 flex-grow leading-relaxed">
            Control integral del catálogo. Sincroniza stock, edita registros, gestiona precios masivos y organiza imágenes de forma profesional.
          </p>
          <div className="flex items-center text-sm font-bold text-blue-600 uppercase tracking-widest gap-2 group-hover:gap-3 transition-all pt-4 border-t border-gray-50">
            Acceder al Módulo <ArrowRight size={16} />
          </div>
        </Link>

        {/* Presupuestos Card */}
        <Link href="/admin/presupuestos" className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-100 transition-all duration-300">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-emerald-100/50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white">
            <FileText size={28} />
          </div>
          <h2 className="text-xl font-black font-heading tracking-tight mb-2 text-foreground group-hover:text-emerald-600 transition-colors">Motor de Presupuestos</h2>
          <p className="text-sm font-medium text-gray-500 mb-8 flex-grow leading-relaxed">
            Ensamblador de pedidos en tiempo real. Configura cotizaciones con PDF dinámico para clientes mayoristas y envíalos en un solo click.
          </p>
          <div className="flex items-center text-sm font-bold text-emerald-600 uppercase tracking-widest gap-2 group-hover:gap-3 transition-all pt-4 border-t border-gray-50">
            Generar Cotización <ArrowRight size={16} />
          </div>
        </Link>
        
      </div>
    </div>
  );
}
