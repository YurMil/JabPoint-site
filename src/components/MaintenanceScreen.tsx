import type { ComponentType } from 'react'
import { useEffect } from 'react'
import { site, type SocialNetwork } from '../data/site'
import { useApp } from '../hooks/useApp'
import {
  IconFacebook,
  IconInstagram,
  IconTelegram,
  IconYouTube,
} from './socialIcons'
import './MaintenanceScreen.css'

/** Social networks shown on the maintenance screen (order fixed). */
const MAINT_SOCIAL_IDS: SocialNetwork[] = ['youtube', 'telegram', 'facebook', 'instagram']

const ICONS: Record<
  (typeof MAINT_SOCIAL_IDS)[number],
  ComponentType<{ className?: string }>
> = {
  youtube: IconYouTube,
  telegram: IconTelegram,
  facebook: IconFacebook,
  instagram: IconInstagram,
}

/** Full-viewport technical-works screen — shown when VITE_MAINTENANCE_MODE is on. */
export function MaintenanceScreen() {
  const { t, lang, setLang } = useApp()

  const links = MAINT_SOCIAL_IDS.map((id) => site.social.find((s) => s.id === id)).filter(
    (s): s is (typeof site.social)[number] => Boolean(s?.href),
  )

  useEffect(() => {
    document.title = `${t.maintTitle1} ${t.maintTitle2} — ${site.brand}`
    document.documentElement.lang = lang
  }, [lang, t])

  return (
    <div className="maint jp">
      <div className="maint__grid" aria-hidden />
      <div className="maint__glow" aria-hidden />

      <header className="maint__top">
        <div className="maint__brand">
          <img className="maint__logo" src={site.images.logo} alt={site.brand} />
          <span className="maint__name">
            {site.brand}
            <span className="maint__dot">.</span>
          </span>
        </div>

        <div className="maint__langs" role="group" aria-label="Language">
          {site.langs.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`maint__lang${lang === l.code ? ' is-active' : ''}`}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </header>

      <main className="maint__main">
        <div className="maint__badge">
          <span className="maint__pulse" aria-hidden />
          {t.maintBadge}
        </div>

        <h1 className="maint__title">
          {t.maintTitle1}
          <br />
          <span className="maint__title-accent">{t.maintTitle2}</span>
        </h1>

        <p className="maint__sub">{t.maintSub}</p>

        <nav className="maint__social" aria-label={t.socialLabel}>
          {links.map((s) => {
            const Icon = ICONS[s.id as (typeof MAINT_SOCIAL_IDS)[number]]
            return (
              <a
                key={s.id}
                className="maint__social-item"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <Icon className="maint__social-icon" />
              </a>
            )
          })}
        </nav>

        <p className="maint__note">{t.maintNote}</p>
      </main>

      <footer className="maint__foot">
        © {site.year} {site.brand} {site.location}
      </footer>
    </div>
  )
}
