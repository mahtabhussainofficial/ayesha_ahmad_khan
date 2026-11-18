# Product Requirements Document (PRD)

> **Project:** Ayesha Ahmad Khan — Personal Portfolio Website  
> **Document Status:** Draft v1.0 (Pre-Implementation Documentation)  
> **Primary Sources:** [PROJECT_OVERVIEW.pdf](../PROJECT_OVERVIEW.pdf) and Live Ashik Reference (`https://wp.codeefly.net/ashik/`)  
> **Companion Docs:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | [UI_UX_GUIDELINES.md](./UI_UX_GUIDELINES.md) | [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) | [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) | [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) | [AGENT_RULES.md](./AGENT_RULES.md)

---

## 1. Executive Summary & Project Objective

We are building a **single-page frontend portfolio website** for **Ayesha Ahmad Khan**, a **WordPress Developer and Elementor Expert**, using Next.js (React), JavaScript, and Tailwind CSS.

The core product direction is a **reference-led frontend recreation** of the **Ashik Personal Portfolio** demo (`https://wp.codeefly.net/ashik/`):

- **Preserve the visual & structural DNA of Ashik:** section order, layout proportions, typography hierarchy, spacing rhythm, card anatomy, image framing, decorative accents, and motion behavior.
- **Replace all demo identity and copy with Ayesha's verified information only:** zero placeholder claims, zero invented metrics, and zero generic AI-styled redesigns.
- **Optimize for conversion:** present credible WordPress/Elementor work, services, and academic/professional background, then guide prospective clients and recruiters smoothly to the Contact section.

This is strictly a **custom frontend web application**, **not** a WordPress theme, Elementor template kit, or CMS-backed website.

---

## 2. Target Audience & User Goals

| Audience Segment | Primary Need | Key Portfolio Sections | Desired Action |
| :--- | :--- | :--- | :--- |
| **Small-to-Medium Business Owners & Founders** | Need a reliable developer to build, redesign, or optimize a WordPress/WooCommerce site. | Hero, Services, Projects, Testimonials (if approved), Contact | Submit a project inquiry via the Contact form or confirmed email. |
| **Digital Agencies & Freelance Collaborators** | Looking for an Elementor/WordPress specialist for white-label or overflow delivery. | Hero, About, Services, Projects, Counters (if verified) | Review live project URLs and reach out for collaboration. |
| **Recruiters & Technical Hiring Managers** | Evaluating technical depth, education (BS CS, PUCIT), real production websites, and craft. | Hero, About, Projects, Contact/Social Links | Verify live work, review background, and initiate interview contact. |

---

## 3. Verified Subject Information vs. Pending Content

Every fact rendered on the website must be traceable to verified inputs. The table below strictly separates **confirmed information** (from `PROJECT_OVERVIEW.pdf`) from **items requiring verification or delivery** before implementation.

### 3.1 Confirmed Information

| Category | Verified Fact | Source |
| :--- | :--- | :--- |
| **Full Name** | Ayesha Ahmad Khan | `PROJECT_OVERVIEW.pdf` (p. 1) |
| **Primary Role / Title** | WordPress Developer • Elementor Expert | `PROJECT_OVERVIEW.pdf` (p. 1, p. 3) |
| **Education** | BS Computer Science — PUCIT, 2020–2024 | `PROJECT_OVERVIEW.pdf` (p. 3) |
| **Core Services (5)** | 1. WordPress Website Development<br>2. Elementor Website Design<br>3. Redesign & Rebranding<br>4. WooCommerce Development<br>5. Speed, SEO, Maintenance & Security | `PROJECT_OVERVIEW.pdf` (p. 3) |
| **Project Count Target** | 10 supplied project case titles (with approved screenshots, live URLs, and short role/outcome per project) | `PROJECT_OVERVIEW.pdf` (p. 3) |
| **Architecture** | Single-page frontend application built with Next.js (React) and JavaScript | `PROJECT_OVERVIEW.pdf` (p. 1, p. 4) |
| **Deployment Target** | Git + GitHub -> Vercel deployment | `PROJECT_OVERVIEW.pdf` (p. 4) |

### 3.2 Unverified / Pending Client Content (Do Not Fabricate)

