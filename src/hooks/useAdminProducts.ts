import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/services/products';

export type FetchState = 'loading' | 'error' | 'empty' | 'success';

interface UseAdminProductsResult {
  products: Product[];
  state: FetchState;
  errorMessage: string;
  totalCount: number;
  fetchProducts: (searchQuery?: string, customBuster?: number) => Promise<void>;
}

export function useAdminProducts(): UseAdminProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [state, setState] = useState<FetchState>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [cacheBuster, setCacheBuster] = useState(() => Date.now());

  const fetchProducts = useCallback(async (searchQuery = "", customBuster?: number) => {
    setState('loading');
    setErrorMessage('');
    const busterToUse = customBuster || cacheBuster;
    if (customBuster) setCacheBuster(customBuster);
    
    try {
      let query = supabase.from("productos").select(`
        id,
        nombre,
        precio,
        categoria_id,
        categoria:categorias(nombre),
        activo
      `).eq("activo", true).order("nombre");
      
      if (searchQuery) {
        query = query.ilike("nombre", `%${searchQuery}%`);
      }
      
      // Burlamos el límite de 1000 (max_rows) de Supabase iterando de a bloques
      let allData: any[] = [];
      let from = 0;
      const step = 1000;
      let keepFetching = true;

      while (keepFetching) {
        const { data, error } = await query.range(from, from + step - 1);
        
        if (error) throw error;

        if (data && data.length > 0) {
          allData = [...allData, ...data];
          if (data.length < step) {
            keepFetching = false;
          } else {
            from += step;
          }
        } else {
          keepFetching = false;
        }
      }
      
      if (allData.length === 0) {
        setState('empty');
        setProducts([]);
        setTotalCount(0);
        return;
      }
      
      const formatted = allData.map(p => ({
        ...p,
        image_url: supabase.storage.from("imagenes").getPublicUrl(`productos/${p.id}.webp`).data.publicUrl + `?v=${busterToUse}`,
        image_url_fallback: supabase.storage.from("imagenes").getPublicUrl(`productos/${p.id}.jpg`).data.publicUrl + `?v=${busterToUse}`
      }));
      
      setProducts(formatted);
      setTotalCount(formatted.length);
      setState('success');
      
    } catch (err: any) {
      console.error("Error fetching products:", err);
      setErrorMessage("No se pudieron cargar los productos. Por favor, reintente más tarde.");
      setState('error');
    }
  }, [cacheBuster]);

  return { products, state, errorMessage, totalCount, fetchProducts };
}
