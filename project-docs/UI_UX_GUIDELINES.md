# UI/UX Guidelines & Reference-Matching Specification

> **Reference URL:** `https://wp.codeefly.net/ashik/`  
> **Scope:** Complete vertical section flow, layout geometry, interaction patterns, responsive adaptation rules, and anti-drift standards.  
> **Visual Tokens:** Defined in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) (do not duplicate raw HEX/font tables here).

---

## 1. Golden Reference-Matching Rules

1. **Preserve Structure Before Styling:** Match Ashik's container widths (`1320px`), inset rounded bands (`#f6f7f9` and `#000000` with `30px` radius and `80px` desktop side margins), column splits, and whitespace rhythm (`120px` section gaps) before tuning micro-details.
2. **Replace Identity, Never the Architecture:** Swap "Ashik", "Jane Cooper", "Darlene Robertson", agency stats, and stock art strictly with Ayesha Ahmad Khan's verified identity, copy, and photography.
3. **No Generic AI Website Patterns:** Never add floating gradient blobs, glassmorphic cards, neon dark-mode hero swaps, stock SaaS feature grids, decorative fake dashboards, or unsolicited bento grids.
4. **Preserve Image Aspect Ratios & Framing:** Never stretch, distort, or awkwardly crop portraits or project screenshots. Match Ashik's framing (`~1:1.15` Hero portrait, `~1:1.26` & `~1:1.64` About portraits, `3:2` Project frames, `1:1` Testimonial avatars) using `object-cover` and deliberate focal positioning.
5. **Motion Restraint:** Recreate only Ashik's verified motion vocabulary (sticky header slide-down, hero/about scroll transition, headline reveal, subtle card/arrow hover, project showcase transition, counter count-up, circular scroll-progress back-to-top). Do not invent gratuitous 3D tilts or bounce effects.

---

## 2. Complete Single-Page Section Order & Layout Blueprint

The vertical sequence strictly matches both `PROJECT_OVERVIEW.pdf` (p. 1) and the verified live Ashik DOM:

```text
  01. Header (Absolute over Hero -> Fixed Sticky on scroll)
  02. Hero (#home) — White canvas, 2-col split, decorative lime geometry
  03. About (#about) — Rounded #f6f7f9 inset band, 2-col split + staggered visuals + experience card
  04. Services (#services) — White canvas, centered header + all 5 services (preferred 3+2 desktop grid)
  05. Projects (#projects) — White canvas, 3:2 rounded preview + timeline rail (preferred 3 featured + 7 archive)
  06. Testimonials (#testimonials) [HIDDEN UNTIL VERIFIED] — Rounded #000000 inset band + white cards
  07. Counters (#counters) [HIDDEN UNTIL VERIFIED] — White canvas, horizontal stat strip
  08. Contact (#contact) — Rounded #f6f7f9 container, 2-col split + elevated white contact form card
  09. Footer (<footer>) — #f6f7f9 surface, giant CTA headline + brand/links + copyright bar
[Global Floating Widget: Circular Scroll-Progress Back-to-Top Button]
```

> **Initial Implementation Exclusions:** Ashik's fullscreen `#preloader` is **omitted** from the initial implementation (`CD-03`). Sections 06 (Testimonials) and 07 (Counters) **must remain hidden** until verified content is supplied (`CD-02`).

### Section 01 — Header (`<header>`)

- **Default State:** `position: absolute; top: 0; left: 0; width: 100%; padding-top: 30px; z-index: 20;` transparent over the white Hero canvas.
- **Sticky State (triggered after scrolling past ~100–150px):** Transitions to `position: fixed; top: 0; left: 0; right: 0; padding: 15px 0; background: #ffffff; box-shadow: 0 4px 14px rgba(0,0,0,0.15); z-index: 999;` with a `0.5s ease-in-out` slide-down entrance.
- **Desktop Layout (Left -> Center -> Right):**
  - **Left:** Ayesha brand logo/wordmark (`max-width: ~120–160px`, links to `#home`).
  - **Center:** Uppercase anchor links (`HOME` -> `#home`, `ABOUT` -> `#about`, `SERVICES` -> `#services`, `PROJECTS` -> `#projects`, `CONTACT` -> `#contact`). **Note:** Omit Ashik's dead `BLOG` link (`#blog`) per `PRD.md` **PD-02**.
  - **Right:** Secondary outline CTA button (`Contact Me` -> `#contact`).
