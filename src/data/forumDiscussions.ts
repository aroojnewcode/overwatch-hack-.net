import { blogPath } from './blog-paths'

export type ForumTopic = 'general' | 'guides' | 'patch' | 'community'

export type ForumSortTab = 'popular' | 'latest' | 'discussed'

export type ForumDiscussion = {
  slug: string
  topic: ForumTopic
  score: number
  comments: number
  title: string
  excerpt: string
  fromGuideTitle: string
  tag: string
  directory: string
  author: string
  discussedAt: string
}

export const FORUM_TOPICS: {
  id: ForumTopic | 'all'
  label: string
  blurb: string
}[] = [
  { id: 'all', label: 'All topics', blurb: 'Browse related Q&A' },
  { id: 'general', label: 'General', blurb: 'Browse related Q&A' },
  { id: 'guides', label: 'Guides & Builds', blurb: 'Browse related Q&A' },
  { id: 'patch', label: 'Patch Talk', blurb: 'Browse related Q&A' },
  { id: 'community', label: 'Community', blurb: 'Browse related Q&A' },
]

export const FORUM_DISCUSSIONS: ForumDiscussion[] = [
  {
    slug: 'complete-setup',
    topic: 'guides',
    score: 73,
    comments: 3,
    title: 'What does the complete Overwatch hack setup include?',
    excerpt:
      'Looking for a straight checklist before first load — Windows prep, antivirus, loader order and when to enable ESP vs Aimbot.',
    fromGuideTitle: 'Complete Overwatch Hack Setup',
    tag: 'Guide Q&A',
    directory: 'r/guides',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-10-01',
  },
  {
    slug: 'aimbot-settings',
    topic: 'guides',
    score: 58,
    comments: 2,
    title: 'Best silent aim FOV for Competitive without looking blatant?',
    excerpt:
      "Trying to keep tracking smooth on King's Row and other chokes — what FOV and smoothing are people actually running?",
    fromGuideTitle: 'Overwatch Aimbot Settings for Silent Aim',
    tag: 'Guide Q&A',
    directory: 'r/guides',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-28',
  },
  {
    slug: 'anti-cheat-status',
    topic: 'patch',
    score: 91,
    comments: 5,
    title: 'Status flipped to Updating after the last Blizzard patch — wait or refund?',
    excerpt:
      'Clear-to-load yesterday, Updating today after a small client patch. How long do rebuilds usually take?',
    fromGuideTitle: 'Overwatch anti-cheat status explained',
    tag: 'Patch talk',
    directory: 'r/patch-talk',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-26',
  },
  {
    slug: 'loader-errors',
    topic: 'community',
    score: 44,
    comments: 4,
    title: 'Loader closes instantly — Defender quarantine or overlay conflict?',
    excerpt:
      'Menu never opens, process dies in a second. Already excluded the folder once but Windows still flagged something.',
    fromGuideTitle: 'Fix Overwatch Hack Loader Errors',
    tag: 'Support thread',
    directory: 'r/community',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-24',
  },
  {
    slug: 'features-list',
    topic: 'guides',
    score: 67,
    comments: 1,
    title: 'Is radar hack included in the $35 license or extra?',
    excerpt:
      'Comparing modules before checkout — need to know if 2D radar, triggerbot and stream-proof are all in one build.',
    fromGuideTitle: 'Overwatch hack Features Checklist',
    tag: 'Guide Q&A',
    directory: 'r/guides',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-22',
  },
  {
    slug: 'esp-wallhack-guide',
    topic: 'guides',
    score: 52,
    comments: 2,
    title: 'ESP boxes vs silhouettes — which is easier to read in Quick Play?',
    excerpt:
      'Crowded fights on Busan — boxes feel noisy. Anyone defaulting to silhouettes + distance only?',
    fromGuideTitle: 'Overwatch ESP and wallhack setup',
    tag: 'Guide Q&A',
    directory: 'r/guides',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-19',
  },
  {
    slug: 'match-play-guide',
    topic: 'community',
    score: 39,
    comments: 6,
    title: 'Safer defaults for Competitive — ESP only or mild aim assist?',
    excerpt:
      'Report risk worries in ranked. Sharing configs that stay readable without rage reports.',
    fromGuideTitle: 'Safer Overwatch hack Settings for Match Plays',
    tag: 'Community',
    directory: 'r/community',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-17',
  },
  {
    slug: 'disable-antivirus',
    topic: 'general',
    score: 48,
    comments: 2,
    title: 'Defender exclusion path — whole folder or just the loader exe?',
    excerpt:
      'First-time buyer on Windows 11. Want the minimum exclusion that still stops quarantine on update.',
    fromGuideTitle: 'Antivirus Exclusions for Overwatch Hack',
    tag: 'Setup Q&A',
    directory: 'r/general',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-15',
  },
  {
    slug: 'undetected-status',
    topic: 'patch',
    score: 85,
    comments: 3,
    title: 'Difference between clear-to-load and “undetected” marketing?',
    excerpt:
      'Trying to read the status page correctly before I buy — what each label actually means after hotfixes.',
    fromGuideTitle: 'Anti-cheat status checklist',
    tag: 'Patch talk',
    directory: 'r/patch-talk',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-12',
  },
  {
    slug: 'hotkeys',
    topic: 'general',
    score: 31,
    comments: 1,
    title: 'Recommended panic key for ESP + radar without fat-fingering aimbot?',
    excerpt:
      'Want one bind to hide overlays for clips and another for full panic — what do you use?',
    fromGuideTitle: 'Overwatch Hack Hotkeys After Load',
    tag: 'Setup Q&A',
    directory: 'r/general',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-10',
  },
  {
    slug: 'radar-hack-guide',
    topic: 'guides',
    score: 36,
    comments: 2,
    title: '2D radar size on ultrawide — still readable?',
    excerpt:
      '3440×1440 setup. Default radar feels tiny; looking for scale tips that do not cover the crosshair.',
    fromGuideTitle: 'Overwatch radar hack guide',
    tag: 'Guide Q&A',
    directory: 'r/guides',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-08',
  },
  {
    slug: 'windows-setup',
    topic: 'general',
    score: 29,
    comments: 1,
    title: 'Windows 11 24H2 — any extra steps before Battle.net launch?',
    excerpt:
      'Clean install last week. Overlays and HDR off — anything else before first inject?',
    fromGuideTitle: 'Overwatch Hack on Windows 10 and 11',
    tag: 'Setup Q&A',
    directory: 'r/general',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-05',
  },
  {
    slug: 'stream-proof-setup',
    topic: 'community',
    score: 27,
    comments: 2,
    title: 'OBS stream-proof — overlays hidden on recording but visible locally?',
    excerpt:
      'Streaming Quick Play for friends. Need ESP on my screen but not on the VOD — does stream-proof cover that?',
    fromGuideTitle: 'Stream-Proof Overwatch Hack for OBS',
    tag: 'Community',
    directory: 'r/community',
    author: 'Overwatch Hack guide team',
    discussedAt: '2026-09-03',
  },
]

export function discussionPath(slug: string) {
  return blogPath(slug)
}

export function sortDiscussions(
  list: ForumDiscussion[],
  mode: ForumSortTab,
  voteDelta: Record<string, number>,
): ForumDiscussion[] {
  const items = [...list]
  if (mode === 'latest') {
    return items.sort((a, b) => b.discussedAt.localeCompare(a.discussedAt))
  }
  if (mode === 'discussed') {
    return items.sort((a, b) => b.comments - a.comments)
  }
  return items.sort(
    (a, b) => b.score + (voteDelta[b.slug] ?? 0) - (a.score + (voteDelta[a.slug] ?? 0)),
  )
}
