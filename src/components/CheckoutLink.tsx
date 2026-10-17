import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { CHECKOUT_REL, CHECKOUT_URL } from '../data/links'

type CheckoutLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'rel' | 'target'> & {
  children: ReactNode
}

/** Outbound Zadeyo checkout — same tab; use only on the product purchase card. */
export function CheckoutLink({ children, className, ...rest }: CheckoutLinkProps) {
  return (
    <a href={CHECKOUT_URL} rel={CHECKOUT_REL} className={className} {...rest}>
      {children}
    </a>
  )
}

