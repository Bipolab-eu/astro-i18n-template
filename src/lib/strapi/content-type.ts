// Registro único por componente: componente + query de Strapi (fields, populate, etc.)
// Al añadir un nuevo bloque solo hay que tocar este objeto
const registry: Record<string, { component: any; query: any }> = {
  // 'strapi-component': { component: YourComponent, query: { fields: ['title'], populate: { cover: true } } },
  // ...
};

const DZ = import.meta.env.DYNAMIC_ZONE

// Derivados del registro — no tocar
export const listComponents = Object.fromEntries(
  Object.entries(registry).map(([slug, { component }]) => [slug, component])
);

export const populate = {
  [DZ]: {
    on: Object.fromEntries(
      Object.entries(registry).map(([slug, { query }]) => [`${DZ}.${slug}`, query])
    ),
  },
  seo: {
    populate: {
      openGraph: { populate: 'ogImage' },
    },
  },
};
