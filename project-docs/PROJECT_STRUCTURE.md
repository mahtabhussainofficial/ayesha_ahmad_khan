# Project Structure Specification

> **Purpose:** Defines the target repository layout reconciling the existing initialized Next.js 16 workspace (`src/app/*.js`, `next.config.mjs`, `jsconfig.json`) with the structure outlined in `PROJECT_OVERVIEW.pdf` (p. 5).  
> **Current State Notice:** Only `project-docs/` has been added so far. Existing application files under `src/app/` and `public/` remain untouched starter files until Phase 1 implementation begins.

---

## 1. Recommended Target Directory Tree

```text
ayesha_ahmad_khan/
├── project-docs/                       # Canonical project specifications (this folder)
│   ├── PRD.md
│   ├── DESIGN_SYSTEM.md
│   ├── UI_UX_GUIDELINES.md
│   ├── TECHNICAL_ARCHITECTURE.md
│   ├── PROJECT_STRUCTURE.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── AGENT_RULES.md
│
├── public/                             # Static public assets served from "/"
│   ├── images/
│   │   ├── profile/                    # Approved portrait(s) of Ayesha Ahmad Khan
│   │   │   ├── hero-portrait.webp      # (Pending asset delivery)
│   │   │   └── about-portrait.webp     # (Pending asset delivery; + optional 2nd image)
│   │   └── projects/                   # Approved screenshots & thumbnails for the 10 projects
│   │       └── <project-slug>.webp     # 3:2 aspect ratio WebP/AVIF exports (Pending delivery)
│   ├── icons/                          # Favicon, brand logo SVG, OG share image (Pending delivery)
│   │   └── logo.svg                    # Approved Ayesha brand mark (or typographic component)
│   ├── files/                          # Optional approved CV PDF (only if Download CV CTA approved)
│   └── fonts/                          # Reserved ONLY if self-hosting local font files is required
│
├── src/
│   ├── app/                            # Next.js 16 App Router root
│   │   ├── api/                        # [DEFERRED] Do not implement until destination email & provider confirmed (PA-05)
│   │   │   └── contact/
│   │   │       └── route.js            # [DEFERRED] Contact form Route Handler (Stage 2, if Option A confirmed)
│   │   ├── favicon.ico                 # Site favicon (replace starter icon once brand asset ready)
│   │   ├── globals.css                 # Tailwind v4 @import, :root Ashik tokens, @theme inline, keyframes
│   │   ├── layout.js                   # RootLayout: Spline_Sans font, SEO metadata, SkipLink, HTML shell
│   │   └── page.js                     # Single-page portfolio assembling active sections in reference order
│   │
│   ├── components/
│   │   ├── layout/                     # Persistent chrome & global page utilities (Preloader omitted per CD-03)
│   │   │   ├── Header.js               # Desktop navbar, sticky slideDown state, mobile trigger ("use client")
│   │   │   ├── MobileDrawer.js         # Offcanvas #0f0f13 slide-in menu + backdrop + focus trap ("use client")
│   │   │   ├── Footer.js               # Closing CTA headline, brand info, anchor links, copyright
│   │   │   └── BackToTop.js            # Fixed 50x50px SVG scroll-progress ring button ("use client")
│   │   │
│   │   ├── sections/                   # One modular component per Ashik reference section
│   │   │   ├── HeroSection.js          # 02: Display H1, role positioning, CTAs, portrait, lime geometry
│   │   │   ├── AboutSection.js         # 03: Rounded #f6f7f9 band, bio, PUCIT degree, strengths, images
│   │   │   ├── ServicesSection.js      # 04: All 5 verified services (preferred 3+2 desktop grid, pending PD-03)
│   │   │   ├── ProjectsSection.js      # 05: 10 projects (preferred 3 featured + 7 archive, pending PD-04)
│   │   │   ├── TestimonialsSection.js  # 06: Dark #000000 band (HIDDEN until verified content supplied — CD-02)
│   │   │   ├── CountersSection.js      # 07: Verified metrics row (HIDDEN until verified content supplied — CD-02)
│   │   │   └── ContactSection.js       # 08: Rounded #f6f7f9 band, contact details, social bar + ContactForm UI
│   │   │
│   │   └── ui/                         # Reusable visual primitives matching Ashik geometry
│   │       ├── Button.js               # Primary filled (#cdfe7d) & Secondary outline button variants
│   │       ├── SectionHeading.js       # Consistent eyebrow (.sub-title) + H2 (.section-title) pairing
│   │       ├── ServiceCard.js          # Elevated white card + 65px lime icon square + hover arrow
│   │       ├── ProjectItem.js          # 3:2 screenshot + left-bordered timeline spec column
│   │       ├── ContactForm.js          # Visual form + client validation UI ("use client"; delivery deferred per CD-05)
│   │       ├── SocialLinks.js          # 40x40px square social icon links with #cdfe7d hover fill
│   │       ├── HeroDecoration.js       # Clean inline SVG recreation of Ashik's .banner-shap lime accents
│   │       └── Icons.js                # Crisp inline SVG icon primitives (arrows, checks, stars, social, menu)
│   │
│   ├── data/                           # Verified content modules (zero UI logic, zero fabricated claims)
│   │   ├── profile.js                  # Name, title, education, approved bio, contact details, social links
│   │   ├── navigation.js               # Single-page anchor definitions synced with rendered sections
│   │   ├── services.js                 # All 5 confirmed services with descriptions and icon keys
│   │   ├── projects.js                 # 10 verified project entries (3 featured + 7 archive once supplied)
│   │   ├── testimonials.js             # Empty array [] — MUST stay hidden until client-approved quotes supplied
│   │   └── counters.js                 # Empty array [] — MUST stay hidden until verifiable metrics approved
│   │
│   └── lib/                            # Pure utilities & native animation/validation helpers (zero extra packages)
│       ├── animations.js               # Reduced-motion checks, native IntersectionObserver & count-up helpers
│       └── validation.js               # Contact form validation rules (shared with Stage 2 API when enabled)
│
├── AGENTS.md                           # Auto-maintained Next.js 16 agent rules (do not delete)
├── PROJECT_OVERVIEW.pdf                # Original project brief & visual direction guide
├── eslint.config.mjs                   # ESLint 9 flat config (core-web-vitals)
├── jsconfig.json                       # Path alias configuration ("@/*": ["./src/*"])
├── next.config.mjs                     # Next.js 16 + Turbopack Tailwind CSS v4 configuration
├── package.json                        # Project scripts and dependencies (no new packages installed at this stage)
└── .env.example                        # [DEFERRED] Add once contact delivery provider is confirmed (PA-05)
```

