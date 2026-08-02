# Content & internationalization

All visitor-facing content is meant to be editable without hunting through UI components.

> **Canonical Stage‑1 product copy and contact facts** are defined in [`docs/product/`](./product/README.md) (especially [technical assignment](./product/03-technical-assignment.md) and [gap analysis](./product/07-current-vs-target-gap.md)). Prefer those values when updating `site.ts` / `i18n.ts`.

## Where to edit

| Change | File |
|--------|------|
| Phone, email, address, hours, brand name, year, image paths, default language, **social URLs**, **siteUrl**, **booking**, **maps** | [`src/data/site.ts`](../src/data/site.ts) |
| All UI strings (ET / EN / RU), including mobile tab labels and **seoTitle / seoDescription** | [`src/data/i18n.ts`](../src/data/i18n.ts) |
| Crawl-facing SEO / Open Graph defaults | [`index.html`](../index.html) + [`src/data/seo.ts`](../src/data/seo.ts) |
| Image files | [`public/img/`](../public/img/) |

Social icons (Instagram, TikTok, YouTube, Facebook, LinkedIn) render from `site.social`. Replace `href` values with real profiles; set `href: ""` to hide a network.

## `site.ts`

`site` is a single typed constant (`as const`). Important fields:

```ts
site.brand          // "JabPoint"
site.location       // "Tallinn"
site.siteUrl        // production origin for canonical / OG
site.year           // footer copyright year
site.defaultLang    // "et" | "en" | "ru"
site.langs          // switcher options { code, label }
site.contact.phone  // { value, href }
site.contact.email  // { value, href }
site.contact.address[lang]
site.contact.hours[lang]
site.images.logo | building | platform
site.storage.lang | theme   // localStorage keys
```

### Contact pattern

- **Values / hrefs** that are language-agnostic (phone, email) live in `site.contact`.
- **Labels** (“Phone”, “Telefon”, …) live in `dict[lang].contactLabels`.
- Address and opening hours are per-language strings on `site.contact`.

Example phone update:

```ts
contact: {
  phone: { value: '+372 5123 4567', href: 'tel:+37251234567' },
  email: { value: 'hello@jabpoint.ee', href: 'mailto:hello@jabpoint.ee' },
  // ...
}
```

### Images

Paths are relative to the site root (Vite `public/`):

```ts
images: {
  logo: 'img/logo.jpg',
  building: 'img/building.png',
  platform: 'img/future.png',
}
```

Replace files under `public/img/` or change the path strings. No import required.

## `i18n.ts`

`dict` is `Record<LangCode, Dictionary>`.

Each language object covers:

- `seoTitle` / `seoDescription` (document head + Open Graph when that language is active)
- Navigation and CTAs
- Hero, services, community, platform, how-it-works, partners, contact copy
- Theme labels
- Mobile `tabs.*` short labels
- `callUs` (FAB / call button)

When adding a new string:

1. Extend the `Dictionary` type.
2. Add the value to **all three** of `et`, `en`, and `ru`.
3. Consume it via `const { t } = useApp()` → `t.yourKey`.

## Language switching

`AppProvider` exposes:

```ts
lang: LangCode
setLang(code)
t: Dictionary   // dict[lang]
```

UI switchers (desktop header chips, mobile settings sheet) call `setLang`. Preference is written to `localStorage`.

## Theme switching

```ts
theme: 'dark' | 'light'
toggleTheme()
```

Shells apply class `jp` or `jp light`. Token values for both themes are defined in `src/styles/tokens.css`.
