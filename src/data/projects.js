/**
 * Verified 10-project portfolio database for Ayesha Ahmad Khan.
 *
 * Content integrity rules:
 * - Projects 01–05 include verified client descriptions, requirements, challenges, and services.
 * - Projects 06–10 use verified available information (title and category ONLY) with
 *   clean, editable placeholders where information is missing. Zero fabricated details.
 * - All 10 projects map directly to the 7 required category filters:
 *   "All Projects", "WordPress Development", "Elementor", "WooCommerce",
 *   "Website Redesign", "SEO & Performance", "Website Maintenance".
 */
export const PROJECT_CATEGORIES = [
  "All Projects",
  "WordPress Development",
  "Elementor",
  "WooCommerce",
  "Website Redesign",
  "SEO & Performance",
  "Website Maintenance",
];

export const projects = [
  {
    id: "beauty-studio-website-development",
    slug: "beauty-studio-website-development",
    number: "01",
    featured: true,
    title: "Beauty Studio Website Development",
    category: "WordPress Website Design & Development",
    filterCategories: ["WordPress Development", "Elementor"],
    platform: "WordPress / Elementor",
    summary:
      "Designed and developed a professional website for a beauty studio using WordPress and Elementor. Focused on creating an elegant visual experience, clear service presentation, user-friendly navigation, and responsive layouts.",
    overview:
      "A complete custom WordPress build designed for a modern beauty and aesthetics studio. The project required translating beauty branding into a functional, mobile-first website that simplifies service discovery and encourages appointment inquiries.",
    clientRequirements: [
      "Create an elegant, brand-aligned visual identity that appeals to studio clientele.",
      "Showcase tiered service offerings, treatment descriptions, and package pricing clearly.",
      "Ensure seamless mobile and tablet navigation for clients browsing and booking on the go.",
      "Integrate intuitive call-to-action touchpoints for appointment requests and contact.",
    ],
    challenges: [
      "Balancing high-resolution studio photography with fast mobile page load speeds.",
      "Structuring extensive service options without overwhelming prospective first-time clients.",
    ],
    services: [
      "WordPress website development",
      "Elementor page design",
      "Responsive mobile and tablet layouts",
      "Service presentation",
      "UI/UX improvements",
      "Website styling and customization",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Structure",
        description:
          "Reviewed studio branding guidelines, color palette, and organized treatment categories into an intuitive visitor flow.",
      },
      {
        step: "02",
        title: "Elementor Layout Design",
        description:
          "Built custom responsive page layouts with editorial typography, generous whitespace, and high-impact visual sections.",
      },
      {
        step: "03",
        title: "WordPress Configuration",
        description:
          "Configured modular templates, inquiry form pathways, and optimized image delivery across all device viewports.",
      },
      {
        step: "04",
        title: "Quality Review & Handover",
        description:
          "Conducted cross-browser verification, mobile responsiveness testing, and provided an editable content management setup.",
      },
    ],
    tools: ["WordPress", "Elementor Pro", "Responsive CSS", "Figma Design Translation"],
    image: "/images/projects/beauty-studio.webp",
    imageAlt:
      "Desktop browser mockup of the Beauty Studio WordPress and Elementor website featuring an ivory editorial hero, appointment booking CTA, and three-column service cards",
    liveUrl: null,
    relatedSlugs: [
      "speaking-business-website-rebranding",
      "pixel-perfect-elementor-page-cloning",
      "nonprofit-organization-website-development",
    ],
  },
  {
    id: "nonprofit-organization-website-development",
    slug: "nonprofit-organization-website-development",
    number: "02",
    featured: true,
    title: "Nonprofit Organization Website Development",
    category: "WordPress Website Development",
    filterCategories: ["WordPress Development"],
    platform: "WordPress",
    summary:
      "Developed a nonprofit organization website with a focus on accessibility, user experience, and clear communication. Organized website content and navigation to help visitors easily understand the organization's mission, services, and initiatives.",
    overview:
      "A mission-driven WordPress website developed for a community nonprofit organization. The objective was to create an accessible, trustworthy digital presence that articulates community initiatives, facilitates donor engagement, and organizes multi-tier program information.",
    clientRequirements: [
      "Establish an accessible, intuitive information architecture for diverse visitor demographics.",
      "Clearly communicate core mission pillars, community outreach programs, and organizational impact.",
      "Provide prominent pathways for volunteer sign-ups, donations, and newsletter subscriptions.",
      "Maintain strict responsive standards and fast load times on varied network conditions.",
    ],
    challenges: [
      "Consolidating extensive organizational documentation and community resources into an organized, uncluttered hierarchy.",
      "Ensuring high-contrast readability and keyboard-accessible navigation throughout all sections.",
    ],
    services: [
      "Complete WordPress website development",
      "Elementor customization",
      "Content organization",
      "Responsive design",
      "Navigation and layout improvements",
      "User-friendly website structure",
    ],
    process: [
      {
        step: "01",
        title: "Information Architecture",
        description:
          "Mapped community programs, donation pathways, and resource libraries into structured navigation trees.",
      },
      {
        step: "02",
        title: "Accessible Templating",
        description:
          "Developed high-contrast, accessible Elementor components adhering to clean readability and semantic hierarchy.",
      },
      {
        step: "03",
        title: "Engagement Flow Integration",
        description:
          "Configured contact forms, volunteer inquiry gateways, and clear callouts for community participation.",
      },
      {
        step: "04",
        title: "Usability & Device Testing",
        description:
          "Tested across desktop, tablet, and mobile screens to guarantee seamless readability and easy content updates.",
      },
    ],
    tools: ["WordPress", "Elementor", "Accessibility Standards", "Responsive Layouts"],
    image: "/images/projects/nonprofit-organization.webp",
    imageAlt:
      "Desktop browser mockup of the Nonprofit Organization WordPress website displaying accessible navigation, community volunteer hero section, and three initiative cards",
    liveUrl: null,
    relatedSlugs: [
      "beauty-studio-website-development",
      "landscaping-company-website-redesign",
      "senior-community-website-development-optimization",
    ],
  },
  {
    id: "suriname-tour-website-redesign-ecommerce",
    slug: "suriname-tour-website-redesign-ecommerce",
    number: "03",
    featured: true,
    title: "Suriname Tour Website Redesign & E-commerce",
    category: "WordPress Redesign & WooCommerce",
    filterCategories: ["WooCommerce", "Website Redesign"],
    platform: "WordPress / WooCommerce",
    summary:
      "Redesigned and upgraded an existing travel website, improving its overall appearance, content structure, navigation, and e-commerce functionality. Worked on replacing outdated website components and improving the website management experience.",
    overview:
      "A complete modernization and e-commerce transformation of an established tour and travel operator in Suriname. The project replaced a legacy layout with an engaging travel storefront equipped with bookable excursion products, streamlined checkout, and intuitive trip browsing.",
    clientRequirements: [
      "Modernize an outdated design with an immersive, visual-led layout highlighting tropical eco-tourism destinations.",
      "Implement WooCommerce functionality for customizable tour packages, seasonal bookings, and clear checkout flows.",
      "Reorganize tour categories, itineraries, and inclusions for effortless customer browsing.",
      "Replace legacy plugins with clean, maintainable alternatives for streamlined backend store management.",
    ],
    challenges: [
      "Migrating legacy tour product descriptions and media assets without losing historical booking context.",
      "Optimizing heavy multimedia travel imagery while maintaining smooth mobile interaction and swift page load times.",
    ],
    services: [
      "WordPress website redesign",
      "WooCommerce improvements",
      "Theme and plugin updates",
      "Website layout customization",
      "Navigation improvements",
      "Content and shop management",
    ],
    process: [
      {
        step: "01",
        title: "Legacy Audit & Catalog Strategy",
        description:
          "Audited existing plugins, evaluated tour purchase paths, and restructured the product catalog schema.",
      },
      {
        step: "02",
        title: "WooCommerce Storefront Build",
        description:
          "Configured bookable tour products, clear itinerary presentation cards, and simplified cart-to-checkout flows.",
      },
      {
        step: "03",
        title: "Visual Overhaul & Navigation",
        description:
          "Implemented full-width destination heroes, responsive tour filter grids, and prominent booking CTAs.",
      },
      {
        step: "04",
        title: "E-commerce Testing & Launch",
        description:
          "Conducted end-to-end checkout simulations, mobile payment testing, and provided store management documentation.",
      },
    ],
    tools: ["WordPress", "WooCommerce", "Elementor", "Payment Integration", "Custom Styling"],
    image: "/images/projects/suriname-tour-ecommerce.webp",
    imageAlt:
      "Desktop browser mockup of the Suriname Tour WordPress and WooCommerce redesign featuring a tropical rainforest hero banner, tour search bar, and three bookable tour cards",
    liveUrl: null,
    relatedSlugs: [
      "landscaping-company-website-redesign",
      "speaking-business-website-rebranding",
      "wordpress-website-speed-optimization",
    ],
  },
  {
    id: "landscaping-company-website-redesign",
    slug: "landscaping-company-website-redesign",
    number: "04",
    featured: false,
    title: "Landscaping Company Website Redesign",
    category: "WordPress Website Redesign",
    filterCategories: ["Website Redesign", "WordPress Development"],
    platform: "WordPress",
    summary:
      "Redesigned a landscaping and garden construction company website with a modern professional appearance. Focused on presenting services effectively, improving the visual structure, and delivering a responsive experience across devices.",
    overview:
      "A comprehensive visual redesign and content reorganization for a residential and commercial landscaping contractor. The new site highlights project craftsmanship with expansive project galleries and direct quote request mechanisms.",
    clientRequirements: [
      "Replace an outdated website with a crisp, contemporary visual design reflecting high-quality landscaping craft.",
      "Structure individual services including hardscaping, lawn maintenance, patio paving, and seasonal care.",
      "Incorporate responsive project galleries showcasing completed residential and commercial work.",
      "Make quote requests effortless with high-visibility contact forms and mobile click-to-call buttons.",
    ],
    challenges: [
      "Structuring extensive service offerings into focused, easy-to-read pages without redundant text.",
      "Ensuring expansive outdoor project photography renders crisply while remaining compressed for fast mobile loading.",
    ],
    services: [
      "Website redesign",
      "Elementor development",
      "Responsive layouts",
      "Service page design",
      "UI/UX improvements",
      "Website customization",
    ],
    process: [
      {
        step: "01",
        title: "Competitive Analysis & Brand Refresh",
        description:
          "Defined a modern color hierarchy, clear typographic system, and structured service categorization.",
      },
      {
        step: "02",
        title: "Service Card & Gallery Wireframes",
        description:
          "Designed dedicated layouts for landscape construction, lawn care, and high-impact visual project portfolios.",
      },
      {
        step: "03",
        title: "Elementor Page Construction",
        description:
          "Built modular, responsive sections with mobile-optimized inquiry forms and trust-building customer guarantees.",
      },
      {
        step: "04",
        title: "Cross-Device QA & Delivery",
        description:
          "Tested tap targets, image compression, and form validations across standard phone, tablet, and desktop viewports.",
      },
    ],
    tools: ["WordPress", "Elementor", "Responsive UI", "Form Integration", "Image Optimization"],
    image: "/images/projects/landscaping-company.webp",
    imageAlt:
      "Desktop browser mockup of the Landscaping Company WordPress website redesign showing an architectural patio hero, quote CTA, and garden design, hardscaping, and lawn care cards",
    liveUrl: null,
    relatedSlugs: [
      "suriname-tour-website-redesign-ecommerce",
      "speaking-business-website-rebranding",
      "beauty-studio-website-development",
    ],
  },
  {
    id: "speaking-business-website-rebranding",
    slug: "speaking-business-website-rebranding",
    number: "05",
    featured: false,
    title: "Speaking Business Website Rebranding",
    category: "Website Design & Rebranding",
    filterCategories: ["Website Redesign", "Elementor"],
    platform: "Website Redesign",
    summary:
      "Successfully transformed an existing speaking business website with an updated brand presentation and professional website design. Improved visual consistency, clear typography, navigation, page layouts, and overall engaging user experience throughout.",
    overview:
      "A strategic brand repositioning and website overhaul for a professional keynote speaker and executive coach. The project elevated the visual presentation to appeal directly to corporate conference organizers and corporate event planners.",
    clientRequirements: [
      "Elevate personal branding with authoritative executive typography, color styling, and polished layout hierarchy.",
      "Showcase keynote speech topics, video reels, client logos, and downloadable speaker one-sheets.",
      "Streamline speaker inquiry forms for event organizers, conference committees, and corporate clients.",
      "Ensure fast, flawless rendering on mobile devices used by busy event executives.",
    ],
    challenges: [
      "Creating an executive-level aesthetic that balances authority with approachable personal storytelling.",
      "Seamlessly embedding video content without slowing down initial page render or Core Web Vitals.",
    ],
    services: [
      "Website rebranding",
      "WordPress design",
      "Elementor customization",
      "Typography and color styling",
      "Responsive website development",
    ],
    process: [
      {
        step: "01",
        title: "Brand Alignment & Positioning",
        description:
          "Refined color palettes, established editorial font scales, and organized keynote topics into clean presentation blocks.",
      },
      {
        step: "02",
        title: "Media Showcase Architecture",
        description:
          "Integrated responsive video embeds, downloadable speaking PDFs, and prominent client trust markers.",
      },
      {
        step: "03",
        title: "Elementor Template Build",
        description:
          "Constructed high-conversion landing sections with structured event inquiry pathways and speaker biographies.",
      },
      {
        step: "04",
        title: "Speed Tuning & Launch",
        description:
          "Optimized lazy-loading for video assets, checked cross-device layouts, and finalized production deployment.",
      },
    ],
    tools: ["WordPress", "Elementor", "Typography Styling", "Media Integration", "Responsive Layouts"],
    image: "/images/projects/speaking-business-rebranding.webp",
    imageAlt:
      "Desktop browser mockup of the Speaking Business website rebrand with refined navy and gold typography, keynote stage photography, and structured speaking topic highlights",
    liveUrl: null,
    relatedSlugs: [
      "beauty-studio-website-development",
      "landscaping-company-website-redesign",
      "pixel-perfect-elementor-page-cloning",
    ],
  },
  {
    id: "senior-community-website-development-optimization",
    slug: "senior-community-website-development-optimization",
    number: "06",
    featured: false,
    title: "Senior Community Website Development & Optimization",
    category: "WordPress / SEO",
    filterCategories: ["WordPress Development", "SEO & Performance"],
    platform: "WordPress / SEO",
    summary:
      "Development and search engine optimization for a senior living community website.",
    overview:
      "Development and search engine optimization project for a senior living community website. Full project documentation, specifications, and scope are editable upon client request.",
    clientRequirements: [
      "[Client requirements and project brief can be documented here.]",
    ],
    challenges: [
      "[Specific technical challenges and solutions can be documented here.]",
    ],
    services: [],
    process: [],
    tools: [],
    image: "/images/projects/senior-community-seo.webp",
    imageAlt:
      "Desktop browser mockup of a Senior Community WordPress website featuring high-contrast accessible typography, warm teal navigation, courtyard imagery, and living option cards",
    liveUrl: null,
    relatedSlugs: [
      "nonprofit-organization-website-development",
      "wordpress-website-speed-optimization",
      "beauty-studio-website-development",
    ],
  },
  {
    id: "wordpress-malware-removal-security-fixes",
    slug: "wordpress-malware-removal-security-fixes",
    number: "07",
    featured: false,
    title: "WordPress Malware Removal & Security Fixes",
    category: "WordPress Security",
    filterCategories: ["Website Maintenance"],
    platform: "WordPress Security",
    summary:
      "WordPress security intervention covering malware detection and site cleanup.",
    overview:
      "WordPress security and malware remediation engagement. Full investigation details, server diagnostics, and hardening logs are editable upon client request.",
    clientRequirements: [
      "[Security audit scope and client specifications can be documented here.]",
    ],
    challenges: [
      "[Infection vector diagnostics and technical challenges can be documented here.]",
    ],
    services: [],
    process: [],
    tools: [],
    image: "/images/projects/wordpress-malware-security.webp",
    imageAlt:
      "Desktop browser mockup of a WordPress security and malware protection dashboard showing verified clean scan, active firewall, SSL protection, and security checks",
    liveUrl: null,
    relatedSlugs: [
      "wordpress-website-migration-troubleshooting",
      "wordpress-website-speed-optimization",
      "nonprofit-organization-website-development",
    ],
  },
  {
    id: "pixel-perfect-elementor-page-cloning",
    slug: "pixel-perfect-elementor-page-cloning",
    number: "08",
    featured: false,
    title: "Pixel-Perfect Elementor Page Cloning",
    category: "Elementor",
    filterCategories: ["Elementor"],
    platform: "Elementor",
    summary:
      "Precision Elementor page cloning matching design reference specifications.",
    overview:
      "Elementor layout cloning and translation project. Source design comps, container specifications, and styling parameters are editable upon client request.",
    clientRequirements: [
      "[Source design files and specific cloning requirements can be documented here.]",
    ],
    challenges: [
      "[Design translation and responsive layout details can be documented here.]",
    ],
    services: [],
    process: [],
    tools: [],
    image: "/images/projects/elementor-page-cloning.webp",
    imageAlt:
      "Desktop browser mockup of the Elementor page builder workspace displaying a pixel-accurate multi-column landing page with spacing guides and widget sidebar",
    liveUrl: null,
    relatedSlugs: [
      "beauty-studio-website-development",
      "speaking-business-website-rebranding",
      "landscaping-company-website-redesign",
    ],
  },
  {
    id: "wordpress-website-speed-optimization",
    slug: "wordpress-website-speed-optimization",
    number: "09",
    featured: false,
    title: "WordPress Website Speed Optimization",
    category: "Performance",
    filterCategories: ["SEO & Performance"],
    platform: "Performance",
    summary:
      "WordPress website performance tuning and speed optimization project.",
    overview:
      "WordPress speed optimization project focused on load-time reduction and caching. Performance benchmarks and optimization logs are editable upon client request.",
    clientRequirements: [
      "[Target performance benchmarks and speed requirements can be documented here.]",
    ],
    challenges: [
      "[Resource bottleneck diagnostics and server constraints can be documented here.]",
    ],
    services: [],
    process: [],
    tools: [],
    image: "/images/projects/wordpress-speed-optimization.webp",
    imageAlt:
      "Desktop browser mockup of a WordPress website speed optimization dashboard displaying performance gauges, load-time waterfall chart, and WebP caching checklist",
    liveUrl: null,
    relatedSlugs: [
      "senior-community-website-development-optimization",
      "wordpress-malware-removal-security-fixes",
      "suriname-tour-website-redesign-ecommerce",
    ],
  },
  {
    id: "wordpress-website-migration-troubleshooting",
    slug: "wordpress-website-migration-troubleshooting",
    number: "10",
    featured: false,
    title: "WordPress Website Migration & Troubleshooting",
    category: "Migration",
    filterCategories: ["Website Maintenance"],
    platform: "Migration",
    summary:
      "WordPress site transfer across hosting environments and technical troubleshooting.",
    overview:
      "WordPress website migration and configuration troubleshooting project. Source/target host details and transfer specifications are editable upon client request.",
    clientRequirements: [
      "[Hosting migration specifications and timing constraints can be documented here.]",
    ],
    challenges: [
      "[Server configuration differences and database details can be documented here.]",
    ],
    services: [],
    process: [],
    tools: [],
    image: "/images/projects/wordpress-migration-troubleshooting.webp",
    imageAlt:
      "Desktop browser mockup of a WordPress migration and diagnostics console showing source host, staging check, and live server transfer pipeline with verified checks",
    liveUrl: null,
    relatedSlugs: [
      "wordpress-malware-removal-security-fixes",
      "wordpress-website-speed-optimization",
      "nonprofit-organization-website-development",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug || p.id === slug) || null;
}

export function getRelatedProjects(currentSlug, limit = 2) {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  // Prefer explicitly defined relatedSlugs
  if (current.relatedSlugs?.length > 0) {
    const matched = current.relatedSlugs
      .map((slug) => getProjectBySlug(slug))
      .filter(Boolean);
    if (matched.length >= limit) return matched.slice(0, limit);
  }

  // Fallback: match by filterCategories
  return projects
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.filterCategories.some((cat) => current.filterCategories.includes(cat))
    )
    .slice(0, limit);
}
