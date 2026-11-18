/**
 * Verified profile data for Ayesha Ahmad Khan.
 * Pending assets / details are explicitly marked as temporary placeholders
 * so no unverified facts, fake contact info, or invented metrics are published.
 */
export const profile = {
  fullName: "Ayesha Ahmad Khan",
  brandWordmark: "Ayesha",
  roleLine: "WordPress Developer & Elementor Expert",
  roleBadge: "WordPress Developer • Elementor Expert",
  seoDescription:
    "Portfolio of Ayesha Ahmad Khan, WordPress Developer and Elementor Expert specializing in custom WordPress builds, Elementor design, WooCommerce, and site optimization.",

  hero: {
    headlineLines: ["HELLO, I'M", "AYESHA", "AHMAD KHAN"],
    positioning:
      "WordPress Developer and Elementor Expert crafting clean, responsive, and high-performing websites tailored to business goals—from custom builds and redesigns to WooCommerce stores.",
    primaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    secondaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    portrait: {
      // TODO (PA-03): Replace null with "/images/profile/hero-portrait.webp" once approved portrait is supplied.
      src: null,
      alt: "Portrait of Ayesha Ahmad Khan, WordPress Developer and Elementor Expert",
      placeholderLabel: "Approved Portrait Placeholder",
      placeholderSubtext: "Awaiting verified Hero portrait asset (1:1.15 ratio)",
    },
  },

  about: {
    eyebrow: "ABOUT ME",
    headline: "Building Reliable WordPress & Elementor Experiences",
    paragraphs: [
      "I am Ayesha Ahmad Khan, a WordPress Developer and Elementor Expert focused on turning brand goals into structured, maintainable, and responsive websites.",
      "Backed by a BS in Computer Science from PUCIT (2020–2024), I combine solid software engineering fundamentals with hands-on WordPress, Elementor, and WooCommerce craftsmanship.",
    ],
    education: {
      degree: "BS Computer Science",
      institution: "PUCIT",
      period: "2020–2024",
    },
    strengthsLeft: [
      "Clean Elementor Layouts",
      "Responsive Mobile-First Builds",
      "WooCommerce Store Setup",
    ],
    strengthsRight: [
      "Site Redesign & Rebranding",
      "Speed & Technical SEO Focus",
      "Ongoing Maintenance & Security",
    ],
    // Verified highlight card inside the About right column.
    // Note (PA-01): Once "5+ years experience" wording is verified, this card can display that approved stat.
    highlightCard: {
      value: "BS CS",
      label: "PUCIT · 2020–2024",
      pendingNote: "Experience stat pending final verification",
    },
    images: {
      primary: {
        // TODO (PA-03): Replace null with "/images/profile/about-portrait-1.webp"
        src: null,
        alt: "Ayesha Ahmad Khan working on WordPress development",
        placeholderLabel: "About Visual 01",
        placeholderSubtext: "Awaiting approved asset (1:1.26)",
      },
      secondary: {
        // TODO (PA-03): Replace null with "/images/profile/about-portrait-2.webp"
        src: null,
        alt: "Elementor and WordPress workflow preview",
        placeholderLabel: "About Visual 02",
        placeholderSubtext: "Awaiting approved asset (1:1.64)",
      },
    },
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    headline: "Let's Discuss Your Next WordPress Project",
    description:
      "Have a new WordPress website, Elementor redesign, WooCommerce store, or optimization project in mind? Reach out using the form to start the conversation.",
    // TODO (PA-04): Populate confirmed public email and optional location once supplied.
    email: null,
    emailPlaceholder: "Email pending confirmation",
    location: null,
    locationPlaceholder: "Location pending confirmation",
    // TODO (PA-04): Populate confirmed social URLs (LinkedIn, GitHub, etc.). Unconfirmed links render as non-navigating placeholders.
    socials: [
      { id: "linkedin", label: "LinkedIn", href: null },
      { id: "github", label: "GitHub", href: null },
      { id: "dribbble", label: "Portfolio / Behance", href: null },
    ],
  },

  footer: {
    ctaLine1: "Let's WORK",
    ctaLine2: "Together!",
    summary:
      "WordPress Developer & Elementor Expert building structured, responsive, and performance-conscious websites.",
    copyrightName: "Ayesha Ahmad Khan",
    copyrightYear: 2026,
  },
};
