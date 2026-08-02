# 03 — Technical Assignment (Stage 1)

Detailed implementation specification for the JabPoint promo website, English canonical content, based on the client TZ. Use together with [02 — Requirements](./02-requirements.md) and [07 — Gap analysis](./07-current-vs-target-gap.md).

---

## 1. Delivery context

| Item | Value |
|------|-------|
| Codebase | React 19 · TypeScript · Vite 7 · dual desktop/mobile shells |
| Content entry points | `src/data/site.ts`, `src/data/i18n.ts`, `public/img/` |
| Hosting | GitHub Pages + custom domain `jabpoint.ee` |
| Architecture reference | [`../architecture.md`](../architecture.md) |

Stage 1 work is primarily **content alignment**, **section completeness**, **SEO/perf**, and **conversion integrations** on top of the existing static site — not a greenfield rewrite, unless gap analysis proves otherwise.

---

## 2. Design system (target)

| Token | Direction |
|-------|-----------|
| Primary | Black |
| Accent | Red |
| Contrast / text | White |
| Mood | Minimal, premium, industrial, technology, community |
| Motion | Purposeful presence (existing site animations may be kept/refined) |
| Breakpoint strategy | Mobile-first; existing dual-shell hysteresis may remain ([viewport mode](../viewport-mode.md)) |

### Content rules

1. Prefer large photography / background video over long paragraphs.
2. Keep headlines short; support copy ≤ ~2 sentences per section.
3. Avoid decorative clutter competing with hero media.
4. All visitor-facing facts that can change (phone, email, address, hours, social, stats) must live in data modules.

---

## 3. Information architecture

Recommended single-page section order:

1. Header / Navigation  
2. Hero  
3. Key Facts  
4. Our Services  
5. Atmosphere & Community  
6. JabPoint Platform  
7. How It Works  
8. Partners & Franchise  
9. Contacts & Location  
10. Footer (may merge with contacts)

### Primary navigation (TZ)

| Label | Target |
|-------|--------|
| Services | `#services` (or equivalent) |
| Platform | `#platform` |
| Community | `#community` |
| Contacts | `#contact` |
| Book Now (CTA) | Booking flow / `#contact` / external booking URL |

Language switcher: EN default (pending OQ-04); retain ET/RU if still in product scope.

---

## 4. Section specifications

### 4.1 Header

**Must include**

- JabPoint logo (link to top)
- Section anchors: Services, Platform, Community, Contacts
- Language switcher
- CTA button: **Book Now**

**Behaviour**

- Sticky or persistent access to Book Now on mobile (existing FAB/call patterns may be extended to booking + chat).
- Mobile menu must expose the same destinations.

### 4.2 Hero

| Element | Canonical content |
|---------|-------------------|
| Title line 1 | Everything for Your Car |
| Title line 2 | in One Place |
| Subtitle | JabPoint is a modern automotive ecosystem combining self-service, professional workshop, detailing, tyre service and automotive marketplace in one platform. |
| Media | High-quality atmospheric video **or** dynamic photo slider |
| Media caption | Modern Automotive Space |
| CTA primary | Book Now → booking / contacts |
| CTA secondary | Our Services → smooth scroll to services |

**Implementation notes**

- Prefer full-bleed hero media (edge-to-edge), not a small inset card.
- Provide poster image for video; respect reduced-motion preferences (pause/hide autoplay).
- Lazy-load only non-critical hero assets if LCP allows; do not lazy-load the LCP image.

### 4.3 Key Facts

Three fact chips / counters:

| Value | Label |
|-------|-------|
| 5 | Vehicle Lifts |
| 2 | Detailing Bays |
| 24/7 | Booking Available |

Update `site.stats` and i18n labels accordingly (current codebase uses different numbers).

### 4.4 Our Services

| Field | Copy |
|-------|------|
| Title | Our Services |
| Description | Everything related to your car - in one place. |

