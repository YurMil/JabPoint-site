import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function Partners() {
  const { t } = useApp()

  return (
    <section id="partners" className="section section--tight">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">04 — {t.navPartners}</div>
            <h2 className="section-title">{t.partnersTitle}</h2>
          </div>
          <p className="section-sub">{t.partnersSub}</p>
        </div>

        <div className="partners-grid">
          {t.partnerPillars.map((p, i) => (
            <article key={p.t} className="partner-pillar">
              <div className="partner-pillar__n">0{i + 1}</div>
              <h3 className="partner-pillar__title">{p.t}</h3>
              <p className="partner-pillar__desc">{p.d}</p>
            </article>
          ))}
        </div>

        <div className="partners-geo">
          <div className="partners-geo__label">{t.partnersGeoLabel}</div>
          <div className="partners-geo__path">{t.partnersGeo}</div>
          <a className="btn-ghost partners-geo__cta" href={site.contact.email.href}>
            {t.partnersCta}
          </a>
        </div>
      </div>
    </section>
  )
}
