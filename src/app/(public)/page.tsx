import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/constants";

export default function Home() {
  return (
    <div className="min-h-[calc(100dvh-80px)] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden relative">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl w-full flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">

        {/* Logo de la empresa */}
        <div className="relative w-full max-w-[200px] md:max-w-[320px] aspect-square md:aspect-auto md:h-[250px] mb-2 drop-shadow-[0_20px_50px_rgba(14,165,233,0.15)] flex items-center justify-center animate-in zoom-in-95 duration-1000">
          <Image
            src="/brand/logo.png"
            alt="Distribuidora Manitos Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Textos */}
        <span className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm font-black mb-4 block mt-4">
          Mayorista y Minorista
        </span>
        <h1 className="sr-only">
          Distribuidora Manitos
        </h1>
        <p className="text-base md:text-xl text-muted-foreground font-semibold text-balance mb-10 max-w-2xl leading-relaxed opacity-90 mt-2">
          El catálogo más completo en productos para perros, gatos, roedores y artículos de jardinería. Encontrá calidad al mejor precio.
        </p>

        {/* Botones de Acción */}
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-2">
          <Link
            href="/catalogo"
            className="group px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-black rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center"
          >
            Ver Catálogo
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white border border-border text-foreground text-sm tracking-widest uppercase font-bold rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-3"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            <span>Contáctanos</span>
          </a>
        </div>
      </div>

      {/* Sección Quiénes Somos */}
      <div className="max-w-4xl w-full mt-32 mb-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 ease-out fill-mode-both">
        <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight mb-8">
          Quiénes Somos
        </h2>
        <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-6">
            Somos <strong className="text-foreground">Distribuidora Manitos</strong>, una empresa apasionada por el bienestar integral de tus mascotas y el cuidado de tus espacios verdes. Llevamos años ofreciendo el catálogo mayorista y minorista más completo del mercado.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            Nuestro objetivo es conectar a familias y comercios con artículos de primer nivel, desde accesorios y juguetes hasta herramientas especializadas, siempre combinando <strong className="text-primary">excelencia y el mejor precio</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
