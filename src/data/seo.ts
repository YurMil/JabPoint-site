import { site } from './site'

/**
 * Crawl / share defaults. English is used in static index.html for social
 * crawlers; runtime title/description follow the active UI language via
 * useDocumentMeta. Keep absolute URLs in sync with site.siteUrl.
 */
export const seo = {
  keywords:
    'self-service Tallinn, automotive platform Tallinn, car service Tallinn, detailing Tallinn, car repair space, JabPoint, Plaasi tn 2',

  title: 'JabPoint Tallinn — Self-service, automotive platform & detailing',

  description:
    'JabPoint is a modern automotive platform in Tallinn (Plaasi tn 2): self-service, professional workshop, detailing, tyre service and marketplace in one place. Open 24/7.',

  ogImageAlt: 'JabPoint Tallinn — modern automotive space',

  get canonicalUrl() {
    return `${site.siteUrl}/`
  },

  /** Landscape site photo — better for social cards than the logo */
  get ogImageUrl() {
    return `${site.siteUrl}/img/building.png`
  },
} as const

/** Absolute production URL for a public asset path (e.g. `img/building.png`). */
export function absoluteAssetUrl(path: string): string {
  const clean = path.replace(/^\//, '')
  return `${site.siteUrl}/${clean}`
}

/** JSON-LD for AutomotiveBusiness (injected into index.html). */
export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: site.brand,
    description: seo.description,
    url: seo.canonicalUrl,
    telephone: site.contact.phone.value,
    email: site.contact.email.value,
    image: seo.ogImageUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plaasi tn 2',
      addressLocality: 'Tallinn',
      addressCountry: 'EE',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: site.social.filter((s) => Boolean(s.href)).map((s) => s.href),
  }
}
