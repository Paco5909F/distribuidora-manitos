import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export type FetchState = 'loading' | 'error' | 'empty' | 'success';

interface Category {
  id: number;
  nombre: string;
  activo?: boolean;
}

interface UseAdminCategoriesResult {
  categories: Category[];
  state: FetchState;
  errorMessage: string;
  fetchCategories: () => Promise<void>;
}

export function useAdminCategories(): UseAdminCategoriesResult {
  const [categories, setCategories] = useState<Category[]>([]);
  const [state, setState] = useState<FetchState>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCategories = useCallback(async () => {
    setState('loading');
    setErrorMessage('');
    
    try {
      const { data, error } = await supabase.from("categorias").select("*").order("nombre");
      
      if (error) throw error;
      
      if (!data || data.length === 0) {
        setState('empty');
        setCategories([]);
        return;
      }
      
      setCategories(data);
      setState('success');
      
    } catch (err) {
      console.error("Error fetching categories:", err);
      setErrorMessage("No se pudieron cargar las categorías.");
      setState('error');
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, state, errorMessage, fetchCategories };
}
