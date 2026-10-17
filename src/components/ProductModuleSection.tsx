import { Eye, Zap } from 'lucide-react'
import type { ProductModule } from '../data/productModules'

type ProductModuleSectionProps = {
  module: ProductModule
  showIcon?: boolean
}

function ControlPill({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-[2.75rem] items-center justify-center rounded-lg border border-white/10 bg-[rgba(12,10,20,0.85)] px-2 py-2 text-center text-[11px] font-medium leading-tight text-white/75 sm:text-xs"
    >
      {label}
    </div>
  )
}

export function ProductModuleSection({ module, showIcon = false }: ProductModuleSectionProps) {
  return (
    <section className="border-t border-white/[0.06] py-14 sm:py-16" aria-labelledby={`${module.id}-heading`}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div>
          {showIcon ? (
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-z-accent/25 text-z-soft">
              <Eye className="h-5 w-5" strokeWidth={1.75} />
            </div>
          ) : null}
          <h2
            id={`${module.id}-heading`}
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2rem]"
          >
            {module.titleAccent ? (
              <>
                {module.titlePrefix}{' '}
                <span className="text-z-soft">{module.titleAccent}</span>
              </>
            ) : (
              module.titlePrefix
            )}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
            {module.intro}
          </p>
          <ul className="mt-8 space-y-5">
            {module.bullets.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-z-soft">
                  <Zap className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={module.moreHref}
            className="mt-8 inline-flex text-sm font-medium text-z-soft hover:text-white"
          >
            {module.moreLabel}
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[rgba(14,11,24,0.92)] p-4 sm:rounded-3xl sm:p-5">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 sm:text-[11px]">
            {module.panelLabel}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-2.5">
            {module.controls.map((label) => (
              <ControlPill key={label} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