---

## 2. File & Directory Responsibilities

| Path | Responsibility | Rules & Constraints |
| :--- | :--- | :--- |
| `src/app/layout.js` | Loads Google Fonts (`Spline_Sans`), registers CSS font variables on `<html>`, sets SEO/Open Graph `metadata`, wraps `{children}` with skip link. | Keep as a Server Component. Replace starter `Geist` fonts only in Phase 1. |
| `src/app/page.js` | Orchestrates sections 01–09 in exact reference order and passes verified data from `src/data/*`. | Keep as a Server Component; conditionally render `TestimonialsSection` and `CountersSection` based on non-empty verified arrays. |
| `src/app/globals.css` | Central design token definitions (`:root` + `@theme inline`), typography defaults, Ashik keyframes (`slideDown`), and reduced-motion rules. | Remove starter `@media (prefers-color-scheme: dark)` override during Phase 1. |
| `src/components/layout/` | Global chrome (`Header`, `MobileDrawer`, `Footer`, `BackToTop`). | Keep `"use client"` confined to interactive widgets (`Header`, `MobileDrawer`, `BackToTop`); keep `Footer` a Server Component. |
| `src/components/sections/` | Page-level band layouts implementing section widths, inset margins (`80px`/`40px`/`15px`), `30px` rounded surfaces, and responsive stacking. | Never hardcode unverified text or stats inside JSX; read all content from `src/data/`. |
| `src/components/ui/` | Atomic reusable pieces enforcing Ashik button padding, card shadows, icon squares, timeline rails, and form field styles. | Zero dependency on external UI libraries (no MUI/Chakra/Bootstrap). |
| `src/data/` | Structured JavaScript data files separating verified content from presentation. | Every entry must correspond to client-approved facts; keep empty arrays (`[]`) for unverified optional sections rather than inserting fake demo items. |
| `src/lib/` | Reusable pure helper functions (`animations.js`, `validation.js`). | Keep framework-agnostic where possible so `validation.js` works identically in `ContactForm.js` and `src/app/api/contact/route.js`. |
| `public/images/` | Local approved portraits and project screenshots. | Optimize to WebP/AVIF before committing; remove unused starter SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) during Phase 1 cleanup. |

