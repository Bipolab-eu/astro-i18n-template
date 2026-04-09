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

## Adding New Components to DynamicZone

Every new UI component (`src/components/ui/`) must be registered in the DynamicZone flow so Strapi can resolve it automatically.

### Steps

**1. Create the component**
Save it in `src/components/ui/MyComponent.astro` with typed props:
```typescript
interface Props {
  title: string;
  // ...
}
```

**2. Register it in `src/lib/strapi/content-type.ts`**

Add the import and register it in both `populate` and `listComponents`:

```typescript
import MyComponent from "@/components/ui/MyComponent.astro";

export const populate = {
  [dinamicZoneName]: {
    on: {
      [`${dinamicZoneName}.my-component`]: { populate: true },
    }
  }
}

export const listComponents = {
  [`${dinamicZoneName}.my-component`]: MyComponent,
}
```

The key format is `{DYNAMIC_ZONE}.{component-slug}` — must match the Strapi component UID.

**3. Mock data format (for testing without Strapi)**

In the page, add a block with `__component` matching the registered key:

```typescript
const blocks = [
  {
    __component: "sections.my-component",
    title: "Mock title",
    // ...rest of props
  }
]
```

Then pass it to `<DynamicZone blocks={blocks} />`.

### Rules
- Never render a component directly in a page if it belongs to content managed by Strapi — always go through `DynamicZone`.
- The `__component` value in mock data must exactly match the key in `listComponents`.
- Avoid `any` in component props — define an explicit `interface Props`.

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