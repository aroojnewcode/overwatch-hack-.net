import { OVERWATCH_HERO } from '../data/media'

type VideoBgProps = {
  /** Poster and fallback still. Shown immediately, and to crawlers. */
  image?: string
  imageAlt?: string
  /** Short muted loop. Omit on pages that should stay a still image. */
  video?: string
}

/** Full-bleed hero. A still paints first; an optional short loop plays over it. */
export function VideoBg({
  image = OVERWATCH_HERO,
  imageAlt = 'Overwatch 2 hero gameplay preview on the homepage background',
  video,
}: VideoBgProps) {
  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-center"
      />
      {video ? (
        <video
          className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={image}
          aria-label={imageAlt}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-z-bg/70 to-transparent" />
    </div>
  )
}
