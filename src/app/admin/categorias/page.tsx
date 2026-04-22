import CategoryManager from "@/components/admin/CategoryManager";

export default function CategoriasPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-black text-foreground drop-shadow-sm leading-tight">
            Gestión de Categorías
          </h1>
          <p className="text-gray-500 font-medium mt-1">
            Administra las familias de productos de tu catálogo.
          </p>
        </div>
      </div>
      
      <div className="flex-grow min-h-0 bg-white/70 backdrop-blur-md rounded-2xl md:rounded-[2rem] shadow-sm overflow-hidden flex flex-col border border-white/40">
        <CategoryManager />
      </div>
    </div>
  );
}
