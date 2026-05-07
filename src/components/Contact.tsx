"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { getWhatsAppLink, TENANT_CONFIG } from "@/config/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-transparent relative overflow-hidden flex items-center justify-center">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-white/60 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-white/80 overflow-hidden"
        >

          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-primary/20 rounded-tl-[3rem]" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-primary/20 rounded-br-[3rem]" />

          <span className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-6 block">
            Contacto
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium text-foreground mb-6 leading-tight max-w-3xl mx-auto">
            Estamos para <i className="font-light text-primary">ayudarte.</i>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance mx-auto max-w-2xl font-light">
            Contactanos por WhatsApp. Consultá stock, precios mayoristas o realizá tu pedido directamente con un asesor comercial.
          </p>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={getWhatsAppLink(TENANT_CONFIG.commercialMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#25D366] text-white text-lg tracking-wide uppercase font-bold rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.4)] transition-all mx-auto mb-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <WhatsAppIcon className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Escribinos</span>
          </motion.a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-primary/10 mt-8 w-full max-w-4xl mx-auto">
            <a
              href="https://maps.app.goo.gl/krbH2Nq9tRES6c8KA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver ubicación"
              className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-4 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={28} />
              </div>
              <span className="font-medium text-foreground/80 tracking-wide text-center">Chacabuco, BA</span>
            </a>

            <a
              href="mailto:hola@distribuidoramanitos.com"
              aria-label="Contactar por correo electrónico"
              className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-4 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail size={28} />
              </div>
              <span className="font-medium text-foreground/80 tracking-wide text-center text-sm md:text-base break-all">hola@manitos.com</span>
            </a>

            <a
              href="https://instagram.com/distribuidoramanitos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de Instagram"
              className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-4 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <InstagramIcon className="w-7 h-7" />
              </div>
              <span className="font-medium text-foreground/80 tracking-wide text-center">@distribuidoramanitos</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
