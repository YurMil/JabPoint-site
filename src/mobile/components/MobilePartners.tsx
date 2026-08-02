import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function MobilePartners() {
  const { t } = useApp()

  return (
    <section id="partners" className="m-section">
      <div className="m-section__kicker">04 — {t.navPartners}</div>
      <h2 className="m-section__title">{t.partnersTitle}</h2>
      <p className="m-section__sub">{t.partnersSub}</p>

      <div className="m-partners">
        {t.partnerPillars.map((p, i) => (
          <article key={p.t} className="m-partner">
            <div className="m-partner__n">0{i + 1}</div>
            <h3 className="m-partner__title">{p.t}</h3>
            <p className="m-partner__desc">{p.d}</p>
          </article>
        ))}
      </div>

      <div className="m-partners-geo">
        <div className="m-partners-geo__label">{t.partnersGeoLabel}</div>
        <div className="m-partners-geo__path">{t.partnersGeo}</div>
        <a className="m-btn m-btn--ghost" href={site.contact.email.href}>
          {t.partnersCta}
        </a>
      </div>
    </section>
  )
}
