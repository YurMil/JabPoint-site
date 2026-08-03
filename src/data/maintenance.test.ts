import { describe, expect, it, vi, afterEach } from 'vitest'

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe('isMaintenanceModeEnabled', () => {
  it('is off by default', async () => {
    vi.stubEnv('VITE_MAINTENANCE_MODE', '')
    const { isMaintenanceModeEnabled } = await import('./maintenance')
    expect(isMaintenanceModeEnabled()).toBe(false)
  })

  it.each(['true', 'TRUE', '1', 'yes', 'on'])('treats %s as enabled', async (value) => {
    vi.stubEnv('VITE_MAINTENANCE_MODE', value)
    const { isMaintenanceModeEnabled } = await import('./maintenance')
    expect(isMaintenanceModeEnabled()).toBe(true)
  })

  it('treats false as disabled', async () => {
    vi.stubEnv('VITE_MAINTENANCE_MODE', 'false')
    const { isMaintenanceModeEnabled } = await import('./maintenance')
    expect(isMaintenanceModeEnabled()).toBe(false)
  })
})
