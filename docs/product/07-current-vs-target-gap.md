# 07 — Current vs Target Gap Analysis

Comparison between the **current codebase** (`src/data/site.ts`, `src/data/i18n.ts`, existing sections) and the **client TZ** archived in [`sources/tz_jabpoint_site.ru.md`](./sources/tz_jabpoint_site.ru.md).

Use this file as the practical punch-list before coding. Target values are authoritative for Stage 1 unless a written exception is approved.

---

## 1. Company & contact facts

| Field | Current (code) | Target (TZ) | Action |
|-------|----------------|-------------|--------|
| Default language | `et` | `en` | Confirm OQ-04; likely change `site.defaultLang` |
| Phone | `+372 5555 5555` | `+372 57919043` | Replace value + `tel:` href |
| Email | `info@jabpoint.ee` | `teamjabpoint@gmail.com` | Replace value + `mailto:` |
| Address | “Tallinn, Estonia” (lang variants) | `Plaasi tn 2, Tallinn` | Replace all lang strings |
| Hours | Mon–Sat 09:00–20:00 | `24/7` | Replace all lang strings |
| Amenities on contact | Not modelled as TZ list | Free parking, 24/7, Lounge, Online booking | Add copy + optional data field |
| Contact title / sub | “Come to the shop” / multilingual help copy | “Let's Talk” / “Need help with your car? We're here for you.” | Rewrite i18n |

---

## 2. Social networks

| Network | Current | Target | Action |
|---------|---------|--------|--------|
| Instagram | `instagram.com/jabpoint` | `instagram.com/jabpoint_ou` | Fix URL |
| TikTok | Missing | `tiktok.com/@jabpoint` | Add type + icon + link |
| Facebook | Placeholder `facebook.com/jabpoint` | Present (exact URL TBD) | Confirm OQ-01 |
| Telegram | Missing | Present (URL TBD) | Add; confirm OQ-02 |
| YouTube | Present | Not in TZ | Keep or hide (OQ-05) |
| LinkedIn | Present | Not in TZ | Keep or hide (OQ-05) |

---

## 3. Key facts / stats

| Slot | Current | Target |
|------|---------|--------|
| 1 | `24/7` — “Booking coming soon” | `5` — Vehicle Lifts |
| 2 | `6` — Bays and lifts | `2` — Detailing Bays |
| 3 | `3` — Languages on site | `24/7` — Booking Available |

---

## 4. Hero

| Element | Current (EN) | Target (TZ) |
|---------|--------------|-------------|
| Title | “Car service,” / “moving to digital” | “Everything for Your Car” / “in One Place” |
| Subtitle | Self-service + platform-in-progress story | Full ecosystem sentence (self-service, workshop, detailing, tyre, marketplace) |
| Badge / tag | “Self-service · Tallinn” / “Self-service bays” | Media caption: “Modern Automotive Space” |
| CTA 1 | Book a slot | Book Now |
| CTA 2 | See the platform | Our Services (scroll) |
| Media | Static building image path | Atmospheric video or dynamic photo slider |

---

## 5. Navigation & sections

| Area | Current | Target | Gap |
|------|---------|--------|-----|
| Nav items | Services, Platform, How it works, Contact | Services, Platform, Community, Contacts | Rename/replace How → Community; ensure Community section exists |
| CTA label | Book a slot | Book Now | Copy change |
| Community / lounge section | Not a dedicated TZ-style block | Atmosphere & Community with PS5, foosball, rental | **New section** |
| Partners & Franchise | Not present as TZ block | Masters, brands, franchise, geography | **New section** |
| How it works | 4 steps (Get in touch → …) | Choose Service → Book → Arrive → Enjoy | Rewrite steps |
| Platform features | Real-time booking, Digital car passport, Transparent pricing, Partner dashboard | Online Booking, Ratings, Marketplace, One App | Rewrite feature set |
| Platform status | In development / Beta 2026 | Coming Soon / Beta 2026 | Align wording |

---

## 6. Services catalogue

