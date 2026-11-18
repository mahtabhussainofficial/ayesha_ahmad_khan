# AI Coding Agent Rules & Operating Protocol

> **Applies To:** Antigravity, Claude, and all AI coding assistants contributing to the Ayesha Ahmad Khan Portfolio repository.  
> **Precedence:** Root [`AGENTS.md`](../AGENTS.md) and explicit user instructions always take highest precedence, followed by the specifications inside [`project-docs/`](./PRD.md).

---

## 1. Mandatory Pre-Edit Inspection Protocol

Before creating, modifying, or deleting **any** file in this repository, every agent MUST:

1. **Read `AGENTS.md` & Next.js 16 Local Docs:** This workspace runs **Next.js 16.4.6** (`React 19.3.0`, `Tailwind CSS 4.3.3`). Never rely on outdated Next.js 13/14/15 memory. Consult the relevant guide inside `node_modules/next/dist/docs/` before writing App Router code, Route Handlers, `next/image`, `next/font`, or `next.config.mjs` changes.
2. **Read Relevant `project-docs/` Specs:**
   - Check [PRD.md](./PRD.md) for verified facts, exclusions, and open decisions.
   - Check [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for exact verified Ashik colors, fonts, spacing, radii, and shadows.
   - Check [UI_UX_GUIDELINES.md](./UI_UX_GUIDELINES.md) for section order, responsive breakpoints, and interaction behavior.
   - Check [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) and [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for file placement and component boundaries.
3. **Inspect Existing Files First:** Always read `package.json`, `next.config.mjs`, `src/app/globals.css`, `src/app/layout.js`, and every target component/data file before editing. Never assume file contents or file extensions (`.js` vs `.jsx`).
4. **Check `git status` / Active Phase:** Confirm you are working strictly within the user-authorized phase of [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md). Never jump ahead and implement unrequested sections.

---

## 2. Strict Zero-Fabrication & Content Integrity Policy

This is a real professional portfolio for **Ayesha Ahmad Khan**. Fabricating claims damages real-world credibility and is strictly forbidden:

- **NEVER invent** client testimonials, client names, avatars, star ratings, project metrics ("+240% conversions"), award counts, agency team counts, phone numbers, email addresses, physical addresses, or social profile URLs.
- **NEVER publish unverified numbers:** Do not hardcode `"300+ projects"` or finalize `"5+ years experience"` unless the human explicitly confirms those exact figures in writing.
- **NEVER retain Ashik demo artifacts:** Zero occurrences of `"Ashik"`, `"Jane Cooper"`, `"Darlene Robertson"`, `"codeefly"`, `"SEO Optimization"` demo copy, `"Index 2 Dark"` demo switcher links, or dead `#blog` anchors in final components.
- **Keep Unverified Sections Hidden (`CD-02`):** `TestimonialsSection` and `CountersSection` MUST remain hidden (`[]` in `src/data/`, returning `null`) until verified, approved content is supplied.
- **No Unwired Fake Form Submissions (`CD-05`):** The Contact form visual design and frontend validation UI may be prepared, but **live email delivery MUST remain unimplemented** until Ayesha's destination email and delivery provider are confirmed (`PA-05`). Never fake a "message sent" confirmation when delivery is not wired.
- **No Unapproved External Media:** Never hotlink images from `wp.codeefly.net`, Unsplash, Pexels, or random URLs. Use only locally stored, approved assets under `public/images/`.

---

## 3. Reference Fidelity & Anti-Generic-AI-Design Guardrails

- **Ashik Is the Proposed Visual Authority (`PD-01`):** Follow the verified live Ashik visual system documented in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) (`#ffffff` canvas, `#f6f7f9` rounded `30px` inset bands, `#cdfe7d` lime primary accent, `#000000` testimonials contrast band, `#222222` headings, `#5e5f63` body, `Spline Sans` typography) as the proposed design direction pending final stakeholder sign-off.
- **Do NOT revert to the deprecated provisional PDF draft colors** (`#F7EEEE`, `#205D5A`, `#F0783E`, `#F4C451`) unless the stakeholder explicitly approves a palette override.
- **Omit Preloader in Initial Build (`CD-03`):** Do not implement Ashik's fullscreen `#preloader` in the initial build.
- **Keep All 5 Services (`CD-01`):** Do not drop or merge Ayesha's 5 verified services; implement the proposed `3+2` desktop grid pending approval (`PD-03`).
- **No Generic AI Aesthetics:** Do NOT introduce purple/blue AI gradients, glassmorphism blur cards, animated mesh blobs, glowing neon borders, dark-mode hero rewrites, bento-box layouts, 3D WebGL/Three.js scenes, or particle backgrounds.
- **Preserve Approved Design Decisions:** Once a section's layout, typography, spacing, or responsive behavior is approved, do not refactor or "stylistically improve" it during unrelated tasks.

---

## 4. Dependency & Package Hygiene

- **Zero Additional Packages at This Stage (`CD-04`):** Do **NOT** install `gsap`, `swiper`, icon packages, form SDKs, or **any** additional npm packages at this stage. Work strictly with the existing installed baseline (`next`, `react`, `react-dom`, `tailwindcss`, `@tailwindcss/turbopack`, `eslint`).
- **Strictly Forbidden Packages:**
  - Never install `jquery`, `bootstrap`, `waypoints`, `counterup`, `isotope`, `magnific-popup`, or WordPress/Elementor scripts.
  - Never install opinionated UI component kits (`@mui/material`, `@chakra-ui/react`, `antd`, `daisyui`, `shadcn/ui`, `flowbite`).
  - Never install proprietary/paid icon fonts (`Font Awesome Pro`).
- **Native-First Standard:** Implement all initial-build animations, scroll progress, smooth transitions, validation, and iconography using native CSS, `IntersectionObserver`, `requestAnimationFrame`, and inline SVG components.

---

## 5. Next.js 16, React 19 & Tailwind CSS v4 Coding Standards

1. **Preserve Build Configuration:** Do not break `turbopack.rules` (`@tailwindcss/turbopack`) in `next.config.mjs` or the `@/*` path alias in `jsconfig.json`. Do not delete or strip the managed block in `AGENTS.md`.
2. **JavaScript Only:** Write clean modern JavaScript (`.js`) matching the initialized workspace. Do not migrate the project to TypeScript unless explicitly requested.
3. **Server Components by Default:** Keep `src/app/layout.js`, `src/app/page.js`, and static sections (`ServicesSection`, `Footer`, etc.) as Server Components. Add `"use client"` **only** to leaf components that require browser hooks, DOM state, scroll listeners, or form interactivity.
4. **Tailwind CSS v4 Conventions:**
   - Use `@import "tailwindcss";` and `@theme inline` in `src/app/globals.css`. Do **not** create a legacy `tailwind.config.js` unless explicitly required.
   - Remove the starter `@media (prefers-color-scheme: dark)` block during Phase 1 so the light Ashik design does not invert unexpectedly on dark-mode OS settings.
5. **Clean Side Effects & Reduced Motion:**
   - Every `addEventListener`, `IntersectionObserver`, `requestAnimationFrame`, or timer inside `useEffect` MUST return a complete cleanup function.
   - Guard all animations against `prefers-reduced-motion: reduce`.
6. **Accessible Markup & Focus States:**
   - Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button type="button|submit">`, `<a href>`).
   - Never strip `:focus-visible` outlines without providing a high-contrast replacement ring.
   - Never attach click handlers to `<div>` or `<span>` when a `<button>` or `<a>` is appropriate.
   - Never expose private keys or email provider secrets in `NEXT_PUBLIC_*` environment variables.

---

## 6. Verification & Quality Gate (Required After Every Code Change)

After completing any implementation step, the agent MUST run and verify all applicable checks before reporting done:

1. **Static Analysis:** Run `npm run lint` — must exit `0` with zero errors.
2. **Production Build:** Run `npm run build` — must compile cleanly under Next.js 16 Turbopack with zero build or hydration errors.
3. **Visual & Responsive Verification:** Inspect rendered output across at least `1440px` (desktop), `992px` / `768px` (tablet), and `375px` (mobile):
   - No horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`).
   - Alignment with `DESIGN_SYSTEM.md` tokens and `UI_UX_GUIDELINES.md` section flow.
   - Verify `prefers-reduced-motion: reduce` behavior.
   - Evaluate performance and layout stability against quality targets (Lighthouse and CLS) rather than assuming guarantees.