| Item | Current Status | Constraint / Rule |
| :--- | :--- | :--- |
| **Experience Claim ("5+ years experience")** | Mentioned in PDF with explicit note: *(verify wording)* | Must receive written sign-off on exact wording/number before publishing (especially alongside BS CS 2020–2024 timeline). |
| **Project Volume ("300+ projects")** | Mentioned in PDF with explicit note: *(only if verifiable)* | Render only if Ayesha confirms this metric is accurate and verifiable; otherwise omit or replace with verified facts. |
| **Other Counter Metrics** | Not supplied (Ashik demo has 4 demo counters: Team Members, Winning Awards, Complete Projects, Client Reviews) | Do **not** invent numbers or retain Ashik's agency metrics ("200+ Team Members"). Confirm exact verified solo metrics or hide the Counters band. |
| **10 Project Case Entries** | Titles, live URLs, descriptions, roles/outcomes, thumbnails, and screenshots **not yet supplied** in repository | Must be provided and approved before final Projects section population. No invented metrics or client claims. |
| **Client Testimonials** | None supplied yet | Render Testimonials section **only** if real, supplied, and client-approved testimonials are provided. |
| **Hero Positioning Statement & About Bio** | Not yet supplied verbatim | Must be drafted from verified facts and approved by Ayesha before launch. |
| **Download CV / Resume File** | Ashik Hero includes a secondary "Download CV" CTA; PDF mentions "Primary CTA + secondary work CTA" | Confirm whether secondary Hero CTA scrolls to `#projects` ("View Projects") or downloads an approved CV PDF. |
| **Contact Details & Social Links** | Email address, phone (optional), city/location, and social URLs (LinkedIn, GitHub, Upwork/Fiverr, etc.) **not supplied** | Do not insert placeholder emails, fake phone numbers, or unconfirmed social links. |
| **Brand Assets & Photography** | Approved portrait(s) for Hero & About (Ashik uses 1 Hero portrait + 2 About portraits), brand logo/wordmark, favicon | Must be supplied as approved local assets; never hotlink external/stock images. |
| **Contact Form Destination** | Target email address and form delivery provider not confirmed | Visual design and frontend validation may be prepared, but live email delivery must remain unimplemented until the destination email and provider are confirmed. |

---

## 4. Product Scope & Core Features

### 4.1 In-Scope Sections (Single-Page Flow)

Following `PROJECT_OVERVIEW.pdf` (p. 1 & p. 3) and the verified live Ashik DOM (`https://wp.codeefly.net/ashik/`), the single-page portfolio defines **9 structural sections** plus a global back-to-top utility (with optional trust bands hidden until verified data arrives):

