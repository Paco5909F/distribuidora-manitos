import { supabase } from "@/lib/supabaseClient";

export interface Product {
  id: number;
  nombre: string;
  precio: number;
  categoria?: string;
  categoria_id?: number;
  activo: boolean;
  updated_at?: string;
  image_url?: string;
  image_url_fallback?: string;
}

export interface FetchProductsOptions {
  page: number;
  limit: number;
  category?: string;
  search?: string;
}

const normalize = (text: string) =>
  text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const variants = (word: string) => {
  if (word.length <= 3) return [word];
  if (word.endsWith("es")) return [word, word.slice(0, -2)];
  if (word.endsWith("s")) return [word, word.slice(0, -1)];
  return [word];
};

const synonyms: Record<string, string[]> = {
  pulga: ["pulgicida", "antipulga", "pipeta"],
  pulgas: ["pulgicidas", "antipulgas", "pipetas"],
  collar: ["collares"],
  collares: ["collar"],
  pelota: ["pelotas"],
  pelotas: ["pelota"],
};

export const applySmartSearch = (baseQuery: any, searchInput: string) => {
  const normalized = normalize(searchInput);
  const words = normalized.split(/\s+/).filter(w => w.length > 0);
  let query = baseQuery;

  words.forEach(word => {
    const termVariants = variants(word);
    const expandedTerms = new Set<string>();
    
    termVariants.forEach(v => {
      expandedTerms.add(v);
      if (synonyms[v]) synonyms[v].forEach(s => expandedTerms.add(s));
    });

    const orConditions = Array.from(expandedTerms).map(term => 
      `nombre.ilike.%${term}%,categoria.ilike.%${term}%`
    ).join(',');

    query = query.or(orConditions);
  });

  return query;
};

export async function getProducts({ page, limit, category, search }: FetchProductsOptions) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('v_productos')
    .select('id, nombre, precio, categoria, activo, updated_at', { count: 'exact' })
    .eq('activo', true)
    .order('nombre', { ascending: true });

  if (category && category !== 'Todas') {
    query = query.eq('categoria', category);
  }

  if (search) {
    query = applySmartSearch(query, search);
  }

  query = query.range(from, to);

  const res = await query;
  
  if (res.error) {
    console.error('Error fetching products:', res.error);
    return { data: [] as Product[], count: 0, error: res.error.message };
  }

  let data = res.data || [];
  let count = res.count || 0;

  // Mapear image_url dinámicamente ya que no está en la base de datos (según script.sql)
  const mappedData = data?.map(p => ({
    ...p,
    image_url: supabase.storage.from("imagenes").getPublicUrl(`productos/${p.id}.webp`).data.publicUrl + `?v=${Date.now()}`
  })) as Product[];

  return { data: mappedData, count: count || 0 };
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categorias')
    .select('*')
    .order('nombre');

  if (error) {
    console.error('Error fetching categories:', error);
    throw new Error(error.message);
  }

  return data;
}
