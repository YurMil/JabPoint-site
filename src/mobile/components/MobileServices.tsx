import { useApp } from '../../hooks/useApp'

export function MobileServices() {
  const { t } = useApp()

  return (
    <section id="services" className="m-section">
      <div className="m-section__kicker">01 — {t.navServices}</div>
      <h2 className="m-section__title">{t.svcTitle}</h2>
      <p className="m-section__sub">{t.svcSub}</p>

      <div className="m-services">
        {t.services.map((s) => (
          <article key={s.n} className="m-service">
            <div className="m-service__n">{s.n}</div>
            <h3 className="m-service__title">{s.t}</h3>
            <p className="m-service__desc">{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
