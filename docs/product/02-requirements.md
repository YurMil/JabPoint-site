# 02 — Requirements

Requirements for the **JabPoint Promo Website (Stage 1)**, formalised from the client technical assignment. Later stages (CRM, full platform) are listed only where Stage 1 must prepare for them.

Priority: **P0** = release blocker · **P1** = should ship in Stage 1 · **P2** = nice / Stage 1.5 · **P3** = Stage 2+

---

## 1. Scope

### In scope (Stage 1)

- Single-page (or tightly linked) promo experience: header, hero, facts, services, atmosphere/community, platform teaser, how-it-works, partners/franchise, contacts/footer.
- Multilingual UI (at least EN; ET/RU retained unless client drops them).
- Mobile-first performance, semantics, SEO, Open Graph.
- Booking CTA and quick-contact channels (phone / WhatsApp / Telegram).
- Google Maps embed for Plaasi tn 2, Tallinn.
- Visual system: black / red / white; premium industrial look; strong media.

### Out of scope (Stage 1)

- Full CRM, personal cabinet, subscriptions, franchisee accounting (Stage 2).
- Production mobile app and Europe-wide marketplace operations (Stage 3).
- Payment processing inside the promo site.
- Admin CMS (content remains code-driven via `site.ts` / `i18n.ts` unless later decided otherwise).

---

## 2. Stakeholders and users

| Role | Goal | Primary workflows | Success criteria |
|------|------|-------------------|------------------|
| Co-founder / brand owner | Credible brand site | Approve copy, media, contacts | Site matches TZ facts and tone |
| Car owner | Get service / DIY bay | Scan services → Book Now / call | Contact or booking in ≤ 2 taps on mobile |
| Independent master | Find partnership | Read Partners block → contact | Clear offer + contact path |
| Franchise / brand partner | Evaluate expansion | Read franchise geography + model | Understand Europe rollout story |
| Developer / agency | Implement safely | Trace FR → AC → code | No ambiguous content or contacts |

---

## 3. Assumptions and constraints

| ID | Type | Statement | Validation | Owner |
|----|------|-----------|------------|-------|
| ACST-01 | Assumption | EN is default language | Confirm with Vladyslav | Product |
| ACST-02 | Constraint | Static site (no backend) for Stage 1 | Matches architecture docs | Eng |
| ACST-03 | Assumption | External booking tool acceptable until CRM | Confirm provider | Product |
| ACST-04 | Constraint | Lighthouse Perf/A11y/SEO ≥ 90 | CI or manual audit | Eng |
| ACST-05 | Constraint | Mobile-first; dual desktop/mobile shells may remain | Existing architecture | Eng |
| ACST-06 | Assumption | Client supplies final hero video/photos | Asset checklist | Client |

---

## 4. Business requirements

| ID | Requirement | Priority | Rationale |
|----|-------------|----------|-----------|
| BR-01 | Position JabPoint as a modern automotive **ecosystem**, not only a workshop | P0 | Core brand thesis |
| BR-02 | Present Tallinn flagship as the first node of a Europe expansion | P1 | Franchise / platform story |
| BR-03 | Drive enquiries and bookings via clear CTAs and contacts | P0 | Business conversion |
| BR-04 | Communicate community / lounge lifestyle alongside technical services | P1 | Differentiation |
| BR-05 | Tease digital platform (Beta 2026) without implying it is fully live | P1 | Honesty + waitlist |
| BR-06 | Support partner/franchise messaging for masters, brands, and multi-country growth | P1 | Growth channel |
| BR-07 | Keep Stage 1 site compatible with future CRM/app (Stage 2–3) | P2 | Avoid dead-end UX |

---

## 5. User requirements

| ID | Requirement | Priority | Linked BR |
|----|-------------|----------|-----------|
| UR-01 | Visitor can understand the value proposition in the first viewport | P0 | BR-01 |
| UR-02 | Visitor can navigate to Services, Platform, Community, Contacts | P0 | BR-01, BR-04 |
| UR-03 | Visitor can switch language; EN is available (default per TZ) | P0 | BR-01 |
| UR-04 | Visitor can start booking via **Book Now** | P0 | BR-03 |
| UR-05 | Visitor can see key facility facts (lifts, detailing bays, 24/7) | P1 | BR-01 |
| UR-06 | Visitor can browse service cards including self-service detailing | P0 | BR-01 |
| UR-07 | Visitor can experience lounge/community story visually | P1 | BR-04 |
| UR-08 | Visitor can learn platform features and join beta interest | P1 | BR-05 |
| UR-09 | Visitor can follow a 4-step “how it works” path | P1 | BR-03 |
| UR-10 | Partner/franchise visitor understands workplace, marketing venue, franchise model, geography | P1 | BR-06 |
| UR-11 | Visitor can contact via phone, email, map, and social networks | P0 | BR-03 |
| UR-12 | Mobile visitor gets a fast, ergonomic experience | P0 | BR-03 |