1. **Header (`<header>`)**: Brand mark/wordmark for Ayesha Ahmad Khan, single-page anchor navigation matching active sections, primary contact CTA button, sticky scroll behavior, and mobile slide-out navigation drawer.
2. **Hero (`#home`)**: Display headline introducing Ayesha Ahmad Khan, role positioning (`WordPress Developer • Elementor Expert`), concise value statement, Primary CTA + Secondary CTA, approved portrait visual, and Ashik-style decorative geometric accent.
3. **About (`#about`)**: Rounded surface card following the Hero, professional introduction, verified experience statement, education (`BS Computer Science — PUCIT, 2020–2024`), core approach/strengths checklist, verified experience stat badge, and dual staggered imagery (or approved single-portrait adaptation).
4. **Services (`#services`)**: Retains **all 5 verified WordPress & Elementor service offerings** in Ashik's signature elevated rounded card styling with lime accent icon badges and concise descriptions. Preferred desktop layout: **3+2 grid** (proposed decision, pending stakeholder approval).
5. **Projects (`#projects`)**: Showcase of Ayesha's 10 supplied real-world projects featuring approved screenshots/thumbnails, project title, verified role/outcome summary, and external live URL link. Preferred showcase approach: **3 featured projects + 7-project archive** (proposed decision, pending stakeholder approval — see Section 7 & [UI_UX_GUIDELINES.md](./UI_UX_GUIDELINES.md)).
6. **Testimonials (`#testimonials` — Hidden Until Verified)**: Dark contrast band (`#000000`) with white testimonial slide cards, ratings, and client attributions — **must remain hidden (not rendered) until verified, client-approved testimonials are supplied**.
7. **Counters (`#counters` — Hidden Until Verified)**: Clean horizontal stat bar displaying only verified, factual career metrics — **must remain hidden (not rendered) until verifiable numbers are supplied and approved**.
8. **Contact (`#contact`)**: Two-column rounded surface container featuring verified contact details, confirmed social links, and a visually prepared Contact Form with frontend validation and UI states. **Live email delivery remains unimplemented until the destination email and provider are confirmed.**
9. **Footer (`<footer>`)**: High-impact closing CTA headline ("Let's Work Together!" or approved equivalent), brand summary, quick anchor navigation, confirmed social links, and copyright line for Ayesha Ahmad Khan (excluding all Ashik demo theme-switcher links).
10. **Global Reference Utility**: Circular scroll-progress Back-to-Top button. *(Ashik's fullscreen preloader is **omitted** from the initial implementation.)*

### 4.2 Functional Requirements

- **FR-01 Smooth Anchor Navigation:** Clicking header or footer anchor links smoothly scrolls to the target section with accurate offset accounting for the sticky header height.
- **FR-02 Responsive Mobile Drawer:** Below `992px`, desktop nav links and CTA collapse into a circular hamburger toggle opening a slide-in mobile menu with backdrop dismissal and `Escape` key support.
- **FR-03 Data-Driven Content Rendering:** All bio copy, services, projects, testimonials, counters, and contact metadata are driven by structured JavaScript data modules under `src/data/` so verified updates require zero layout rewrites.
- **FR-04 Hidden Unverified Trust Sections:** Testimonials and Counters **must remain hidden** (`testimonials.length === 0`, `counters.length === 0`) until verified content is supplied, omitting themselves from the DOM (and navigation) without breaking vertical spacing or visual rhythm.
- **FR-05 Project External Navigation:** Each project with an approved live URL opens safely in a new tab (`target="_blank" rel="noopener noreferrer"`). Projects without a live URL do not render broken `#` anchors.
- **FR-06 Contact Form Lifecycle (Two-Stage):**
  - *Initial Stage (UI & Validation Ready):* Visually prepare the form matching Ashik styling with required-field validation (name, valid email, message, optional subject/service), honeypot field, and clear UI states without wiring unconfirmed email delivery.
  - *Delivery Stage (Blocked Pending Confirmation):* Implement asynchronous submission, spam enforcement, and live email dispatch only after Ayesha's destination email and delivery provider are confirmed.
- **FR-07 Motion Accessibility:** All scroll-triggered, parallax, and hover animations respect `@media (prefers-reduced-motion: reduce)` and degrade cleanly on smaller viewports.

### 4.3 Non-Functional Requirements & Quality Targets

- **NFR-01 Visual Fidelity:** Desktop, tablet, and mobile layouts are audited side-by-side against `https://wp.codeefly.net/ashik/` for proportion, typography, spacing, border radii, shadows, and surface hierarchy.
- **NFR-02 Performance Quality Targets:** Target Lighthouse Performance `>= 90` on desktop and mobile and minimal Cumulative Layout Shift (target CLS near `0`) via optimized WebP/AVIF imagery (`next/image`), zero additional animation/carousel packages in the initial build, and no jQuery/Bootstrap/Elementor bundles. *(Treated as measurable quality targets, not absolute guarantees.)*
- **NFR-03 Accessibility Quality Targets (WCAG 2.1 AA):** Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`), single `<h1>`, logical heading hierarchy, keyboard-accessible interactive controls, visible focus states, descriptive `alt` text, and AA contrast compliance.
- **NFR-04 SEO & Social Metadata:** Proper `<title>`, meta description, Open Graph metadata, canonical URL support, and semantic structured data for a personal developer portfolio.
- **NFR-05 Cross-Browser Compatibility:** Verified on current Chrome, Edge, Firefox, and Safari (desktop and mobile viewports).

---

## 5. Explicit Exclusions (Out of Scope)

The following items are **strictly excluded** from the initial implementation unless explicitly approved in a future phase:

- **No WordPress Theme, Elementor Template, or PHP Backend:** Frontend Next.js recreation only.
- **No Headless CMS or Database:** Content lives in version-controlled local data files (`src/data/`).
- **No Preloader in Initial Implementation:** Ashik's fullscreen `#preloader` is omitted from the initial build.
- **No Additional Packages at This Stage:** Do not install GSAP, Swiper, jQuery, Bootstrap, or any third-party UI kits (Material UI, Chakra UI, Ant Design, shadcn/ui) at this stage.
- **No Unconfirmed Email Delivery Backend:** Do not wire live contact email sending until destination email and provider are confirmed.
- **No Blog Section or Individual Blog Post Pages:** The live Ashik demo navbar includes a dead `#blog` link with zero DOM content; a blog is out of scope for this single-page portfolio.
- **No Ashik Demo Theme Switcher / Dark Mode Toggle:** Ashik's footer demo links ("Index 2 Dark", "Index 2", "Index Dark", "Sample Page") are WordPress demo artifacts and will not be recreated. Light mode (matching the live Ashik default URL) is the sole theme unless dark mode is explicitly requested later.
- **No Generic AI Redesign:** No glassmorphism, 3D WebGL/Three.js canvases, or particle backgrounds.
- **No Multi-Page Project Case Study Routes (Initial Build):** Unless stakeholders later approve dedicated `/projects/[slug]` routes, the portfolio remains a single-page experience linking directly to approved live project URLs.
- **No Fabricated Social Proof:** No invented client names, stock-photo testimonials, fake award counts, or unverified metrics.
- **No Newsletter Subscription Backend:** Omit newsletter forms to avoid dead UI unless later requested.

---

## 6. Success Criteria

The initial portfolio build is considered successful when:

1. **Reference Match:** Side-by-side visual review confirms faithful preservation of Ashik's layout geometry, proposed color direction, `Spline Sans` typography, rounded section containers, and restrained motion.
2. **Content Integrity:** All displayed copy, services, projects, links, and metrics belong to Ayesha Ahmad Khan and are explicitly verified; zero remnants of "Ashik", "Jane Cooper", "Darlene Robertson", "codeefly", or Lorem Ipsum remain; unverified Testimonials and Counters remain hidden.
3. **Conversion Readiness:** Visitors can inspect all 5 WordPress/Elementor services and verified projects and interact with the prepared Contact section; live email delivery passes end-to-end verification once destination email and provider are confirmed.
4. **Technical Quality:** `npm run lint` and `npm run build` pass with zero errors, responsive layouts show no horizontal overflow from `375px` to `1440px+`, quality targets (Lighthouse & CLS) are audited, and the site deploys cleanly to Vercel.

---

## 7. Decision Status Matrix (Verified vs. Confirmed vs. Proposed vs. Pending)

### 7.1 Confirmed Initial-Build Decisions (Locked by Review)

| ID | Topic | Confirmed Decision |
| :--- | :--- | :--- |
| **CD-01** | **Service Count** | Keep **all 5** verified services (do not consolidate down to 4). |
| **CD-02** | **Testimonials & Counters Visibility** | Keep **both hidden** (unmounted) until verified, approved content is supplied. |
| **CD-03** | **Preloader** | **Omit** the preloader from the initial implementation. |
| **CD-04** | **Package Installations** | **Do not install** GSAP, Swiper, or any additional npm packages at this stage. |
| **CD-05** | **Contact Form Delivery Scope** | Visual design and frontend validation may be prepared, but **email delivery remains unimplemented** until destination email and provider are confirmed. |

### 7.2 Proposed Decisions (Pending Stakeholder Approval)

| ID | Topic | Proposed Direction | Alternative / Approval Needed |
| :--- | :--- | :--- | :--- |
| **PD-01** | **Color Palette Direction** | Adopt the **verified live Ashik palette** (`#FFFFFF`, `#F6F7F9`, `#CDFE7D`, `#000000`, `#222222`, `#5E5F63`), superseding the PDF's draft palette (`#F7EEEE`, `#205D5A`, `#F0783E`, `#F4C451`). | Confirm proposed Ashik palette OR provide an approved custom palette override. |
| **PD-02** | **Navbar `BLOG` Link** | Omit Ashik's dead `BLOG` (`#blog`) link so every navbar anchor maps to a live section. | Confirm omission (or specify another active section anchor). |
| **PD-03** | **5-Service Desktop Grid Layout** | **3+2 desktop grid** (3 cards on row 1 + 2 centered cards on row 2) preserving exact Ashik card geometry for all 5 services. | Confirm `3+2` preferred layout OR request an alternate 5-card grid arrangement. |
| **PD-04** | **10-Project Showcase Pattern** | **3 featured projects + 7-project archive** (flagship 3 in Ashik's full showcase layout + clean 7-project archive below in matching visual styling). | Confirm preferred `3 + 7` approach OR request paginated / full vertical showcase. |
| **PD-05** | **Hero Secondary CTA** | Primary: `"Contact Me"` (`#contact`) + Secondary: `"View Projects"` (`#projects`). | Confirm work anchor CTA OR supply an approved CV PDF for `"Download CV"`. |
| **DS-01** | **Nav Link Hover Contrast** | Use an accessible lime indicator (e.g., underline/pill accent) instead of low-contrast `#cdfe7d` text directly on `#ffffff`. | Confirm accessible hover styling vs. strict Ashik hover color mimicry. |

### 7.3 Pending Approvals & Required Client Inputs (Blocking Final Content / Delivery)

| ID | Pending Item | Required From Stakeholder / Ayesha |
| :--- | :--- | :--- |
| **PA-01** | **Experience & Metrics Verification** | Approve exact wording for `"5+ years experience"` and confirm whether `"300+ projects"` (or any other metrics) are verifiable before enabling Counters. |
| **PA-02** | **10 Project Case Entries** | Supply approved titles, short role/outcome notes, live URLs, and 3:2 screenshots for all 10 projects. |
| **PA-03** | **Approved Copy & Brand Assets** | Supply approved Hero/About copy, portrait photography (Hero + optional 2nd About image), brand logo/wordmark, and favicon. |
| **PA-04** | **Contact Details & Social URLs** | Supply confirmed public email (if displayed), optional city/location, and verified social profile URLs. |
| **PA-05** | **Contact Email Delivery Provider & Destination** | Confirm destination email address and delivery provider (e.g., Route Handler + Resend vs. Formspree / Web3Forms) to unlock Contact delivery implementation. |
| **PA-06** | **Client Testimonials (Optional)** | Supply client-approved testimonials if/when the Testimonials section should be enabled later. |
