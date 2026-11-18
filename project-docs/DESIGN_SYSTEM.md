# Design System Specification

> **Source of Truth:** Live Ashik Reference (`https://wp.codeefly.net/ashik/`) inspected via DOM & computed styles on desktop (`1440px`), tablet (`768px`), and mobile (`375px`).  
> **Direction Status:** The verified live Ashik color palette below is adopted as the **proposed design direction** (pending final stakeholder confirmation `PD-01`). Per `PROJECT_OVERVIEW.pdf` (p. 2), the provisional HEX values printed in the PDF (`#F7EEEE`, `#205D5A`, `#F0783E`, `#F4C451`) were explicitly labeled as *working draft tokens from an earlier direction, not verified Ashik values*. Every verified token below is sampled directly from the live Ashik stylesheets and computed DOM. Any value that could not be verified on the live demo or still awaits stakeholder approval is explicitly tagged **[UNVERIFIED]**, **[PROPOSED]**, or **[PENDING APPROVAL]**.

---

## 1. Color System

### 1.1 Verified Live Ashik Palette — Proposed Design Direction (`:root` Custom Properties)

Extracted directly from the live Ashik theme CSS (`ashik-core.css` and computed styles) and documented here as the **proposed color direction** (pending final stakeholder sign-off `PD-01`):

| Token Name | Ashik CSS Variable | Verified HEX / Value | Role & Usage |
| :--- | :--- | :--- | :--- |
| `--color-accent-primary` | `--theme` | `#cdfe7d` | Primary brand accent (vibrant lime/chartreuse): Primary CTA fill, secondary button hover fill, `.service-icon` square background, social icon hover fill, nav link hover accent, hero geometric shape fill. |
| `--color-accent-secondary` | `--theme-2` | `#905efb` | Secondary violet accent declared in Ashik `:root` (reserve only where present in verified reference details; do not overuse). |
| `--color-bg-canvas` | `--white` | `#ffffff` | Main page background (`body`), Hero canvas, Services canvas, Projects cards, Counters canvas, sticky header background, Testimonial slide cards, floating Contact form card. |
| `--color-bg-surface` | `--gray` (`.gray-bg`) | `#f6f7f9` | Soft light-gray rounded section containers: About section wrapper, Contact outer card, Footer background. |
| `--color-bg-contrast` | `--black` | `#000000` | High-contrast dark band for the Testimonials section wrapper (`.testimonial-bg`), Hero `<h1>` text, counter numbers, primary button label text. |
| `--color-text-heading` | `--dark` | `#222222` | Primary headings (`h2`, `h3`), eyebrow tags (`.sub-title`), navigation links, About checklist icons, Testimonial quote text, Footer CTA headline. |
| `--color-text-body` | `--text` | `#5e5f63` | Default body copy (`p`), section descriptions, service descriptions, testimonial client roles. |
| `--color-text-muted` | `--gray-4` | `#5a5a5a` | Secondary muted labels / captions. |
| `--color-border-subtle` | `--gray-2` | `#cccccc` | Projects timeline left vertical border (`1px solid #cccccc`) and subtle structural dividers. |
| `--color-border-light` | `--gray-3` | `#d9d9d9` | Light divider lines / hairline borders. |
| `--color-border-button` | *(computed)* | `rgba(0, 0, 0, 0.2)` | Outline button border (`.theme-btn`) and primary button hover border. |
| `--color-rating` | `--rating` | `#ffd234` | 5-star testimonial rating icons (amber gold). |
| `--color-bg-drawer` | *(computed)* | `#0f0f13` | Mobile offcanvas slide-out drawer background (`.main-menu-mobile`). |
| `--color-backdrop` | *(computed)* | `rgba(0, 0, 0, 0.9)` | Mobile drawer backdrop overlay (`.menu-backdrop`). |

#### Additional Ashik `:root` Tokens (Unused in Light Default Demo)

