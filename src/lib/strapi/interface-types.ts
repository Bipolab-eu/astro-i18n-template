interface Formats {
  url: string;
  width: number;
  height: number;
}

interface MediaFormats {
  thumbnail: Formats,
  large: Formats,
  xsmall: Formats,
  small: Formats,
  medium: Formats,
  xlarge: Formats,
}

interface Media {
 alternativeText: string,
 width: number,
 height: number,
 formats: MediaFormats,
 url: string,
}

interface Button {
	label: string,
	url: string
}

export interface StoreProps {
  title: string,
  schedule: string,
  mapURL: string,
  deliveryURL: string,
  cover: Media,
}


export interface HeaderProps {
  title: string,
  subtitle: string
}

export interface NewsletterProps {
  title: string,
  subtitle: string,
  textBlock: any
}

export interface NewsletterUnsubscribeProps {
  title: string,
  subtitle: string,
  textBlock: any
}

export interface LegalProps {
  textBlock: string,
}

export interface CookiesProps {
  textBlock: string,
}

export interface DropProps {
  sku: string,
  cover: Media,
  name: string,
  price: number,
  description: any, //tipar acorde a Bloque de texto,
  availability: string,
  stores: string,
  pickup: string
}

export interface DropPackProps {
  sku: string,
  cover: Media,
  name: string,
  price: number,
  description: any, //tipar acorde a Bloque de texto,
  availability: string,
  stores: string,
  pickup: string
}

export interface StoresProps {
  stores: StoreProps[],
}

export interface DigitalProductsProps {
  sku: string,
  guid: string,
  name: String,
  price: number,
  description: any, //tipar acorde a Bloque de texto,
}

export interface TierProps {
  id: number,
  name: string,
  price: string,
  stripe_price_ID: string,
  description: string,
  features: any,
}

export interface MembershipPricingProps {
  header: HeaderProps,
  tiers: TierProps[],
}