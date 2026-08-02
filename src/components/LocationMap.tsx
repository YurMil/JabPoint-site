import { getMapsEmbedUrl, site } from '../data/site'
import { useApp } from '../hooks/useApp'

type Props = {
  className?: string
}

/** Interactive Google Map for Plaasi 2, Tallinn — desktop & mobile. */
export function LocationMap({ className = '' }: Props) {
  const { t } = useApp()
  const title = t.mapTitle || `${site.brand} ${site.location}`

  return (
    <div className={`location-map ${className}`.trim()}>
      <iframe
        className="location-map__frame"
        title={title}
        src={getMapsEmbedUrl()}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="location-map__caption">
        <div className="location-map__title">{title}</div>
        <p className="location-map__sub">{t.mapSub}</p>
        <a
          className="location-map__open"
          href={site.maps.openUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.openInMaps}
        </a>
      </div>
    </div>
  )
}
