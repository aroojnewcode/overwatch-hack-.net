import { OVERWATCH_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://overwatchhack.net'
export const SITE_NAME = 'Overwatch Hack'
export const SITE_HOST = 'overwatchhack.net'
/** Visible domain + legal branding (always apex, no www). */
export const SITE_DOMAIN = 'overwatchhack.net'
export const SITE_BRAND_LINE = `${SITE_NAME} · ${SITE_DOMAIN}`
export const PRODUCT_PATH = '/overwatch-hack'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Overwatch hack for PC (worldwide).
 * Canonical host is apex https://overwatchhack.net (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Overwatch Hack on overwatchhack.net — buy an Overwatch hack for Windows PC with silent-aim Aimbot, player ESP, wallhack, radar and live anti-cheat status with instant digital delivery.'

export const SITE_ABOUT = [
  'overwatch hack',
  'overwatch hacks',
  'overwatch hack',
  'overwatch cheats',
  'overwatch aimbot',
  'overwatch esp',
  'overwatch wallhack',
  'overwatch radar',
  'overwatch aimbot',
  'overwatchhack.net',
] as const

/** Meta keywords for search engines (overwatch hack, overwatch cheat, Overwatch hacks). */
export const SITE_META_KEYWORDS = [
  ...new Set([
    ...SITE_ABOUT,
    'overwatch hacks',
    'overwatch cheat',
    'overwatch cheats',
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
    title: 'Overwatch Hack | Overwatch Aimbot, ESP & Wallhack',
    description:
      'Overwatch cheats for Windows 10/11 — Overwatch hack with Aimbot, ESP, wallhack and radar from $35. Check live anti-cheat status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Overwatch Hack — Overwatch Aimbot, ESP and radar for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Overwatch Hack Community Forum | Setup Q&A & Patch Talk',
    description:
      'Overwatch Hack community forum — setup questions, guide-based Q&A, patch-day status threads and safer Competitive settings from overwatchhack.net.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Overwatch Hack community forum for setup and patch discussions',
    robots: INDEX_ROBOTS,
  },
  blog: {
    title: 'Overwatch Hack Blogs | Setup, ESP & Aimbot Guides',
    description:
      'Overwatch hack blogs — silent aim, player ESP, radar, antivirus exclusions, menu setup and anti-cheat status before you buy.',
    path: '/blog',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Overwatch Hack setup guides for Aimbot, ESP and anti-cheat status',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Overwatch Hack Reviews | Buyer Feedback on Overwatch',
    description:
      'Read Overwatch hack reviews covering silent aim, player ESP and anti-cheat rebuilds before you buy an Overwatch license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Overwatch Hack buyer reviews for Overwatch',
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
    imageAlt: 'Overwatch Aimbot, ESP and radar product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Overwatch Hack — Overwatch Aimbot, ESP & Wallhack',
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