- **Mobile Layout (`<= 991px`):** Center links and right CTA hide (`display: none`); a `51px × 51px` circular hamburger button appears on the right.

### Section 02 — Hero (`#home`)

- **Canvas:** `#ffffff`, full-width section with `1320px` inner container, generous top padding clearing the absolute header (`~150px–180px` on desktop).
- **Desktop Grid:** 2-column split matching Ashik (`~50%/50%` at `>=1400px`, `~58%/42%` at `1200–1399px`):
  - **Left Column:**
    - Uppercase Display `<h1>` introducing Ayesha Ahmad Khan (e.g., `HELLO, I'M AYESHA AHMAD KHAN` — final concise line-break wording to be approved so it sits cleanly in 2–3 lines at `80px`).
    - Role & positioning sub-statement (`WordPress Developer • Elementor Expert` + verified 2–3 line positioning summary).
    - Horizontal CTA Button Group: Primary filled lime CTA + Secondary outline CTA (final CTA targets per **PD-05**: e.g., `Contact Me` / `View Projects` or `Download CV`).
  - **Right Column:**
    - Approved portrait of Ayesha (`~480–510px` wide on desktop, aspect ratio `~1:1.15`, clean framing without jarring CSS clip distortion).
    - Behind portrait: Ashik-style `.banner-shap` neon lime `#cdfe7d` geometric circle/semicircle accent and fine circular ring SVG.
  - **Explicit Omissions:** Match live Ashik — no social icons and no scroll-down mouse indicator inside Hero.
- **Scroll Behavior (Desktop):** Recreate the clean layered transition from Hero into the rounded `#f6f7f9` About band using lightweight native CSS (`position: sticky` or smooth scroll elevation) without installing GSAP at this stage (disable sticky layering below `992px` and under `prefers-reduced-motion`).

### Section 03 — About (`#about`)

- **Container:** Rounded `#f6f7f9` surface card (`border-radius: 30px`), inset `80px` from left/right viewport edges on `>=1400px` (`40px` on `xl`, `15px` on `<=991px`), `padding-top: 120px`, `overflow: hidden`.
- **Desktop Grid:** 2 equal columns (`50% / 50%`):
  - **Left Column (`order-2` mobile, `order-1` desktop):**
    - Eyebrow: `ABOUT ME` (uppercase, `18px`, `700`).
    - Section `<h2>`: Concise professional headline for Ayesha's WordPress & Elementor craft.
    - Verified bio copy covering approach, strengths, and education (`BS Computer Science — PUCIT, 2020–2024`).
    - 2-column feature/strength checklist (3 items per column) with crisp dark checkmark icons (`#222222`).
  - **Right Column (`order-1` mobile, `order-2` desktop):**
    - Two staggered visual sub-columns (`50% / 50%` on `>=576px`) with subtle contrasting scroll parallax (`0.9` vs `1.1` on desktop only):
      - **Sub-col 1:** Primary rounded image (`border-radius: 30px`, `~1:1.26`) stacked directly above the floating white **Experience Counter Card** (`.about-counter`: `#ffffff`, `border-radius: 30px`, `padding: 30px 40px`, card shadow) displaying verified experience figure (e.g., `5+` *once wording is verified*) + label.
      - **Sub-col 2:** Tall staggered second rounded image (`border-radius: 30px`, `~1:1.64`, offset downward `mt-16` / `63px`). *(Note: If only one portrait is supplied by Ayesha, confirm with stakeholder whether to pair it with an approved workspace/Elementor preview shot or adapt cleanly to a single-image + stat-card right column.)*

### Section 04 — Services (`#services`)

