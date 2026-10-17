import { blogPath } from './blog-paths'

export type ModuleBullet = {
  title: string
  body: string
}

export type ProductModule = {
  id: string
  titlePrefix: string
  titleAccent: string
  intro: string
  bullets: ModuleBullet[]
  moreHref: string
  moreLabel: string
  panelLabel: string
  controls: string[]
}

export const AIMBOT_MODULE: ProductModule = {
  id: 'aimbot',
  titlePrefix: 'Aimbot for',
  titleAccent: 'Overwatch',
  intro:
    'Aimbot settings cover activation, silent aim, smoothing, hitbox selection, prediction and on-screen helpers. Each control does only what is listed here.',
  bullets: [
    {
      title: 'Enable',
      body: 'Master toggle for the aimbot. Leave it off until you want aiming behavior active.',
    },
    {
      title: 'Aim Key',
      body: 'The selected key used to activate supported aiming behavior.',
    },
    {
      title: 'Silent Aim',
      body: 'Aiming mode included with the aimbot. This page describes the toggle only — not accuracy, detection or safety claims.',
    },
    {
      title: 'Targeting Preset',
      body: 'Selects the targeting preset used by the aimbot. FOV, priority and team options live on the aimbot settings guide.',
    },
  ],
  moreHref: blogPath('aimbot-settings'),
  moreLabel: 'All aimbot controls →',
  panelLabel: 'Aimbot module',
  controls: [
    'Enable',
    'Aim Key',
    'Silent Aim',
    'Targeting Preset',
    'Smoothing',
    'Hitbox Selector',
    'Switch Delay',
    'Humanizer',
    'Prediction',
    'Y Offset',
    'Auto Miss',
    'Gradual Aim',
    'Start Delay',
    'Adaptive Speed',
    'Draw FOV',
    'Snap Line',
  ],
}

export const WORLD_VISUALS_MODULE: ProductModule = {
  id: 'world-visuals',
  titlePrefix: 'World visuals',
  titleAccent: '',
  intro:
    'World visuals cover player boxes, silhouettes, health, ultimates, hero names, distance and ability cooldown overlays for Overwatch heroes.',
  bullets: [
    {
      title: 'Hero Names',
      body: 'Shows name labels on displayed enemy heroes.',
    },
    {
      title: 'Distance',
      body: 'Shows distance to the displayed hero.',
    },
    {
      title: 'Health Bar',
      body: 'Shows a health bar on displayed heroes.',
    },
    {
      title: 'Ultimate Bar',
      body: 'Shows ultimate charge on displayed heroes when supported.',
    },
  ],
  moreHref: blogPath('esp-wallhack-guide'),
  moreLabel: 'All world visuals controls →',
  panelLabel: 'World visuals module',
  controls: [
    'Hero Names',
    'Distance',
    'Health Bar',
    'Ultimate Bar',
    'Ability Cooldown ESP',
    'ESP Box',
    'Silhouette ESP',
    'Glow',
    'Tracer Lines',
    'Out-of-FOV Arrows',
    'Objective ESP',
    'Enemy Overlay',
  ],
}
