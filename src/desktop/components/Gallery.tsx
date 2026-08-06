import { getGalleryImageUrl, site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

/** Horizontal photo rail showing what the Tallinn point looks like inside. */
export function Gallery() {
  const { t } = useApp()

  return (
    <section id="gallery" className="section section--tight">
      <div className="wrap">
        <div className="gallery__head">
          <h2 className="section-title">{t.galleryTitle}</h2>
          <p className="gallery__sub">{t.gallerySub}</p>
        </div>
      </div>

      <ul className="gallery__rail" aria-label={t.galleryTitle}>
        {site.gallery.map((photo) => {
          const caption = t.galleryCaptions[photo.id]
          return (
            <li key={photo.id} className="gallery__item">
              <figure className="gallery__figure">
                <img
                  className="gallery__img"
                  src={getGalleryImageUrl(photo.file)}
                  alt={caption}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="gallery__caption">{caption}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
