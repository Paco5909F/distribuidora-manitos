import { useState, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/services/products";

export type FetchState = "loading" | "error" | "empty" | "success";

interface UseAdminProductsResult {
  products: Product[];
  state: FetchState;
  errorMessage: string;
  totalCount: number;
  fetchProducts: (searchQuery?: string, customBuster?: number) => Promise<void>;
}

export function useAdminProducts(): UseAdminProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [state, setState] = useState<FetchState>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [cacheBuster, setCacheBuster] = useState(() => Date.now());

  // Usamos useRef para mantener el caché sin provocar re-renders ni re-crear fetchProducts
  const allProductsCache = useRef<Product[] | null>(null);

  const fetchProducts = useCallback(
    async (searchQuery = "", customBuster?: number) => {
      setState("loading");
      setErrorMessage("");
      const busterToUse = customBuster || cacheBuster;
      if (customBuster) setCacheBuster(customBuster);

      try {
        let allData: Product[] = [];

        // Si no tenemos caché O si nos pasan un customBuster (ej: producto editado/agregado), vamos a la DB.
        if (!allProductsCache.current || customBuster) {
          const query = supabase
            .from("productos")
            .select(
              `
          id,
          nombre,
          precio,
          categoria_id,
          categoria:categorias(nombre),
          activo
        `,
            )
            .order("nombre");

          let from = 0;
          const step = 1000;
          let keepFetching = true;

          while (keepFetching) {
            const { data, error } = await query.range(from, from + step - 1);

            if (error) throw error;

            if (data && data.length > 0) {
              allData = [...allData, ...(data as unknown as Product[])];
              if (data.length < step) {
                keepFetching = false;
              } else {
                from += step;
              }
            } else {
              keepFetching = false;
            }
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const formatted = (allData as unknown as any[]).map((p) => ({
            ...p,
            categoria: Array.isArray(p.categoria)
              ? p.categoria[0]?.nombre
              : p.categoria?.nombre || p.categoria,
            image_url:
              supabase.storage
                .from("imagenes")
                .getPublicUrl(`productos/${p.id}.webp`).data.publicUrl +
              `?v=${busterToUse}`,
            image_url_fallback:
              supabase.storage
                .from("imagenes")
                .getPublicUrl(`productos/${p.id}.jpg`).data.publicUrl +
              `?v=${busterToUse}`,
          })) as Product[];

          allProductsCache.current = formatted;
          allData = formatted;
        } else {
          // Usamos el caché en memoria
          allData = allProductsCache.current;
        }

        // Filtrado en memoria por Nombre O Categoría
        let filtered = allData;
        if (searchQuery) {
          const queryLower = searchQuery.toLowerCase();
          filtered = allData.filter(
            (p) =>
              p.nombre.toLowerCase().includes(queryLower) ||
              (p.categoria && p.categoria.toLowerCase().includes(queryLower)),
          );
        }

        if (filtered.length === 0) {
          setState("empty");
          setProducts([]);
          setTotalCount(0);
          return;
        }

        setProducts(filtered);
        setTotalCount(filtered.length);
        setState("success");
      } catch (err) {
        console.error("Error fetching products:", err);
        setErrorMessage(
          "No se pudieron cargar los productos. Por favor, reintente más tarde.",
        );
        setState("error");
      }
    },
    [cacheBuster],
  );

  return { products, state, errorMessage, totalCount, fetchProducts };
}
