import { useCallback, useEffect, useRef, useState } from 'react'

export const SECTION_IDS = ['top', 'services', 'community', 'platform', 'contact'] as const
export type SectionId = (typeof SECTION_IDS)[number]

export type SectionOffset = { id: string; top: number }

type NavigateHandler = (id: string) => void

let navigateHandler: NavigateHandler | null = null

function registerNavigateHandler(handler: NavigateHandler) {
  navigateHandler = handler
  return () => {
    if (navigateHandler === handler) navigateHandler = null
  }
}

/**
 * Pick the section that owns the focus line.
 * Uses the last section whose top is at or above the marker (classic scrollspy).
 */
export function resolveActiveSection(
  sections: readonly SectionOffset[],
  markerY: number,
  options?: { nearBottom?: boolean; lastId?: string },
): string {
  if (!sections.length) return options?.lastId ?? 'top'
  if (options?.nearBottom && options.lastId) return options.lastId

  let active = sections[0]!.id
  for (const section of sections) {
    if (section.top <= markerY) active = section.id
    else break
  }
  return active
}

/** Focus line below the sticky top bar (~28% of viewport, clamped). */
export function focusMarkerOffset(viewportHeight: number, topBar = 64): number {
  return Math.min(180, Math.max(topBar + 24, Math.round(viewportHeight * 0.28)))
}

function readSectionOffsets(ids: readonly string[]): SectionOffset[] {
  const y = window.scrollY
  return ids
    .map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      return { id, top: el.getBoundingClientRect().top + y }
    })
    .filter((s): s is SectionOffset => Boolean(s))
}

function isNearDocumentBottom(padding = 48): boolean {
  const doc = document.documentElement
  return window.scrollY + window.innerHeight >= doc.scrollHeight - padding
}

function nativeScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Scroll to a section. When the mobile shell is mounted, uses the locked
 * navigator so the tab bar does not flicker through intermediate zones.
 */
export function scrollToSection(id: string) {
  if (navigateHandler) {
    navigateHandler(id)
    return
  }
  nativeScrollTo(id)
}

export type ActiveSectionApi = {
  activeId: string
  goToSection: (id: string) => void
}

/** Stable scroll-spy for the mobile tab bar; locks during programmatic jumps. */
export function useActiveSection(ids: readonly string[] = SECTION_IDS): ActiveSectionApi {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? 'top')
  const lockRef = useRef<string | null>(null)
  const unlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number | null>(null)
  const idsRef = useRef(ids)
  idsRef.current = ids

  const syncFromScroll = useCallback(() => {
    if (lockRef.current) return

    const list = idsRef.current
    const sections = readSectionOffsets(list)
    if (!sections.length) return

    const markerY = window.scrollY + focusMarkerOffset(window.innerHeight)
    const lastId = list[list.length - 1] ?? sections[sections.length - 1]!.id
    const next = resolveActiveSection(sections, markerY, {
      nearBottom: isNearDocumentBottom(),
      lastId,
    })

    setActiveId((prev) => (prev === next ? prev : next))
  }, [])

  const clearLock = useCallback(() => {
    lockRef.current = null
    if (unlockTimerRef.current) {
      clearTimeout(unlockTimerRef.current)
      unlockTimerRef.current = null
    }
    syncFromScroll()
  }, [syncFromScroll])

  const goToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (!el) return

      lockRef.current = id
      setActiveId(id)

      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current)

      el.scrollIntoView({ behavior: 'smooth', block: 'start' })

      const onScrollEnd = () => {
        window.removeEventListener('scrollend', onScrollEnd)
        clearLock()
      }
      window.addEventListener('scrollend', onScrollEnd, { once: true })
      unlockTimerRef.current = setTimeout(clearLock, 900)
    },
    [clearLock],
  )

  useEffect(() => registerNavigateHandler(goToSection), [goToSection])

  useEffect(() => {
    const schedule = () => {
      if (rafRef.current != null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        syncFromScroll()
      })
    }

    syncFromScroll()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.visualViewport?.addEventListener('resize', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.visualViewport?.removeEventListener('resize', schedule)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current)
    }
  }, [syncFromScroll, ids])

  return { activeId, goToSection }
}