These exist in Ashik's CSS for alternate/dark demo variants and should **not** be introduced into the light single-page build unless dark mode is later approved:
- `--dark-2: #3a3b5b`, `--dark-3: #0d0d0d`, `--dark-4: #1c1c1c`, `--bg: #eadfce`, `--box-shadow-white: 0px 0px 60px 0px rgba(255, 255, 255, 0.05)`.

### 1.2 Deprecated Provisional Palette from `PROJECT_OVERVIEW.pdf`

For auditability, the following PDF draft values are **superseded** by the verified live Ashik tokens above unless the stakeholder explicitly instructs a brand-color override (**PD-01**):

| PDF Draft Role | PDF Draft HEX | Status | Verified Ashik Equivalent |
| :--- | :--- | :--- | :--- |
| Page Background | `#F7EEEE` | **Superseded (Unverified Draft)** | `#ffffff` canvas + `#f6f7f9` rounded section cards |
| Surface / Card | `#FFFFFF` | Confirmed | `#ffffff` |
| Primary Text | `#151719` | **Superseded (Close)** | `#000000` (Hero H1) / `#222222` (Headings) / `#5e5f63` (Body) |
| Teal Accent | `#205D5A` | **Superseded (Not in Ashik)** | `#cdfe7d` (Primary Lime Accent) |
| Orange Accent | `#F0783E` | **Superseded (Not in Ashik)** | None in default light Ashik |
| Yellow Detail | `#F4C451` | **Superseded (Close)** | `#ffd234` (Testimonial stars) |

### 1.3 Accessibility & Contrast Guardrails

- `#000000` text on `#cdfe7d` (Primary button) achieves **~17.3:1** contrast (passes WCAG AAA).
- `#222222` text on `#ffffff` and `#f6f7f9` achieves **> 14:1** contrast (passes WCAG AAA).
- `#5e5f63` body text on `#ffffff` achieves **~6.4:1** and on `#f6f7f9` achieves **~5.9:1** (passes WCAG AA).
- **Important Contrast Warning:** Live Ashik changes desktop navigation link text to `#cdfe7d` on `#ffffff` on hover, which has **low contrast (~1.2:1)** against white. During implementation, preserve the lime accent visual cue via a subtle lime underline, pill highlight, or darkened text + lime indicator — **or confirm with stakeholder** whether strict Ashik hover color or WCAG-compliant accent hover takes priority (**DS-01**).

---

## 2. Typography System

### 2.1 Font Families (Verified from Live Site)

| Role | Font Family | Verified Weights | Loading Strategy in Next.js |
| :--- | :--- | :--- | :--- |
| **Primary Display & Body (`--font-primary`)** | `"Spline Sans", sans-serif` | `300, 400, 500, 600, 700` *(Note: Ashik CSS requests up to 800; verify Google Fonts max weight — `Spline Sans` supports 300–700 on Google Fonts)* | `next/font/google` (`Spline_Sans`) attached via CSS variable `--font-spline-sans` |
| **Secondary Utility (`--font-secondary`)** | `"Poppins", sans-serif` | `300, 400, 500, 600, 700` | `next/font/google` (`Poppins`) attached via CSS variable `--font-poppins` (load only if needed by specific utility elements) |

> **Verification Note on Font Weights:** Live Ashik's stylesheet declares weights `300–800` for `Spline Sans`, while Google Fonts' official `Spline Sans` variable/static family spans `300–700`. All sampled headings on the live page compute to `font-weight: 700`, so `300, 400, 500, 600, 700` covers 100% of verified computed styles.

### 2.2 Type Scale (Verified Computed Styles)

