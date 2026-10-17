export type ForumReply = {
  author: string
  postedAt: string
  body: string
}

/** Community replies per guide thread — counts match forum discussion cards. */
export const FORUM_REPLIES_BY_SLUG: Record<string, ForumReply[]> = {
  'complete-setup': [
    {
      author: 'OW_Player_42',
      postedAt: '2026-09-30',
      body: 'The checklist helped — exclusions first, then loader, then ESP only on first run. Worked on Win11.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-30',
      body: 'Save a minimal config after the first clean load. Re-check anti-cheat status before every patch week.',
    },
    {
      author: 'MercyMain_NA',
      postedAt: '2026-10-01',
      body: 'Delivery email had the menu key — took about 8 minutes after checkout.',
    },
  ],
  'aimbot-settings': [
    {
      author: 'RankedGrind',
      postedAt: '2026-09-27',
      body: 'Running FOV 12–15 with high smoothing in Competitive. No snap reports in ~40 hours.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-28',
      body: 'Chest hitbox + visible-check on is the default we suggest for Quick Play and Competitive.',
    },
  ],
  'anti-cheat-status': [
    {
      author: 'PatchWatcher',
      postedAt: '2026-09-24',
      body: 'Status went Updating for ~36h after the Tuesday client patch, then clear again.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-25',
      body: 'Do not load while Updating — wait for the site label to flip clear-to-load.',
    },
    {
      author: 'EU_QPing',
      postedAt: '2026-09-25',
      body: 'Refund window is in the policy if it stays Updating past the posted window.',
    },
    {
      author: 'TankDiff',
      postedAt: '2026-09-26',
      body: 'Bookmark the status page; Discord rumors are usually wrong vs the live label.',
    },
    {
      author: 'OW_Support_fan',
      postedAt: '2026-09-26',
      body: 'Support replied with order ID when I asked — status matched the site.',
    },
  ],
  'loader-errors': [
    {
      author: 'FreshInstall',
      postedAt: '2026-09-23',
      body: 'Defender had quarantined the loader — restore + folder exclusion fixed instant close.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-23',
      body: 'Close Discord overlay and GeForce overlay, reboot once, then single clean inject attempt.',
    },
    {
      author: 'NightOwl',
      postedAt: '2026-09-24',
      body: 'Running as admin was required on my laptop; menu opened after that.',
    },
    {
      author: 'LoaderHelp',
      postedAt: '2026-09-24',
      body: 'Confirmed status was clear first — was Updating and that looked like a loader fail.',
    },
  ],
  'features-list': [
    {
      author: 'CompareBeforeBuy',
      postedAt: '2026-09-21',
      body: 'Radar and stream-proof were both in my build at $35 — matched the checklist on the product page.',
    },
  ],
  'esp-wallhack-guide': [
    {
      author: 'VisualsFirst',
      postedAt: '2026-09-18',
      body: 'Silhouettes + distance only reads cleaner than full boxes in team fights.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-19',
      body: 'Ultimate ESP depends on the current build — confirm on features list before you enable everything.',
    },
  ],
  'match-play-guide': [
    {
      author: 'LowProfile',
      postedAt: '2026-09-15',
      body: 'ESP + radar only in ranked; aim assist off unless we are down a player.',
    },
    {
      author: 'CoachMode',
      postedAt: '2026-09-16',
      body: 'Mild silent aim with wide smoothing still feels like tracking, not locking.',
    },
    {
      author: 'ReportAware',
      postedAt: '2026-09-16',
      body: 'Playoffs week I turned aimbot off entirely — ESP was enough for info.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-17',
      body: 'Save separate configs for Quick Play vs Competitive and swap in the menu between queues.',
    },
    {
      author: 'FlexDPS',
      postedAt: '2026-09-17',
      body: 'Radar saved me from flankers on Midtown twice — worth more than max FOV for me.',
    },
    {
      author: 'NewBuyer_09',
      postedAt: '2026-09-17',
      body: 'This thread convinced me to start ESP-first. Bought after reading status was clear.',
    },
  ],
  'disable-antivirus': [
    {
      author: 'Win11Home',
      postedAt: '2026-09-17',
      body: 'Excluded the whole delivery folder, not just the exe — updates stopped getting nuked.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-18',
      body: 'If AV already quarantined, restore from protection history before adding the exclusion.',
    },
  ],
  'undetected-status': [
    {
      author: 'LabelReader',
      postedAt: '2026-09-11',
      body: 'Clear-to-load means tested for the current patch — not a lifetime guarantee.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-12',
      body: 'Undetected in marketing ≠ ignore reports. Play like a human; admin bans are separate.',
    },
    {
      author: 'CautiousOW',
      postedAt: '2026-09-12',
      body: 'I only load when the checklist thread and site both say clear.',
    },
  ],
  hotkeys: [
    {
      author: 'BindSaver',
      postedAt: '2026-09-11',
      body: 'Panic on F10, menu on Insert — kept the rest on defaults from delivery notes.',
    },
  ],
  'radar-hack-guide': [
    {
      author: 'UltraWideOW',
      postedAt: '2026-09-09',
      body: 'Scaled radar to 1.2 in menu — readable on 3440 without covering crosshair.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-10',
      body: 'Pair radar with ESP; radar for macro rotates, ESP for the fight you are taking.',
    },
  ],
  'windows-setup': [
    {
      author: 'CleanPC',
      postedAt: '2026-09-05',
      body: 'Disabled Xbox Game Bar overlay + HDR — Battle.net launch was stable after that.',
    },
  ],
  'stream-proof-setup': [
    {
      author: 'StreamSmall',
      postedAt: '2026-09-02',
      body: 'Private OBS test — overlays visible to me, absent on the recording. Good for clips.',
    },
    {
      author: 'guide team',
      postedAt: '2026-09-03',
      body: 'Enable stream-proof before starting OBS each session; some capture tools need a restart.',
    },
  ],
}

export function getForumReplies(slug: string): ForumReply[] {
  return FORUM_REPLIES_BY_SLUG[slug] ?? []
}
