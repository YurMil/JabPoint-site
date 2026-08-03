import { useEffect } from 'react'
import { site } from '../data/site'
import { useApp } from '../hooks/useApp'
import './MaintenanceScreen.css'

/** Full-viewport technical-works screen — shown when VITE_MAINTENANCE_MODE is on. */
export function MaintenanceScreen() {
  const { t, lang, setLang } = useApp()

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

        <div className="maint__actions">
          <a className="maint__btn maint__btn--primary" href={site.contact.phone.href}>
            {t.callUs}
            <strong>{site.contact.phone.value}</strong>
          </a>
          <a
            className="maint__btn"
            href={site.contact.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.telegram}
            <strong>{site.contact.telegram.value}</strong>
          </a>
        </div>

        <p className="maint__note">{t.maintNote}</p>
      </main>

      <footer className="maint__foot">
        © {site.year} {site.brand} {site.location}
      </footer>
    </div>
  )
}
