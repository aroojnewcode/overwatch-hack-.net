import { useMemo, useState } from 'react'
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react'
import { BLOGS, blogPath, type BlogPost } from '../data/blogs'
import {
  BLOG_FILTER_TABS,
  formatBlogDisplayDate,
  getBlogArchiveCategory,
  getBlogArchiveCategoryIcon,
  getBlogArchiveCategoryLabel,
  getBlogCoverImage,
  getBlogSortDate,
  sortBlogPosts,
  type BlogFilterCategory,
  type BlogSortMode,
} from '../data/blogArchive'

type BlogArchiveProps = {
  initialQuery?: string
  limit?: number
  showFilters?: boolean
  resultsId?: string
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const CategoryIcon = getBlogArchiveCategoryIcon(post)
  const categoryLabel = getBlogArchiveCategoryLabel(post)
  const cover = getBlogCoverImage(post)
  const dateLabel = formatBlogDisplayDate(getBlogSortDate(post))
  const readLabel = `${post.readMinutes} min read`

  return (
    <a
      href={blogPath(post.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(14,11,22,0.95)] transition hover:border-white/15 sm:rounded-3xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={cover}
          alt=""
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
          <CategoryIcon className="h-3.5 w-3.5 text-z-soft" strokeWidth={2} />
          {categoryLabel}
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
          <Clock className="h-3.5 w-3.5 text-white/50" strokeWidth={2} />
          {readLabel}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/50">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/40 sm:text-xs">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              {dateLabel}
            </span>
            <span className="text-white/25" aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              {readLabel}
            </span>
          </div>
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-black/30 px-3.5 py-1.5 text-xs font-medium text-white transition group-hover:border-white/25 group-hover:bg-white/[0.06]"
          >
            Read
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
        </div>
      </div>
    </a>
  )
}

export function BlogArchive({
  initialQuery = '',
  limit,
  showFilters = true,
  resultsId = 'blog-results',
}: BlogArchiveProps) {
  const [q, setQ] = useState(() => initialQuery)
  const [category, setCategory] = useState<BlogFilterCategory>('all')
  const [sort, setSort] = useState<BlogSortMode>('newest')

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    let list = BLOGS.filter((post) => {
      if (category !== 'all' && getBlogArchiveCategory(post) !== category) return false
      if (!term) return true
      const hay = `${post.title} ${post.excerpt} ${post.tag} ${post.searchTerms}`.toLowerCase()
      return hay.includes(term)
    })
    list = sortBlogPosts(list, sort)
    if (limit != null) list = list.slice(0, limit)
    return list
  }, [q, category, sort, limit])

  return (
    <div>
      {showFilters ? (
        <div className="rounded-2xl border border-white/10 bg-[rgba(12,10,18,0.85)] p-5 sm:rounded-3xl sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex-1">
              <label htmlFor="blog-archive-search" className="text-xs font-medium text-white/45">
                Search blogs
              </label>
              <div className="relative mt-2">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
                  strokeWidth={2}
                />
                <input
                  id="blog-archive-search"
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by title or topic…"
                  className="w-full rounded-full border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 outline-none ring-z-accent/40 transition focus:border-z-accent/50 focus:ring-2"
                />
              </div>
            </div>
            <div className="lg:w-52">
              <label htmlFor="blog-archive-sort" className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
                Sort by
              </label>
              <select
                id="blog-archive-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as BlogSortMode)}
                className="mt-2 w-full cursor-pointer rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-z-accent/40 focus:border-z-accent/50 focus:ring-2"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="title">Title A–Z</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG_FILTER_TABS.map((tab) => {
              const active = category === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? 'border-z-accent bg-z-accent/20 text-white'
                      : 'border-white/12 bg-transparent text-white/65 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

      <div id={resultsId} className="scroll-mt-8">
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
            <p className="text-sm text-white/55">No blogs match your filters.</p>
            {showFilters ? (
              <button
                type="button"
                onClick={() => {
                  setQ('')
                  setCategory('all')
                }}
                className="mt-4 text-sm font-medium text-z-soft hover:text-white"
              >
                Reset filters
              </button>
            ) : null}
          </div>
        ) : (
          <div
            className={`grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 ${showFilters ? 'mt-10' : 'mt-0'}`}
          >
            {filtered.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
