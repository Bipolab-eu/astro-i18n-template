import Header from "../../components/Blocks/Header.astro";
import Hero from "../../components/Blocks/Hero.astro";
import Newsletter from "../../components/Blocks/Newsletter.astro";
import Unsubscribe from "../../components/Blocks/Unsubscribe.astro";

const dinamicZoneName = import.meta.env.DYNAMIC_ZONE

export const populate = {
  // Esto popula zonas dinamicas de strapi, como los bloques de secciones, o el open graph de SEO.
  [dinamicZoneName]: {
    on: {
      [`${dinamicZoneName}.newsletter`]: {
        populate: true
      },
      [`${dinamicZoneName}.unsubscribe`]: {
        populate: true
      },
      [`${dinamicZoneName}.hero`]: {
        populate: {
          cover: true,
          actions: true
        }
      },
      [`${dinamicZoneName}.header`]: true,
      [`${dinamicZoneName}.drop-packs`]: {
        populate: {
          cover: true,
        }
      },
      [`${dinamicZoneName}.digital-product`]: {
        populate: true
      },
      [`${dinamicZoneName}.legal`]: true,
      [`${dinamicZoneName}.cookies`]: true,
      [`${dinamicZoneName}.stores`]: {
        populate: {
          stores: {
            populate: 'cover'
          }
        }
      },
      [`${dinamicZoneName}.mermbership-pricing`]: {
        populate: {
          header: true,
          tiers: true
        }
      },
      // populate more components
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

export const listComponents: Record<string, any> = {
  // Crea la lista de componentes necesarios para renderizar en la Dynamic Zone
 [`${dinamicZoneName}.newsletter`]: Newsletter,
 [`${dinamicZoneName}.unsubscribe`]: Unsubscribe,
 [`${dinamicZoneName}.hero`]: Hero,
 [`${dinamicZoneName}.header`]: Header,
 /* [`${dinamicZoneName}.drop-packs`]: DropPacks,
 [`${dinamicZoneName}.digital-product`]: DigitalProduct,
 [`${dinamicZoneName}.legal`]: Legal,
 [`${dinamicZoneName}.cookies`]: Cookies,
 [`${dinamicZoneName}.stores`]: Stores,
 [`${dinamicZoneName}.mermbership-pricing`]: MembershipPricing, */
 // add more components
};