import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

type Props = {
  open: boolean
  onClose: () => void
}

export function MobileSettingsSheet({ open, onClose }: Props) {
  const { t, lang, setLang, theme, toggleTheme } = useApp()

  if (!open) return null

  return (
    <div className="m-sheet" role="dialog" aria-modal="true" aria-label={t.themeLabel}>
      <button type="button" className="m-sheet__backdrop" aria-label={t.menuClose} onClick={onClose} />
      <div className="m-sheet__panel">
        <div className="m-sheet__handle" aria-hidden />
        <h2 className="m-sheet__title">{t.themeLabel}</h2>

        <div className="m-sheet__row">
          <span className="m-sheet__row-label">{theme === 'light' ? t.themeLight : t.themeDark}</span>
          <button type="button" className="m-sheet__toggle" onClick={toggleTheme}>
            <span className={`m-sheet__toggle-knob is-${theme}`} />
          </button>
        </div>

        <div className="m-sheet__langs">
          {site.langs.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`m-sheet__lang${lang === l.code ? ' is-active' : ''}`}
              onClick={() => {
                setLang(l.code)
                onClose()
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
