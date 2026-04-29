'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'

type SectionScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function SectionScrollLink({ href, onClick, ...props }: SectionScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || !href.startsWith('#')) {
      return
    }

    const targetId = href.slice(1)
    const target = document.getElementById(targetId)
    if (!target) {
      return
    }

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.search}`)
  }

  return <a href={href} onClick={handleClick} {...props} />
}
