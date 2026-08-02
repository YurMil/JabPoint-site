import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp()

  const links = [
    { href: '#services', label: t.navServices },
    { href: '#platform', label: t.navPlatform },
    { href: '#community', label: t.navCommunity },
    { href: '#contact', label: t.navContact },
  ]

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#top" className="brand">
          <img className="brand__logo" src={site.images.logo} alt={site.brand} />
          <span className="brand__name">
            {site.brand}
            <span className="brand__dot">.</span>
          </span>
        </a>

        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__controls">
          <div className="lang-switch" role="group" aria-label="Language">
            {site.langs.map((l) => (
              <button
                key={l.code}
                type="button"
                className={`lang-switch__btn${lang === l.code ? ' is-active' : ''}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="theme-btn"
            onClick={toggleTheme}
            title={t.themeLabel}
            aria-label={t.themeLabel}
          >
            <span className={`theme-btn__dot is-${theme}`} />
            <span className="theme-btn__label">
              {theme === 'light' ? t.themeLight : t.themeDark}
            </span>
          </button>

          <a
            className="btn-cta"
            href={site.booking.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navCta}
          </a>
        </div>
      </div>
    </header>
  )
}