| Element / Token | Font Family | Weight | Desktop (`>=1200px`) Size / Line-Height | Tablet (`768px`) Size / Line-Height | Mobile (`375px`) Size / Line-Height | Transform / Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Spline Sans | `700` | `80px` / `96px` (`1.2`) | `55px` / `65px` | `36px–40px` / `50px` | `uppercase`, `#000000` |
| **Footer CTA H2** | Spline Sans | `700` | `80px` / `96px` (`1.2`) | `52px` / `62px` *[ESTIMATED]* | `36px` / `44px` *[ESTIMATED]* | `uppercase`, `#222222` |
| **Section H2 (`.section-title`)** | Spline Sans | `700` | `60px` / `70px` (`1.17`) | `44px` / `52px` *[ESTIMATED]* | `32px` / `40px` *[ESTIMATED]* | Title/Sentence, `#222222` (or `#ffffff` on dark band) |
| **Project Card H3** | Spline Sans | `700` | `36px` / `50px` (`1.39`) | `28px` / `38px` *[ESTIMATED]* | `24px` / `32px` *[ESTIMATED]* | Title Case, `#222222` |
| **Service Card H3** | Spline Sans | `700` | `25px` / `40px` (`1.6`) | `22px` / `32px` *[ESTIMATED]* | `22px` / `30px` *[ESTIMATED]* | Title Case, `#222222` |
| **Counter Value (H4)** | Spline Sans | `700` | `34px` / `50px` | `30px` / `40px` *[ESTIMATED]* | `28px` / `38px` *[ESTIMATED]* | Tabular nums, `#000000` |
| **Section Eyebrow (`.sub-title`)** | Spline Sans | `700` | `18px` / `35px` | `16px` / `28px` *[ESTIMATED]* | `15px` / `24px` *[ESTIMATED]* | `uppercase`, `#222222` (or `#cdfe7d` / `#ffffff` on dark) |
| **Testimonial Quote** | Spline Sans | `400` | `18px` / `30px` | `16px` / `28px` *[ESTIMATED]* | `16px` / `26px` *[ESTIMATED]* | Normal, `#222222` |
| **Button Label** | Spline Sans | `600` | `18px` / `21.6px` (`1.2`) | `16px` / `20px` *[ESTIMATED]* | `16px` / `20px` *[ESTIMATED]* | `capitalize`, `#000000` |
| **Nav Links** | Spline Sans | `500` | `16px` / `24px` | Mobile drawer (`16px`) | Mobile drawer (`16px`) | `uppercase`, `#222222` |
| **Body Copy** | Spline Sans | `400` | `16px` / `28px` (`1.75`) | `16px` / `28px` | `15px` / `26px` *[ESTIMATED]* | Normal, `#5e5f63` |
| **Testimonial Client Role** | Spline Sans | `400` | `15px` / `24px` | `15px` / `24px` | `14px` / `22px` *[ESTIMATED]* | Normal, `#5e5f63` |

> Values marked *[ESTIMATED]* indicate intermediate tablet/mobile steps interpolated from Ashik's verified desktop and mobile Hero scale; confirm exact computed breakpoints during Phase 1/Phase 2 browser verification against the live reference.

---

## 3. Spacing, Layout Geometry & Elevation

### 3.1 Containers & Page Rhythm (Verified)

| Token | Value | Application |
| :--- | :--- | :--- |
| `--container-max` | `1320px` | Primary content container (`>= 1400px` viewport), matching Bootstrap 5 XL/XXL grid. |
| `--container-gutter` | `15px` (left & right) | Standard horizontal container padding. |
| `--section-gap-y` | `120px` (`mt-120`) | Standard vertical spacing between major top-level sections on desktop. |
| `--section-pad-y` | `100px – 120px` (`pt-120`) | Internal top/bottom section padding on desktop (reduces proportionally on tablet/mobile). |
| `--band-margin-x-desktop` | `80px` (`ml-80 mr-80`) | Horizontal inset margin for full-bleed rounded bands (About `#f6f7f9` card, Testimonials `#000000` band). |
| `--band-margin-x-xl` | `40px` (`ml-xl-40 mr-xl-40`) | Inset band margin below `1400px` / `1200px`. |
| `--band-margin-x-mobile` | `15px` (`ml-md-15 mr-md-15`) | Inset band margin on tablet/mobile. |
| `--grid-gutter` | `30px` | Gap between service cards and two-column section grids. |
| `--header-height-default` | `90px – 100px` (`pt: 30px`) | Initial unscrolled header height (`position: absolute`). |
| `--header-height-sticky` | `~75px` (`py: 15px`) | Scrolled fixed header height (`position: fixed`). |

