# Distribuidora Manitos - Catálogo y Panel Administrativo 🐾🌱

Plataforma integral construida con **Next.js** y **Supabase** para la gestión mayorista y minorista de productos de jardinería y para mascotas. Permite administrar un catálogo público en línea e incluye un entorno administrativo para generar presupuestos en formato PDF.

## 🚀 Tecnologías Principales
- **Framework:** Next.js (App Router)
- **Base de Datos & Auth:** Supabase (PostgreSQL, Storage, y SSR Auth)
- **Estilos:** Tailwind CSS
- **Generación de PDFs:** `@react-pdf/renderer`
- **Iconos:** Lucide-React

---

## 💻 Instalación y Desarrollo Local

1. **Clonar repositorio e instalar dependencias:**
   ```bash
   git clone <tu-repo-url>
   cd Manitos
   npm install
   ```

2. **Configurar el entorno:**
   - Duplica el archivo `.env.example` y renómbralo a `.env.local`
   - Ingresa tus credenciales reales (URL y Key) de tu proyecto de Supabase.

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   > Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación local.

---

## 🛠 Entorno Administrativo (Admin Dashboard)

El sistema cuenta con un panel privado para administradores que se accede temporalmente y redirecciona automáticamente.

- **Ruta de Acceso:** `/login`
- **Redirección si logueado:** `/admin/` (y `/admin/presupuestos/`)

> *Nota de Seguridad:* Toda la carpeta `/admin` se encuentra fuertemente blindada en el nivel de red. El archivo `middleware.ts` valida tu cookie de sesión de Supabase activamente y no permite accesos anónimos.

---

## 📦 Despliegue en Vercel

Esta aplicación está completamente preparada para entornos serverless. Para desplegar en Vercel:

1. Modifica la configuración de Vercel e importa el repo desde GitHub.
2. Ve a las configuraciones (Settings) de Vercel e ingresa todas las Environment Variables necesarias extraídas desde `.env.example`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. ¡Despliega! Vercel ejecutará automáticamente la construcción con `npm run build`.

---

## 🛡️ Base de Datos y Scripts de Soporte

En caso de que requieras restaurar tu esquema de base de datos o modificar alguna estructura, encontrarás los scripts documentados en:
* `/docs/db_scripts/` - Migraciones y funciones PL/pgSQL nativas importadas al entorno de Supabase.

*Construido siguiendo las mejores prácticas de UI/UX, lazy loading de imágenes, validación estricta de TypeScript, y arquitectura orientada a la protección de datos.*
