import type { AnchorHTMLAttributes, ReactNode } from 'react'

export const HOME_ACCESS_ID = 'access'

type ProductCTALinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  children: ReactNode
  /** Same-page scroll to the homepage checkout band (`#access`). */
  homeAnchor?: boolean
}

/** Internal get-access — homepage checkout section (not the product details page). */
export function ProductCTALink({
  children,
  className,
  homeAnchor = false,
  ...rest
}: ProductCTALinkProps) {
  const href = homeAnchor ? `#${HOME_ACCESS_ID}` : `/#${HOME_ACCESS_ID}`
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}
