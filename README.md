# Astro + Starwind Project Structure
This document describes the project structure and coding conventions for an Astro project using **only Starwind components and styles**. It is designed for both humans and AI assistants.

---

## Project Guidelines
- **Base**: Always build components using Starwind components.
- **Location**: Save new components in src/components/ui/.
- **Naming**: Use PascalCase, e.g., NewComponent.astro.
- **Styling**: Only use Starwind classes from starwind.css.
- **Components**: Only use components from Starwind (`src/components/starwind`). No custom components outside of Starwind.
- **CSS**: Only use `starwind.css` from Starwind. Do not add custom CSS. Follow Starwind docs for class usage.
- **Astro Version**: Follow the latest Astro documentation for project setup, layouts, and dynamic routing.
- **MCP Server**:
  - Use Starwind MCP server for dynamic content and previews.
  - Use Strapi MCP for api calls and dynamic zone population.
- **TypeScript**: Avoid `any`. Use explicit types or interfaces.

---

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