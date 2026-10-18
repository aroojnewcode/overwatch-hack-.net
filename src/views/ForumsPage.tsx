import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  MessagesSquare,
  Search,
  User,
  FileText,
  RefreshCw,
  Users,
} from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { LogoMark } from '../components/LogoMark'
import {
  FORUM_DISCUSSIONS,
  FORUM_TOPICS,
  discussionPath,
  sortDiscussions,
  type ForumSortTab,
  type ForumTopic,
} from '../data/forumDiscussions'
import { OVERWATCH_SHOT_WALLHACK } from '../data/media'
import { SITE_NAME } from '../data/site'
import { ForumReplyList } from '../components/ForumReplyList'
import { getForumReplies } from '../data/forumReplies'

type ForumsPageProps = {
  initialQuery?: string
}

const TOPIC_ICONS: Record<ForumTopic, typeof User> = {
  general: User,
  guides: FileText,
  patch: RefreshCw,
  community: Users,
}

function VoteColumn({
  slug,
  score,
  delta,
  onUp,
  onDown,
}: {
  slug: string
  score: number
  delta: number
  onUp: () => void
  onDown: () => void
}) {
  const display = score + delta
  return (
    <div className="flex w-10 shrink-0 flex-col items-center gap-1 pt-1">
      <button
        type="button"
        onClick={onUp}
        className="rounded-md p-1 text-white/40 transition hover:bg-white/10 hover:text-z-soft"
        aria-label={`Upvote discussion ${slug}`}
      >
        <ChevronUp className="h-4 w-4" strokeWidth={2} />
      </button>
      <span className="text-sm font-semibold tabular-nums text-white">{display}</span>
      <button
        type="button"
        onClick={onDown}
        className="rounded-md p-1 text-white/40 transition hover:bg-white/10 hover:text-white/70"
        aria-label={`Downvote discussion ${slug}`}
      >
        <ChevronDown className="h-4 w-4" strokeWidth={2} />
      </button>
    </div>
  )
}