**Cards (interactive)**

| ID | Title | Body |
|----|-------|------|
| S1 | Self-Service | Lifts, professional and specialised tools, compressors, and consumables for independent maintenance. |
| S2 | Car Service | Repair and scheduled maintenance by professional masters. |
| S3 | Detailing | Interior deep cleaning, polishing, protective coatings, full body and cabin care. |
| S4 | More Services | Tyre fitting; parts selection and ordering; diagnostics; PDR; window tinting; assistance with buying and selling cars (inspection, pre-sale preparation, commission sales, buy-out). |
| Extra | Detailing Self-Service | Self-wash bay with professional chemicals, brushes, wet and dry vacuums. |

**UI note:** Resolve OQ-06 — either five cards or S3 + nested self-service detailing callout.

### 4.5 Atmosphere & Community

**Purpose:** Visual presentation of the lounge and club atmosphere.

**Must communicate**

- Rest / lounge zone
- PlayStation 5
- Table football (foosball)
- Space rental opportunity
- Narrative: JabPoint as an automotive club — meetings, car reviews, events, community

**Media:** Large photos/video of lounge and social space; short supporting copy only.

### 4.6 JabPoint Platform

| Field | Copy |
|-------|------|
| Status | Coming Soon / Beta 2026 |
| Title | JabPoint Platform |
| Description | A digital ecosystem connecting car owners, workshops, self-service sites, detailing studios, specialists and automotive companies across Europe. |
| Roadmap note | Next, we are building an interactive booking platform: find the best car service near you and book it in a few clicks. Whatever the situation, there is a car service that can help you — and we help you find it. |
| CTA | Learn More → beta announcement signup |

**Feature cards**

| Title | Description |
|-------|-------------|
| Online Booking | Book in a few clicks. |
| Ratings | Ratings for masters and services. |
| Marketplace | Parts, car care products, and independent specialist services. |
| One App | Entire infrastructure in one application. |

Do not claim live Europe-wide marketplace operations in Stage 1.

### 4.7 How It Works

| Step | Title | Description |
|------|-------|-------------|
| 01 | Choose Service | Select the service you need. |
| 02 | Book | Pick a convenient time. |
| 03 | Arrive | Visit JabPoint at Plaasi tn 2, Tallinn. |
| 04 | Enjoy | Car serviced; customer satisfied. |

### 4.8 Partners & Franchise

Three message pillars + geography:

1. **Masters:** Workplaces for independent specialists (PDR, electricians, diagnosticians).
2. **Brands:** Marketing venue for manufacturers (advertising, video production, events).
3. **Franchise:** One brand, one booking system, one app, one client base, shared quality standards.
4. **Geography:** Tallinn → Estonia → Latvia → Lithuania → Poland → Finland → Spain → All of Europe.

CTA: contact / partnership enquiry (email or form).

### 4.9 Contacts & Footer

| Field | Copy / value |
|-------|----------------|
| Title | Let's Talk |
| Subtitle | Need help with your car? We're here for you. |
| Address | Plaasi tn 2, Tallinn |
| Amenities | Free parking · 24/7 · Lounge · Online booking |
| Phone | +372 57919043 (`tel:+37257919043`) |
| Email | teamjabpoint@gmail.com (`mailto:teamjabpoint@gmail.com`) |
| Map | Interactive Google Maps pin for the address |
| Social | Instagram, TikTok, Facebook, Telegram |

**Quick contacts (TZ §5.3):** WhatsApp / Telegram / Phone shortcuts (floating or in contact section).

---

## 5. Canonical data model (target `site.ts`)

Suggested shape (illustrative — adapt to existing types):

