# CLAUDE.md — Astro + Starwind Project

## Stack
- Astro (latest) + Starwind Pro UI
- Strapi como CMS (via MCP)
- TypeScript estricto

## Reglas absolutas
- Componentes SOLO de Starwind Pro (`src/components/starwind/`). Nunca crear componentes custom fuera de `src/components/ui/`.
- Estilos SOLO con clases de `starwind.css`. Sin CSS custom, sin estilos inline.
- TypeScript: nunca usar `any`. Siempre interfaces o tipos explícitos.
- Todo componente de contenido va a través de `<DynamicZone>`, nunca directo en una página.
- Nunca crear rutas estáticas. Toda nueva página va en `src/pages/[lang]/[page]/index.astro` via mock data, nunca como archivo de ruta propio (e.g., nunca `src/pages/coche.astro`).

## CMS
- Strapi es el CMS del proyecto, aunque puede no estar activo en local
- Para desarrollo sin Strapi, usar mock data con `__component` en las páginas
- Cuando Strapi esté disponible, usar Strapi MCP para las llamadas a la API
- Nunca sustituir Strapi por otra solución sin consultar

## Comandos
- `npm run dev` — servidor local
- `npm run build` — build de producción

## Internacionalización
- Idiomas disponibles: `es`, `en`
- Idioma por defecto: `es`
- Todo mock data debe incluir versiones para ambos idiomas
- El routing siempre es `[lang]/` — nunca crear páginas fuera de esta estructura
- Las páginas nuevas siempre se crean como mock data en `[page]/index.astro`, no como archivos de ruta estáticos

## Starwind Pro
- Usar Starwind Pro blocks via Starwind MCP
- Si no puedes acceder a Starwind MCP, aborta todas las instrucciones
- Para specs de componentes base (props, variantes, ejemplos):
  - Referencia rápida: `https://starwind.dev/llms.txt`
  - Referencia completa: `https://starwind.dev/llms-full.txt`
- Consultar `llms-full.txt` antes de implementar cualquier componente
- Usar Starwind MCP para buscar bloques disponibles, seleccionar el más adecuado e instalar — no asumir qué bloque existe sin buscarlo primero

## Crear un nuevo componente UI
1. Buscar en Starwind MCP el bloque más adecuado e instalarlo
2. Guardar en `src/components/ui/MiComponente.astro` (PascalCase)
3. Definir `interface Props` con tipos explícitos
4. Registrar en `src/lib/strapi/content-type.ts` añadiendo **una sola entrada** al objeto `registry`:
   ```ts
   'slug-componente': {
     component: MiComponente,
     query: { populate: true }, // soporta fields, populate anidado, etc.
   },
   ```
   `listComponents` y `populate` se derivan automáticamente — no tocarlos a mano.
5. El slug debe coincidir exactamente con el UID del componente en Strapi (sin el prefijo de zona)

### Cómo funciona el registro
- `DynamicZone.astro` recibe `item.__component` de Strapi (ej: `blocks.hero`)
- Elimina el prefijo de zona (`blocks.`) usando `DYNAMIC_ZONE` del entorno
- Busca el slug resultante (`hero`) en `listComponents`
- Si no existe, emite un warning en consola y omite el bloque sin crashear

### Al terminar, mostrar siempre un resumen con:
- Nombre del archivo y descripción del layout
- Comportamiento responsive
- Tabla de props con columnas: Prop | Tipo Strapi | Descripción
  - Consultar tipos via Strapi MCP antes de generar la tabla
- Clave en Strapi: `{DYNAMIC_ZONE}.{slug-componente}`
- Ejemplo de mock data listo para copiar

## MCP Servers activos
- **Starwind MCP** → búsqueda e instalación de bloques Pro, contenido dinámico y previews
- **Strapi MCP** → llamadas a API y populate de dynamic zones

## Estructura de proyecto
- `src/components/starwind/` — librería Starwind Pro (no modificar)
- `src/components/ui/` — componentes del proyecto
- `src/lib/strapi/content-type.ts` — registro de componentes para DynamicZone
- `src/layouts/DynamicZone.astro` — renderizador de bloques de Strapi
- `src/styles/starwind.css` — único archivo de estilos
- `src/i18n/ui.ts` — traducciones y configuración de idiomas
- `src/pages/[lang]/` — routing por idioma
  - `index.astro` — home por idioma
  - `[page]/index.astro` — páginas de primer nivel
  - `[page]/[post]/index.astro` — entradas bajo cada página

## Comentarios en código
- No comentar qué hace el código, sino por qué
- Comentar decisiones no obvias, warnings o contexto que no se puede inferir

## Para más contexto
- Ver README.md para descripción general del proyecto