import { describe, expect, it, vi } from 'vitest'
import { scrollToSection } from '../hooks/useActiveSection'

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
