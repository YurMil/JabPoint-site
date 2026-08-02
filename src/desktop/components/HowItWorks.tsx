import { useApp } from '../../hooks/useApp'

export function HowItWorks() {
  const { t } = useApp()

  return (
    <section id="how" className="section section--tight">
      <div className="wrap">
        <div className="section-kicker">03 — {t.navHow}</div>
        <h2 className="section-title how-title">{t.howTitle}</h2>
        <div className="steps">
          {t.steps.map((s) => (
            <div key={s.n} className="step">
              <div className="step__bar" aria-hidden />
              <div className="step__n">{s.n}</div>
              <h3 className="step__title">{s.t}</h3>
              <p className="step__desc">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
