import { ArrowRight, Crosshair, Eye, Radar, Sparkles } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { VideoBg } from '../components/VideoBg'
import { SiteFooter } from '../components/SiteFooter'
import { HeroSearch } from '../components/HeroSearch'
import { FaqSection } from '../components/FaqSection'
import { guidePath } from '../data/games'
import { CheckoutLink } from '../components/CheckoutLink'
import { FeaturePreviewVideo } from '../components/FeaturePreviewVideo'
import { HOME_FAQS } from '../data/faqs'
import { HOME_HEADINGS, PRODUCT_PATH, SITE_HOST, SITE_NAME, SITE_PURPOSE } from '../data/site'
import { BLOGS, blogPath } from '../data/blogs'
import {
  OVERWATCH_SHOT_ESP_AIMBOT,
  OVERWATCH_SHOT_ESP_STREET,
  OVERWATCH_SHOT_WALLHACK,
} from '../data/media'

const PREVIEW_SHOTS = [
  {
    src: OVERWATCH_SHOT_WALLHACK,
    alt: 'Overwatch 2 wallhack screenshot with yellow enemy silhouette visible through an interior wall',
    title: 'Wallhack through cover',
    detail: 'Enemy outline visible through a wall — classic wallhack ESP.',
  },
  {
    src: OVERWATCH_SHOT_ESP_STREET,
    alt: 'Overwatch 2 ESP screenshot with cyan enemy silhouettes and distance markers through doorways',
    title: 'ESP silhouettes & distance',
    detail: 'Colored player ESP with distance tags through the facility.',
  },
  {
    src: OVERWATCH_SHOT_ESP_AIMBOT,
    alt: 'Overwatch 2 aimbot screenshot with FOV ring and enemy target markers on Mercy gameplay',
    title: 'Aimbot FOV overlay',
    detail: 'FOV ring and target highlights on a night map.',
  },
] as const

