"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { AutoLogout } from "@/components/auth/auto-logout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-[100dvh] flex bg-[#F8FAFC] font-sans relative">
      <AutoLogout />
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0 bg-[url('/pattern.svg')] opacity-100 mix-blend-multiply pointer-events-none"></div>
      
      {/* Mobile Header (Hidden on Desktop) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-5 shadow-sm z-[60]">
        <div className="flex items-center gap-3">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src="/brand/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
           <span className="font-heading font-black text-foreground">Panel Admin</span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="text-gray-500 hover:text-primary transition-colors">
           <Menu size={26} />
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-[280px] bg-white shadow-[10px_0_40px_rgba(0,0,0,0.03)] border-r border-gray-100 p-6 flex flex-col fixed inset-y-0 left-0 z-[70] transition-transform duration-300 ease-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        
        {/* Mobile close button */}
        <button 
          onClick={() => setIsSidebarOpen(false)} 
          className="md:hidden absolute top-5 right-5 text-gray-400 hover:text-red-500 transition-colors"
        >
           <X size={24} />
        </button>

        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8 pb-8 border-b border-gray-100 mt-6 md:mt-0">
          <div className="relative w-32 h-32 md:w-36 md:h-36 mb-2">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src="/brand/logo.png" 
               alt="Manitos" 
               className="w-full h-full object-contain filter drop-shadow-xl"
             />
          </div>
          <span className="bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full mt-2">
            Software Gestor
          </span>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <a href="/admin" onClick={() => setIsSidebarOpen(false)} className="px-5 py-4 md:py-3.5 text-sm rounded-2xl text-gray-500 hover:text-primary hover:bg-primary/5 transition-all font-bold flex items-center gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span> Dashboard
          </a>
          <a href="/admin/productos" onClick={() => setIsSidebarOpen(false)} className="px-5 py-4 md:py-3.5 text-sm rounded-2xl text-gray-500 hover:text-primary hover:bg-primary/5 transition-all font-bold flex items-center gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span> Inventario
          </a>
          <a href="/admin/categorias" onClick={() => setIsSidebarOpen(false)} className="px-5 py-4 md:py-3.5 text-sm rounded-2xl text-gray-500 hover:text-primary hover:bg-primary/5 transition-all font-bold flex items-center gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span> Categorías
          </a>
          <a href="/admin/presupuestos" onClick={() => setIsSidebarOpen(false)} className="px-5 py-4 md:py-3.5 text-sm rounded-2xl text-gray-500 hover:text-primary hover:bg-primary/5 transition-all font-bold flex items-center gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span> Presupuestos PDF
          </a>
        </nav>
        
        <button 
          onClick={handleSignOut}
          className="px-5 py-4 text-sm rounded-2xl text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all font-black text-left mt-auto flex items-center gap-2 border border-transparent hover:border-red-100"
        >
          Cerrar Sesión
        </button>
      </aside>
      
      {/* Content Area */}
      <main className="flex-1 w-full p-4 pt-24 md:p-10 md:ml-[280px] overflow-y-auto min-h-[100dvh]">
        {children}
      </main>
    </div>
  );
}
