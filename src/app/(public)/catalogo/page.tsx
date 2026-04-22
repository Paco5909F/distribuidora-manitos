import ProductGrid from "@/components/catalogo/ProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo Mayorista y Minorista | Distribuidora Manitos",
  description: "Explora nuestros +1000 productos para mascotas y jardinería.",
};

export default function CatalogoPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex flex-col relative z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10 h-96 rounded-b-[100px]" />
      
      <header className="mb-10 text-center md:text-left">
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
