import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { useApp } from '../hooks/useApp'
import { useActiveSection } from '../hooks/useActiveSection'
import { MobileTopBar } from './components/MobileTopBar'
import { MobileTabBar } from './components/MobileTabBar'
import { MobileSettingsSheet } from './components/MobileSettingsSheet'
import { MobileHero } from './components/MobileHero'
import { MobileServices } from './components/MobileServices'
import { MobilePlatform } from './components/MobilePlatform'
import { MobileHow } from './components/MobileHow'
import { MobileContact } from './components/MobileContact'
import { IconPhone } from './components/icons'
import './mobile.css'

/** Native-feel mobile shell — separate layout & components from desktop. */
export default function MobileApp() {
  const { theme, t } = useApp()
  const activeId = useActiveSection()
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.add('is-mobile-shell')
    return () => document.body.classList.remove('is-mobile-shell')
  }, [])

  return (
    <div className={`jp m-app${theme === 'light' ? ' light' : ''}`}>
      <MobileTopBar onOpenSettings={() => setSettingsOpen(true)} />

      <main className="m-main">
        <MobileHero />
        <MobileServices />
        <MobilePlatform />
        <MobileHow />
        <MobileContact />
      </main>

      <a className="m-fab" href={site.contact.phone.href} aria-label={t.callUs}>
        <IconPhone className="m-fab__icon" />
        <span>{t.callUs}</span>
      </a>

      <MobileTabBar activeId={activeId} />
      <MobileSettingsSheet open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  )
}
