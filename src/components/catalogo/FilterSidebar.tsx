"use client";

import Link from "next/link";
import { Filter } from "lucide-react";

interface FilterSidebarProps {
  categories: { id: string; nombre: string }[];
  activeCategory?: string | null;
}

export default function FilterSidebar({ categories, activeCategory }: FilterSidebarProps) {
  return (
    <div className="w-full xl:w-64 flex-shrink-0 flex flex-col gap-6">
      <div className="flex items-center gap-2 font-heading font-semibold text-lg text-foreground border-b border-border/50 pb-4">
        <Filter size={20} className="text-primary" />
        Categorías
      </div>

      <nav className="flex flex-row xl:flex-col gap-2 overflow-x-auto xl:overflow-x-visible pb-2 scrollbar-hide">
        <Link
          href="/catalogo"
          className={`px-4 py-2.5 rounded-2xl whitespace-nowrap text-sm font-medium transition-all duration-200 ${
            !activeCategory
              ? "bg-primary text-white shadow-md shadow-primary/20"
              : "bg-white text-muted-foreground hover:bg-gray-50 border border-border/60"
          }`}
        >
          Ver Todo
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/catalogo?tag=${cat.id}`}
            className={`px-4 py-2.5 rounded-2xl whitespace-nowrap text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.id
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-white text-muted-foreground hover:bg-gray-50 border border-border/60"
            }`}
          >
            {cat.nombre}
          </Link>
        ))}
      </nav>
    </div>
  );
}
