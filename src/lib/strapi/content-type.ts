
const dinamicZoneName = import.meta.env.DYNAMIC_ZONE

// Esto popula zonas dinamicas de strapi, como los bloques de secciones, o el open graph de SEO.
export const populate = {
  [dinamicZoneName]: {
    on: {
      [`${dinamicZoneName}.your-component`]: {
        populate: true
      },
      // ...
    }
  },
  seo: {
    populate: {
      'openGraph': {
        populate: 'ogImage'
      },
    }
  }
}

// Crea la lista de componentes necesarios para renderizar en la Dynamic Zone
export const listComponents: Record<string, any> = {
 // [`${dinamicZoneName}.your-component`]: YourComponentImported,
 // ...
};