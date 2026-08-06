import { getGalleryImageUrl, site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

/** Swipeable photo rail — what the Tallinn point looks like inside. */
export function MobileGallery() {
  const { t } = useApp()

  return (
    <section id="gallery" className="m-section m-section--flush">
      <div className="m-gallery__head">
        <h2 className="m-section__title">{t.galleryTitle}</h2>
        <p className="m-gallery__sub">{t.gallerySub}</p>
      </div>

      <ul className="m-gallery__rail" aria-label={t.galleryTitle}>
        {site.gallery.map((photo) => {
          const caption = t.galleryCaptions[photo.id]
          return (
            <li key={photo.id} className="m-gallery__item">
              {/* Caption is alt-text only — the rail stays purely visual */}
              <img
                className="m-gallery__img"
                src={getGalleryImageUrl(photo.file)}
                alt={caption}
                loading="lazy"
                decoding="async"
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
