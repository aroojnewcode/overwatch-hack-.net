import { getForumReplies } from '../data/forumReplies'

type ForumReplyListProps = {
  slug: string
  className?: string
  compact?: boolean
}

export function ForumReplyList({ slug, className = '', compact = false }: ForumReplyListProps) {
  const replies = getForumReplies(slug)
  if (replies.length === 0) return null

  return (
    <div className={className}>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
        {replies.length} repl{replies.length === 1 ? 'y' : 'ies'}
      </h3>
      <ul className={`mt-3 space-y-3 ${compact ? '' : 'sm:space-y-4'}`}>
        {replies.map((reply) => (
          <li
            key={`${reply.author}-${reply.postedAt}`}
            className="rounded-xl border border-white/[0.08] bg-black/25 px-3 py-3 sm:px-4 sm:py-3.5"
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-white/40">
              <span className="font-medium text-white/65">{reply.author}</span>
              <span>·</span>
              <time dateTime={reply.postedAt}>{reply.postedAt}</time>
            </div>
            <p className={`mt-2 leading-relaxed text-white/60 ${compact ? 'text-xs' : 'text-sm'}`}>
              {reply.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
