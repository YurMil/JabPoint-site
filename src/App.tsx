import { useEffect } from 'react'
import { lazy, Suspense } from 'react'
import { MaintenanceScreen } from './components/MaintenanceScreen'
import { StagingBanner } from './components/StagingBanner'
import { isStagingDeploy } from './data/deployTarget'
import { isMaintenanceModeEnabled } from './data/maintenance'
import { useViewportMode } from './hooks/useIsMobile'

const DesktopApp = lazy(() => import('./desktop/DesktopApp'))
const MobileApp = lazy(() => import('./mobile/MobileApp'))

function ShellFallback() {
  return (
    <div
      data-testid="shell-fallback"
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background: '#08090B',
        color: '#A7ACB4',
        fontFamily: 'Manrope, system-ui, sans-serif',
        fontSize: 14,
      }}
    >
      JabPoint…
    </div>
  )
}

/**
 * Root switch: separate desktop vs native-style mobile codebases
 * share data (site.ts / i18n) and theme/lang context only.
 * When VITE_MAINTENANCE_MODE is on, only the maintenance screen is shown.
 * Staging builds also show a persistent TEST ribbon.
 */
export default function App() {
  const mode = useViewportMode()
  const staging = isStagingDeploy()

  useEffect(() => {
    document.body.classList.toggle('is-staging', staging)
    return () => {
      document.body.classList.remove('is-staging')
    }
  }, [staging])

  const shell = isMaintenanceModeEnabled() ? (
    <MaintenanceScreen />
  ) : (
    <Suspense fallback={<ShellFallback />}>
      {mode === 'mobile' ? <MobileApp /> : <DesktopApp />}
    </Suspense>
  )

  return (
    <>
      <StagingBanner />
      {shell}
    </>
  )
}
