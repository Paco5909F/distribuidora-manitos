import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { TENANT_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  metadataBase: new URL(TENANT_CONFIG.seo.domain),
  title: TENANT_CONFIG.seo.title,
  description: TENANT_CONFIG.seo.description,
  keywords: [
    TENANT_CONFIG.name,
    "alimento para perros",
    "alimento para gatos",
    "mascotas",
    "jardinería",
    "mayorista mascotas",
    "accesorios mascotas",
  ],
  authors: [{ name: TENANT_CONFIG.name }],
  openGraph: {
    title: TENANT_CONFIG.seo.title,
    description: TENANT_CONFIG.seo.description,
    url: TENANT_CONFIG.seo.domain,
    siteName: TENANT_CONFIG.name,
    images: [
      {
        url: "/brand/logo.png",
        width: 800,
        height: 800,
        alt: `${TENANT_CONFIG.name} Logo`,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TENANT_CONFIG.seo.title,
    description: TENANT_CONFIG.seo.description,
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("font-sans scroll-smooth", inter.variable, outfit.variable)}
    >
      <body className="antialiased min-h-[100dvh] flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
