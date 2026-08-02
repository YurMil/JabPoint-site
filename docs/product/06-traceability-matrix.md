# 06 — Traceability Matrix

Maps business goals → user needs → requirements → design/implementation → verification.

Status: `draft` · `approved` · `in-progress` · `implemented` · `verified` · `deferred` · `rejected`

| Business Goal | User Need | Requirement IDs | Design / Architecture | Implementation task | Test / Verification | Status |
|---------------|-----------|-----------------|------------------------|---------------------|---------------------|--------|
| Position as automotive ecosystem | Understand value in first viewport | BR-01, UR-01, FR-02 | Hero full-bleed + ecosystem subtitle | S1.2 WP-02 | AC-HERO-01 | draft |
| Brand presentation & navigation | Reach key sections quickly | UR-02, FR-01 | Header IA: Services/Platform/Community/Contacts | S1.3 WP-03 | AC-NAV-01 | draft |
| Multilingual access | Use preferred language | UR-03, DR-06 | Language switcher; `defaultLang` | S1.5 WP-10 | Manual lang QA | draft |
| Convert to booking | Start booking in few taps | BR-03, UR-04, FR-13, FR-14 | Book Now CTA wiring | S1.4 WP-06 | AC-BOOK-01 | draft |
| Credible facility proof | See lifts / bays / 24/7 | UR-05, FR-03 | Key Facts counters | S1.1 WP-01 | AC-FACTS-01 | draft |
| Clear service offer | Browse service catalogue | UR-06, FR-04 | Services cards S1–S4 + detailing self-service | S1.2 WP-02 | AC-SVC-01 | draft |
| Community differentiation | Feel lounge / club vibe | BR-04, UR-07, FR-05 | Atmosphere & Community section | S1.3 WP-03 | AC-COMM-01 | draft |
| Platform future story | Learn Beta 2026 features | BR-05, UR-08, FR-06 | Platform teaser + waitlist | S1.2 / S1.4 | AC-PLAT-01 | draft |
| Simple visit journey | Follow 4 steps | UR-09, FR-07 | How It Works | S1.2 WP-02 | AC-HOW-01 | draft |
| Partners & franchise growth | Understand master/brand/franchise offer | BR-06, UR-10, FR-08 | Partners & Franchise + geography | S1.3 WP-04 | AC-PART-01 | draft |
| Reliable contact | Call, email, map, amenities | UR-11, FR-09, FR-10, DR-02 | Contacts Let’s Talk + Maps | S1.1 WP-01/07 | AC-CONTACT-01, AC-DATA-01 | draft |
| Social presence | Reach Instagram/TikTok/etc. | FR-11 | Social list in `site.social` | S1.1 WP-05 | AC-SOCIAL-01 | draft |
| Instant messaging contact | WhatsApp / Telegram | FR-12, DR-04 | Quick contact actions | S1.4 WP-06 | AC-CHAT-01 | draft |
| Discoverability | SEO + OG sharing | FR-15–17, NFR-03 | Head meta + semantics | S1.6 WP-08 | AC-SEO-01–03 | draft |
| Fast mobile experience | Smooth phone UX | UR-12, NFR-01, NFR-04–07 | Media pipeline + dual shells | S1.6–S1.7 | AC-PERF-01, AC-MEDIA-01, AC-SHELL-01 | draft |
| Future CRM readiness | Don’t paint into corner | BR-07 | Booking abstraction in data config | Architecture note in TA §5 | Design review | draft |

## Coverage checks

- [x] Every Stage 1 business requirement (BR-01–07) appears above.
- [x] Every functional requirement FR-01–17 maps to at least one AC in [04 — Acceptance criteria](./04-acceptance-criteria.md).
- [x] Every NFR-01–06 has a verification method (Lighthouse / media audit).
- [ ] Stakeholder approval recorded (pending).
- [ ] Implementation tasks assigned in tracker (pending).

## Release blockers (P0)

| Requirement | AC | Owner | Target slice |
|-------------|----|-------|--------------|
| FR-01 Nav + Book Now | AC-NAV-01 | Eng | S1.3 |
| FR-02 Hero | AC-HERO-01 | Eng | S1.2 |
| FR-03 Facts | AC-FACTS-01 | Eng | S1.1 |
| FR-04 Services | AC-SVC-01 | Eng | S1.2 |
| FR-09–10 Contacts + data | AC-CONTACT-01, AC-DATA-01 | Eng | S1.1 |
| FR-13 Booking CTA | AC-BOOK-01 | Eng | S1.4 |
| FR-15 Semantics | AC-SEO-01 | Eng | S1.6 |
| NFR-01–03 Lighthouse | AC-PERF-01 | Eng | S1.6 |
