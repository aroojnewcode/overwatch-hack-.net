import { OVERWATCH_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://overwatchhack.net'
export const SITE_NAME = 'Overwatch Hack'
export const SITE_HOST = 'overwatchhack.net'
export const PRODUCT_PATH = '/overwatch-hack'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Overwatch 2 hack for PC (worldwide).
 * Canonical host is apex https://overwatchhack.net (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy an Overwatch 2 hack for Windows PC — silent-aim Aimbot, player ESP, wallhack, radar and live anti-cheat status with instant digital delivery.'

export const SITE_ABOUT = [
  'overwatch hack',
  'overwatch hacks',
  'overwatch 2 hack',
  'overwatch cheats',
  'overwatch aimbot',
  'overwatch esp',
  'overwatch wallhack',
  'overwatch radar',
  'overwatch 2 aimbot',
  'overwatchhack.net',
] as const

/** Meta keywords for search engines (overwatch hack, overwatch cheat, Overwatch 2 hacks). */
export const SITE_META_KEYWORDS = [
  ...new Set([
    ...SITE_ABOUT,
    'overwatch 2 hacks',
    'overwatch 2 cheat',
    'overwatch 2 cheats',
    'overwatch cheat menu',
    'anti-cheat status overwatch',
  ]),
].join(', ')

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = OVERWATCH_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Overwatch Hack | Overwatch 2 Aimbot, ESP & Wallhack',
    description:
      'Overwatch 2 cheats for Windows 10/11 — Overwatch hack with Aimbot, ESP, wallhack and radar from $35. Check live anti-cheat status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Overwatch Hack — Overwatch 2 Aimbot, ESP and radar for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Overwatch Hack Guides | Aimbot, ESP, Radar & Anti-cheat Status',
    description:
      'Overwatch hack guides — silent aim, player ESP, radar, antivirus exclusions, menu setup and anti-cheat status articles before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Overwatch Hack setup guides for Aimbot, ESP and anti-cheat status',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Overwatch Hack Reviews | Buyer Feedback on Overwatch 2',
    description:
      'Read Overwatch hack reviews covering silent aim, player ESP and anti-cheat rebuilds before you buy an Overwatch 2 license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Overwatch Hack buyer reviews for Overwatch 2',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Overwatch Hack FAQ | Price, Anti-cheat Status & Setup',
    description:
      'FAQ for buying an Overwatch hack on Windows PC — price, Aimbot and ESP features, anti-cheat status, Quick Play and Competitive, setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Overwatch Hack FAQ — price, anti-cheat status and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Overwatch Hack Support | Menu, Delivery & Setup Help',
    description:
      'Get help buying and opening the Overwatch hack — delivery email, Windows setup, antivirus exclusions, menu errors and anti-cheat status updates.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Overwatch Hack support for menu and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Overwatch Hack Price & Checkout | Aimbot, ESP, Radar',
    description:
      'Overwatch hack price and checkout — silent aim Aimbot, player ESP, wallhack, radar and live anti-cheat status from $35.',
    path: PRODUCT_PATH,
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Overwatch 2 Aimbot, ESP and radar product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Overwatch Hack — Overwatch 2 Aimbot, ESP & Wallhack',
  h2Features: 'Overwatch Aimbot, ESP, wallhack & radar',
  h2Featured: 'Overwatch ESP and silent aim Aimbot',
  h2About: 'Check anti-cheat status before you buy an Overwatch hack',
  h2Access: 'Buy Overwatch Hack',
  h2Faq: 'Overwatch Hack FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
