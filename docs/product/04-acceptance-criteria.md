# 04 — Acceptance Criteria

Behaviour-oriented acceptance criteria for Stage 1. Each AC ID is referenced from [02 — Requirements](./02-requirements.md).

Status values for tracking: `draft` · `ready` · `passing` · `failing` · `waived`.

---

## Navigation & chrome

### AC-NAV-01 — Header completeness

```gherkin
Given I open the site on desktop or mobile
When the header (or mobile menu) is visible
Then I see the JabPoint logo
And I see links to Services, Platform, Community, and Contacts
And I see a language switcher that includes English
And I see a Book Now CTA
When I activate each section link
Then the corresponding page section is brought into view
```

---

## Hero & facts

### AC-HERO-01 — Hero messaging and CTAs

```gherkin
Given I am on the first viewport
Then the headline reads "Everything for Your Car" / "in One Place" (or approved translation)
And the subtitle matches the ecosystem description from the TZ
And media is present (video or photo slider) with caption "Modern Automotive Space"
When I activate Book Now
Then I am taken to the booking flow or contacts booking entry point
When I activate Our Services
Then the page smooth-scrolls to the Services section
```

### AC-FACTS-01 — Key facility facts

```gherkin
Given I view the Key Facts block
Then I see the value 5 labelled as Vehicle Lifts
And I see the value 2 labelled as Detailing Bays
And I see 24/7 labelled as Booking Available
```

---

## Services & community

### AC-SVC-01 — Services catalogue

```gherkin
Given I open the Our Services section
Then the title is "Our Services"
And the description is "Everything related to your car - in one place."
And I can interact with cards for Self-Service, Car Service, Detailing, and More Services
And Detailing Self-Service content is visible (own card or nested under Detailing)
And each card body covers the scope defined in the technical assignment
```

### AC-COMM-01 — Atmosphere & Community

```gherkin
Given I open the Community section
Then I see visual presentation of the lounge
And copy or captions reference rest zone, PlayStation 5, table football, and/or space rental
And the narrative presents JabPoint as a club / meeting / events place
```

---

## Platform & journey

### AC-PLAT-01 — Platform teaser

```gherkin
Given I open the Platform section
Then status indicates Coming Soon or Beta 2026
And the title is "JabPoint Platform"
And the Europe ecosystem description is shown
And feature items Online Booking, Ratings, Marketplace, and One App are present
And a roadmap note announces the upcoming interactive booking platform for finding the best car service nearby
When I activate Learn More
Then I can express interest in the beta (form, mailto, or waitlist)
And the UI does not claim the full platform is already live
```

### AC-HOW-01 — How It Works

```gherkin
Given I open How It Works
Then I see four ordered steps: Choose Service, Book, Arrive, Enjoy
And step 03 references Plaasi tn 2, Tallinn
```

### AC-PART-01 — Partners & Franchise

```gherkin
Given I open Partners & Franchise
Then I see an offer for independent masters' workplaces
And I see an offer for brands/manufacturers (ads, video, events)
And I see the franchise model (one brand, booking, app, clients, standards)
And I see the expansion geography through to Europe
```

---

## Contacts, data, social

### AC-CONTACT-01 — Contacts block

```gherkin
Given I open Contacts
Then the title is "Let's Talk"
And the subtitle is "Need help with your car? We're here for you."
And address shows Plaasi tn 2, Tallinn
And amenities include free parking, opening hours, lounge, online booking
And an interactive Google Map shows the location
```

### AC-DATA-01 — Canonical contact data

```gherkin
Given I inspect visible contact details and tel/mailto links
Then phone is +372 5565 1117 with a working tel: link
And email is teamjabpoint@gmail.com with a working mailto: link
And opening hours communicate 10.00–21.00 with 24/7 stated as a future goal
And values are driven from the shared data module (not hard-coded only in one shell)
```

### AC-SOCIAL-01 — Social profiles

```gherkin
Given I view social links in footer or contacts
Then Instagram points to https://www.instagram.com/jabpoint_ou
And TikTok points to https://www.tiktok.com/@jabpoint
And Facebook and Telegram links are present once URLs are confirmed
When I open each link
Then it loads the expected external profile (or is hidden if href empty)
```

### AC-CHAT-01 — Quick contacts

```gherkin
Given I am on mobile or desktop
When I look for quick contact actions
Then I can start a phone call in one tap/click
And I can open WhatsApp and/or Telegram chat entry points
```

### AC-BOOK-01 — Booking CTA

```gherkin
Given Book Now is shown in header and hero
When I activate Book Now
Then I reach either an embedded booking module or an approved external booking URL/anchor
And the path works on both desktop and mobile shells
```

---

## SEO, a11y, performance

### AC-SEO-01 — Semantics

```gherkin
Given I inspect the document structure
Then landmark regions header, main, and footer exist
And major blocks are sectioned with accessible names
```

### AC-SEO-02 — Open Graph

```gherkin
Given I inspect document head
Then og:title, og:description, og:image, and og:url (or equivalent) are present
And shared preview text matches approved brand messaging
```

### AC-SEO-03 — Keyword relevance

```gherkin
Given I review visible copy and meta description
Then the site meaningfully covers self-service Tallinn, automotive platform Tallinn, car service Tallinn, detailing Tallinn, and car repair space themes without keyword stuffing
```

### AC-PERF-01 — Lighthouse gates

```gherkin
Given a production build tested on mobile Lighthouse
Then Performance score is >= 90
And Accessibility score is >= 90
And SEO score is >= 90
```

### AC-MEDIA-01 — Media optimisation

```gherkin
Given content images and below-fold media
Then images are served as WebP or another approved modern format
And video uses compressed WebM and/or MP4
And below-fold media is lazy-loaded
```

---

## Cross-shell parity

### AC-SHELL-01 — Desktop/mobile parity

```gherkin
Given the site is viewed below the mobile breakpoint and above the desktop breakpoint
Then both shells expose the Stage 1 sections and canonical contacts
And Book Now and language switching work in both shells
```

---

## Trace to requirements (summary)

| AC | Primary FR / NFR |
|----|------------------|
| AC-NAV-01 | FR-01 |
| AC-HERO-01 | FR-02, FR-14 |
| AC-FACTS-01 | FR-03 |
| AC-SVC-01 | FR-04 |
| AC-COMM-01 | FR-05 |
| AC-PLAT-01 | FR-06 |
| AC-HOW-01 | FR-07 |
| AC-PART-01 | FR-08 |
| AC-CONTACT-01 | FR-09 |
| AC-DATA-01 | FR-10 |
| AC-SOCIAL-01 | FR-11 |
| AC-CHAT-01 | FR-12 |
| AC-BOOK-01 | FR-13 |
| AC-SEO-01 | FR-15 |
| AC-SEO-02 | FR-16 |
| AC-SEO-03 | FR-17 |
| AC-PERF-01 | NFR-01–03 |
| AC-MEDIA-01 | NFR-04–06 |
| AC-SHELL-01 | NFR-07, UR-12 |
