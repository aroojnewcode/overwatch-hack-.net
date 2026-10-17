/** Hero / poster art used only where gameplay shots are not needed. */
export const OVERWATCH_HERO_POSTER = '/media/overwatch-hero-poster.jpg'
export const OVERWATCH_PRODUCT_POSTER = '/media/overwatch-product-poster.jpg'

const SHOT_WALLHACK = '/media/overwatch-wallhack-players.png'
const SHOT_ESP_STREET = '/media/overwatch-esp-street.png'
const SHOT_RADAR = '/media/overwatch-radar-esp.png'
const SHOT_ESP_AIMBOT = '/media/overwatch-esp-aimbot.png'
const SHOT_PRODUCT_COVER = '/media/overwatch-product-cover.png'

/**
 * One stable cover per guide — shared on /blog cards and article pages.
 * Each asset appears on at most two articles.
 */
export const BLOG_COVER_BY_SLUG: Record<string, string> = {
  'loader-errors': SHOT_ESP_STREET,
  'disable-antivirus': SHOT_ESP_STREET,
  'match-play-guide': SHOT_RADAR,
  'radar-hack-guide': SHOT_RADAR,
  'undetected-status': SHOT_WALLHACK,
  'esp-wallhack-guide': SHOT_WALLHACK,
  'complete-setup': SHOT_ESP_AIMBOT,
  hotkeys: SHOT_ESP_AIMBOT,
  'windows-setup': OVERWATCH_HERO_POSTER,
  'anti-cheat-status': OVERWATCH_HERO_POSTER,
  'features-list': SHOT_PRODUCT_COVER,
  'aimbot-settings': SHOT_PRODUCT_COVER,
  'stream-proof-setup': OVERWATCH_PRODUCT_POSTER,
}

export function getBlogCoverForSlug(slug: string): string {
  return BLOG_COVER_BY_SLUG[slug] ?? SHOT_WALLHACK
}
