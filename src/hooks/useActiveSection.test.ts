import { describe, expect, it, vi } from 'vitest'
import {
  focusMarkerOffset,
  resolveActiveSection,
  scrollToSection,
} from '../hooks/useActiveSection'

describe('resolveActiveSection', () => {
  const sections = [
    { id: 'top', top: 0 },
    { id: 'services', top: 500 },
    { id: 'platform', top: 1000 },
    { id: 'how', top: 1500 },
    { id: 'contact', top: 2000 },
  ]

  it('keeps home while the marker is still in the hero', () => {
    expect(resolveActiveSection(sections, 120)).toBe('top')
  })

  it('selects the last section whose top crossed the marker', () => {
    expect(resolveActiveSection(sections, 500)).toBe('services')
    expect(resolveActiveSection(sections, 999)).toBe('services')
    expect(resolveActiveSection(sections, 1000)).toBe('platform')
    expect(resolveActiveSection(sections, 1600)).toBe('how')
  })

  it('forces the last section near the document bottom', () => {
    expect(
      resolveActiveSection(sections, 100, { nearBottom: true, lastId: 'contact' }),
    ).toBe('contact')
  })

  it('returns fallback for an empty list', () => {
    expect(resolveActiveSection([], 0)).toBe('top')
  })
})

describe('focusMarkerOffset', () => {
  it('stays below the top bar and scales with viewport', () => {
    expect(focusMarkerOffset(800)).toBeGreaterThanOrEqual(88)
    expect(focusMarkerOffset(800)).toBeLessThanOrEqual(180)
    expect(focusMarkerOffset(400)).toBeLessThanOrEqual(focusMarkerOffset(900))
  })
})

describe('scrollToSection', () => {
  it('scrolls the target section into view', () => {
    const el = document.createElement('section')
    el.id = 'contact'
    el.scrollIntoView = vi.fn()
    document.body.appendChild(el)

    scrollToSection('contact')
    expect(el.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    })

    el.remove()
  })

  it('no-ops when the section is missing', () => {
    expect(() => scrollToSection('missing-section')).not.toThrow()
  })
})
