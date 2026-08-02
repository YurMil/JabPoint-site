# 01 — Product Brief

## 1. Executive summary

**JabPoint** is not positioned as a conventional car workshop. It is a next-generation automotive ecosystem and future European infrastructure brand: self-service, professional service, detailing, tyre work, marketplace, community space, and — later — a digital platform spanning Europe.

The **promo website** is Stage 1 of that vision: a brand presentation and business-card site that communicates technology, scalability, and community orientation. It must look and feel premium, industrial, and modern — with strong visual emotion and minimal text noise.

| Field | Value |
|-------|-------|
| Project name | JabPoint Promo Website |
| Legal entity | JabPoint OÜ |
| Stakeholder contact | Vladyslav Kondratenko (Co-Founder) |
| Repository | https://github.com/YurMil/JabPoint-site |
| Primary site language (target) | English (EN) |
| Launch location | Plaasi tn 2, Tallinn, Estonia |
| Operating model | 10.00–21.00 (24/7 planned) |
| Slogan (preferred) | *One Platform. Every Car Solution.* |
| Slogan (alt) | *Everything Your Car Needs.* |

## 2. Problem and opportunity

Car owners still juggle separate providers for DIY lifts, repair, detailing, tyres, parts, and advice. JabPoint consolidates those into **one physical hub** today and **one digital ecosystem** tomorrow. The website must make that story credible in a few seconds on mobile.

## 3. Product role (Stage 1)

The site must:

- Present the brand, philosophy, and Tallinn flagship location.
- Showcase services (self-service, workshop, detailing, extended services).
- Sell the atmosphere: lounge, community, events, PlayStation 5, table football, rentable space.
- Tease the JabPoint Platform (Coming Soon / Beta 2026).
- Convert visitors via **Book Now**, phone, email, WhatsApp/Telegram, and map.
- Support franchise / partner messaging for masters, brands, and future locations.

It is **not** yet a booking CRM, client portal, or mobile app (Stages 2–3).

## 4. Three-stage strategy

| Stage | Name | Outcome |
|-------|------|---------|
| **1 — Current** | Brand & promo site | Presentation of company, services, lounge, franchise, team/philosophy; high visual quality; conversion contacts |
| **2 — Next** | CRM & personal cabinet | Online booking, subscriptions, client management, franchisee accounting |
| **3 — Future** | Full digital platform + mobile app | Unified ecosystem for clients, workshops, masters, and partners across Europe |

Stage 1 implementation must not block Stages 2–3: CTAs, waitlist, and platform copy should leave clear extension points.

## 5. Target users

| Persona | Need on the site |
|---------|------------------|
| Car owner (DIY or full-service) | Understand services, book / contact, find location |
| Detailing / care customer | See detailing & self-wash offer, atmosphere |
| Independent master (PDR, electrician, diagnostician) | See partnership / workplace offer |
| Brand / manufacturer marketer | See venue for ads, video shoots, events |
| Franchise prospect | Understand unified brand + booking + app model and geography plan |
| Community visitor | Lounge, events, car meet-ups, reviews |

## 6. Brand voice and content strategy

| Dimension | Guidance |
|-----------|----------|
| Style keywords | Minimalism · Premium · Industrial · Technology · Community |
| Palette | Black (primary), Red (accent), White (text / contrast) |
| Tone | Modern, premium, confident, friendly — no empty hype; easy to grasp |
| Content density | Maximum visual emotion (large photos, atmospheric video); minimum textual noise |
| Copy style | Precise, compact, laconic English (and later ET/RU parity) |
| Layout priority | **Mobile-first** — majority traffic expected from smartphones; ergonomics and speed first |

Visual subjects to emphasise: service processes, lifts, detailing, lounge, PlayStation 5, table football.

## 7. Canonical business facts (from client TZ)

These values supersede placeholder data currently in `src/data/site.ts` once Stage‑1 content sync is approved.

| Fact | Canonical value |
|------|-----------------|
| Address | Plaasi tn 2, Tallinn |
| Phone | +372 5565 1117 |
| Email | teamjabpoint@gmail.com |
| Hours | 10.00–21.00 (24/7 planned) |
| Free parking | Yes |
| Online booking | Available / coming as product capability (CTA + integration) |
| Key facility stats | **5** vehicle lifts · **2** detailing bays · **24/7** booking |
| Instagram | https://www.instagram.com/jabpoint_ou |
| TikTok | https://www.tiktok.com/@jabpoint |
| Facebook | Present (URL to confirm if missing) |
| Telegram | Present (URL / handle to confirm) |

## 8. Hero messaging (canonical)

| Element | Copy |
|---------|------|
| Headline line 1 | Everything for Your Car |
| Headline line 2 | in One Place |
| Subheadline | JabPoint is a modern automotive ecosystem combining self-service, professional workshop, detailing, tyre service and automotive marketplace in one platform. |
| Media caption | Modern Automotive Space |
| Primary CTA | Book Now |
| Secondary CTA | Our Services |

## 9. Success outcomes (Stage 1)

- Visitor understands JabPoint as an **ecosystem**, not only a service.
- Mobile Lighthouse targets met (Performance / Accessibility / SEO ≥ 90).
- Contact and booking paths are obvious within one thumb-scroll.
- Platform / franchise story is present without overselling unfinished software.
- Content and contact facts match client-approved canonical data.

## 10. Assumptions (to validate)

| ID | Assumption | Why it matters |
|----|------------|----------------|
| A-01 | Default language should switch to **EN** (TZ) while ET/RU remain available | Conflicts with current `defaultLang: 'et'` |
| A-02 | Facebook and Telegram profile URLs will be provided or discovered | Required for footer social row |
| A-03 | Booking CTA may deep-link to an external booking tool until Stage 2 CRM | Affects form vs button decision |
| A-04 | Hero media will be supplied as video and/or photo set by the client | Blocks final hero polish |
| A-05 | Nav item **Community** replaces or complements current **How it works** in primary nav | Affects IA |

## 11. Source material

- Client TZ (RU): [`sources/tz_jabpoint_site.ru.md`](./sources/tz_jabpoint_site.ru.md)
- Codebase docs: [`../README.md`](../README.md)
- Live content modules: `src/data/site.ts`, `src/data/i18n.ts`
