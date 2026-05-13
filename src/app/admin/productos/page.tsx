import BulkEditor from "@/components/admin/BulkEditor";
import ProductManager from "@/components/admin/ProductManager";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de Administración | Distribuidora Manitos",
};

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-black font-heading tracking-tight mb-2">
          Panel de Administración
        </h1>
        <p className="text-muted-foreground font-medium">
          Gestión de Catálogo y Precios
        </p>
      </header>

      <BulkEditor />
      <ProductManager />
    </div>
  );
}
