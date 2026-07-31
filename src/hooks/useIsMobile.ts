import { useEffect, useRef, useState } from 'react'
import {
  initialViewportMode,
  resolveViewportMode,
  VIEWPORT,
  type ViewportMode,
} from '../viewport/mode'

export type { ViewportMode }
export { VIEWPORT, resolveViewportMode, initialViewportMode }

function readWidth() {
  return typeof window === 'undefined' ? VIEWPORT.desktopMin : window.innerWidth
}

/**
 * Smart mobile/desktop switch:
 * - hysteresis between 861–899px keeps the current shell
 * - debounce avoids thrashing on rapid resize / device rotation
 */
export function useViewportMode(): ViewportMode {
  const [mode, setMode] = useState<ViewportMode>(() =>
    initialViewportMode(readWidth()),
  )
  const modeRef = useRef(mode)
  modeRef.current = mode

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined

    const commit = () => {
      const next = resolveViewportMode(readWidth(), modeRef.current)
      if (next !== modeRef.current) setMode(next)
    }

    const schedule = () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(commit, VIEWPORT.debounceMs)
    }

    // Immediate sync on mount (covers SSR/hydration mismatch)
    commit()

    window.addEventListener('resize', schedule)
    window.visualViewport?.addEventListener('resize', schedule)

    return () => {
      if (timer) clearTimeout(timer)
      window.removeEventListener('resize', schedule)
      window.visualViewport?.removeEventListener('resize', schedule)
    }
  }, [])

  return mode
}

/** @deprecated Prefer useViewportMode for hysteresis-aware switching */
export function useIsMobile(breakpointQuery = `(max-width: ${VIEWPORT.mobileMax}px)`) {
  const mode = useViewportMode()
  // Keep signature for callers that still pass a custom query — ignored by smart mode.
  void breakpointQuery
  return mode === 'mobile'
}
