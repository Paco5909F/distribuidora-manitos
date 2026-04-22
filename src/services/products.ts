import { supabase } from "@/lib/supabaseClient";

export interface Product {
  id: number;
  nombre: string;
  precio: number;
  categoria?: string;
  activo: boolean;
  updated_at?: string;
  image_url?: string;
}

export interface FetchProductsOptions {
  page: number;
  limit: number;
  category?: string;
  search?: string;
}

export async function getProducts({ page, limit, category, search }: FetchProductsOptions) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let data: any[] | null = [];
  let count = 0;
  let error;

  if (search) {
    // Usamos el Helper RPC 'buscar_producto' definido en script.sql
    const res = await supabase.rpc('buscar_producto', { query: search });
    data = res.data;
    error = res.error;
    // RPC no soporta count exacto automático con pagination fácilmente,
    // pero limitamos a 50 según el script.sql
    if (data) count = data.length;
  } else {
    // Usamos la vista 'v_productos' definida en script.sql
    let query = supabase
      .from('v_productos')
      .select('id, nombre, precio, categoria, activo, updated_at', { count: 'exact' })
      .eq('activo', true)
      .order('nombre', { ascending: true })
      .range(from, to);

    if (category && category !== 'Todas') {
      query = query.eq('categoria', category);
    }

    const res = await query;
    data = res.data;
    count = res.count || 0;
    error = res.error;
  }

  if (error) {
    console.error('Error fetching products:', error);
    return { data: [] as Product[], count: 0 };
  }

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
