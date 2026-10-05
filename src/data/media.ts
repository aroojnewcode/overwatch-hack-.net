export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** One gameplay screenshot per slot. Each keeps its own alt text. */
export const OVERWATCH_SHOT_WALLHACK = '/media/overwatch-wallhack-players.png'
export const OVERWATCH_SHOT_ESP_STREET = '/media/overwatch-esp-street.png'
export const OVERWATCH_SHOT_RADAR = '/media/overwatch-radar-esp.png'
export const OVERWATCH_SHOT_ESP_AIMBOT = '/media/overwatch-esp-aimbot.png'
export const OVERWATCH_PRODUCT_COVER = '/media/overwatch-product-cover.png'

export const OVERWATCH_HERO = OVERWATCH_SHOT_WALLHACK
export const OVERWATCH_SOLDIER = OVERWATCH_SHOT_WALLHACK
export const OVERWATCH_COVER = OVERWATCH_PRODUCT_COVER
export const OVERWATCH_BOX = OVERWATCH_SHOT_ESP_AIMBOT
export const OVERWATCH_ESP = OVERWATCH_SHOT_ESP_AIMBOT
export const OVERWATCH_MENU = OVERWATCH_SHOT_ESP_STREET
export const OVERWATCH_GAMEPLAY = OVERWATCH_SHOT_ESP_STREET
export const OVERWATCH_HOME_ART = OVERWATCH_SHOT_WALLHACK
export const OVERWATCH_CONTROL = OVERWATCH_SHOT_ESP_STREET
export const OVERWATCH_TACTICAL = OVERWATCH_SHOT_RADAR
export const OVERWATCH_VIDEO_THUMB = OVERWATCH_SHOT_ESP_AIMBOT

export const OVERWATCH_HOME_VIDEO = {
  id: 'overwatch-product-loop',
  src: '/videos/overwatch-product-loop.mp4',
  poster: '/media/overwatch-product-poster.jpg',
  title: 'Overwatch feature preview — ESP and aim assist gameplay',
  caption:
    "Overwatch 2 feature preview — ESP, wallhack boxes and hero tracking through cover (middle gameplay loop).",
} as const

const SHOT_WALLHACK: SeoMediaItem = {
  image: OVERWATCH_SHOT_WALLHACK,
  alt: 'Overwatch 2 wallhack screenshot with yellow enemy silhouette visible through an interior wall',
  title: 'Overwatch wallhack through walls',
  caption: 'Wallhack ESP showing an enemy hero outline through solid cover.',
}

const SHOT_ESP_STREET: SeoMediaItem = {
  image: OVERWATCH_SHOT_ESP_STREET,
  alt: 'Overwatch 2 ESP screenshot with cyan enemy silhouettes and distance markers through doorways',
  title: 'Overwatch ESP silhouettes',
  caption: 'Player ESP with colored outlines and distance tags through the map.',
}

const SHOT_RADAR: SeoMediaItem = {
  image: OVERWATCH_SHOT_RADAR,
  alt: 'Overwatch 2 ESP screenshot with cyan enemy outlines and DEFEND markers through interior walls',
  title: 'Overwatch ESP and objective markers',
  caption: 'ESP overlays with enemy positions and objective tags through cover.',
}

const SHOT_ESP_AIMBOT: SeoMediaItem = {
  image: OVERWATCH_SHOT_ESP_AIMBOT,
  alt: 'Overwatch 2 aimbot screenshot with FOV ring and enemy target markers on Mercy gameplay',
  title: 'Overwatch aimbot FOV overlay',
  caption: 'Aim assist FOV ring and target highlights during a night map push.',
}

export const PAGE_MEDIA = {
  home: SHOT_WALLHACK,
  product: {
    ...SHOT_RADAR,
    video: OVERWATCH_HOME_VIDEO.src,
    videoTitle: OVERWATCH_HOME_VIDEO.title,
    videoDescription: OVERWATCH_HOME_VIDEO.caption,
  },
  forums: SHOT_ESP_STREET,
  reviews: SHOT_ESP_AIMBOT,
  faq: SHOT_ESP_STREET,
  support: SHOT_ESP_STREET,
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': SHOT_WALLHACK,
  hotkeys: SHOT_ESP_STREET,
  'complete-setup': SHOT_ESP_STREET,
  'disable-antivirus': SHOT_ESP_STREET,
  'undetected-status': SHOT_RADAR,
  'aimbot-settings': SHOT_WALLHACK,
  'esp-wallhack-guide': SHOT_ESP_AIMBOT,
  'radar-hack-guide': SHOT_RADAR,
  'stream-proof-setup': SHOT_ESP_AIMBOT,
  'anti-cheat-status': SHOT_RADAR,
  'windows-setup': SHOT_ESP_STREET,
  'match-play-guide': SHOT_RADAR,
  'loader-errors': SHOT_ESP_STREET,
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}