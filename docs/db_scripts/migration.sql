-- 1. Crear columna precio si no existe
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name='productos' AND column_name='precio'
  ) THEN
    ALTER TABLE productos ADD COLUMN precio NUMERIC(12,2);
  END IF;
END $$;

-- 2. Copiar datos desde minorista (o mayorista si querés priorizarlo)
UPDATE productos
SET precio = COALESCE(precio_minorista, precio_mayorista, precio);

-- 3. Eliminar columnas extras si existen
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name='productos' AND column_name='precio_minorista'
  ) THEN
    ALTER TABLE productos DROP COLUMN precio_minorista;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name='productos' AND column_name='precio_mayorista'
  ) THEN
    ALTER TABLE productos DROP COLUMN precio_mayorista;
  END IF;
END $$;

-- 4. Arreglar la vista
DROP VIEW IF EXISTS v_productos CASCADE;
CREATE VIEW v_productos AS
SELECT
  p.id,
  p.nombre,
  p.precio,
  c.nombre AS categoria,
  p.activo,
  p.updated_at
FROM productos p
JOIN categorias c ON c.id = p.categoria_id
ORDER BY c.nombre, p.nombre;

-- 5. Arreglar la funcion
CREATE OR REPLACE FUNCTION buscar_producto(query TEXT)
RETURNS TABLE(
  id INT,
  nombre TEXT,
  precio NUMERIC,
  categoria TEXT
) AS $$
  SELECT p.id, p.nombre, p.precio, c.nombre
  FROM productos p
  JOIN categorias c ON c.id = p.categoria_id
  WHERE p.activo = TRUE
    AND p.nombre ILIKE '%' || query || '%'
  ORDER BY p.nombre
  LIMIT 50;
$$ LANGUAGE sql STABLE;

-- 6. Forzar recarga de schema para PostgREST
NOTIFY pgrst, 'reload schema';
