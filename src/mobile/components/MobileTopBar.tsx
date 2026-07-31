import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function MobileTopBar() {
  const { t, lang, setLang, theme, toggleTheme } = useApp()

  return (
    <header className="m-topbar">
      <a href="#top" className="m-topbar__brand">
        <img src={site.images.logo} alt="" className="m-topbar__logo" />
        <span className="m-topbar__name">
          {site.brand}
          <span className="m-topbar__dot">.</span>
        </span>
      </a>

      <div className="m-topbar__controls">
        <div className="m-topbar__langs" role="group" aria-label="Language">
          {site.langs.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`m-topbar__lang${lang === l.code ? ' is-active' : ''}`}
              onClick={() => setLang(l.code)}
              aria-pressed={lang === l.code}
              aria-label={l.label}
            >
              {l.code.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="m-topbar__theme"
          onClick={toggleTheme}
          title={t.themeLabel}
          aria-label={t.themeLabel}
        >
          <span className={`m-topbar__theme-dot is-${theme}`} />
        </button>
      </div>
    </header>
  )
}
