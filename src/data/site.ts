/**
 * ═══════════════════════════════════════════════════════════
 *  JabPoint — site settings (edit this file to update the site)
 * ═══════════════════════════════════════════════════════════
 *
 * Phone, email, hours, address, images, languages — all here.
 * Text copy for each language lives in ./i18n.ts
 */

export type LangCode = 'et' | 'en' | 'ru'
export type ThemeMode = 'dark' | 'light'
export type SocialNetwork = 'instagram' | 'youtube' | 'facebook' | 'linkedin'

export const site = {
  brand: 'JabPoint',
  location: 'Tallinn',
  year: 2026,

  /** Default language when visitor has no saved preference */
  defaultLang: 'et' as LangCode,

  langs: [
    { code: 'et' as const, label: 'EST' },
    { code: 'en' as const, label: 'ENG' },
    { code: 'ru' as const, label: 'RUS' },
  ],

  /**
   * Company social profiles — replace href placeholders with real URLs.
   * Set href to "" to hide a network from the UI.
   */
  social: [
    {
      id: 'instagram' as const,
      label: 'Instagram',
      href: 'https://www.instagram.com/jabpoint',
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
      href: 'https://www.linkedin.com/company/jabpoint',
    },
  ],

  /** Contact details (labels come from i18n; values are shared) */
  contact: {
    phone: { value: '+372 5555 5555', href: 'tel:+3725555555' },
    email: { value: 'info@jabpoint.ee', href: 'mailto:info@jabpoint.ee' },
    /** Free-form address lines per language */
    address: {
      et: 'Tallinn, Eesti',
      en: 'Tallinn, Estonia',
      ru: 'Таллинн, Эстония',
    },
    hours: {
      et: 'E–L 09:00 – 20:00',
      en: 'Mon–Sat 09:00 – 20:00',
      ru: 'Пн–Сб 09:00 – 20:00',
    },
  },

  /** Hero / platform stats (keys stay same in all languages; labels in i18n) */
  stats: [
    { key: '24/7' },
    { key: '6' },
    { key: '3' },
  ],

  images: {
    logo: `${import.meta.env.BASE_URL}img/logo.jpg`,
    building: `${import.meta.env.BASE_URL}img/building.png`,
    platform: `${import.meta.env.BASE_URL}img/future.png`,
  },

  /** localStorage keys */
  storage: {
    lang: 'jabpoint_lang',
    theme: 'jabpoint_theme',
  },
} as const

export type SiteConfig = typeof site
