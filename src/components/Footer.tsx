import Link from "next/link";
import { getWhatsAppLink, TENANT_CONFIG } from "@/config/constants";
import Image from "next/image";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/brand/logo.png"
              alt={`${TENANT_CONFIG.name} Logo`}
              width={40}
              height={40}
              priority
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-heading text-xl font-bold text-white">
              {TENANT_CONFIG.name}
            </span>
          </Link>
          <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
            Todo lo que buscás para tu mascota y tu jardín, con el mejor precio
            mayorista.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link
            href="/catalogo"
            className="hover:text-primary transition-colors"
          >
            Catálogo
          </Link>
          <Link
            href="/contacto"
            className="hover:text-primary transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
          >
            <WhatsAppIcon size={20} />
          </a>
          <a
            href="https://instagram.com/distribuidoramanitos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
          >
            <InstagramIcon />
          </a>
          <a
            href="mailto:hola@manitos.com"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
            aria-label="Correo electrónico"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} {TENANT_CONFIG.name}. Todos los derechos
          reservados.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p>Buenos Aires, Argentina</p>
          <span className="hidden md:inline text-white/20">•</span>
          <p>
            Desarrollado por{" "}
            <span className="font-semibold text-white/80">Joaquín Rosas</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
