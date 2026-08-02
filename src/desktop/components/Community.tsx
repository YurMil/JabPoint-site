import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function Community() {
  const { t } = useApp()

  return (
    <section id="community" className="section">
      <div className="wrap community">
        <div className="community__visual">
          <img src={site.images.building} alt="" />
          <div className="community__scrim" aria-hidden />
          <div className="community__caption">{t.heroImgTag}</div>
        </div>

        <div className="community__copy">
          <div className="section-kicker">02 — {t.navCommunity}</div>
          <h2 className="section-title">{t.communityTitle}</h2>
          <p className="community__sub">{t.communitySub}</p>

          <ul className="community__list">
            {t.communityHighlights.map((item) => (
              <li key={item.t} className="community__item">
                <span className="community__mark" aria-hidden />
                <div>
                  <div className="community__item-title">{item.t}</div>
                  <div className="community__item-desc">{item.d}</div>
                </div>
              </li>
            ))}
          </ul>

          <p className="community__story">{t.communityStory}</p>
        </div>
      </div>
    </section>
  )
}
