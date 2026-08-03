import { lazy, Suspense } from 'react'
import { MaintenanceScreen } from './components/MaintenanceScreen'
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
 */
export default function App() {
  const mode = useViewportMode()

  if (isMaintenanceModeEnabled()) {
    return <MaintenanceScreen />
  }

  return (
    <Suspense fallback={<ShellFallback />}>
      {mode === 'mobile' ? <MobileApp /> : <DesktopApp />}
    </Suspense>
  )
}
