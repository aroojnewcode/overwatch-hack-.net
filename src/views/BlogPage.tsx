import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { BlogArchive } from '../components/BlogArchive'

type BlogPageProps = {
  initialQuery?: string
}

export function BlogPage({ initialQuery = '' }: BlogPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="page-x relative z-20">
        <Navbar />
      </div>

      <main className="page-x pb-16 pt-6 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-base font-semibold tracking-[0.2em] text-z-soft sm:text-lg">Blog</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Overwatch Hack Blogs
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
              Overwatch Hack blogs on overwatchhack.net — filter by topic or sort to find setup guides and
              feature deep-dives for Overwatch.
            </p>
          </header>

          <div className="mt-10 sm:mt-12">
            <BlogArchive initialQuery={initialQuery} showFilters />
          </div>
        </div>
      </main>

      <SiteFooter currentPath="/blog" />
    </div>
  )
}
