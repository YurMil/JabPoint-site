import { useApp } from '../../hooks/useApp'

export function MobileHow() {
  const { t } = useApp()

  return (
    <section id="how" className="m-section">
      <div className="m-section__kicker">02 — {t.navHow}</div>
      <h2 className="m-section__title">{t.howTitle}</h2>

      <ol className="m-steps">
        {t.steps.map((s, i) => (
          <li key={s.n} className="m-step">
            <div className="m-step__rail">
              <span className="m-step__dot">{s.n}</span>
              {i < t.steps.length - 1 ? <span className="m-step__line" aria-hidden /> : null}
            </div>
            <div className="m-step__body">
              <h3 className="m-step__title">{s.t}</h3>
              <p className="m-step__desc">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
