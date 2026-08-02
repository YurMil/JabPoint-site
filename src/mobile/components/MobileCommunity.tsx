import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function MobileCommunity() {
  const { t } = useApp()

  return (
    <section id="community" className="m-section">
      <div className="m-section__kicker">02 — {t.navCommunity}</div>
      <h2 className="m-section__title">{t.communityTitle}</h2>
      <p className="m-section__sub">{t.communitySub}</p>

      <div className="m-community-visual">
        <img src={site.images.building} alt="" />
        <div className="m-community-visual__scrim" aria-hidden />
        <div className="m-community-visual__tag">{t.heroImgTag}</div>
      </div>

      <ul className="m-community-list">
        {t.communityHighlights.map((item) => (
          <li key={item.t} className="m-community-item">
            <span className="m-community-item__mark" aria-hidden />
            <div>
              <div className="m-community-item__t">{item.t}</div>
              <div className="m-community-item__d">{item.d}</div>
            </div>
          </li>
        ))}
      </ul>

      <p className="m-community-story">{t.communityStory}</p>
    </section>
  )
}
