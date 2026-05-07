"use client";

import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TENANT_CONFIG } from "@/config/constants";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`fixed left-0 right-0 z-[100] flex justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "top-2 md:top-3" : "top-0 pt-4"
      }`}
    >
      <div className={`flex items-center justify-between w-full h-[60px] md:h-[70px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mx-auto max-w-4xl
        ${isScrolled 
          ? "px-6 rounded-full bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(14,165,233,0.15)] border border-primary/10" 
          : "px-2 rounded-2xl bg-transparent border-transparent"
        }
      `}>
        <Link href="/" className="flex items-center shrink-0 h-full py-2">
          <div className="relative w-32 md:w-36 h-full flex items-center justify-center">
            <Image 
              src="/brand/logo.png" 
              alt={`${TENANT_CONFIG.name} Logo`} 
              fill
              priority
              sizes="(max-width: 768px) 128px, 144px"
              className="object-contain object-left md:object-center hover:scale-105 transition-transform origin-left w-auto h-auto" 
            />
          </div>
        </Link>


        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] tracking-widest uppercase font-black transition-colors duration-300 hover:text-primary whitespace-nowrap ${isScrolled ? "text-foreground/80" : "text-foreground/60"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-primary/30 mx-1" />
          <Link
            href="/catalogo"
            className="px-4 py-2 bg-primary text-primary-foreground text-[11px] font-black tracking-widest uppercase rounded-full hover:bg-foreground hover:text-white transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Ver Productos
          </Link>
          <Link
            href="/login"
            className={`p-2 rounded-full border transition-all hover:bg-foreground hover:text-white hover:border-foreground ${isScrolled ? "text-foreground/80 border-gray-200" : "text-foreground/60 border-foreground/20"}`}
            title="Ingreso Administrador"
          >
            <User size={18} />
          </Link>
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors text-foreground`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-[70px] left-5 right-5 bg-white/95 backdrop-blur-2xl border border-primary/20 rounded-3xl shadow-2xl flex flex-col items-center py-6 gap-5 z-[100] overflow-hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={link.name}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-heading font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-6 w-full px-8"
            >
              <Link
                href="/catalogo"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center py-3 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase rounded-full hover:bg-foreground hover:text-white transition-all shadow-md mb-3"
              >
                Ver Productos
              </Link>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-500 text-sm font-bold tracking-widest uppercase rounded-full hover:bg-gray-200 transition-all"
              >
                <User size={16} /> Entrar al Panel
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