- **Canvas:** `#ffffff`, `1320px` container.
- **Section Header:** Centered eyebrow (`SERVICES`) + centered `<h2>` title.
- **Card Grid & 5-Service Layout (All 5 Retained):**
  - Live Ashik displays 4 cards in 1 row (`4 cols` desktop -> `2 cols` tablet -> `1 col` mobile, `30px` gap).
  - **Confirmed Scope (`CD-01`):** Retain **all 5 verified services**:
    1. WordPress Website Development
    2. Elementor Website Design
    3. Redesign & Rebranding
    4. WooCommerce Development
    5. Speed, SEO, Maintenance & Security
  - **Preferred Desktop Layout (Proposed Decision — Pending Stakeholder Approval `PD-03`):** Preserve exact Ashik `.service-item` card anatomy (`#ffffff`, `30px` radius, `40px` padding, soft shadow, `65×65px` `#cdfe7d` icon square, title, short description, hover-animated long arrow) in a **3+2 desktop grid** (3 cards on row 1 + 2 centered cards on row 2 at `lg+`, `2 cols` at `md`, `1 col` on mobile), avoiding cramped 5-column cards.
  - **Interaction:** Subtle hover lift + smooth directional arrow translation/rotation (`0.35s ease`). Clicking a service card's arrow can optionally scroll smoothly to `#contact` and pre-select that service subject (UX enhancement consistent with conversion goal).

### Section 05 — Projects (`#projects`)

- **Canvas:** `#ffffff`, `margin-top: 120px`.
- **Card Anatomy (Exact Ashik Match):** Two equal columns (`50% / 50%` on `>=992px`):
  - **Left Column:** Full-width rounded (`30px`) real project screenshot at `3:2` aspect ratio (`~570×380px`).
  - **Right Column (`.project-item`):** Left vertical timeline border (`1px solid #cccccc`, `padding: 34px 0 50px 30px`, `margin-left: 30px`) with `6px` circular dot markers (`::before` / `::after`), project `<h3>` title, concise scope description, 3-item verified role/outcome bullet list, and external `Visit Live Site` link (rendered only when an approved live URL exists).
- **Preferred 10-Project Showcase Approach (Proposed Decision — Pending Stakeholder Approval `PD-04`):**
  - Live Ashik showcases 3 project items across a wide horizontal desktop track. Scaling horizontal panning to 10 items (`1000%` width) would cause scroll fatigue and accessibility issues, and GSAP is not being installed at this stage (`CD-04`).
  - **Preferred Approach (`3 Featured + 7-Project Archive`):**
    1. **3 Featured Projects:** Render 3 flagship projects using Ashik's full two-column `3:2` screenshot + right timeline rail presentation (interactive stepped/scroll-snap horizontal showcase or clean stacked flagship showcase using pure CSS/React, collapsing to vertical stack `<768px`).
    2. **7-Project Archive:** Immediately below the 3 featured showcases, present the remaining 7 verified projects in a clean, scannable archive grid (or expandable archive section) inheriting Ashik's exact `30px` rounded `3:2` thumbnails, `Spline Sans` hierarchy, `#cdfe7d` hover accents, and external live links.

### Section 06 — Testimonials (`#testimonials`) — Hidden Until Verified

- **Visibility Rule (`CD-02`):** **Must remain hidden (not rendered in the DOM)** until verified, client-approved testimonials are supplied in `src/data/testimonials.js`.
- **Container (Once Enabled):** Rounded `#000000` inset band (`border-radius: 30px`, `80px` desktop side margins, `padding: 120px 30px 65px`), with subtle left-edge black-to-transparent gradient fade (`300px`) on desktop.
- **Carousel Behavior (Once Enabled):** Smooth CSS scroll-snap + React horizontal carousel (no Swiper package installed at this stage) of white cards (`#ffffff`, `20px` radius, `padding: 40px 60px 60px`) with active slide elevating upward (`-30px`, `0.7s` transition) and accessible keyboard/button navigation controls.

### Section 07 — Counters (`#counters`) — Hidden Until Verified

- **Visibility Rule (`CD-02`):** **Must remain hidden (not rendered in the DOM)** until verifiable career metrics are supplied and approved (`PA-01`). Never display Ashik's fake agency stats.
- **Layout (Once Enabled):** Clean horizontal flex row on `#ffffff` inside `1320px` container matching the exact count of verified metrics.
- **Interaction (Once Enabled):** Numbers count up smoothly from `0` to target value once when scrolled into view via native `IntersectionObserver` + `requestAnimationFrame`. Under `prefers-reduced-motion`, display final verified values immediately.

