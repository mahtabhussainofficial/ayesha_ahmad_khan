/**
 * Verified 10-project portfolio database for Ayesha Ahmad Khan.
 * Layout structure: 3 Featured Projects (01–03) + 7-Project Archive (04–10).
 *
 * Content integrity rules:
 * - Projects 01–05 include supplied titles, categories, descriptions, and services.
 * - Projects 06–10 include supplied titles and categories ONLY (no invented copy/services).
 * - All 10 projects use edge-to-edge cropped, web-optimized 1200x800 (3:2) WebP mockups under public/images/projects/.
 * - Live URLs remain null until verified project URLs are provided.
 */
export const projects = [
  {
    id: "beauty-studio-website-development",
    number: "01",
    featured: true,
    title: "Beauty Studio Website Development",
    category: "WordPress Website Design & Development",
    platform: "WordPress / Elementor",
    summary:
      "Designed and developed a professional website for a beauty studio using WordPress and Elementor. Focused on creating an elegant visual experience, clear service presentation, user-friendly navigation, and responsive layouts.",
    services: [
      "WordPress website development",
      "Elementor page design",
      "Responsive mobile and tablet layouts",
      "Service presentation",
      "UI/UX improvements",
      "Website styling and customization",
    ],
    image: "/images/projects/beauty-studio.webp",
    imageAlt:
      "Desktop browser mockup of the Beauty Studio WordPress and Elementor website featuring an ivory editorial hero, appointment booking CTA, and three-column service cards",
    liveUrl: null,
  },
  {
    id: "nonprofit-organization-website-development",
    number: "02",
    featured: true,
    title: "Nonprofit Organization Website Development",
    category: "WordPress Website Development",
    platform: "WordPress",
    summary:
      "Developed a nonprofit organization website with a focus on accessibility, user experience, and clear communication. Organized website content and navigation to help visitors easily understand the organization's mission, services, and initiatives.",
    services: [
      "Complete WordPress website development",
      "Elementor customization",
      "Content organization",
      "Responsive design",
      "Navigation and layout improvements",
      "User-friendly website structure",
    ],
    image: "/images/projects/nonprofit-organization.webp",
    imageAlt:
      "Desktop browser mockup of the Nonprofit Organization WordPress website displaying accessible navigation, community volunteer hero section, and three initiative cards",
    liveUrl: null,
  },
  {
    id: "suriname-tour-website-redesign-ecommerce",
    number: "03",
    featured: true,
    title: "Suriname Tour Website Redesign & E-commerce",
    category: "WordPress Redesign & WooCommerce",
    platform: "WordPress / WooCommerce",
    summary:
      "Redesigned and upgraded an existing travel website, improving its overall appearance, content structure, navigation, and e-commerce functionality. Worked on replacing outdated website components and improving the website management experience.",
    services: [
      "WordPress website redesign",
      "WooCommerce improvements",
      "Theme and plugin updates",
      "Website layout customization",
      "Navigation improvements",
      "Content and shop management",
    ],
    image: "/images/projects/suriname-tour-ecommerce.webp",
    imageAlt:
      "Desktop browser mockup of the Suriname Tour WordPress and WooCommerce redesign featuring a tropical rainforest hero banner, tour search bar, and three bookable tour cards",
    liveUrl: null,
  },
  {
    id: "landscaping-company-website-redesign",
    number: "04",
    featured: false,
    title: "Landscaping Company Website Redesign",
    category: "WordPress Website Redesign",
    platform: "WordPress",
    summary:
      "Redesigned a landscaping and garden construction company website with a modern professional appearance. Focused on presenting services effectively, improving the visual structure, and delivering a responsive experience across devices.",
    services: [
      "Website redesign",
      "Elementor development",
      "Responsive layouts",
      "Service page design",
      "UI/UX improvements",
      "Website customization",
    ],
    image: "/images/projects/landscaping-company.webp",
    imageAlt:
      "Desktop browser mockup of the Landscaping Company WordPress website redesign showing an architectural patio hero, quote CTA, and garden design, hardscaping, and lawn care cards",
    liveUrl: null,
  },
  {
    id: "speaking-business-website-rebranding",
    number: "05",
    featured: false,
    title: "Speaking Business Website Rebranding",
    category: "Website Design & Rebranding",
    platform: "Website Redesign",
    summary:
      "Successfully transformed an existing speaking business website with an updated brand presentation and professional website design. Improved visual consistency, clear typography, navigation, page layouts, and overall engaging user experience throughout.",
    services: [
      "Website rebranding",
      "WordPress design",
      "Elementor customization",
      "Typography and color styling",
      "Responsive website development",
    ],
    image: "/images/projects/speaking-business-rebranding.webp",
    imageAlt:
      "Desktop browser mockup of the Speaking Business website rebrand with refined navy and gold typography, keynote stage photography, and structured speaking topic highlights",
    liveUrl: null,
  },
  {
    id: "senior-community-website-development-optimization",
    number: "06",
    featured: false,
    title: "Senior Community Website Development & Optimization",
    category: "WordPress / SEO",
    platform: "WordPress / SEO",
    summary: null,
    services: [],
    image: "/images/projects/senior-community-seo.webp",
    imageAlt:
      "Desktop browser mockup of a Senior Community WordPress website featuring high-contrast accessible typography, warm teal navigation, courtyard imagery, and living option cards",
    liveUrl: null,
  },
  {
    id: "wordpress-malware-removal-security-fixes",
    number: "07",
    featured: false,
    title: "WordPress Malware Removal & Security Fixes",
    category: "WordPress Security",
    platform: "WordPress Security",
    summary: null,
    services: [],
    image: "/images/projects/wordpress-malware-security.webp",
    imageAlt:
      "Desktop browser mockup of a WordPress security and malware protection dashboard showing verified clean scan, active firewall, SSL protection, and security checks",
    liveUrl: null,
  },
  {
    id: "pixel-perfect-elementor-page-cloning",
    number: "08",
    featured: false,
    title: "Pixel-Perfect Elementor Page Cloning",
    category: "Elementor",
    platform: "Elementor",
    summary: null,
    services: [],
    image: "/images/projects/elementor-page-cloning.webp",
    imageAlt:
      "Desktop browser mockup of the Elementor page builder workspace displaying a pixel-accurate multi-column landing page with spacing guides and widget sidebar",
    liveUrl: null,
  },
  {
    id: "wordpress-website-speed-optimization",
    number: "09",
    featured: false,
    title: "WordPress Website Speed Optimization",
    category: "Performance",
    platform: "Performance",
    summary: null,
    services: [],
    image: "/images/projects/wordpress-speed-optimization.webp",
    imageAlt:
      "Desktop browser mockup of a WordPress website speed optimization dashboard displaying performance gauges, load-time waterfall chart, and WebP caching checklist",
    liveUrl: null,
  },
  {
    id: "wordpress-website-migration-troubleshooting",
    number: "10",
    featured: false,
    title: "WordPress Website Migration & Troubleshooting",
    category: "Migration",
    platform: "Migration",
    summary: null,
    services: [],
    image: "/images/projects/wordpress-migration-troubleshooting.webp",
    imageAlt:
      "Desktop browser mockup of a WordPress migration and diagnostics console showing source host, staging check, and live server transfer pipeline with verified checks",
    liveUrl: null,
  },
];