### 3.2 Border Radii (Verified)

| Token | Value | Used On |
| :--- | :--- | :--- |
| `--radius-section` / `--radius-card-lg` | `30px` (`br-30`) | About band, Testimonials dark band, Contact outer card, Service cards, About stat counter card, Contact form card, About & Project images. |
| `--radius-card-md` | `20px` | Testimonial slide cards (`.testimonial-item`). |
| `--radius-button` | `15px` | Primary and Secondary CTA buttons (`.theme-btn`, `.theme-btn-with-bg`). |
| `--radius-control` | `10px` | Service icon square badge (`.service-icon`), form inputs and textareas. |
| `--radius-social` | `5px` | Social media icon buttons (`40px × 40px`). |
| `--radius-full` | `9999px` (`50%`) | Testimonial avatars (`60px × 60px`), mobile toggle button (`51px × 51px`), scroll-to-top button (`50px × 50px`), timeline marker dots (`6px × 6px`). |

### 3.3 Shadows & Elevation (Verified)

| Token | Value | Used On |
| :--- | :--- | :--- |
| `--shadow-card` | `0px 0px 60px 0px rgba(0, 0, 0, 0.05)` | Service cards (`.service-item`), About experience counter (`.about-counter`), floating Contact form card (`.contact-form`). |
| `--shadow-header-sticky` | `0px 4px 14px rgba(0, 0, 0, 0.15)` | Sticky fixed header when scrolled past Hero. |

---

## 4. Component Design Tokens & Anatomy

### 4.1 Buttons

Both button variants share `display: inline-flex; align-items: center; gap: 10px; padding: 20px 30px; border-radius: 15px; font-size: 18px; font-weight: 600; line-height: 21.6px; text-transform: capitalize; transition: all 0.4s ease-in-out;`.

| Variant | Default State | Hover State |
| :--- | :--- | :--- |
| **Primary Filled (`.theme-btn-with-bg`)** | `bg: #cdfe7d`, `text: #000000`, `border: 1px solid #cdfe7d` | `bg: transparent`, `text: #222222`, `border: 1px solid rgba(0, 0, 0, 0.2)` |
| **Secondary Outline (`.theme-btn`)** | `bg: transparent`, `text: #000000`, `border: 1px solid rgba(0, 0, 0, 0.2)` | `bg: #cdfe7d`, `text: #000000`, `border: 1px solid rgba(205, 254, 125, 0.2)` |

### 4.2 Service Card (`.service-item`)

- **Surface:** `#ffffff`, `border-radius: 30px`, `padding: 40px`, `box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05)`.
- **Icon Badge (`.service-icon`):** `65px × 65px`, `background: #cdfe7d`, `color: #000000`, `border-radius: 10px`, centered icon (`~32px–40px` crisp SVG replacing proprietary icon font).
- **Content:** H3 title (`25px/40px`, `700`), concise paragraph (`16px/28px`, `#5e5f63`), directional long-arrow indicator that translates/rotates subtly on hover.

### 4.3 Project Showcase Item (`.project-item-container`)

- **Surface:** `#ffffff`, `padding: 30px 0`.
- **Image Frame (Left Column):** `border-radius: 30px`, `3:2` aspect ratio (`~570px × 380px` desktop), `object-fit: cover`, full column width.
- **Timeline Details (Right Column `.project-item`):** `border-left: 1px solid #cccccc`, `padding: 34px 0 50px 30px`, `margin-left: 30px`, `6px × 6px` circular dot markers (`::before` / `::after`) on the left timeline rail. Contains H3 title (`36px/50px`), description, verified role/outcome bullet points, and external live-site link (only if live URL is supplied).