const FEATURES = [
  {
    icon: Crosshair,
    label: 'Overwatch Aimbot',
    desc: 'Silent aim with FOV, smoothing and bone selection — shots land near an enemy and still look legit.',
  },
  {
    icon: Eye,
    label: 'ESP / Wallhack',
    desc: 'Hero boxes, distance and health through walls — ultimate and ability info when supported.',
  },
  {
    icon: Radar,
    label: 'Radar hack',
    desc: '2D radar for off-screen heroes so flanks stop ending your team fights.',
  },
  {
    icon: Sparkles,
    label: 'anti-cheat status',
    desc: 'We publish live anti-cheat status after Overwatch patches — clear to load, or wait.',
  },
] as const

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <section id="home" className="relative flex min-h-screen flex-col overflow-x-clip">
        <VideoBg
          image="/media/overwatch-hero-poster.jpg"
          imageAlt="Overwatch 2 first-person gameplay highlight on the homepage hero"
          video="/videos/overwatch-hero-loop.mp4"
        />

        <div className="relative z-20 flex min-h-screen flex-col">
          <Navbar onVideo />

          <main className="page-x mt-auto pb-6 sm:pb-8 lg:pb-10">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="relative z-30 max-w-md lg:max-w-lg">
                <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-z-soft/80 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  Overwatch · Worldwide · {SITE_HOST}
                </p>
                <h1 className="text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                  {HOME_HEADINGS.h1}
                </h1>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:mt-3.5 sm:text-[0.95rem]">
                  Overwatch 2 cheats for Windows 10 and 11 — silent aim Aimbot, player ESP,
                  wallhack, radar and a clear cheat menu. Live anti-cheat status on Quick Play,
                  Competitive and Arcade.
                </p>

                <div className="relative z-50 mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <CheckoutLink className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                    Buy Overwatch Hack
                  </CheckoutLink>
                  <a
                    href={guidePath('overwatch')}
                    className="inline-flex items-center justify-center rounded-full border border-z-soft/35 bg-[rgba(28,22,48,0.88)] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-[background-color,border-color] hover:border-z-soft/50 hover:bg-[rgba(36,28,58,0.95)]"
                  >
                    Product details
                  </a>
                </div>
              </div>

              <div className="relative z-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:w-[30rem] lg:shrink-0">
                <div className="glass flex h-full min-h-[140px] flex-col justify-between rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <p
                    className="status-pill text-2xl font-normal tracking-tight sm:text-3xl"
                    style={{ fontFamily: "'Silkscreen', cursive" }}
                  >
                    UD
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/70 sm:mt-3 sm:text-sm">
                    Live anti-cheat status for Overwatch 2. Updated after patches —
                    not random Discord screenshots.
                  </p>
                </div>

                <div className="glass flex h-full min-h-[140px] flex-col rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-z-accent/30 text-[10px] font-bold text-z-soft sm:h-6 sm:w-6 sm:text-xs">
                      OW
                    </div>
                    <span className="text-sm font-semibold text-white">Overwatch 2</span>
                  </div>
                  <p className="flex-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                    “Bought it for ESP and mild silent aim. Status stayed honest after the last
                    anti-cheat rebuild — finally an honest status shop.”
                  </p>
                  <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-z-accent/25 text-xs font-semibold text-z-ink sm:h-9 sm:w-9 sm:text-sm">
                      JK
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">jayk</p>
                      <p className="text-xs text-white/60">Overwatch player</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <div className="hero-to-body" aria-hidden />

      <div className="page-body relative z-10">
        <section className="page-band page-x border-t border-z-soft/15 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {HOME_HEADINGS.h2Features}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="page-card flex h-full min-h-[168px] flex-col rounded-2xl p-5"
                >
                  <div className="icon-well mb-4">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-x pb-4 pt-16 sm:pt-20" aria-labelledby="feature-preview-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="feature-preview-heading" className="sr-only">
              Overwatch feature preview
            </h2>
            <FeaturePreviewVideo variant="inline" interactive />
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-white/80 sm:text-base">
              <span className="font-semibold text-white">Overwatch Hack feature preview.</span> Use the
              player controls to play, pause and scrub the timeline. See player ESP and wallhack overlays
              in a real match, how hero names and health show through cover, and why live anti-cheat
              status is checked after every patch.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-4">
              {PREVIEW_SHOTS.map((shot) => (
                <figure key={shot.src}>
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    title={shot.title}
                    width={1280}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                  <figcaption className="mt-3">
                    <p className="text-sm font-semibold text-white">{shot.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/60">{shot.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="picks" className="page-x py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Forums
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Overwatch Hack guides
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                  Bigger setup library — Aimbot, ESP, radar hack, match settings, anti-cheat status and
                  loader fixes before you buy.
                </p>
              </div>
              <a
                href="/forums"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
              >
                All forums
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div className="relative z-20 mt-8 max-w-xl">
              <HeroSearch placeholder="Search Overwatch hack guides…" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BLOGS.slice(0, 6).map((post) => (
                <a
                  key={post.slug}
                  href={blogPath(post.slug)}
                  className="page-card group flex h-full flex-col rounded-2xl p-5 sm:p-6"
                >
                  <p className="text-xs uppercase tracking-wider text-white/45">{post.tag}</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                    {post.title}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                    Read guide
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </a>
              ))}
            </div>

            <div className="page-card mt-8 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-lg font-semibold text-white">Overwatch Hack product</p>
                <p className="mt-1 text-sm text-white/55">
                  Detailed features · anti-cheat status · price · checkout
                </p>
              </div>
              <a
                href={guidePath('overwatch')}
                className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                View product details
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="page-band page-x border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
            <div className="page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  About {SITE_NAME}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2About}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  {SITE_PURPOSE} Clear features, honest status labels, and deep forums for
                  setup. Then check{' '}
                  <a
                    href={PRODUCT_PATH}
                    className="text-white/80 underline-offset-2 hover:underline"
                  >
                    the Overwatch feature list
                  </a>
                  ,{' '}
                  <a href="/reviews" className="text-white/80 underline-offset-2 hover:underline">
                    reviews
                  </a>
                  , or{' '}
                  <a href="/support" className="text-white/80 underline-offset-2 hover:underline">
                    loader help
                  </a>
                  .
                </p>
              </div>
              <a
                href={guidePath('overwatch')}
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80"
              >
                See Overwatch product details
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div
              id="access"
              className="page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Checkout
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2Access}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  Confirm Overwatch Hack anti-cheat status is clear to load, then checkout for digital delivery
                  on supported Windows builds — worldwide.
                </p>
              </div>
              <CheckoutLink className="cta-gradient mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-fit">
                Get Overwatch Hack license
              </CheckoutLink>
            </div>
          </div>
        </section>

        <FaqSection
          id="faq"
          heading={HOME_HEADINGS.h2Faq}
          intro="anti-cheat status, Aimbot and ESP, servers, delivery and checkout — before you buy."
          items={HOME_FAQS}
          moreHref="/faq"
          moreLabel="Full FAQ →"
        />

        <SiteFooter currentPath="/" />
      </div>
    </div>
  )
}
