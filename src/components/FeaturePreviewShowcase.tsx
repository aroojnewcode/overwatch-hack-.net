import { useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react'
import {
  FEATURE_PREVIEW_INTRO,
  FEATURE_PREVIEW_SLIDES,
  type FeaturePreviewSlide,
} from '../data/featurePreview'
import { SITE_NAME } from '../data/site'
import { ProductCTALink } from './ProductCTALink'
import { FeaturePreviewVideo } from './FeaturePreviewVideo'

type FeaturePreviewShowcaseProps = {
  /** Product page: image on top, tabs under image, info box below. Home: two-column on large screens. */
  layout: 'stacked' | 'split'
  className?: string
  /** Load video immediately when the video tab is default-visible area */
  videoPriority?: boolean
  /** Same-page `#access` on homepage; otherwise `/#access`. */
  accessHomeAnchor?: boolean
  /** Product page: narrower preview block and smaller headings. */
  compact?: boolean
}

function PreviewMedia({
  slide,
  onPrev,
  onNext,
  videoPriority,
}: {
  slide: FeaturePreviewSlide
  onPrev: () => void
  onNext: () => void
  videoPriority?: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black sm:rounded-3xl">
      <div className="relative aspect-video w-full">
        {slide.kind === 'video' ? (
          <div className="absolute inset-0">
            <FeaturePreviewVideo variant="inline" interactive priority={videoPriority} />
          </div>
        ) : (
          <img
            src={slide.image}
            alt={slide.imageAlt ?? ''}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-z-bg/70 via-transparent to-z-bg/25"
          aria-hidden
        />
        {slide.kind === 'image' ? (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
              aria-label="Previous preview"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
              aria-label="Next preview"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </>
        ) : null}
        <div className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-sm">
          <Gamepad2 className="h-3.5 w-3.5 text-z-soft" strokeWidth={2} />
          Gameplay preview
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm">
          {slide.badge}
        </div>
      </div>
    </div>
  )
}

function PreviewInfo({ slide }: { slide: FeaturePreviewSlide }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[rgba(20,16,31,0.92)] p-5 sm:rounded-3xl sm:p-6">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">Live preview</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">{slide.liveTitle}</h3>
      <p className="mt-1 text-sm text-white/45">{slide.liveSubtitle}</p>
      <ul className="mt-5 space-y-2.5">
        {slide.bullets.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-white/75">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-z-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PreviewTabs({
  activeIndex,
  onSelect,
  className = '',
}: {
  activeIndex: number
  onSelect: (index: number) => void
  className?: string
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {FEATURE_PREVIEW_SLIDES.map((slide, index) => {
        const Icon = slide.icon
        const active = index === activeIndex
        return (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(index)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
              active
                ? 'bg-z-accent text-white shadow-[0_0_24px_rgba(124,58,237,0.35)]'
                : 'border border-white/12 bg-white/[0.04] text-white/70 hover:border-white/20 hover:text-white'
            }`}
            aria-pressed={active}
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            {slide.tabLabel}
          </button>
        )
      })}
    </div>
  )
}

export function FeaturePreviewShowcase({
  layout,
  className = '',
  videoPriority = false,
  accessHomeAnchor = false,
  compact = false,
}: FeaturePreviewShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = FEATURE_PREVIEW_SLIDES[activeIndex]

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + FEATURE_PREVIEW_SLIDES.length) % FEATURE_PREVIEW_SLIDES.length)
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % FEATURE_PREVIEW_SLIDES.length)
  }, [])

  const header = (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Feature preview</p>
        <h2
          className={`mt-3 font-semibold tracking-tight text-white ${
            compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl lg:text-4xl'
          }`}
        >
          <span className="text-z-soft">{SITE_NAME}</span>{' '}
          <span className="text-white">previews</span>
        </h2>
        <p
          className={`mt-3 leading-relaxed text-white/55 ${compact ? 'text-sm' : 'text-sm sm:text-base'}`}
        >
          {FEATURE_PREVIEW_INTRO}
        </p>
      </div>
      <ProductCTALink
        homeAnchor={accessHomeAnchor}
        className="cta-gradient inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Get access →
      </ProductCTALink>
    </div>
  )

  if (layout === 'split') {
    return (
      <section className={className} aria-labelledby="feature-preview-heading">
        <h2 id="feature-preview-heading" className="sr-only">
          {SITE_NAME} feature preview
        </h2>
        {header}
        <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:items-start lg:gap-8">
          <PreviewMedia slide={slide} onPrev={goPrev} onNext={goNext} videoPriority={videoPriority} />
          <div className="flex flex-col gap-5">
            <PreviewInfo slide={slide} />
            <PreviewTabs activeIndex={activeIndex} onSelect={setActiveIndex} />
          </div>
        </div>
      </section>
    )
  }

  const stackedBody = compact ? (
    <div className="mx-auto mt-6 max-w-3xl space-y-4 sm:mt-8">
      <PreviewMedia slide={slide} onPrev={goPrev} onNext={goNext} videoPriority={videoPriority} />
      <PreviewTabs activeIndex={activeIndex} onSelect={setActiveIndex} className="justify-center" />
      <PreviewInfo slide={slide} />
    </div>
  ) : (
    <div className="mt-8 space-y-5 lg:mt-10">
      <PreviewMedia slide={slide} onPrev={goPrev} onNext={goNext} videoPriority={videoPriority} />
      <PreviewTabs activeIndex={activeIndex} onSelect={setActiveIndex} />
      <PreviewInfo slide={slide} />
    </div>
  )

  return (
    <section
      className={`${compact ? 'border-t border-white/10 pt-10 sm:pt-12' : 'page-x'} ${className}`.trim()}
      aria-labelledby="feature-preview-product-heading"
    >
      <h2 id="feature-preview-product-heading" className="sr-only">
        {SITE_NAME} feature preview
      </h2>
      <div className={compact ? 'mx-auto max-w-4xl' : undefined}>
        {header}
        {stackedBody}
      </div>
    </section>
  )
}
