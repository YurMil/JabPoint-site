import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useIsMobile, useViewportMode, VIEWPORT } from '../hooks/useIsMobile'
import { resizeTo } from '../test/helpers/viewport'

describe('useViewportMode (smart transitions)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    resizeTo(1200)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts in desktop on a wide viewport', () => {
    const { result } = renderHook(() => useViewportMode())
    expect(result.current).toBe('desktop')
  })

  it('starts in mobile on a narrow viewport', () => {
    resizeTo(390)
    const { result } = renderHook(() => useViewportMode())
    expect(result.current).toBe('mobile')
  })

  it('switches desktop → mobile after debounce when width ≤ mobileMax', () => {
    const { result } = renderHook(() => useViewportMode())
    expect(result.current).toBe('desktop')

    act(() => {
      resizeTo(800)
    })
    expect(result.current).toBe('desktop')

    act(() => {
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(result.current).toBe('mobile')
  })

  it('switches mobile → desktop after debounce when width ≥ desktopMin', () => {
    resizeTo(400)
    const { result } = renderHook(() => useViewportMode())
    expect(result.current).toBe('mobile')

    act(() => {
      resizeTo(1100)
    })
    expect(result.current).toBe('mobile')

    act(() => {
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(result.current).toBe('desktop')
  })

  it('ignores flicker inside the hysteresis band', () => {
    const { result } = renderHook(() => useViewportMode())
    expect(result.current).toBe('desktop')

    act(() => {
      resizeTo(880) // band: keep desktop
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(result.current).toBe('desktop')

    act(() => {
      resizeTo(700)
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(result.current).toBe('mobile')

    act(() => {
      resizeTo(880) // band: keep mobile
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(result.current).toBe('mobile')
  })

  it('debounces rapid resize bursts and commits only the final width', () => {
    const { result } = renderHook(() => useViewportMode())

    act(() => {
      resizeTo(500)
      vi.advanceTimersByTime(VIEWPORT.debounceMs / 2)
      resizeTo(1200)
      vi.advanceTimersByTime(VIEWPORT.debounceMs / 2)
      resizeTo(500)
      // only now let the last scheduled commit fire
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })

    expect(result.current).toBe('mobile')
  })

  it('useIsMobile mirrors viewport mode', () => {
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      resizeTo(400)
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(result.current).toBe(true)
  })
})