| ID | Current (EN) | Target (TZ) |
|----|--------------|-------------|
| S1 | Self-service bay — hourly lift/tools | Self-Service — lifts, tools, compressors, consumables |
| S2 | Service & repair | Car Service — repair & maintenance by masters |
| S3 | Consultation | Detailing — clean, polish, coatings, cabin/body care |
| S4 | Car sourcing | More Services — tyres, parts, diagnostics, PDR, tint, buy/sell assistance |
| Extra | — | Detailing Self-Service — DIY wash + chemistry + vacuums |

Section title/sub also differ (“What we do today” vs “Our Services” / “Everything related to your car - in one place.”).

---

## 7. Technical / quality gaps

| Topic | Current | Target | Gap |
|-------|---------|--------|-----|
| Booking | CTA present; full online booking “coming soon” messaging | Booking module or external integration | Wire real interim provider or contacts fallback |
| WhatsApp / Telegram quick actions | Phone-oriented (`callUs`) | WhatsApp / Telegram / Phone | Add chat entry points |
| Open Graph | Present in `index.html` + runtime sync | Required | Done (AC-SEO-02) |
| Keywords / meta description | Ecosystem + Tallinn keywords | Explicit NFR | Done (AC-SEO-03) |
| WebP / lazy-load / video formats | Partial / TBD | Explicit NFR | Media pipeline pass |
| Lighthouse ≥ 90 | Not gated in docs as product AC before | Hard gate | Add measurement to release checklist |
| Google Maps | Interactive embed + open link for Plaasi 2 | Pin on Plaasi tn 2 | Done (`LocationMap`) |
| Semantic landmarks | header/main/footer present; sections have ids | Explicit header/main/section/footer | Mostly done; refine aria names if needed |

---

## 8. Positioning delta (editorial)

Current EN positioning emphasises **self-service digitising operations**.  
TZ positioning emphasises **one-stop automotive ecosystem + community + European platform**.

Stage 1 copy should shift toward the TZ ecosystem framing while remaining honest about which digital features are live vs Beta 2026.

---

## 9. Recommended sync order

1. Data facts (phone, email, address, hours, stats, Instagram/TikTok).  
2. EN copy for existing sections (hero, services, platform, how, contact).  
3. New Community + Partners sections + nav.  
4. Booking + chat integrations.  
5. ET/RU parity.  
6. SEO / media / Lighthouse.

---

## 10. Explicit exceptions log

Record approved deviations here during refinement:

| Date | Field | TZ value | Approved exception | Approver |
|------|-------|----------|--------------------|----------|
| 2026-08-02 | defaultLang | `en` | **Confirmed ET** | Client |
| 2026-08-02 | Facebook | exact URL | Still `facebook.com/jabpoint` until confirmed page | Client pending |
| 2026-08-02 | Telegram | URL TBD | **`https://t.me/JABPOINT`** | Client |
| 2026-08-02 | YouTube / LinkedIn | TZ social set | Keep YouTube; LinkedIn `href: ""` | Client |
| 2026-08-02 | Detailing Self-Service | layout TBD | Shipped as **S5** card pending OQ-06 | Dev (interim) |
| 2026-08-02 | Booking | integrations | **Altegio** wired to Book Now | Client |
| 2026-08-02 | WhatsApp | same number? | **Yes** — `wa.me/37257919043` | Client |
| 2026-08-02 | Hero media | video/photos | Deferred — later | Client |
| 2026-08-02 | Phone | `+372 57919043` | **Superseded** — `+372 5565 1117` (phone and WhatsApp) | Client |
| 2026-08-02 | Hours | `24/7` | **Superseded** — `10.00–21.00`, 24/7 stated as a future goal | Client |

## 11. Implementation progress (code)

| Slice | Status | Notes |
|-------|--------|-------|
| S1.1 Canonical facts | Done | Contacts, stats, IG, TikTok, Telegram; LinkedIn hidden |
| S1.2 Core copy rewrite | Done (data layer) | EN/ET/RU hero, services, platform, how, contact updated; CTA2 → services |
| S1.3 Community + Partners | Done | Sections + nav/tab Community; How kept on page; Partners after How |
| S1.4 Booking + chat | Done | Book Now → Altegio; WhatsApp + Telegram + phone quick contacts |
| S1.6 SEO / Maps embed | Done (Maps) | Interactive map Plaasi 2; optional `VITE_GOOGLE_MAPS_EMBED_KEY` for Embed API v1 |
