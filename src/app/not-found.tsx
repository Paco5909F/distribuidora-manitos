import Link from "next/link";
import { Search } from "lucide-react";
import { TENANT_CONFIG } from "@/config/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Página no encontrada | ${TENANT_CONFIG.name}`,
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden">
      {/* Elementos decorativos glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="bg-white/80 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/60 max-w-lg w-full text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <span className="text-6xl font-black text-primary/20 absolute">404</span>
          <Search className="w-12 h-12 text-primary relative z-10" />
        </div>
        
        <h1 className="font-heading text-4xl font-black text-foreground mb-4">
          Página no encontrada
        </h1>
        
        <p className="text-gray-500 mb-10 text-lg leading-relaxed text-balance">
          Parece que la página que estás buscando no existe o fue movida.
        </p>

        <Link
          href="/catalogo"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
        >
          Volver al Catálogo
        </Link>
      </div>
    </div>
  );
}
