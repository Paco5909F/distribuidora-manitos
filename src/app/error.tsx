"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-red-50/50 to-white relative overflow-hidden">
      {/* Elementos decorativos glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="bg-white/80 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/60 max-w-lg w-full text-center relative z-10 animate-in fade-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-sm">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>

        <h1 className="font-heading text-3xl font-black text-gray-900 mb-4">
          ¡Ups! Algo salió mal
        </h1>

        <p className="text-gray-500 mb-10 text-lg leading-relaxed">
          Tuvimos un problema técnico inesperado. Por favor, intenta de nuevo o
          regresa al catálogo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
          >
            <RefreshCcw size={18} />
            Reintentar
          </button>

          <Link
            href="/catalogo"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-bold tracking-wide shadow-sm hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
          >
            Ir al Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
