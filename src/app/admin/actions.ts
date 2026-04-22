"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function bulkUpdatePrices(categoria_nombre: string, formType: string, authValue: number) {
  const supabase = createClient();
  
  try {
    const { data, error } = await supabase.rpc('bulk_update_prices', {
      p_categoria_nombre: categoria_nombre,
      p_form_type: formType,
      p_auth_value: authValue
    });

    if (error) {
      console.error("RPC Error:", error);
      throw new Error(error.message);
    }

    if (data === false) {
      throw new Error("Categoría no encontrada o RPC rechazado.");
    }

    revalidatePath("/catalogo");
    revalidatePath("/admin");
    return { success: true };

  } catch (err: any) {
    console.error("Bulk update error:", err);
    return { success: false, error: err.message || "Error desconocido" };
  }
}
