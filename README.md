# Ayesha Ahmad Khan — Portfolio Website

A modern, single-page frontend portfolio built for **Ayesha Ahmad Khan**, a **WordPress Developer & Elementor Expert**, engineered with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

> **Design Direction:** Reference-led frontend build inspired by the Ashik personal portfolio design system (`#ffffff` canvas, `#f6f7f9` rounded `30px` inset bands, `#cdfe7d` lime primary accent, `#000000` contrast showcase band, and `Spline Sans` typography) with zero generic UI kits and zero unnecessary runtime dependencies.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js `16.4.6` (App Router, Turbopack, Cache Components, Partial Prefetching) |
| **UI Library** | React `19.3.0` (Server Components by default, isolated `"use client"` interactive leaves) |
| **Language** | Modern JavaScript (ES Modules / JSX with `@/*` path alias) |
| **Styling** | Tailwind CSS `4.3.3` (`@tailwindcss/turbopack` + CSS custom properties via `@theme inline`) |
| **Typography** | `Spline Sans` self-hosted via `next/font/google` |
| **Images** | `next/image` with locally stored, web-optimized WebP assets (`public/images/`) |
| **Linting** | ESLint 9 flat config (`eslint-config-next/core-web-vitals`) |

---

## Key Features & Sections

- **Sticky Header & Offcanvas Mobile Drawer:** Transparent top bar transitioning into a fixed sticky white header on scroll, deterministic active-section highlighting, `LET'S TALK →` primary CTA, and a keyboard-accessible `#0f0f13` slide-in mobile menu with focus restoration.
- **Hero Section (`#home`):** High-impact uppercase display typography, verified role badge (`WordPress Developer • Elementor Expert`), dual CTAs (`Contact Me` / `View Projects`), and custom geometric SVG framing.
- **About Section (`#about`):** Rounded `#f6f7f9` inset showcase featuring verified background (`BS Computer Science — PUCIT, 2020–2024`), aligned 6-point strengths checklist, `5+ Years Of Experience` and `300+ Projects Delivered` highlight cards, and editorial studio visuals.
- **Services (`#services`):** All 5 core WordPress & Elementor offerings arranged in a centered `3+2` desktop grid (`2-col` tablet, `1-col` mobile):
  1. WordPress Website Development
  2. Elementor Website Design
  3. Redesign & Rebranding
  4. WooCommerce Development
  5. Speed, SEO, Maintenance & Security
- **Portfolio Showcase (`#projects`):** **3 Featured Projects + 7-Project Archive** covering all 10 verified project cases with locally stored `1200×800` (3:2) full-bleed WebP browser mockups, interactive `01`/`02`/`03` spotlight tabs, Prev/Next navigation, and `Show All 3` toggle.
- **Testimonials (`#testimonials`):** High-contrast `#000000` rounded band with white review cards, active center-card elevation, star ratings, and accessible carousel controls *(currently populated with clearly labeled editable placeholder slots pending verified client reviews)*.
- **Contact Form (`#contact`):** Responsive inquiry card with service selector, honeypot spam field, and full client-side validation (`src/lib/validation.js`). *(Email delivery intentionally deferred until destination inbox and delivery provider are confirmed.)*
- **Footer & Back-to-Top Utility:** Clean single-page navigation, hover-interactive social links, branded SVG favicon (`src/app/icon.svg`), verified `Person` JSON-LD metadata, and a fixed circular SVG scroll-progress Back-to-Top button.
- **Accessibility & Performance:** Semantic landmarks, valid `h1`–`h4` outline, skip link, high-contrast `:focus-visible` rings on both light and dark surfaces, full `prefers-reduced-motion` compliance, and zero horizontal overflow across desktop (`1440px`), laptop (`1280px`), tablet (`768px`), and mobile (`390px` / `375px`).

---

## Project Structure

```text
ayesha_ahmad_khan/
├── project-docs/               # PRD, Design System, UI/UX, Architecture, Plan & Agent Rules
├── public/
│   └── images/
│       ├── profile/            # Editorial studio visuals (swappable with approved portraits)
│       └── projects/           # 10 locally stored, web-optimized 1200x800 WebP project mockups
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 tokens, :root variables, keyframes, reduced-motion rules
│   │   ├── icon.svg            # Branded SVG favicon
│   │   ├── layout.js           # Root layout, Spline Sans font loader, SEO/OG metadata
│   │   └── page.js             # Single-page composition & Person JSON-LD structured data
│   ├── components/
│   │   ├── layout/             # Header, MobileDrawer, Footer, BackToTop
│   │   ├── sections/           # Hero, About, Services, Projects, Testimonials, Counters, Contact
│   │   └── ui/                 # Button, SectionHeading, ServiceCard, ProjectItem, ContactForm, Icons
│   ├── data/                   # Cleanly separated content modules (profile, services, projects, etc.)
│   └── lib/                    # Shared form validation & reduced-motion utilities
├── eslint.config.mjs           # ESLint 9 flat configuration
├── jsconfig.json               # "@/*" -> "./src/*" import alias
├── next.config.mjs             # Next.js 16 + Turbopack Tailwind CSS v4 configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** `20+`
- **npm** `10+`

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run lint` | Runs ESLint (`eslint-config-next/core-web-vitals`) |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the compiled production server locally |

---

## Updating Portfolio Content

All site content is decoupled from UI components under `src/data/`:

- **Profile, Portrait, Email & Social Links:** [`src/data/profile.js`](src/data/profile.js)
- **Services:** [`src/data/services.js`](src/data/services.js)
- **Projects (Images, Descriptions, Live URLs):** [`src/data/projects.js`](src/data/projects.js)
- **Testimonials:** [`src/data/testimonials.js`](src/data/testimonials.js)
- **Counters (Optional):** [`src/data/counters.js`](src/data/counters.js)

---

## Project Documentation

Detailed architecture, design tokens, and engineering standards are maintained in [`project-docs/`](project-docs/):

- [`PRD.md`](project-docs/PRD.md) — Product scope, verified facts, and exclusions
- [`DESIGN_SYSTEM.md`](project-docs/DESIGN_SYSTEM.md) — Verified color tokens, typography scale, and component geometry
- [`UI_UX_GUIDELINES.md`](project-docs/UI_UX_GUIDELINES.md) — Section flow, responsive breakpoints, and interaction guidelines
- [`TECHNICAL_ARCHITECTURE.md`](project-docs/TECHNICAL_ARCHITECTURE.md) — Next.js 16 architecture, styling, motion, and contact form strategy
- [`PROJECT_STRUCTURE.md`](project-docs/PROJECT_STRUCTURE.md) — Directory conventions and data schemas
- [`IMPLEMENTATION_PLAN.md`](project-docs/IMPLEMENTATION_PLAN.md) — Phased build roadmap and QA checkpoints
- [`AGENT_RULES.md`](project-docs/AGENT_RULES.md) — Coding standards and quality gates

---

## Deployment

This project is configured for zero-config deployment on **Vercel**:

1. Import the GitHub repository in [Vercel](https://vercel.com/new).
2. Confirm **Framework Preset: Next.js** (default `next build` settings).
3. Deploy — static assets, `next/font`, and `next/image` optimization work out of the box.
4. *(Future Phase)* Add email provider environment variables in Vercel Project Settings once Contact form email delivery is configured.
