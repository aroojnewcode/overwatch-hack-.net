import type { LucideIcon } from 'lucide-react'
import { Box, Crosshair, Eye, Play } from 'lucide-react'
import {
  OVERWATCH_HOME_VIDEO,
  OVERWATCH_SHOT_ESP_AIMBOT,
  OVERWATCH_SHOT_ESP_STREET,
  OVERWATCH_SHOT_WALLHACK,
} from './media'

export type FeaturePreviewSlideId = 'match' | 'combat' | 'push' | 'video'

export type FeaturePreviewSlide = {
  id: FeaturePreviewSlideId
  tabLabel: string
  badge: string
  icon: LucideIcon
  liveTitle: string
  liveSubtitle: string
  bullets: readonly string[]
  kind: 'image' | 'video'
  image?: string
  imageAlt?: string
}

export const FEATURE_PREVIEW_SLIDES: readonly FeaturePreviewSlide[] = [
  {
    id: 'match',
    tabLabel: 'Match',
    badge: 'Match',
    icon: Eye,
    kind: 'image',
    image: OVERWATCH_SHOT_WALLHACK,
    imageAlt:
      'Overwatch wallhack screenshot with enemy silhouette visible through an interior wall',
    liveTitle: 'Wallhack and FOV in a match',
    liveSubtitle: 'Wallhack · FOV',
    bullets: ['Wallhack', 'Aimbot FOV', 'Player ESP'],
  },
  {
    id: 'combat',
    tabLabel: 'Combat',
    badge: 'Combat',
    icon: Crosshair,
    kind: 'image',
    image: OVERWATCH_SHOT_ESP_AIMBOT,
    imageAlt: 'Overwatch aimbot screenshot with FOV ring and enemy target markers',
    liveTitle: 'Silent aim and combat overlays',
    liveSubtitle: 'Aimbot · FOV',
    bullets: ['Silent aim', 'Aimbot FOV', 'Target highlights'],
  },
  {
    id: 'push',
    tabLabel: 'Push',
    badge: 'Push',
    icon: Box,
    kind: 'image',
    image: OVERWATCH_SHOT_ESP_STREET,
    imageAlt: 'Overwatch ESP screenshot with silhouettes and distance through doorways',
    liveTitle: 'ESP on a map push',
    liveSubtitle: 'ESP · Distance',
    bullets: ['Player ESP', 'Distance tags', 'Radar awareness'],
  },
  {
    id: 'video',
    tabLabel: 'Video',
    badge: 'Video',
    icon: Play,
    kind: 'video',
    liveTitle: 'Gameplay loop preview',
    liveSubtitle: 'Video · ESP',
    bullets: ['Hero ESP', 'Wallhack boxes', 'Match flow'],
  },
] as const

export const FEATURE_PREVIEW_INTRO =
  'Preview artwork for aimbot, ESP, hero information and radar. These are layout previews, not a promise about match outcome.'

export const FEATURE_PREVIEW_VIDEO = OVERWATCH_HOME_VIDEO
