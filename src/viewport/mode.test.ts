import { describe, expect, it } from 'vitest'
import {
  initialViewportMode,
  resolveViewportMode,
  VIEWPORT,
} from '../viewport/mode'

describe('resolveViewportMode (hysteresis)', () => {
  it('forces mobile at or below mobileMax', () => {
    expect(resolveViewportMode(VIEWPORT.mobileMax, 'desktop')).toBe('mobile')
    expect(resolveViewportMode(320, 'desktop')).toBe('mobile')
  })

  it('forces desktop at or above desktopMin', () => {
    expect(resolveViewportMode(VIEWPORT.desktopMin, 'mobile')).toBe('desktop')
    expect(resolveViewportMode(1440, 'mobile')).toBe('desktop')
  })

  it('keeps current mode inside the hysteresis band', () => {
    const mid = Math.floor((VIEWPORT.mobileMax + VIEWPORT.desktopMin) / 2)
    expect(mid).toBeGreaterThan(VIEWPORT.mobileMax)
    expect(mid).toBeLessThan(VIEWPORT.desktopMin)

    expect(resolveViewportMode(mid, 'mobile')).toBe('mobile')
    expect(resolveViewportMode(mid, 'desktop')).toBe('desktop')
  })

  it('does not flip when nudging just above mobileMax while mobile', () => {
    expect(resolveViewportMode(VIEWPORT.mobileMax + 1, 'mobile')).toBe('mobile')
    expect(resolveViewportMode(VIEWPORT.desktopMin - 1, 'mobile')).toBe('mobile')
  })

  it('does not flip when nudging just below desktopMin while desktop', () => {
    expect(resolveViewportMode(VIEWPORT.desktopMin - 1, 'desktop')).toBe('desktop')
    expect(resolveViewportMode(VIEWPORT.mobileMax + 1, 'desktop')).toBe('desktop')
  })
})

describe('initialViewportMode', () => {
  it('uses mobileMax as the hard initial split (no hysteresis yet)', () => {
    expect(initialViewportMode(VIEWPORT.mobileMax)).toBe('mobile')
    expect(initialViewportMode(VIEWPORT.mobileMax + 1)).toBe('desktop')
  })
})
