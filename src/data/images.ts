import {
  OVERWATCH_HERO,
  OVERWATCH_PRODUCT_COVER,
  OVERWATCH_MENU,
  OVERWATCH_SHOT_WALLHACK,
  OVERWATCH_SHOT_ESP_STREET,
  OVERWATCH_SHOT_ESP_AIMBOT,
} from './media'
import { OVERWATCH_OG, getOgImageForPath, PAGE_OG } from './og'

export { OVERWATCH_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const OVERWATCH_PRODUCT_HERO = OVERWATCH_PRODUCT_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  overwatch: {
    alt: 'Overwatch 2 cheat gameplay with cyan enemy ESP silhouettes visible through walls',
    title: 'Overwatch hack ESP product screenshot',
    caption: 'Product artwork showing teal wallhack ESP through interior walls on a payload map.',
    heroAlt:
      'Overwatch 2 buy card — first-person Orisa gameplay with cyan enemy ESP outlines through walls on Circuit Royal payload',
    heroTitle: 'Buy Overwatch Hack — cyan ESP wallhack screenshot',
    heroCaption: 'Checkout card art with teal enemy silhouettes visible through solid cover.',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: OVERWATCH_SHOT_WALLHACK,
    og: PAGE_OG.home,
    alt: 'Overwatch 2 wallhack screenshot with yellow enemy silhouette visible through an interior wall',
    title: 'Overwatch wallhack through walls',
    caption: 'Wallhack ESP showing an enemy hero outline through solid cover.',
  },
  forums: {
    src: OVERWATCH_SHOT_ESP_STREET,
    og: PAGE_OG.forums,
    alt: 'Overwatch 2 ESP screenshot with cyan enemy silhouettes and distance markers through doorways',
    title: 'Overwatch ESP silhouettes',
    caption: 'Player ESP with colored outlines and distance tags through the map.',
  },
  reviews: {
    src: OVERWATCH_SHOT_ESP_AIMBOT,
    og: PAGE_OG.reviews,
    alt: 'Overwatch 2 aimbot screenshot with FOV ring and enemy target markers on Mercy gameplay',
    title: 'Overwatch aimbot FOV overlay',
    caption: 'Aim assist FOV ring and target highlights during a night map push.',
  },
  faq: {
    src: OVERWATCH_MENU,
    og: PAGE_OG.faq,
    alt: 'Overwatch 2 ESP screenshot with cyan enemy silhouettes and distance markers through doorways',
    title: 'Overwatch ESP silhouettes',
    caption: 'Player ESP with colored outlines and distance tags through the map.',
  },
  support: {
    src: OVERWATCH_HERO,
    og: PAGE_OG.support,
    alt: 'Overwatch 2 wallhack screenshot with yellow enemy silhouette visible through an interior wall',
    title: 'Overwatch wallhack through walls',
    caption: 'Wallhack ESP showing an enemy hero outline through solid cover.',
  },
  product: {
    src: OVERWATCH_PRODUCT_COVER,
    og: PAGE_OG.product,
    alt:
      'Overwatch 2 product screenshot — cyan ESP wallhack with enemy silhouettes through walls during payload defense',
    title: 'Overwatch Hack buy card — cyan ESP gameplay',
    caption: 'Product image with teal enemy outlines visible through cover on a payload map.',
  },
}

export function getGameImage(_slug: string): string {
  return OVERWATCH_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return OVERWATCH_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
