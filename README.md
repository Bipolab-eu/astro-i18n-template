# Astro + Starwind Project Structure
Web project built with Astro, Starwind UI and Strapi as CMS.

## Requirements
- Node.js 18+
- Access to a Strapi instance

## Getting started
npm install
npm run dev

## Arquitectura
Los componentes de UI se renderizan a través de `DynamicZone`, 
que resuelve bloques de contenido de Strapi automáticamente.
Ver `CLAUDE.md` para el flujo de registro de componentes.

## Project Structure
```text
/
├── public/                  # Static assets served directly (favicon, images, etc.)
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── assets/              # Images, logos, icons, fonts, etc.
│   │   └── your-logo.svg
│   ├── components/          # Reusable UI components
│   │   ├── starwind/        # Components from the Starwind library
│   │   └── ui/              # Custom UI components created for your project
│   ├── i18n/                # Internationalization files
│   │   └── ui.ts
│   ├── layouts/             # Page layouts and wrappers
│   │   ├── Layout.astro
│   │   ├── StackedLayout.astro
│   │   └── DynamicZone.astro
│   ├── lib/                 # Project libraries and utilities
│   │   ├── strapi/          # Strapi API helpers
│   │   │   ├── content-type.ts
│   │   │   ├── fetchApi.ts
│   │   │   └── fetchNavigation.ts
│   │   └── utils/           # Helper functions
│   │       └── starwind/
│   │           └── positioning.ts
│   ├── pages/               # Astro pages, using dynamic routing
│   │   ├── [lang]/          # Language-specific pages
│   │   │   ├── index.astro  # Home page per language
│   │   │   └── [page]/      # Top-level pages
│   │   │       └── index.astro
│   │   │       └── [post]/  # Post entries under each page
│   │   │           └── index.astro
│   │   ├── 404.astro        # Custom 404 page
│   │   └── index.astro      # Default homepage
│   └── styles/              # Global CSS and Starwind styles
│       └── starwind.css
└── package.json             # Project metadata and dependencies
```