### 4.4 Testimonial Slide Card (`.testimonial-item`) — Hidden Until Verified Content Supplied

> **Visibility Rule:** Must remain **hidden (not rendered)** in the initial build until client-approved testimonials are supplied.

- **Outer Band:** `#000000`, `border-radius: 30px`, `padding: 120px 30px 65px`, horizontal inset margins `80px` (desktop), left edge `300px` fade mask `linear-gradient(to right, #000000, transparent)`.
- **Card:** `#ffffff`, `border-radius: 20px`, `padding: 40px 60px 60px`.
- **Active Slide Lift:** Active slide elevates via `margin-top: -30px` (`transition: 0.7s all`) — implement via CSS/React when enabled, without installing Swiper at this stage.
- **Inner Anatomy:** 5-star row (`#ffd234`), quote body (`18px/30px`, `#222222`), author row with `60px × 60px` circular avatar, bold name (`#222222`), and role (`15px`, `#5e5f63`).

### 4.5 Counter Item (`.counter-item`) — Hidden Until Verified Content Supplied

> **Visibility Rule:** Must remain **hidden (not rendered)** in the initial build until verifiable metrics are supplied and approved.

- **Layout:** Horizontal flex item with `40px` icon, `34px/50px` bold `#000000` figure, and `#5e5f63` label. Collapses to centered vertical stack below `992px`.

### 4.6 Contact Surface & Form Inputs

- **Outer Band:** `#f6f7f9`, `border-radius: 30px`, `padding: 80px 60px` (desktop), `padding-inline: 15px` (mobile).
- **Floating Form Card (`.contact-form`):** `#ffffff`, `border-radius: 30px`, `padding: 60px 40px` (desktop), `box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05)`.
- **Inputs & Textareas (from `ashik-core.css`):** `width: 100%`, `padding: 15px 20px`, `border-radius: 10px`, `margin-bottom: 20px`, `resize: none`.
  - **Light-Surface Border Note [UNVERIFIED IN LIVE DOM / PROPOSED]:** Live Ashik's Contact right column had no rendered CF7 form in DOM, and `ashik-core.css`'s dark-default rule sets `border: 1px solid rgb(from var(--white) r g b / 10%)`. On our white `#ffffff` form card, propose `1px solid rgba(0, 0, 0, 0.12)` default border and `border-color: #222222` (plus accessible focus ring) on `:focus-visible`.
  - **Delivery Scope Note:** The visual form card and client-side validation states may be prepared in the initial build, while live email delivery remains unimplemented until the destination email and provider are confirmed.
- **Social Media Icons (`.social a`):** `40px × 40px`, `border-radius: 5px`, `background: #ffffff`, `color: #222222`; hover `background: #cdfe7d`, `color: #222222`.

### 4.7 Decorative Elements & Iconography

- **Hero Geometric Accent (`.banner-shap`):** Neon lime `#cdfe7d` geometric circle/semicircle segments paired with a thin circular stroke positioned behind the Hero portrait. Recreate cleanly as an inline SVG component (never hotlink `wp.codeefly.net` PNGs).
- **Footer Star Accent:** Minimal geometric star SVG beside the "Let's Work Together!" headline (verified in Ashik footer left column).
- **Iconography Replacement [CONFIRMED ZERO-PACKAGE APPROACH]:** Live Ashik uses proprietary **Font Awesome 6 Pro** and a custom theme font (`ashik-icon.ttf`), which cannot be redistributed. Replace all UI icons (checkmarks, service icons, long arrows, stars, social icons, hamburger/close, back-to-top chevron) with clean, stroke-matched **inline SVG components** (no external icon library packages installed at this stage).

---

