# Checklist de Validación Manual (Fase Pre-SaaS)

Esta guía detalla los escenarios exactos a probar físicamente en dispositivos móviles y de escritorio para certificar que la base del ecommerce está 100% libre de fallos antes de escalar la arquitectura.

## 📱 1. Pruebas Mobile y Cross-Browser
> **Objetivo:** Asegurar que la UI no se rompa bajo las limitaciones de las pantallas táctiles.

- [ ] **Viewport Dinámico (Chrome/Safari):** Entrar al catálogo, scrollear rápido hacia abajo y hacia arriba para ocultar/mostrar la barra de direcciones. Abrir el modal de un producto mientras se hace esto y verificar que no haya "saltos" en la pantalla.
- [ ] **Teclado Virtual:** Abrir el carrito, ir al paso de "Completar Datos" y tocar el input "Tu Nombre". Verificar que iOS Safari **no haga zoom automático** (gracias a los 16px).
- [ ] **Rotación de Pantalla:** Girar el celular de vertical a horizontal mientras el modal de un producto está abierto. Debe mantenerse centrado y scrolleable.

## 🛒 2. Carrito y Edge Cases (Casos Límite)
> **Objetivo:** Romper la lógica del carrito a propósito.

- [ ] **Carrito Gigante:** Agregar 30 productos diferentes al carrito. Verificar que el sidebar siga siendo scrolleable y que el botón de WhatsApp no quede oculto bajo la pantalla.
- [ ] **Desincronización de Precios:**
  1. Agregar un producto al carrito en la pestaña del celular.
  2. Abrir el panel de administrador en la PC y **cambiarle el precio** a ese producto.
  3. En el celular, tocar "Completar Pedido" y enviar. 
  4. *Resultado esperado:* El carrito detecta el cambio, no envía el WhatsApp, corrige el total y avisa al usuario.
- [ ] **Producto Desactivado:** Repetir el paso anterior, pero en lugar de cambiar el precio, **desactivar la categoría** del producto. El carrito debe expulsar el producto automáticamente.

## 🔎 3. Búsquedas y Estados Vacíos
> **Objetivo:** Validar los estados cuando las cosas no salen como el usuario espera.

- [ ] **Búsquedas Raras:** Buscar símbolos especiales (`%&$`) o palabras larguísimas. Verificar que el mensaje de "No encontramos nada" se muestre con la ilustración correcta y el diseño no se rompa.
- [ ] **Nombres Largos:** Buscar el producto con el nombre más largo de la base de datos y verificar que en el `ProductCard` se aplique correctamente el recorte (`line-clamp-2` con puntos suspensivos) sin empujar los precios hacia abajo.

## 🕸️ 4. Offline y Resiliencia
> **Objetivo:** Simular conexiones inestables.

- [ ] **Corte de Internet:** Estando en el catálogo, apagar el Wi-Fi/Datos e intentar cambiar de página en la paginación. Verificar que la grilla muestre el mensaje de error "Algo salió mal" y ofrezca el botón de reintentar en lugar de colgarse cargando infinitamente.
- [ ] **Imágenes Rotas:** Simular que el servidor de Supabase no responde bloqueando la URL de imágenes. Las tarjetas deben mostrar el fallback gris "Sin imagen" sin que el layout de la grilla de 4 columnas se descuadre.

## 🚀 5. SEO, Lighthouse y OpenGraph
> **Objetivo:** Verificar la indexación y accesibilidad técnica.

- [ ] **OpenGraph Real:** Copiar el enlace de producción (ej. `https://distribuidoramanitos.com/catalogo`) y pegarlo en un chat de WhatsApp (o usar el [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)). Verificar que la previsualización carga el logo, el título "Catálogo | Distribuidora Manitos" y la descripción.
- [ ] **Lighthouse:** Correr una auditoría en Chrome DevTools (modo Mobile). 
  - *Accesibilidad:* Debe ser > 95 gracias a los nuevos `aria-labels`.
  - *SEO:* Debe ser > 95 gracias a las etiquetas semánticas `<article>` y metadatos dinámicos.
- [ ] **Search Console / Robots:** Verificar que `/robots.txt` y `/sitemap.xml` estén respondiendo correctamente.
