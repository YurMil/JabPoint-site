import { describe, expect, it } from 'vitest'
import { absoluteAssetUrl, buildLocalBusinessJsonLd, seo } from './seo'
import { site } from './site'

describe('seo helpers', () => {
  it('builds canonical and og image under siteUrl', () => {
    expect(seo.canonicalUrl).toBe(`${site.siteUrl}/`)
    expect(seo.ogImageUrl).toBe(`${site.siteUrl}/img/building.png`)
  })

  it('resolves absolute asset paths', () => {
    expect(absoluteAssetUrl('/img/logo.jpg')).toBe(`${site.siteUrl}/img/logo.jpg`)
    expect(absoluteAssetUrl('img/logo.jpg')).toBe(`${site.siteUrl}/img/logo.jpg`)
  })

  it('emits AutomotiveBusiness JSON-LD with contact facts', () => {
    const ld = buildLocalBusinessJsonLd()
    expect(ld['@type']).toBe('AutomotiveBusiness')
    expect(ld.telephone).toBe(site.contact.phone.value)
    expect(ld.email).toBe(site.contact.email.value)
    expect(ld.url).toBe(seo.canonicalUrl)
    expect(Array.isArray(ld.sameAs)).toBe(true)
  })
})
