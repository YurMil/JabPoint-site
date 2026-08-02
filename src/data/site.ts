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
    phone: { value: '+372 57919043', href: 'tel:+37257919043' },
    email: { value: 'teamjabpoint@gmail.com', href: 'mailto:teamjabpoint@gmail.com' },
    /** Same business number as phone (client confirmed) */
    whatsapp: {
      value: '+372 57919043',
      href: 'https://wa.me/37257919043',
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
    hours: {
      et: '24/7',
      en: '24/7',
      ru: '24/7',
    },
  },

  /** Hero / platform stats (keys stay same in all languages; labels in i18n) */
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
