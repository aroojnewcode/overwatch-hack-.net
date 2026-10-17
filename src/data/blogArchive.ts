import type { LucideIcon } from 'lucide-react'
import { BookOpen, LifeBuoy, RefreshCw, Sparkles, Wrench } from 'lucide-react'
import type { BlogPost } from './blogs'
import { getBlogCoverForSlug } from './blogCovers'

export type BlogFilterCategory =
  | 'all'
  | 'features'
  | 'guides'
  | 'setup'
  | 'updates'
  | 'troubleshooting'

export const BLOG_FILTER_TABS: {
  id: BlogFilterCategory
  label: string
  icon?: LucideIcon
}[] = [
  { id: 'all', label: 'All blogs' },
  { id: 'features', label: 'Features', icon: Sparkles },
  { id: 'guides', label: 'Guides', icon: BookOpen },
  { id: 'setup', label: 'Setup', icon: Wrench },
  { id: 'updates', label: 'Updates', icon: RefreshCw },
  { id: 'troubleshooting', label: 'Troubleshooting', icon: LifeBuoy },
]

/** Per-article archive metadata (category, sort date for “Newest first”). */
const ARCHIVE_BY_SLUG: Record<
  string,
  { category: Exclude<BlogFilterCategory, 'all'>; sortDate: string }
> = {
  'loader-errors': { category: 'troubleshooting', sortDate: '2026-10-01' },
  'match-play-guide': { category: 'guides', sortDate: '2026-09-28' },
  'undetected-status': { category: 'updates', sortDate: '2026-09-25' },
  'anti-cheat-status': { category: 'updates', sortDate: '2026-09-22' },
  'stream-proof-setup': { category: 'setup', sortDate: '2026-09-20' },
  'disable-antivirus': { category: 'setup', sortDate: '2026-09-18' },
  'windows-setup': { category: 'setup', sortDate: '2026-09-16' },
  'complete-setup': { category: 'setup', sortDate: '2026-09-14' },
  hotkeys: { category: 'guides', sortDate: '2026-09-12' },
  'radar-hack-guide': { category: 'guides', sortDate: '2026-09-10' },
  'esp-wallhack-guide': { category: 'guides', sortDate: '2026-09-08' },
  'aimbot-settings': { category: 'guides', sortDate: '2026-09-05' },
  'features-list': { category: 'features', sortDate: '2026-09-03' },
}

const CATEGORY_LABEL: Record<Exclude<BlogFilterCategory, 'all'>, string> = {
  features: 'Features',
  guides: 'Guides',
  setup: 'Setup',
  updates: 'Updates',
  troubleshooting: 'Troubleshooting',
}

const CATEGORY_ICON: Record<Exclude<BlogFilterCategory, 'all'>, LucideIcon> = {
  features: Sparkles,
  guides: BookOpen,
  setup: Wrench,
  updates: RefreshCw,
  troubleshooting: LifeBuoy,
}

export function getBlogArchiveCategory(post: BlogPost): Exclude<BlogFilterCategory, 'all'> {
  return ARCHIVE_BY_SLUG[post.slug]?.category ?? 'guides'
}

export function getBlogArchiveCategoryLabel(post: BlogPost): string {
  return CATEGORY_LABEL[getBlogArchiveCategory(post)]
}

export function getBlogArchiveCategoryIcon(post: BlogPost): LucideIcon {
  return CATEGORY_ICON[getBlogArchiveCategory(post)]
}

export function getBlogCoverImage(post: BlogPost): string {
  return getBlogCoverForSlug(post.slug)
}

export function getBlogSortDate(post: BlogPost): string {
  return ARCHIVE_BY_SLUG[post.slug]?.sortDate ?? post.date
}

export function formatBlogDisplayDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export type BlogSortMode = 'newest' | 'oldest' | 'title'

export function sortBlogPosts(posts: BlogPost[], mode: BlogSortMode): BlogPost[] {
  const list = [...posts]
  if (mode === 'title') {
    return list.sort((a, b) => a.title.localeCompare(b.title))
  }
  if (mode === 'oldest') {
    return list.sort((a, b) => getBlogSortDate(a).localeCompare(getBlogSortDate(b)))
  }
  return list.sort((a, b) => getBlogSortDate(b).localeCompare(getBlogSortDate(a)))
}