export function ForumsPage({ initialQuery = '' }: ForumsPageProps) {
  const [q, setQ] = useState(() => initialQuery)
  const [sortTab, setSortTab] = useState<ForumSortTab>('popular')
  const [topic, setTopic] = useState<ForumTopic | 'all'>('all')
  const [voteDelta, setVoteDelta] = useState<Record<string, number>>({})
  const [openReplies, setOpenReplies] = useState<Record<string, boolean>>({})

  function toggleReplies(slug: string) {
    setOpenReplies((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    let list = FORUM_DISCUSSIONS.filter((d) => {
      if (topic !== 'all' && d.topic !== topic) return false
      if (!term) return true
      const hay = `${d.title} ${d.excerpt} ${d.fromGuideTitle} ${d.tag}`.toLowerCase()
      return hay.includes(term)
    })
    return sortDiscussions(list, sortTab, voteDelta)
  }, [q, sortTab, topic, voteDelta])

  function bumpVote(slug: string, dir: 1 | -1) {
    setVoteDelta((prev) => ({ ...prev, [slug]: (prev[slug] ?? 0) + dir }))
  }

  const topicCount = FORUM_TOPICS.filter((t) => t.id !== 'all').length

  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="page-x relative z-20">
        <Navbar />
      </div>

      <main className="page-x pb-16 pt-4 sm:pb-20 sm:pt-6">
        <div className="mx-auto max-w-6xl">
          <nav
            className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
            aria-label="Breadcrumb"
          >
            <a href="/" className="hover:text-white/70">Home</a>
            <span>/</span>
            <span className="text-white/60">Forum</span>
          </nav>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-z-soft">
                {SITE_NAME} community forum
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {SITE_NAME} Community Forum
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/50 sm:text-base">
                Practical answers on PC setup, map awareness, patch updates, and safer match settings.
              </p>
            </div>
            <a
              href="/blog"
              className="cta-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessagesSquare className="h-4 w-4" strokeWidth={2} />
                Explore the guides
              </a>
            </div>

            <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img
                src={OVERWATCH_SHOT_WALLHACK}
                alt="Overwatch wallhack ESP screenshot — enemy silhouettes through cover on overwatchhack.net"
                width={1280}
                height={720}
                loading="eager"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
            </figure>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['popular', 'Popular'],
                      ['latest', 'Latest'],
                      ['discussed', 'Most discussed'],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSortTab(id)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        sortTab === id
                          ? 'bg-white/10 text-white'
                          : 'text-white/50 hover:text-white/80'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="relative w-full sm:max-w-xs">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
                    strokeWidth={2}
                  />
                  <input
                    type="search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search discussions"
                    className="w-full rounded-full border border-white/10 bg-black/30 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-z-accent/40 focus:ring-2 focus:ring-z-accent/30"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {FORUM_TOPICS.map((t) => {
                  const active = topic === t.id
                  const Icon =
                    t.id === 'all' ? MessageCircle : TOPIC_ICONS[t.id as ForumTopic]
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTopic(t.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                        active
                          ? 'border-z-accent/60 bg-z-accent/15 text-white'
                          : 'border-white/12 text-white/60 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      {t.label}
                    </button>
                  )
                })}
              </div>

              <p className="mt-6 text-sm text-white/40">
                {filtered.length} discussion{filtered.length === 1 ? '' : 's'}
              </p>

              <ul className="mt-4 space-y-4">
                {filtered.map((d) => {
                  const replyCount = getForumReplies(d.slug).length
                  return (
                  <li key={d.slug}>
                    <article
                      className="flex gap-3 rounded-2xl border border-white/[0.08] bg-[rgba(16,12,26,0.9)] p-4 sm:gap-4 sm:p-5"
                    >
                      <VoteColumn
                        slug={d.slug}
                        score={d.score}
                        delta={voteDelta[d.slug] ?? 0}
                        onUp={() => bumpVote(d.slug, 1)}
                        onDown={() => bumpVote(d.slug, -1)}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/40">
                          <span className="font-medium text-white/55">{d.directory}</span>
                          <span>·</span>
                          <span>{d.author}</span>
                          <span className="rounded-full border border-white/10 px-2 py-0.5 text-white/50">
                            {d.tag}
                          </span>
                        </div>
                        <h2 className="mt-2 text-base font-semibold leading-snug text-white sm:text-lg">
                          <a href={discussionPath(d.slug)} className="hover:text-z-soft">
                            {d.title}
                          </a>
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/50">{d.excerpt}</p>
                        <p className="mt-2 text-sm">
                          <span className="text-white/40">From the guide: </span>
                          <a
                            href={discussionPath(d.slug)}
                            className="font-medium text-z-soft hover:text-white"
                          >
                            {d.fromGuideTitle}
                          </a>
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/45">
                          <span className="rounded-full border border-white/10 px-2.5 py-1">
                            {d.tag}
                          </span>
                          {replyCount > 0 ? (
                            <button
                              type="button"
                              onClick={() => toggleReplies(d.slug)}
                              aria-expanded={openReplies[d.slug] === true}
                              className="inline-flex items-center gap-1 rounded-full border border-transparent px-1 py-0.5 font-medium text-white/65 transition hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                            >
                              <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
                              {replyCount} repl{replyCount === 1 ? 'y' : 'ies'}
                            </button>
                          ) : (
                            <span className="inline-flex items-center gap-1">
                              <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
                              0 replies
                            </span>
                          )}
                          <a
                            href={discussionPath(d.slug)}
                            className="inline-flex items-center gap-1 font-medium text-white/70 hover:text-white"
                          >
                            Read discussion
                            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                          </a>
                        </div>
                        {openReplies[d.slug] && replyCount > 0 ? (
                          <ForumReplyList
                            slug={d.slug}
                            className="mt-4 border-t border-white/[0.06] pt-4"
                            compact
                          />
                        ) : null}
                      </div>
                    </article>
                  </li>
                  )
                })}
              </ul>

              {filtered.length === 0 ? (
                <div className="mt-8 rounded-2xl border border-white/10 px-6 py-10 text-center text-sm text-white/50">
                  No discussions match your search.
                </div>
              ) : null}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[rgba(16,12,26,0.95)]">
                <div className="h-1 bg-z-accent" aria-hidden />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-z-accent/25 text-z-soft">
                      <LogoMark className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{SITE_NAME} Community</p>
                      <p className="text-xs text-white/45">overwatchhack.net</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    A home for Overwatch players to share setups, ranked habits, and patch-day
                    status checks.
                  </p>
                  <p className="mt-4 text-xs text-white/40">
                    {FORUM_DISCUSSIONS.length} forum discussions · {topicCount} topics
                  </p>
                  <a
                    href="/blog"
                    className="cta-gradient mt-5 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold text-white"
                  >
                    Explore all guides
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[rgba(16,12,26,0.6)] p-5">
                <h2 className="text-sm font-semibold text-white">Communities</h2>
                <ul className="mt-4 space-y-1">
                  {FORUM_TOPICS.filter((t) => t.id !== 'all').map((t) => {
                    const Icon = TOPIC_ICONS[t.id as ForumTopic]
                    return (
                      <li key={t.id}>
                        <button
                          type="button"
                          onClick={() => setTopic(t.id)}
                          className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left transition hover:bg-white/[0.04]"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/70">
                            <Icon className="h-4 w-4" strokeWidth={1.75} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-white">{t.label}</span>
                            <span className="block text-xs text-white/40">{t.blurb}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-white/30" strokeWidth={2} />
                        </button>
                      </li>
                    )
                  })}
                </ul>
                <a
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-z-soft hover:text-white"
                >
                  Browse all communities
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter currentPath="/forums" />
    </div>
  )
}
