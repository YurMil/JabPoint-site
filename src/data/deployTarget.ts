/**
 * Build-time deploy target (production vs staging preview).
 * Set via VITE_STAGING=true in the staging GitHub Actions workflow.
 */

export function isStagingDeploy(): boolean {
  const raw = (import.meta.env.VITE_STAGING ?? '').trim().toLowerCase()
  return raw === 'true' || raw === '1' || raw === 'yes' || raw === 'on'
}
