import { act, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { AppProvider } from './components/AppProvider'
import { VIEWPORT } from './viewport/mode'
import { resizeTo } from './test/helpers/viewport'

function renderApp() {
  return render(
    <AppProvider>
      <App />
    </AppProvider>,
  )
}

describe('App mode switch (desktop ↔ mobile shells)', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    resizeTo(1280)
  })

  afterEach(() => {
    vi.useRealTimers()
    document.body.classList.remove('is-mobile-shell')
  })

  it('loads the desktop shell on a wide screen', async () => {
    renderApp()

    expect(await screen.findByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(document.querySelector('.jp-desktop')).toBeTruthy()
    expect(document.querySelector('.m-app')).toBeNull()
  })

  it('loads the mobile shell on a narrow screen', async () => {
    resizeTo(390)
    renderApp()

    expect(await screen.findByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(document.querySelector('.m-app')).toBeTruthy()
    expect(document.querySelector('.jp-desktop')).toBeNull()
    await waitFor(() => {
      expect(document.body.classList.contains('is-mobile-shell')).toBe(true)
    })
  })

  it('smart-transitions desktop → mobile without thrashing in the band', async () => {
    renderApp()
    await screen.findByRole('navigation', { name: 'Main' })

    await act(async () => {
      resizeTo(880)
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(document.querySelector('.jp-desktop')).toBeTruthy()

    await act(async () => {
      resizeTo(640)
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })

    await waitFor(() => {
      expect(document.querySelector('.m-app')).toBeTruthy()
    })
    expect(await screen.findByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
  })

  it('smart-transitions mobile → desktop past desktopMin', async () => {
    resizeTo(390)
    renderApp()
    await screen.findByRole('navigation', { name: 'Primary' })

    await act(async () => {
      resizeTo(880)
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })
    expect(document.querySelector('.m-app')).toBeTruthy()

    await act(async () => {
      resizeTo(960)
      vi.advanceTimersByTime(VIEWPORT.debounceMs)
    })

    await waitFor(() => {
      expect(document.querySelector('.jp-desktop')).toBeTruthy()
    })
    expect(await screen.findByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(document.body.classList.contains('is-mobile-shell')).toBe(false)
  })
})