```ts
contact: {
  phone: { value: '+372 57919043', href: 'tel:+37257919043' },
  email: { value: 'teamjabpoint@gmail.com', href: 'mailto:teamjabpoint@gmail.com' },
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
  amenities: ['Free parking', '24/7', 'Lounge', 'Online booking'],
},
stats: [
  { key: '5', labelKey: 'vehicleLifts' },
  { key: '2', labelKey: 'detailingBays' },
  { key: '24/7', labelKey: 'bookingAvailable' },
],
social: [
  { id: 'instagram', href: 'https://www.instagram.com/jabpoint_ou' },
  { id: 'tiktok', href: 'https://www.tiktok.com/@jabpoint' },
  { id: 'facebook', href: '/* OQ-01 */' },
  { id: 'telegram', href: '/* OQ-02 */' },
],
booking: {
  mode: 'external' | 'anchor' | 'embed',
  href: '/* OQ-03 */',
},
defaultLang: 'en', // pending OQ-04
```

Extend `SocialNetwork` type to include `tiktok` and `telegram` if retained; drop or hide networks not approved (YouTube/LinkedIn — OQ-05).

---

## 6. SEO & document head

| Item | Guidance |
|------|----------|
| Title | Brand + Tallinn + primary keyword (e.g. JabPoint — Self-service & automotive platform in Tallinn) |
| Description | Compact ecosystem sentence from hero subtitle |
| Keywords / content | self-service Tallinn; automotive platform Tallinn; car service Tallinn; detailing Tallinn; car repair space |
| Semantics | `<header>`, `<main>`, `<section aria-labelledby=…>`, `<footer>` |
| Open Graph | `og:title`, `og:description`, `og:image`, `og:url`, `og:type=website` |
| Twitter card | Optional but recommended (`summary_large_image`) |
| Canonical URL | Production GitHub Pages or custom domain when available |

---

## 7. Performance & media pipeline

1. Export photos to WebP (keep fallback if needed).
2. Provide hero video as MP4 + WebM where practical; compress aggressively.
3. Lazy-load below-fold images/video (`loading="lazy"` / intersection observer).
4. Do not block LCP with heavy below-fold carousels.
5. Target Lighthouse ≥ 90 for Performance, Accessibility, SEO on mobile profile.

---

## 8. Integrations checklist

| Integration | Stage 1 expectation |
|-------------|---------------------|
| Google Maps | Interactive embed, Plaasi tn 2 |
| Booking | Button → external service **or** lightweight form (OQ-03) |
| WhatsApp | Deep link to business number |
| Telegram | Deep link to contact / channel |
| Phone | `tel:` link |
| Email | `mailto:` link |
| Social profiles | Outbound links with `rel` as appropriate |
| Beta waitlist | Mailto, form endpoint, or newsletter tool for Platform Learn More |

---

## 9. Engineering work packages (for backlog)

| WP | Title | Maps to |
|----|-------|---------|
| WP-01 | Sync canonical contacts, hours, address, stats | FR-03, FR-10 |
| WP-02 | Rewrite EN (then ET/RU) copy for hero, services, platform, how-it-works, contacts | FR-02, FR-04, FR-06, FR-07, FR-09 |
| WP-03 | Add Community section + nav | FR-05, FR-01 |
| WP-04 | Add Partners & Franchise section | FR-08 |
| WP-05 | Social networks TikTok/Telegram; fix Instagram URL | FR-11 |
| WP-06 | Booking CTA wiring + quick chat buttons | FR-12, FR-13 |
| WP-07 | Maps accuracy for Plaasi tn 2 | FR-09, DR-02 |
| WP-08 | SEO meta + Open Graph + semantic landmarks audit | FR-15–17, NFR-01–03 |
| WP-09 | Media pipeline WebP/WebM + lazy-load | NFR-04–06 |
| WP-10 | Default language decision + switcher QA | UR-03, OQ-04 |

---

## 10. Explicit non-goals for this assignment

- Building the JabPoint CRM or mobile app.
- Multi-city storefronts beyond messaging.
- Payments, invoices, or authenticated client areas.
- Replacing the dual-shell architecture without a separate architecture decision.
