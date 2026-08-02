# 05 — Roadmap & Milestones

## 1. Strategic stages (client vision)

| Stage | Name | Capabilities | Site implication |
|-------|------|--------------|------------------|
| **1** | Brand & promo website | Company presentation, services, lounge, franchise, philosophy | **Current delivery focus** |
| **2** | CRM & personal cabinet | Online booking, subscriptions, client management, franchisee accounting | Replace/augment Stage 1 booking CTA with real CRM |
| **3** | Digital platform + mobile app | Europe-wide ecosystem for owners, workshops, masters, partners | Platform section becomes product marketing + app links |

Stage 1 must tell the Stage 2–3 story honestly (Coming Soon / Beta 2026) without shipping unfinished product surfaces.

---

## 2. Stage 1 implementation slices

Ordered for dependency and risk. Each slice should leave the site shippable.

| Slice | Goal | Work packages | Exit gate |
|-------|------|---------------|-----------|
| **S1.0** | Spec freeze | Stakeholder review of `docs/product/*`; resolve OQ-01–10 where blocking | Written approval or annotated exceptions |
| **S1.1** | Canonical facts | WP-01, WP-05, WP-07 — phone, email, address, hours, stats, social, map | AC-DATA-01, AC-FACTS-01, AC-SOCIAL-01 (known URLs) |
| **S1.2** | Core copy rewrite (EN) | WP-02 — hero, services, platform, how-it-works, contacts | AC-HERO-01, AC-SVC-01, AC-PLAT-01, AC-HOW-01, AC-CONTACT-01 |
| **S1.3** | New sections | WP-03 Community; WP-04 Partners & Franchise; nav update | AC-COMM-01, AC-PART-01, AC-NAV-01 |
| **S1.4** | Conversion | WP-06 booking + WhatsApp/Telegram | AC-BOOK-01, AC-CHAT-01 |
| **S1.5** | i18n parity | ET/RU translations matching EN canonical | Manual linguistic review |
| **S1.6** | SEO & performance | WP-08, WP-09, Lighthouse pass | AC-SEO-*, AC-PERF-01, AC-MEDIA-01 |
| **S1.7** | Shell parity QA | Desktop + mobile regression | AC-SHELL-01 |
| **S1.8** | Release | Deploy to GitHub Pages / production domain | Stakeholder smoke test |

---

## 3. Milestone checklist (Stage 1)

- [ ] Product pack approved (`01`–`07`)
- [ ] All P0 requirements implemented
- [ ] All P0/P1 acceptance criteria passing or waived in writing
- [ ] Lighthouse mobile ≥ 90 / 90 / 90
- [ ] No placeholder contacts remain (`5555`, `info@jabpoint.ee`, generic Tallinn-only address)
- [ ] Booking path defined and clickable
- [ ] Community + Partners sections live
- [ ] ET/RU updated or explicitly deferred

---

## 4. Stage 2 preview (not detailed TZ yet)

When CRM starts, expect:

- Real booking calendar / bay inventory
- Customer accounts and history
- Subscription products
- Franchisee back-office
- Promo site CTAs switch from external interim tools to first-party auth URLs

Documentation for Stage 2 should be a new pack (`docs/product/stage-2/`) when CRM requirements arrive.

---

## 5. Stage 3 preview

- Native / hybrid mobile application (“One App”)
- Ratings, marketplace, multi-country partner onboarding
- Promo site becomes acquisition + trust layer for the platform network

---

## 6. Suggested near-term backlog (developer tickets)

1. Replace placeholder contact & social data with TZ canonical values.  
2. Update stats to 5 / 2 / 24/7.  
3. Rewrite English dictionary strings to TZ hero/services/platform/how/contact.  
4. Add Community section (desktop + mobile).  
5. Add Partners & Franchise section (desktop + mobile).  
6. Wire Book Now to interim booking target.  
7. Add WhatsApp/Telegram quick actions.  
8. Fix Google Maps query to Plaasi tn 2.  
9. Add Open Graph tags + SEO title/description.  
10. Media optimisation pass (WebP, lazy-load, video).  
11. Lighthouse remediation loop.  
12. Translate ET/RU after EN sign-off.

---

## 7. Risks

| Risk | Mitigation |
|------|------------|
| Missing Facebook/Telegram URLs | Ship with Instagram + TikTok; hide empty hrefs |
| No booking provider yet | Book Now scrolls to contacts + phone/WhatsApp until tool exists |
| Hero video not delivered | Photo slider fallback |
| Scope creep into CRM UI | Keep platform block as teaser only |
| Dual-shell drift | Shared data modules + AC-SHELL-01 checklist |