### Section 08 — Contact (`#contact`)

- **Container:** Inside `1320px` container, rounded `#f6f7f9` card (`border-radius: 30px`, `padding: 80px 60px` desktop, `padding: 48px 15px` mobile).
- **Desktop Grid:** 2 columns (`50% / 50%`):
  - **Left Column:** Eyebrow (`CONTACT`), `<h2>` headline encouraging inquiries, brief availability note, verified contact details (email if confirmed, optional location), and `40×40px` white square social links (`border-radius: 5px`, `#cdfe7d` hover).
  - **Right Column:** Elevated white form card (`.contact-form`: `#ffffff`, `border-radius: 30px`, `padding: 60px 40px` desktop, soft card shadow). *(Note: Ashik's CSS pulls `.contact-form` up via `margin-top: -190px` on desktop when overlapping the prior section; adjust overlap cleanly so it never collides with Projects while Testimonials and Counters remain hidden.)*
- **Form Fields & Implementation Stage (`CD-05`):**
  - *Visual Design & Client Validation (Initial Build):* Prepare fields for Full Name (required), Email Address (required), Project Type / Subject (optional/selectable), Message (required), plus hidden honeypot field, with inline validation feedback on blur/submit.
  - *Email Delivery (Deferred Pending `PA-05`):* **Live form submission/email delivery must remain unimplemented** until the destination email address and delivery provider are confirmed. Do not fake a successful email send when no provider is wired; display a clear non-deceptive notice or disabled/pending delivery handling if tested before backend confirmation.

### Section 09 — Footer (`<footer>`)

- **Surface:** Full-width `#f6f7f9` background, `margin-top: 120px`, `padding: 75px 0 30px`.
- **Top Row (2-column split):**
  - **Left (`~42%`):** Giant uppercase CTA `<h2>` (`Let's WORK Together!`, `80px/96px` desktop) with decorative star accent + confirmed social icon squares.
  - **Right (`~33%`, offset):** Ayesha logo/wordmark, concise 2-line bio summary, and quick single-page anchor links (`Home`, `About`, `Services`, `Projects`, `Contact`).
- **Bottom Bar:** Clean hairline divider (`#d9d9d9`), left copyright (`© [Year] Ayesha Ahmad Khan. All Rights Reserved.`), right optional back-to-top link or verified legal/email link. **Strictly omit Ashik's demo links ("Index 2 Dark", "Index 2", "Index Dark", "Sample Page").**

### Global Utility Widget

- **Scroll-Progress Back-to-Top Button (`.progress-wrap`):** Fixed bottom-right (`24px–30px` inset), `50px × 50px` circular button with an SVG progress stroke tracing document scroll percentage (`0–100%`). Fades in after scrolling `> 300px`; clicking scrolls smoothly to `#home`.
- **Preloader (`CD-03`):** **Omitted from the initial implementation.**

---

## 3. Interaction & Motion Specification

| Interaction | Reference Trigger | Desktop Behavior (Zero Extra Packages) | Mobile / Reduced-Motion Behavior |
| :--- | :--- | :--- | :--- |
| **Sticky Header** | Scroll `Y > 120px` | Slides down (`0.5s ease-in-out`) with white surface & drop shadow | Same smooth fixed transition; instant state change under reduced motion |
| **Hero Headline Reveal** | Initial page mount | CSS masked upward line/word reveal (`~0.6s`, staggered) | Instant render under reduced motion |
| **Hero -> About Transition** | Scroll through Hero | Subtle CSS sticky/elevation transition into rounded About band | Normal vertical flow (`< 992px` & reduced motion) |
| **About Dual-Image Motion** | Scroll into view | Clean staggered static offset (`mt-16`) + subtle `IntersectionObserver` reveal | Static aligned cards (`< 992px` & reduced motion) |
| **Service Card Hover** | Pointer hover / focus | Subtle lift + arrow slides/rotates smoothly (`0.35s`) | Tap feedback only; no sticky hover |
| **Projects Showcase** | Click / scroll-snap / keyboard | Preferred: 3 featured showcases + 7-project archive (`PD-04`) | Vertical stack (`<= 767px`) with `width: 100%` |
| **Counters Count-Up** *(Hidden Until Verified)* | Scroll into viewport (once) | Native `requestAnimationFrame` interpolation (`~1.2s ease-out`) once enabled | Immediate final number under reduced motion |
| **Mobile Drawer** | Click `.toggle-sidebar` | N/A (`>= 992px`) | Backdrop fades in (`rgba(0,0,0,0.9)`), `300px` dark panel (`#0f0f13`) slides in from left; closes on link click, backdrop click, or `Esc`; traps focus & locks body scroll |
| **Back-to-Top Ring** | Continuous scroll | SVG `stroke-dashoffset` updates smoothly via `requestAnimationFrame` | Instant jump to top under reduced motion |

---

## 4. Responsive Breakpoint Matrix

Aligned directly to live Ashik's verified CSS breakpoints:

| Viewport Tier | Width Range | Container / Margins | Header | Hero | About | Services (All 5) | Projects (Preferred `3 + 7`) | Counters *(Hidden Until Verified)* | Contact & Footer |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Desktop XXL** | `>= 1400px` | `1320px` max, `80px` band inset | Full nav + CTA | 2-col (`50/50`), H1 `80px` | 2-col + 2 staggered images | `3+2` grid *(proposed)* | 3 featured + 7 archive grid *(proposed)* | 4-col row (when enabled) | 2-col + elevated form |
| **Desktop XL** | `1200–1399px` | `1140px` max, `40px` band inset | Full nav + CTA | 2-col (`58/42`), H1 `72px` | 2-col + 2 staggered images | `3+2` grid *(proposed)* | 3 featured + 7 archive grid *(proposed)* | 4-col row (when enabled) | 2-col + elevated form |
| **Tablet Landscape** | `992–1199px` | `960px` max, `40px` band inset | Full nav + CTA | 2-col, H1 `60px` | 2-col | `3+2` or 2-col grid | 3 featured (2-col) + 2-col archive | 2×2 or row (when enabled) | 2-col, safe vertical spacing |
| **Tablet Portrait** | `768–991px` | `720px` max, `15px` band inset | Logo + `51px` hamburger toggle | Stacked (text above portrait), H1 `55px` | Stacked (visuals above text) | 2-col grid (last card centered/full) | Stacked vertical (`100%`) + 2-col archive | Vertical centered stack (when enabled) | Single-col stack (no overlap) |
| **Mobile Landscape** | `576–767px` | `540px` max, `15px` band inset | Logo + hamburger | Stacked, H1 `42px` | Stacked (2 sub-cols side-by-side) | 1-col stack | Vertical stack (`100%`) | Vertical centered stack (when enabled) | Single-col stack, `padding: 40px 20px` |
| **Mobile Portrait** | `<= 575px` (`375px` target) | `100%` (`15px` gutter) | Logo + hamburger | Stacked, H1 `36–40px` (3 lines, no overflow) | Stacked (1-col images) | 1-col stack, `padding: 28px` | Vertical stack, timeline `margin-left: 0` | Vertical centered stack (when enabled) | Single-col stack, `padding: 32px 16px` |

---

## 5. Accessibility & Usability Standards

- **Skip Link:** Include a visually hidden "Skip to main content" link (`#home`) as the first focusable element inside `<body>`.
- **Landmarks & Headings:** One `<header>`, one `<main>`, one `<footer>`, one `<h1>` (Hero), sequential `<h2>` -> `<h3>` per section, descriptive `aria-label` on `<nav>` and icon-only buttons.
- **Focus Visibility:** Never apply `outline: none` without a clear `:focus-visible` replacement ring (e.g., `outline: 2px solid #222222; outline-offset: 2px;` on light surfaces and `#cdfe7d` on `#000000` dark surfaces). Note that Ashik's CSS strips input focus outlines — our build **must** restore accessible focus rings.
- **Zero Horizontal Scroll:** Enforce overflow containment on animated/pinned sections so no viewport from `320px` to `2560px` triggers horizontal page scrollbars.
- **Touch Targets:** Minimum `44px × 44px` hit areas on mobile nav links, social icons (pad `40px` visual boxes cleanly), carousel controls, and form controls.
