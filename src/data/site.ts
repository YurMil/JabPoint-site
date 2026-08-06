/**
 * ═══════════════════════════════════════════════════════════
 *  JabPoint — site settings (edit this file to update the site)
 * ═══════════════════════════════════════════════════════════
 *
 * Phone, email, hours, address, images, languages — all here.
 * Text copy for each language lives in ./i18n.ts
 *
 * Canonical Stage-1 facts: docs/product/03-technical-assignment.md
 */

export type LangCode = 'et' | 'en' | 'ru'
export type ThemeMode = 'dark' | 'light'
export type SocialNetwork =
  | 'instagram'
  | 'tiktok'
  | 'telegram'
  | 'youtube'
  | 'facebook'
  | 'linkedin'

export const site = {
  brand: 'JabPoint',
  location: 'Tallinn',
  year: 2026,

  /**
   * Production origin (no trailing slash). Used for canonical, Open Graph, sitemap.
   * Custom domain: jabpoint.ee (Zone.ee). Update if DNS / hosting changes.
   */
  siteUrl: 'https://jabpoint.ee',

  /** Default language when visitor has no saved preference */
  defaultLang: 'et' as LangCode,

  langs: [
    { code: 'et' as const, label: 'EST' },
    { code: 'en' as const, label: 'ENG' },
    { code: 'ru' as const, label: 'RUS' },
  ],

  /**
   * Online booking (Altegio). Book Now CTAs open this URL.
   * Tracking query kept; Facebook click id stripped.
   */
  booking: {
    href: 'https://n1413616.alteg.io/?utm_id=97758_v0_s00_e0_tv0',
  },

  /**
   * Company social profiles — set href to "" to hide a network from the UI.
   */
  social: [
    {
      id: 'instagram' as const,
      label: 'Instagram',
      href: 'https://www.instagram.com/jabpoint_ou',
    },
    {
      id: 'tiktok' as const,
      label: 'TikTok',
      href: 'https://www.tiktok.com/@jabpoint',
    },
    {
      id: 'telegram' as const,
      label: 'Telegram',
      href: 'https://t.me/JABPOINT',
    },
    {
      id: 'youtube' as const,
      label: 'YouTube',
      href: 'https://www.youtube.com/@jabpoint',
    },
    {
      id: 'facebook' as const,
      label: 'Facebook',
      href: 'https://www.facebook.com/jabpoint',
    },
    {
      id: 'linkedin' as const,
      label: 'LinkedIn',
      href: '',
    },
  ],

  /** Contact details (labels come from i18n; values are shared) */
  contact: {
    phone: { value: '+372 5565 1117', href: 'tel:+37255651117' },
    email: { value: 'teamjabpoint@gmail.com', href: 'mailto:teamjabpoint@gmail.com' },
    /** Same business number as phone (client confirmed) */
    whatsapp: {
      value: '+372 5565 1117',
      href: 'https://wa.me/37255651117',
    },
    telegram: {
      value: '@JABPOINT',
      href: 'https://t.me/JABPOINT',
    },
    /** Free-form address lines per language */
    address: {
      et: 'Plaasi tn 2, Tallinn',
      en: 'Plaasi tn 2, Tallinn',
      ru: 'Plaasi tn 2, Таллинн',
    },
    /** Current opening hours; 24/7 is a stated future goal, not live yet */
    hours: {
      et: '10.00–21.00 (tulevikus 24/7)',
      en: '10.00–21.00 (24/7 planned)',
      ru: '10.00–21.00 (в будущем 24/7)',
    },
  },

  /**
   * Hero / platform stats (keys stay same in all languages; labels in i18n).
   * `24/7` refers to online booking availability, not to opening hours.
   */
  stats: [
    { key: '5' },
    { key: '2' },
    { key: '24/7' },
  ],

  images: {
    logo: `${import.meta.env.BASE_URL}img/logo.jpg`,
    building: `${import.meta.env.BASE_URL}img/building.png`,
    platform: `${import.meta.env.BASE_URL}img/future.png`,
  },

  /**
   * Photo strip of the Tallinn point — shown as a horizontal rail.
   * `id` maps to a caption in i18n (`galleryCaptions`); order here is the
   * order on screen — the number in a file name is only when it was added.
   * To add a photo: drop the file into `public/img/gallery/`, add an entry
   * here and a caption for every language in ./i18n.ts
   */
  gallery: [
    { id: 'reception', file: '01-reception.jpg' },
    { id: 'bar', file: '11-bar.jpg' },
    { id: 'lifts', file: '02-lifts.jpg' },
    { id: 'hall', file: '12-hall.jpg' },
    { id: 'lounge', file: '03-lounge.jpg' },
    { id: 'masters', file: '04-masters.jpg' },
    { id: 'onLift', file: '05-on-lift.jpg' },
    { id: 'opening', file: '06-opening.jpg' },
    { id: 'kids', file: '07-kids.jpg' },
    { id: 'workday', file: '08-workday.jpg' },
    { id: 'detailing', file: '09-detailing.jpg' },
    { id: 'team', file: '10-team.jpg' },
  ] as const,

  /**
   * Google Maps — Plaasi 2, Tallinn.
   * Prefer Maps Embed API v1 when `VITE_GOOGLE_MAPS_EMBED_KEY` is set in `.env`.
   * Without a key, falls back to a public embed URL (no billing key required).
   */
  maps: {
    query: 'Plaasi 2, 13816 Tallinn, Estonia',
    openUrl:
      'https://www.google.com/maps/search/?api=1&query=Plaasi+2%2C+13816+Tallinn%2C+Estonia',
  },

  /** localStorage keys */
  storage: {
    lang: 'jabpoint_lang',
    theme: 'jabpoint_theme',
  },
} as const

/** Resolve iframe src for the contact map. */
export function getMapsEmbedUrl(): string {
  const q = encodeURIComponent(site.maps.query)
  const key = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY as string | undefined
  if (key?.trim()) {
    return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key.trim())}&q=${q}`
  }
  return `https://www.google.com/maps?q=${q}&z=16&hl=en&output=embed`
}

export type SiteConfig = typeof site

/** Photo ids used to look up gallery captions in i18n. */
export type GalleryId = (typeof site.gallery)[number]['id']

/** Public URL of a gallery photo. */
export function getGalleryImageUrl(file: string): string {
  return `${import.meta.env.BASE_URL}img/gallery/${file}`
}
