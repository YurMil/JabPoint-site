/**
 * Maintenance / technical-works mode.
 *
 * Toggle at build time via:
 * - local `.env`: VITE_MAINTENANCE_MODE=true
 * - GitHub Actions → Deploy → Run workflow → "maintenance_mode"
 * - GitHub repo variable: MAINTENANCE_MODE=true (Settings → Variables)
 */

export function isMaintenanceModeEnabled(): boolean {
  const raw = (import.meta.env.VITE_MAINTENANCE_MODE ?? '').trim().toLowerCase()
  return raw === 'true' || raw === '1' || raw === 'yes' || raw === 'on'
}