---

## 3. Naming & Module Conventions

1. **File Extensions (`.js` Standard):** The initialized workspace uses `.js` for React components (`src/app/layout.js`, `src/app/page.js`) and `.mjs` for root ES config files (`next.config.mjs`, `eslint.config.mjs`). Standardize on **`.js`** across `src/` for consistency with the initialized Next.js scaffold (note: `PROJECT_OVERVIEW.pdf` illustrated `.jsx`; `.js` works identically in Next.js/Turbopack and avoids mixing `page.js` with `.jsx` siblings).
2. **Component Naming:** `PascalCase` filenames matching the default/named exported component (`HeroSection.js`, `ServiceCard.js`, `BackToTop.js`).
3. **Data & Utility Naming:** `camelCase` filenames (`profile.js`, `projects.js`, `animations.js`, `validation.js`).
4. **Asset Naming:** `kebab-case` descriptive filenames (`hero-portrait.webp`, `ecommerce-store-redesign.webp`). No spaces or uppercase characters in `public/` paths.
5. **Import Aliases:** Always use the configured `@/` alias (`import { services } from "@/data/services";`, `import Button from "@/components/ui/Button";`) instead of deep relative paths (`../../../`).

---

## 4. Data File Schema Templates (Strict Anti-Fabrication)

Use these exact schemas when creating `src/data/` modules during Phase 1. Populate only verified values:

### `src/data/services.js` (Confirmed Baseline)

```js
export const services = [
  {
    id: "wordpress-development",
    title: "WordPress Website Development",
    description: "", // TODO: Supply approved concise description
    icon: "wordpress",
  },
  {
    id: "elementor-design",
    title: "Elementor Website Design",
    description: "", // TODO: Supply approved concise description
    icon: "elementor",
  },
  {
    id: "redesign-rebranding",
    title: "Redesign & Rebranding",
    description: "", // TODO: Supply approved concise description
    icon: "redesign",
  },
  {
    id: "woocommerce-development",
    title: "WooCommerce Development",
    description: "", // TODO: Supply approved concise description
    icon: "woocommerce",
  },
  {
    id: "speed-seo-maintenance",
    title: "Speed, SEO, Maintenance & Security",
    description: "", // TODO: Supply approved concise description
    icon: "performance",
  },
];
```

### `src/data/projects.js` (Awaiting 10 Supplied Project Entries)

```js
/**
 * Schema for Ayesha's 10 verified portfolio projects.
 * Do NOT add placeholder clients, invented metrics, or unverified live URLs.
 *
 * @typedef {Object} ProjectEntry
 * @property {string} id - Unique kebab-case slug
 * @property {string} title - Approved project case title
 * @property {string} summary - Short verified scope description
 * @property {string[]} highlights - Verified role / deliverable / outcome bullets (max 3)
 * @property {string} image - Local path under /images/projects/*.webp (3:2 ratio)
 * @property {string} imageAlt - Descriptive alt text
 * @property {string | null} liveUrl - Approved live HTTPS URL, or null if unavailable
 * @property {boolean} featured - Marks top 3 items if featured showcase pattern is selected
 */
export const projects = [];
```

### `src/data/testimonials.js` & `src/data/counters.js` (Conditional Safe Defaults)

```js
// Populate ONLY with supplied, client-approved testimonials.
// When empty, TestimonialsSection does not render.
export const testimonials = [];
```

```js
// Populate ONLY with explicitly verified career metrics (e.g., "300+" only if confirmed).
// When empty, CountersSection does not render.
export const counters = [];
```
