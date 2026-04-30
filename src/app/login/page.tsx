"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      router.refresh();
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[#F8FAFC] px-4 py-12 animate-in fade-in duration-500 relative overflow-hidden">
      {/* Pattern de Fondo */}
      <div className="absolute inset-0 opacity-100 bg-[url('/pattern.svg')] mix-blend-multiply pointer-events-none z-0"></div>

      {/* Glows Decorativos */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/50 relative z-10 w-[95%]">

        {/* Logo Central Gigante */}
        <div className="flex justify-center mb-0 mt-[-40px]">
          <div className="relative w-64 h-64 transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/brand/logo.png"
              alt="Distribuidora Manitos Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="mb-8 text-center mt-[-20px]">
          <h1 className="text-2xl md:text-3xl font-black font-heading tracking-tight text-foreground mb-1">
            Panel de Gestión
          </h1>
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            Acceso para administración de catálogo y presupuestos
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 block ml-1">
              Usuario Corporativo
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 font-bold transition-all text-base text-foreground placeholder:font-medium placeholder:text-gray-300"
              placeholder="Correo electrónico o teléfono"
            />
          </div>
          <div>
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 block ml-1">
              Clave de Seguridad
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 font-black tracking-widest transition-all text-base text-foreground placeholder:font-medium placeholder:tracking-normal placeholder:text-gray-300"
              placeholder="Ingrese su contraseña"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold text-center border border-red-100 flex items-center justify-center gap-2 mt-1">
              <span>⚠️</span> {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full py-4 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest text-sm hover:opacity-90 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:hover:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : "Ingresar al Sistema"}
          </button>
        </form>

        <div className="mt-10 pt-6 border-t border-gray-50 text-center">
          <a href="/" className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors inline-block pb-1 border-b border-transparent hover:border-primary">
            Retornar al Sitio Público
          </a>
        </div>
      </div>
    </div>
  );
}
