# CLAUDE.md — Astro + Starwind Project

## Stack
- Astro (latest) + Starwind UI
- Strapi como CMS (via MCP)
- TypeScript estricto

## Reglas absolutas
- Componentes SOLO de Starwind (`src/components/starwind/`). Nunca crear componentes custom fuera de `src/components/ui/`.
- Estilos SOLO con clases de `starwind.css`. Sin CSS custom, sin estilos inline.
- TypeScript: nunca usar `any`. Siempre interfaces o tipos explícitos.
- Todo componente de contenido va a través de `<DynamicZone>`, nunca directo en una página.

## CMS
- Strapi es el CMS del proyecto, aunque puede no estar activo en local
- Para desarrollo sin Strapi, usar mock data con `__component` en las páginas
- Cuando Strapi esté disponible, usar Strapi MCP para las llamadas a la API
- Nunca sustituir Strapi por otra solución sin consultar

## Comandos
- `npm run dev` — servidor local
- `npm run build` — build de producción

## Crear un nuevo componente UI
1. Guardar en `src/components/ui/MiComponente.astro` (PascalCase)
2. Definir `interface Props` con tipos explícitos
3. Registrar en `src/lib/strapi/content-type.ts`:
   - Añadir en `populate` bajo la dynamic zone correspondiente
   - Añadir en `listComponents` con clave `{zona}.{slug-componente}`
4. La clave debe coincidir exactamente con el UID del componente en Strapi

## MCP Servers activos
- **Starwind MCP** → contenido dinámico y previews
- **Strapi MCP** → llamadas a API y populate de dynamic zones

## Estructura de proyecto
- `src/components/starwind/` — librería Starwind (no modificar)
- `src/components/ui/` — componentes del proyecto
- `src/lib/strapi/content-type.ts` — registro de componentes para DynamicZone
- `src/layouts/DynamicZone.astro` — renderizador de bloques de Strapi
- `src/styles/starwind.css` — único archivo de estilos
- `src/pages/[lang]/` — routing por idioma
  - `index.astro` — home por idioma
  - `[page]/index.astro` — páginas de primer nivel
  - `[page]/[post]/index.astro` — entradas bajo cada página

## Para más contexto
- Ver README.md para descripción general del proyecto
