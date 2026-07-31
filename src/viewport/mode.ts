/**
 * Smart viewport mode: hysteresis band prevents flicker when resizing
 * near the breakpoint; debounce absorbs rapid resize bursts.
 */
export type ViewportMode = 'mobile' | 'desktop'

export const VIEWPORT = {
  /** Enter / stay mobile at or below this width */
  mobileMax: 860,
  /** Enter / stay desktop at or above this width */
  desktopMin: 900,
  /** Debounce window for mode commits (ms) */
  debounceMs: 120,
} as const

/**
 * Resolve next mode from width + current mode.
 * Widths in (mobileMax, desktopMin) keep the current mode (hysteresis).
 */
export function resolveViewportMode(
  width: number,
  current: ViewportMode,
): ViewportMode {
  if (width <= VIEWPORT.mobileMax) return 'mobile'
  if (width >= VIEWPORT.desktopMin) return 'desktop'
  return current
}

export function initialViewportMode(width: number): ViewportMode {
  return width <= VIEWPORT.mobileMax ? 'mobile' : 'desktop'
}
