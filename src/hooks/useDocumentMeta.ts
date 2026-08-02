import { useEffect } from 'react'
import { seo } from '../data/seo'
import type { Dictionary } from '../data/i18n'
import type { LangCode } from '../data/site'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

/**
 * Keeps <title>, description, and Open Graph / Twitter tags aligned with
 * the active UI language. Static defaults in index.html cover first paint
 * and non-JS crawlers.
 */
export function useDocumentMeta(lang: LangCode, t: Dictionary) {
  useEffect(() => {
    document.title = t.seoTitle
    document.documentElement.lang = lang

    setMeta('name', 'description', t.seoDescription)
    setMeta('name', 'keywords', seo.keywords)
    setMeta('property', 'og:title', t.seoTitle)
    setMeta('property', 'og:description', t.seoDescription)
    setMeta('property', 'og:locale', lang === 'et' ? 'et_EE' : lang === 'ru' ? 'ru_RU' : 'en_US')
    setMeta('name', 'twitter:title', t.seoTitle)
    setMeta('name', 'twitter:description', t.seoDescription)

    setLink('canonical', seo.canonicalUrl)
  }, [lang, t])
}
