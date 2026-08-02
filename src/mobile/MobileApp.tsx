import { useEffect } from 'react'
import { site } from '../data/site'
import { useApp } from '../hooks/useApp'
import { useActiveSection } from '../hooks/useActiveSection'
import { MobileTopBar } from './components/MobileTopBar'
import { MobileTabBar } from './components/MobileTabBar'
import { MobileHero } from './components/MobileHero'
import { MobileServices } from './components/MobileServices'
import { MobileCommunity } from './components/MobileCommunity'
import { MobilePlatform } from './components/MobilePlatform'
import { MobileHow } from './components/MobileHow'
import { MobilePartners } from './components/MobilePartners'
import { MobileContact } from './components/MobileContact'
import { IconBook } from './components/icons'
import './mobile.css'

/** Native-feel mobile shell — separate layout & components from desktop. */
export default function MobileApp() {
  const { theme, t } = useApp()
  const { activeId, goToSection } = useActiveSection()

  useEffect(() => {
    document.body.classList.add('is-mobile-shell')
    return () => document.body.classList.remove('is-mobile-shell')
  }, [])

  return (
    <div className={`jp m-app${theme === 'light' ? ' light' : ''}`}>
      <MobileTopBar />

      <main className="m-main">
        <MobileHero />
        <MobileServices />
        <MobileCommunity />
        <MobilePlatform />
        <MobileHow />
        <MobilePartners />
        <MobileContact />
      </main>

      <a
        className="m-fab"
        href={site.booking.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.fabBook}
      >
        <IconBook className="m-fab__icon" />
        <span>{t.fabBook}</span>
      </a>

      <MobileTabBar activeId={activeId} onNavigate={goToSection} />
    </div>
  )
}
