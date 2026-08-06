import { useApp } from '../hooks/useApp'
import { isStagingDeploy } from '../data/deployTarget'
import './StagingBanner.css'

/** Visible marker so staging is never confused with production. */
export function StagingBanner() {
  const { t } = useApp()

  if (!isStagingDeploy()) return null

  return (
    <div className="staging-banner" role="status">
      <span className="staging-banner__dot" aria-hidden />
      <span className="staging-banner__text">{t.stagingBanner}</span>
    </div>
  )
}
