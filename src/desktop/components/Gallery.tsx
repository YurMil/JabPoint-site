import { useCallback, useEffect, useRef, useState } from 'react'
import { getGalleryImageUrl, site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

/** Photo rail showing what the Tallinn point looks like inside. */
export function Gallery() {
  const { t } = useApp()
  const railRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  /** Arrows reflect how much of the rail is still off-screen. */
  const syncArrows = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const max = rail.scrollWidth - rail.clientWidth
    setCanPrev(rail.scrollLeft > 4)
    setCanNext(rail.scrollLeft < max - 4)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    syncArrows()
    rail?.addEventListener('scroll', syncArrows, { passive: true })
    window.addEventListener('resize', syncArrows)
    return () => {
      rail?.removeEventListener('scroll', syncArrows)
      window.removeEventListener('resize', syncArrows)
    }
  }, [syncArrows])

  const scrollByPage = (direction: 1 | -1) => {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="section section--tight">
      <div className="wrap">
        <div className="gallery__head">
          <div className="gallery__intro">
            <h2 className="section-title">{t.galleryTitle}</h2>
            <p className="gallery__sub">{t.gallerySub}</p>
          </div>

          <div className="gallery__nav">
            <button
              type="button"
              className="gallery__arrow"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label={t.galleryPrev}
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              className="gallery__arrow"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label={t.galleryNext}
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>

        <ul className="gallery__rail" ref={railRef} aria-label={t.galleryTitle}>
          {site.gallery.map((photo) => {
            const caption = t.galleryCaptions[photo.id]
            return (
              <li key={photo.id} className="gallery__item">
                {/* Caption is alt-text only — the rail stays purely visual */}
                <img
                  className="gallery__img"
                  src={getGalleryImageUrl(photo.file)}
                  alt={caption}
                  loading="lazy"
                  decoding="async"
                  onLoad={syncArrows}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false">
      <path
        d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
