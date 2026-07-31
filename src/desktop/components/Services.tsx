import { useApp } from '../../hooks/useApp'

export function Services() {
  const { t } = useApp()

  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">01 — {t.navServices}</div>
            <h2 className="section-title">{t.svcTitle}</h2>
          </div>
          <p className="section-sub">{t.svcSub}</p>
        </div>
        <div className="services-grid">
          {t.services.map((s) => (
            <article key={s.n} className="service-card">
              <div className="service-card__n">{s.n}</div>
              <h3 className="service-card__title">{s.t}</h3>
              <p className="service-card__desc">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