## 5. Tailwind CSS v4 Token Integration Blueprint

The workspace already uses **Tailwind CSS `4.3.3`** with `@tailwindcss/turbopack` (`src/app/globals.css`). During Phase 1 implementation, map the verified Ashik tokens into `src/app/globals.css` using `:root` CSS custom properties and Tailwind v4's `@theme inline` directive — and **remove** the boilerplate `@media (prefers-color-scheme: dark)` block so light mode stays consistent across OS preferences:

```css
@import "tailwindcss";

:root {
  --theme-accent: #cdfe7d;
  --theme-accent-secondary: #905efb;
  --theme-black: #000000;
  --theme-white: #ffffff;
  --theme-dark: #222222;
  --theme-text: #5e5f63;
  --theme-gray: #f6f7f9;
  --theme-gray-2: #cccccc;
  --theme-gray-3: #d9d9d9;
  --theme-gray-4: #5a5a5a;
  --theme-rating: #ffd234;
  --theme-drawer-bg: #0f0f13;
  --theme-border-btn: rgba(0, 0, 0, 0.2);
  --theme-shadow-card: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
  --theme-shadow-header: 0px 4px 14px rgba(0, 0, 0, 0.15);
}

@theme inline {
  --color-accent: var(--theme-accent);
  --color-accent-secondary: var(--theme-accent-secondary);
  --color-canvas: var(--theme-white);
  --color-surface: var(--theme-gray);
  --color-contrast: var(--theme-black);
  --color-heading: var(--theme-dark);
  --color-body: var(--theme-text);
  --color-border-subtle: var(--theme-gray-2);
  --color-rating: var(--theme-rating);
  --font-sans: var(--font-spline-sans), "Spline Sans", sans-serif;
  --font-secondary: var(--font-poppins), "Poppins", sans-serif;
}
```

---

## 6. Design Status Log: Proposed Decisions, Unverified Values & Pending Approvals

| Item | Classification | Notes / Action Required |
| :--- | :--- | :--- |
| **Ashik Color Palette (`PD-01`)** | **Proposed Decision (Pending Approval)** | Verified from live Ashik (`#ffffff`, `#f6f7f9`, `#cdfe7d`, `#000000`, `#222222`, `#5e5f63`); kept as the proposed design direction pending final stakeholder sign-off. |
| **Nav Link Hover Contrast (`DS-01`)** | **Proposed Decision (Pending Approval)** | Live Ashik's `#cdfe7d` text on `#ffffff` fails WCAG AA contrast (~1.2:1); proposed accessible lime underline/pill hover accent requires stakeholder sign-off. |
| **Brand Logo / Wordmark** | **Pending Asset Approval (`PA-03`)** | Ashik uses an `A`-mark + "Ashik" wordmark (`119px × 50px`). Ayesha needs an approved SVG logo or typographic wordmark (`Ayesha.`) with the `#cdfe7d` + `#000000` visual language. |
| **Contact Form Field Structure & Light Border** | **Unverified in Live DOM / Proposed** | Live Ashik demo's Contact right column is empty (`col-xl-6` has no rendered CF7 form). Input geometry (`padding: 15px 20px`, `border-radius: 10px`) is verified from `ashik-core.css`; exact field list and light-mode border color (`rgba(0,0,0,0.12)`) are proposed pending sign-off. |
| **Exact Tablet/Mobile Sub-Heading Font Sizes** | **Partially Verified** | Hero H1 verified at desktop (`80px`), tablet (`55px`), mobile (`36–40px`). Section H2/H3 mobile reductions marked `[ESTIMATED]` in Section 2.2 should be spot-checked against Ashik CSS media queries during Phase 2–3. |
| **Icon Set Source** | **Confirmed Approach (Zero Packages)** | Replace proprietary `Font Awesome 6 Pro` and `ashik-icon.ttf` with custom inline SVGs (no extra icon packages installed at this stage). |