---

## 6. Functional requirements

| ID | Requirement | Priority | Rationale | Acceptance criteria |
|----|-------------|----------|-----------|---------------------|
| FR-01 | Header shows JabPoint logo, section links (Services, Platform, Community, Contacts), language switcher, **Book Now** CTA | P0 | TZ §4.1 | AC-NAV-01 |
| FR-02 | Hero shows dual headline, subheadline, media (video or photo slider), caption “Modern Automotive Space”, CTAs Book Now + Our Services | P0 | TZ §4.2 | AC-HERO-01 |
| FR-03 | Key Facts show: 5 Vehicle Lifts; 2 Detailing Bays; 24/7 Booking Available | P0 | TZ §4.3 | AC-FACTS-01 |
| FR-04 | Services block titled “Our Services” with subtitle “Everything related to your car - in one place.” and interactive cards S1–S4 plus Detailing Self-Service | P0 | TZ §4.4 | AC-SVC-01 |
| FR-05 | Atmosphere & Community block presents lounge, PS5, table football, space rental, club/events narrative | P1 | TZ §4.5 | AC-COMM-01 |
| FR-06 | Platform block status Coming Soon / Beta 2026; features Online Booking, Ratings, Marketplace, One App; roadmap note on the upcoming interactive booking platform for finding the best car service nearby; Learn More → beta interest | P1 | TZ §4.6 | AC-PLAT-01 |
| FR-07 | How It Works: 01 Choose Service → 02 Book → 03 Arrive (Plaasi tn 2) → 04 Enjoy | P1 | TZ §4.7 | AC-HOW-01 |
| FR-08 | Partners & Franchise: masters workplaces; brand marketing venue; franchise model; geography Tallinn → … → Europe | P1 | TZ §4.8 | AC-PART-01 |
| FR-09 | Contacts “Let's Talk” with address, amenities, phone, email, Google Maps, social links | P0 | TZ §4.9 | AC-CONTACT-01 |
| FR-10 | Canonical contacts in data layer: phone +372 5565 1117; email teamjabpoint@gmail.com; address Plaasi tn 2, Tallinn; hours 10.00–21.00 (24/7 planned) | P0 | TZ §1, §4.9 | AC-DATA-01 |
| FR-11 | Social: Instagram jabpoint_ou, TikTok @jabpoint, Facebook, Telegram | P1 | TZ §4.9 | AC-SOCIAL-01 |
| FR-12 | Quick contact actions: WhatsApp and/or Telegram and phone | P1 | TZ §5.3 | AC-CHAT-01 |
| FR-13 | Booking module or deep-link to external booking provider from Book Now | P0 | TZ §5.3 | AC-BOOK-01 |
| FR-14 | Smooth scroll from hero “Our Services” to services section | P1 | TZ §4.2 | AC-HERO-01 |
| FR-15 | Semantic landmark structure: header, main, section, footer | P0 | TZ §5.2 | AC-SEO-01 |
| FR-16 | Open Graph meta tags for social sharing | P1 | TZ §5.2 | AC-SEO-02 |
| FR-17 | SEO targeting keywords: self-service Tallinn, automotive platform Tallinn, car service Tallinn, detailing Tallinn, car repair space | P1 | TZ §5.2 | AC-SEO-03 |

### Service catalogue (authoritative for FR-04)

| Code | Name | Description (EN, from TZ) |
|------|------|---------------------------|
| S1 | Self-Service | Lifts, professional and specialised tools, compressors, consumables for DIY maintenance |
| S2 | Car Service | Repair and maintenance by professional masters |
| S3 | Detailing | Interior deep clean, polishing, protective coatings, full body & cabin care |
| S4 | More Services | Tyre service; parts sourcing/order; diagnostics; PDR; tinting; buy/sell assistance (inspection, pre-sale prep, commission, buy-out) |
| — | Detailing Self-Service | DIY wash; pro chemicals; brushes; wet and dry vacuums |

### Platform features (authoritative for FR-06)

| Feature | Promise |
|---------|---------|
| Online Booking | Book in a few clicks |
| Ratings | Ratings for masters and services |
| Marketplace | Parts, car chemicals, independent specialist services |
| One App | Full infrastructure in one application |

