# Ayesha Ahmad Khan — Portfolio Website

A modern, high-performance portfolio and case study platform built for **Ayesha Ahmad Khan**, **WordPress Developer & Elementor Expert**, engineered with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

> **Design Direction:** Inspired by the Ashik design system (`#ffffff` canvas, `#f6f7f9` rounded inset bands, `#cdfe7d` lime primary accent, `#000000` dark contrast sections, and `Spline Sans` typography) with zero runtime dependencies and zero external component libraries.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js `16.4.6` (App Router, Turbopack, Partial Prerendering, Static Site Generation) |
| **UI Library** | React `19.3.0` (React Server Components by default, isolated client leaves) |
| **Styling** | Tailwind CSS `4.3.3` (`@tailwindcss/turbopack`, CSS custom properties via `@theme inline`) |
| **Typography** | `Spline Sans` self-hosted via `next/font/google` |
| **Images** | `next/image` with locally stored, optimized WebP assets (`public/images/`) |
| **Code Quality** | ESLint 9 (`eslint-config-next/core-web-vitals`) |

---

## Key Features & Architecture

- **Multi-Page App Architecture:**
  - **Homepage (`/`):** Full agency-style presentation covering Hero, About, Services, Filterable Projects, Testimonials, and Contact.
  - **Dynamic Project Case Studies (`/projects/[slug]`):** 10 dedicated case-study pages with browser mockup showcases, project specifications, client objectives, technical challenges, execution roadmaps, and related projects.
  - **Dynamic Service Landing Pages (`/services/[slug]`):** 5 dedicated service detail pages featuring service scopes, What's Included deliverables, problem vs. solution comparative grids, working process roadmaps, and interactive FAQ accordions.
- **Route-Aware Navigation & Sticky Header:**
  - Route-aware active section indicator (highlights `SERVICES` on `/services/*` and `PROJECTS` on `/projects/*`).
  - Smooth fixed sticky transition on scroll with drop shadow.
  - Accessible offcanvas mobile navigation drawer with Escape key support and focus trapping.
- **Category-Based Portfolio Filtering:**
  - 7 categories (*All Projects, WordPress Development, Elementor, WooCommerce, Website Redesign, SEO & Performance, Website Maintenance*).
  - Single-row horizontal touch swipe on mobile with zero scrollbar; multi-pill wrap on desktop.
  - Staggered individual card entrance transitions (`@keyframes cardEnter`).
- **Mobile-First Responsiveness:**
  - Strictly verified across `375px`, `390px`, `430px`, `768px`, and `1440px` viewports with zero horizontal overflow.
  - Uniform full-width CTA buttons on mobile avoiding ragged, mismatched widths.
  - Proportional heading scales preventing awkward multi-line text wrapping.
- **Accessibility & Motion Compliance:**
  - Accessible interactive FAQ accordion with full `aria-expanded` and `aria-controls` bindings.
  - Full support for `@media (prefers-reduced-motion: reduce)`.
  - Visible focus rings (`:focus-visible`) across light and dark surfaces.

---

## Project Structure

```text
ayesha_ahmad_khan/
├── project-docs/               # PRD, Design System, UI/UX, Architecture, Plan & Agent Rules
├── public/
│   └── images/
│       ├── profile/            # Editorial studio visuals
│       └── projects/           # 10 locally stored, web-optimized 1200x800 WebP project mockups
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 tokens, design variables, keyframes, utilities
│   │   ├── icon.svg            # Branded SVG favicon
│   │   ├── layout.js           # Root layout, Spline Sans font loader, SEO/OG metadata
│   │   ├── page.js             # Homepage composition & JSON-LD structured data graph
│   │   ├── projects/[slug]/    # Dynamic project case study routes (generateStaticParams)
│   │   ├── robots.js           # Dynamic robots.txt metadata route
│   │   ├── services/[slug]/    # Dynamic service landing routes (generateStaticParams)
│   │   └── sitemap.js          # Dynamic XML sitemap route indexing 16 canonical URLs
│   ├── components/
│   │   ├── layout/             # Header, MobileDrawer, Footer, BackToTop
│   │   ├── sections/           # Hero, About, Services, Projects, Testimonials, Counters, Contact
│   │   └── ui/                 # Button, SectionHeading, ServiceCard, ProjectCard, FaqAccordion, ContactForm, Icons
│   ├── data/                   # Decoupled content modules (profile, services, projects, testimonials, navigation)
│   └── lib/                    # Shared form validation & reduced-motion utilities
├── .env.example                # Environment variables template
├── eslint.config.mjs           # ESLint 9 configuration
├── jsconfig.json               # Path aliases (@/* -> ./src/*)
├── next.config.mjs             # Next.js 16 configuration
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

# Start development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run lint` | Runs ESLint checks (`eslint-config-next/core-web-vitals`) |
| `npm run build` | Compiles and generates static production build for all 23 route targets |
| `npm run start` | Runs the compiled production server locally |

---

## Content Management

All site copy, projects, and services are decoupled from UI components under `src/data/`:

- **Profile & Contact Details:** [`src/data/profile.js`](src/data/profile.js)
- **Projects (Slugs, Descriptions, Categories, Gallery):** [`src/data/projects.js`](src/data/projects.js)
- **Services (Scopes, Deliverables, Problems, FAQs):** [`src/data/services.js`](src/data/services.js)
- **Testimonials:** [`src/data/testimonials.js`](src/data/testimonials.js)
- **Navigation Links:** [`src/data/navigation.js`](src/data/navigation.js)

---

## Deployment

Configured for seamless deployment on **Vercel**:

1. Push or import the repository into Vercel.
2. Framework detection automatically selects **Next.js** with `next build`.
3. All 23 static and prerendered route targets compile out of the box with zero configuration.
