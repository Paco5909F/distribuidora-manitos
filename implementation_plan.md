# Auditoría Técnica y Plan de Preparación Multi-Tenant

Este documento contiene la auditoría completa del código actual de la aplicación, identificando áreas de mejora, riesgos de rendimiento y los pasos exactos necesarios para dejar el sistema listo para escalar a un modelo multiempresa (multi-tenant) sin sobreingeniería.

> [!IMPORTANT]
> **User Review Required**
> Por favor, revisa los hallazgos y el plan propuesto. Una vez que me des el "OK", comenzaré a ejecutar estos cambios paso a paso asegurando la máxima estabilidad del proyecto.

## 1. Diagnóstico General y Hallazgos

El proyecto tiene una base sólida, limpia y moderna. Se utilizan buenas prácticas como Server/Client Components de Next.js, contexto global para el carrito y un diseño minimalista. Sin embargo, hay detalles críticos que impedirán escalar correctamente si no se corrigen ahora.

### 🔴 Riesgos Críticos (Performance & Caching)
- **Caché de Imágenes Rota:** En `src/services/products.ts`, las URLs de las imágenes se generan añadiendo `?v=${Date.now()}`. Esto provoca que el navegador **nunca** guarde las imágenes en caché, obligando a descargar todas las imágenes del catálogo cada vez que el usuario navega o busca. Es un golpe duro a la performance en mobile.
- **Falta de Optimización `next/image`:** Las tarjetas de producto usan la etiqueta clásica `<img>`. Al no usar el componente `<Image>` de Next.js, no hay conversión automática a WebP, ni *lazy loading* nativo optimizado, ni *responsive sizing*.

### 🟡 Advertencias de Escalabilidad (Multi-tenant)
- **Variables Hardcodeadas:** Nombres como "Distribuidora Manitos", el número de WhatsApp y los *keys* de `localStorage` (`manitos_cart`) están escritos directamente en los componentes. Si queremos usar este código para otra marca, tendríamos que buscar y reemplazar en docenas de archivos.
- **Base de Datos:** Las consultas a Supabase (`v_productos`) asumen que todo el catálogo pertenece a un solo dueño. Necesitamos preparar la lógica para filtrar por `tenant_id` o aislar bases de datos.

### 🟢 UX/UI y Código Limpio
- El `CartSidebar` ahora maneja excelentemente el scroll en mobile (`100dvh`).
- El estado global del carrito está bien aislado.
- El buscador dinámico funciona bien, pero el `debounce` (retraso al escribir) está mezclado con la lógica del componente.

---

## 2. Propuesta de Mejoras (Plan de Acción)

### Fase 1: Corrección de Performance (Prioridad Máxima)
- [x] **Reparar Caché:** Cambiar `?v=${Date.now()}` por `?v=${new Date(p.updated_at).getTime()}`. Esto garantiza que la imagen se cachee de por vida y solo se recargue si el admin edita el producto.
- [x] **Configurar Next.js Images:** Agregar el dominio de Supabase en `next.config.mjs` y refactorizar `ProductCard.tsx` y `ProductGrid.tsx` para usar `<Image fill />`. Esto mejorará la velocidad de carga exponencialmente.

### Fase 2: Refactorización y Limpieza (Clean Code)
- [x] **Hook `useDebounce`:** Extraer la lógica del buscador a un *custom hook* (`src/hooks/useDebounce.ts`) para limpiar el componente `ProductGrid.tsx` y evitar renders innecesarios.
- [x] **Centralizar Configuración (Preparación Multi-Tenant):** Crear `src/config/tenant.ts`. Mover el nombre de la empresa, colores principales (opcional), número de WhatsApp y prefijo de LocalStorage a este archivo. Así, clonar la app para otra marca tomará solo 1 minuto.

### Fase 3: Mejoras UX/UI y Estabilidad
- [x] **Keys Dinámicos en LocalStorage:** El carrito y los datos del cliente se guardarán con un prefijo dinámico (ej. `[tenant_id]_cart`).
- [x] **Estado de Hidratación:** Asegurar que el icono del carrito en el `Navbar` no sufra "saltos visuales" cuando Next.js hidrata el estado del lado del cliente.

---

## 3. Plan de Verificación

1. **Auditoría de Red:** Abrir DevTools y verificar que las imágenes devuelven código `304 Not Modified` o se leen desde el caché del navegador, reduciendo el peso de carga de ~5MB a ~100kb.
2. **Auditoría de Core Web Vitals:** Usar Lighthouse para asegurar que las imágenes optimizadas mejoran la puntuación de rendimiento.
3. **Flujo Multi-Tenant:** Simular el cambio de configuración en `tenant.ts` y verificar que TODA la web (textos, WhatsApp, almacenamiento local) cambia automáticamente sin tocar lógica.

## ¿Open Questions?
- **Imágenes Next.js:** Para configurar `<Image>`, necesito asegurarme que tu proyecto está configurado como `next.config.js` o `next.config.mjs`. Asumiré `next.config.ts` o `.mjs` según el estándar de Next 14/15. ¿Estás de acuerdo con este plan para arrancar?
