import ProductGrid from "@/components/catalogo/ProductGrid";
import { Metadata } from "next";
import { TENANT_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: `Catálogo | ${TENANT_CONFIG.name}`,
  description: "Explora nuestros productos para mascotas y jardinería. Filtra por categorías y encuentra calidad al mejor precio.",
  openGraph: {
    title: `Catálogo | ${TENANT_CONFIG.name}`,
    description: "Explora nuestros productos para mascotas y jardinería.",
    url: `${TENANT_CONFIG.seo.domain}/catalogo`,
    images: [{ url: "/brand/logo.png" }],
  }
};

export default function CatalogoPage() {
  return (
    <div className="min-h-[100dvh] pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent h-96 rounded-b-[100px] pointer-events-none" />
      
      <header className="mb-10 text-center md:text-left relative z-10">
        <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
          Catálogo <span className="text-primary">Manitos</span>
        </h1>
        <p className="text-muted-foreground text-lg font-medium max-w-2xl">
          Encontrá todo lo que buscás al mejor precio del mercado. Buscá por nombre o filtrá por categorías.
        </p>
      </header>

      <ProductGrid />
    </div>
  );
}