### Expansion geography (authoritative for FR-08)

Tallinn → Estonia → Latvia → Lithuania → Poland → Finland → Spain → All of Europe.

---

## 7. Non-functional requirements

| ID | Category | Requirement | Target | Verification |
|----|----------|-------------|--------|--------------|
| NFR-01 | Performance | Lighthouse Performance | ≥ 90 | Lighthouse CI / manual |
| NFR-02 | Accessibility | Lighthouse Accessibility | ≥ 90 | Lighthouse + spot a11y check |
| NFR-03 | SEO | Lighthouse SEO | ≥ 90 | Lighthouse |
| NFR-04 | Media | Images use WebP (or equivalent modern format) | All content images | Build / audit |
| NFR-05 | Media | Video uses modern compressed formats | WebM and/or MP4 | Asset pipeline |
| NFR-06 | Media | Lazy-load media below the fold | No eager load for below-fold | Network waterfall |
| NFR-07 | UX | Mobile-first ergonomics and speed | Primary design target phones | Device QA |
| NFR-08 | Maintainability | Business facts and copy editable in data modules | `site.ts` / `i18n.ts` | Code review |
| NFR-09 | Brand | Visual system black / red / white; premium industrial tech community feel | Matches design tokens + comps | Design review |
| NFR-10 | Reliability | Static hosting (GitHub Pages or equivalent) remains deployable | Existing CI green | Deploy pipeline |

---

## 8. Data and integration requirements

| ID | Requirement | Notes |
|----|-------------|-------|
| DR-01 | Single source of truth for phone, email, address, hours, social URLs | Prefer `src/data/site.ts` |
| DR-02 | Google Maps interactive embed with location pin | Plaasi tn 2, Tallinn |
| DR-03 | Booking integration: embed or external link | Provider TBD (ACST-03) |
| DR-04 | WhatsApp deep link (`wa.me`) and/or Telegram deep link | Numbers/handles TBD if not phone-based |
| DR-05 | Open Graph image and share title/description | Align with hero messaging |
| DR-06 | i18n: EN canonical strings from TZ; ET/RU translations kept in sync | Translation owner TBD |

---

## 9. UX and workflow requirements

| ID | Requirement |
|----|-------------|
| UX-01 | First viewport: brand, dual headline, one supporting sentence, CTA group, dominant media — avoid cluttering with secondary marketing blocks |
| UX-02 | Primary CTA everywhere: **Book Now** |
| UX-03 | Secondary navigation to services via smooth scroll |
| UX-04 | How-it-works is a linear 4-step scenario ending at the Tallinn address |
| UX-05 | Platform Learn More captures interest (waitlist / mailto / form) without claiming full product availability |
| UX-06 | Error/empty states for map or booking iframe must degrade to address + phone |
| UX-07 | Keyboard reachable controls; visible focus; sufficient contrast (supports NFR-02) |

---

## 10. Open questions

| ID | Question | Impact | Needed by | Owner | Resolution |
|----|----------|--------|-----------|-------|------------|
| OQ-01 | Exact Facebook page URL? | Social footer | Content sync | Client | Still using `facebook.com/jabpoint` until a confirmed page URL arrives |
| OQ-02 | Exact Telegram handle / invite link? | Social + quick chat | Content sync | Client | **Done** — `https://t.me/JABPOINT` (@JABPOINT from QR) |
| OQ-03 | Preferred external booking tool? | Book Now behaviour | Sprint planning | Client + Eng | **Done** — Altegio `https://n1413616.alteg.io/?utm_id=97758_v0_s00_e0_tv0` |
| OQ-04 | Confirm default language EN vs keep ET? | `site.defaultLang` | Content sync | Client | **Done** — keep **ET** |
| OQ-05 | Keep YouTube / LinkedIn if not in TZ? | Social list | Content sync | Client | **Done** — keep YouTube; **hide LinkedIn** |
| OQ-06 | Is Detailing Self-Service a 5th card or nested under S3? | Services UI | Design | Product | Interim: shipped as **S5** |
| OQ-07 | Nav: replace “How it works” with “Community” or keep both? | Header IA | Design | Product | **Done** — Community in primary nav; How stays on page |
| OQ-08 | WhatsApp number — same as +372 5565 1117? | Quick contacts | Content sync | Client | **Done** — same number (`wa.me/37255651117`) |
| OQ-09 | Franchise / team / philosophy deep pages or single-page sections only? | IA | Roadmap | Client | Open |
| OQ-10 | Final hero video file and photo set delivery date? | Hero polish | Production | Client | **Deferred** — later |
