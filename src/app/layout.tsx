import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://distribuidoramanitos.com"),
  title: "Distribuidora Manitos | Todo para Mascotas y Jardinería",
  description: "En Distribuidora Manitos vas a encontrar el mejor catálogo mayorista y minorista de productos para mascotas (perros, gatos, roedores) y artículos de jardinería.",
  keywords: ["Distribuidora Manitos", "alimento para perros", "alimento para gatos", "mascotas", "jardinería", "mayorista mascotas", "accesorios mascotas"],
  authors: [{ name: "Distribuidora Manitos" }],
  openGraph: {
    title: "Distribuidora Manitos | Todo para Mascotas y Jardinería",
    description: "Catálogo completo de productos para tus mascotas y jardín.",
    url: "https://distribuidoramanitos.com",
    siteName: "Distribuidora Manitos",
    images: [
      {
        url: "/brand/logo.png",
        width: 800,
        height: 800,
        alt: "Distribuidora Manitos Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Distribuidora Manitos | Mascotas y Jardinería",
    description: "Encontrá los mejores precios para tu mascota y tu jardín.",
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans scroll-smooth", inter.variable, outfit.variable)}>
      <body className="antialiased min-h-[100dvh] flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
