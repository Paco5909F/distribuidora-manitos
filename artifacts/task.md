# Auditoría Técnica y Correcciones (Multi-tenant Prep)

- `[x]` Fase 1: Corrección de Performance (Prioridad Máxima)
  - `[x]` Reparar caché de imágenes (`?v=updated_at`)
  - `[x]` Configurar `next.config.mjs` / `next.config.ts` para Supabase
  - `[x]` Refactorizar `ProductCard.tsx` para usar `next/image`
  - `[x]` Refactorizar modal en `ProductGrid.tsx` para usar `next/image`

- `[x]` Fase 2: Refactorización y Limpieza (Clean Code)
  - `[x]` Crear hook `useDebounce`
  - `[x]` Implementar `useDebounce` en `ProductGrid.tsx`
  - `[x]` Centralizar configuración en `src/config/tenant.ts` (tenant, localStorage keys, WhatsApp)
  - `[x]` Actualizar `CartSidebar` y `CartContext` para usar variables del tenant
  - `[x]` Actualizar `Navbar` y `Footer` para usar variables del tenant
  - `[x]` Actualizar SEO metadata y sitemaps para usar `tenant.ts`

- `[x]` Fase 3: Mejoras UX/UI y Estabilidad
  - `[x]` Fix hidratación del contador del carrito
  - `[x]` Validar `type="tel"` y UX del formulario

- `[x]` Fase 4: Testing & Verificación
  - `[x]` Verificar `lint` (Aprobado)
  - `[x]` Validar que no se rompe funcionalidad (Build exitoso)