4. **Functional Verification:** Test interactive states touched by the change (sticky header scroll, mobile drawer open/close + `Esc`, anchor scroll offsets, project external links, contact form client validation states, back-to-top button).
5. **Diff Hygiene:** Run `git status` and review `git diff` to confirm:
   - Only intended files were modified.
   - Zero leftover `console.log`, dead commented code, temporary debug borders, or unverified placeholder claims.

---

## 7. Escalation Protocol (When to Stop & Ask the Human)

Stop coding and ask the human for a decision whenever you encounter:

- Any unapproved proposed decision listed in [PRD.md §7.2](./PRD.md#72-proposed-decisions-pending-stakeholder-approval) (`PD-01`–`PD-05`, `DS-01`) or pending client approval in [PRD.md §7.3](./PRD.md#73-pending-approvals--required-client-inputs-blocking-final-content--delivery) (`PA-01`–`PA-06`) or [DESIGN_SYSTEM.md §6](./DESIGN_SYSTEM.md#6-design-status-log-proposed-decisions-unverified-values--pending-approvals).
- Missing verified copy, photography, project URLs, testimonials, contact info, or metric approvals.
- Any technical need that would require installing an npm package or altering `next.config.mjs`.
- A visual conflict between strict Ashik fidelity and WCAG accessibility (e.g., low-contrast hover colors).

**Rule of Thumb:** When in doubt between guessing/fabricating vs. pausing to ask, **always pause and ask**.
