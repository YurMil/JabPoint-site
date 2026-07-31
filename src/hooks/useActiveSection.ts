import { useEffect, useState } from 'react'

const SECTION_IDS = ['top', 'services', 'platform', 'how', 'contact'] as const
export type SectionId = (typeof SECTION_IDS)[number]

/** Tracks which page section is in view (for bottom tab highlight). */
export function useActiveSection(ids: readonly string[] = SECTION_IDS) {
  const [active, setActive] = useState<string>(ids[0] ?? 'top')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) setActive(visible[0].target.id)
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
