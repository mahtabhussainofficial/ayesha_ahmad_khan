/**
 * 5 Core WordPress & Elementor Services for Ayesha Ahmad Khan.
 *
 * Rules:
 * - Truthful, realistic content based on practical frontend and WordPress execution.
 * - No invented guarantees, client metrics, or unrealistic marketing claims.
 * - Dynamic routes at /services/[slug].
 */

export const services = [
  {
    id: "wordpress-website-development",
    slug: "wordpress-website-development",
    legacyId: "wordpress-development",
    title: "WordPress Website Development",
    icon: "wordpress",
    shortDescription:
      "Custom, cleanly structured WordPress websites built for stability, easy content management, and dependable day-to-day performance.",
    intro:
      "A solid, well-architected WordPress website is the backbone of an effective digital presence. I build bespoke WordPress websites grounded in clean engineering principles—prioritizing semantic structure, intuitive content administration, security, and responsive layouts that look great on any device.",
    whatsIncluded: [
      {
        title: "Clean WordPress Architecture",
        description:
          "Structured theme configuration, semantic templates, and lightweight plugin selection to avoid unnecessary bloat.",
      },
      {
        title: "Fully Responsive Layouts",
        description:
          "Custom-styled layouts tested across desktop monitors, laptops, tablets, and smartphones for consistent presentation.",
      },
      {
        title: "Intuitive Admin Experience",
        description:
          "Configured back-end fields so you and your team can effortlessly edit text, swap images, and publish new content.",
      },
      {
        title: "Security & Backup Foundations",
        description:
          "Hardened login parameters, clean directory permissions, and automated backup routines to protect your digital asset.",
      },
      {
        title: "SEO-Friendly Foundation",
        description:
          "Clean permalinks, semantic heading hierarchy, open graph tags, and fast page structures ready for search indexation.",
      },
      {
        title: "Cross-Browser Compatibility",
        description:
          "Thorough testing across Chrome, Safari, Firefox, and Edge to ensure uniform rendering and functional stability.",
      },
    ],
    problemsAddressed: [
      {
        problem: "Cluttered, bloated templates that are difficult to update",
        solution:
          "I build lean, modular page structures with organized back-end fields so updating text and images takes minutes.",
      },
      {
        problem: "Mobile layouts that break or look awkward on phones",
        solution:
          "Every page is engineered mobile-first with adaptive typography, responsive grids, and touch-friendly navigation.",
      },
      {
        problem: "Fragile code that breaks whenever WordPress or plugins update",
        solution:
          "Standard-compliant WordPress practices and minimal external dependencies ensure your site stays stable through future updates.",
      },
      {
        problem: "Confusing navigation that causes potential clients to bounce",
        solution:
          "Clear user flows and strategically placed call-to-action touchpoints guide visitors toward booking or inquiring.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Structure",
        description:
          "We clarify your target audience, required pages, content structure, and core functional needs.",
      },
      {
        step: "02",
        title: "Development & Templating",
        description:
          "I build clean, semantic page templates, configure navigation menus, and implement responsive styling.",
      },
      {
        step: "03",
        title: "Content & Form Integration",
        description:
          "We populate verified copy, optimize visual assets, and connect functional inquiry and contact forms.",
      },
      {
        step: "04",
        title: "Testing & Handover",
        description:
          "Cross-device QA, security checklist execution, and a clear walkthrough so you have full control over your site.",
      },
    ],
    faq: [
      {
        question: "Will I be able to update content on my own after launch?",
        answer:
          "Yes. I configure the WordPress dashboard so that modifying copy, replacing photos, adding blog posts, or updating contact details can be done without touching code.",
      },
      {
        question: "Do you build custom themes or use pre-made templates?",
        answer:
          "I build clean, tailored setups using flexible, well-supported frameworks and page builders (like Elementor or lightweight custom themes) adapted strictly to your brand specifications.",
      },
      {
        question: "How long does a typical WordPress build take?",
        answer:
          "Timelines depend on the number of pages and custom requirements, typically ranging between 1 to 3 weeks once all content and brand assets are prepared.",
      },
      {
        question: "Do you assist with domain and hosting setup?",
        answer:
          "Yes. I can guide you through choosing reputable WordPress hosting, configuring DNS settings, and ensuring SSL certificates are properly installed.",
      },
    ],
    relatedProjectSlugs: [
      "beauty-studio-website-development",
      "nonprofit-organization-website-development",
      "landscaping-company-website-redesign",
      "senior-community-website-development-optimization",
    ],
  },
  {
    id: "elementor-website-design",
    slug: "elementor-website-design",
    legacyId: "elementor-design",
    title: "Elementor Website Design",
    icon: "elementor",
    shortDescription:
      "Pixel-attentive Elementor layouts designed with consistent typography, responsive grids, and reusable templates tailored to your brand.",
    intro:
      "Elementor offers unmatched visual flexibility when paired with disciplined engineering. I create custom, pixel-accurate Elementor websites designed with clean container structures, global typography systems, and minimal plugin dependencies—delivering creative freedom without sluggish performance.",
    whatsIncluded: [
      {
        title: "Pixel-Accurate Page Layouts",
        description:
          "Exact translation of design mockups or brand identity into polished, cohesive Elementor page sections.",
      },
      {
        title: "Global Style & Typography System",
        description:
          "Centralized global colors and typography styles ensuring consistent brand visual hierarchy across every page.",
      },
      {
        title: "Custom Breakpoint Tuning",
        description:
          "Dedicated padding, font sizing, and container flow adjustments tailored for desktop, tablet, and mobile screens.",
      },
      {
        title: "Reusable Section Templates",
        description:
          "Modular headers, footers, callouts, and testimonial blocks saved as reusable templates for effortless future scaling.",
      },
      {
        title: "Interactive Micro-Interactions",
        description:
          "Smooth, non-intrusive hover effects, accordion FAQs, modal popups, and tabbed content areas that enrich user experience.",
      },
      {
        title: "Lightweight Container Architecture",
        description:
          "Modern Elementor Flexbox and Grid containers to minimize DOM depth and keep page loading rapid.",
      },
    ],
    problemsAddressed: [
      {
        problem: "Heavy, bloated Elementor pages that suffer from poor performance",
        solution:
          "I utilize modern Flexbox containers, purge unused widget assets, and avoid heavy third-party add-on packs.",
      },
      {
        problem: "Design elements breaking unpredictably across tablet and phone sizes",
        solution:
          "Each page is individually inspected and refined across standard mobile, small tablet, and large monitor breakpoints.",
      },
      {
        problem: "Inconsistent font sizes and mismatched colors across subpages",
        solution:
          "I establish a strict global styling system so all headers, body text, buttons, and accents maintain total harmony.",
      },
      {
        problem: "Difficulty creating new landing pages in the future",
        solution:
          "I build reusable template kits and section presets that allow you to spin up new pages with consistent styling.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand & Style Definition",
        description:
          "Establish global colors, font families, container widths, and baseline design tokens inside Elementor.",
      },
      {
        step: "02",
        title: "Core Template Assembly",
        description:
          "Design persistent site elements: custom headers, footers, mobile drawers, and single-page layouts.",
      },
      {
        step: "03",
        title: "Responsive Precision Tuning",
        description:
          "Calibrate spacing, touch targets, and visual order across phone and tablet breakpoints.",
      },
      {
        step: "04",
        title: "Optimization & Handover",
        description:
          "Eliminate redundant containers, test form submissions, and provide clear guidelines for self-editing.",
      },
    ],
    faq: [
      {
        question: "Do I need Elementor Pro for my website?",
        answer:
          "While Elementor Free is capable for simple layouts, Elementor Pro is recommended for custom headers, footers, dynamic post templates, and built-in popup and form widgets without needing third-party plugins.",
      },
      {
        question: "Will Elementor slow down my website?",
        answer:
          "When built improperly with dozens of third-party add-on plugins, Elementor can get slow. I use modern Flexbox containers, clean asset management, and image compression to keep your site fast and responsive.",
      },
      {
        question: "Can you clone or rebuild a Figma design into Elementor?",
        answer:
          "Yes. I specialize in pixel-accurate design translation, matching font sizes, spacing, shadows, and color codes directly from Figma or reference websites.",
      },
      {
        question: "Can I easily duplicate sections to create new landing pages?",
        answer:
          "Absolutely. Every page is structured with modular sections that you can duplicate, reorder, or save as templates with one click.",
      },
    ],
    relatedProjectSlugs: [
      "beauty-studio-website-development",
      "speaking-business-website-rebranding",
      "pixel-perfect-elementor-page-cloning",
      "landscaping-company-website-redesign",
    ],
  },
  {
    id: "website-redesign-rebranding",
    slug: "website-redesign-rebranding",
    legacyId: "redesign-rebranding",
    title: "Website Redesign & Rebranding",
    icon: "redesign",
    shortDescription:
      "Modernizing outdated WordPress websites with refreshed visual hierarchy, improved usability, and cohesive brand presentation.",
    intro:
      "If your current website feels dated, fails to represent your business quality, or struggles to generate inquiries, a focused redesign revitalizes your brand. I preserve your hard-earned SEO authority and existing content while transforming the visual presentation, navigation, and conversion pathways into a contemporary experience.",
    whatsIncluded: [
      {
        title: "Comprehensive Visual Refresh",
        description:
          "Modern typography, balanced whitespace, elevated color pairings, and contemporary layout arrangements.",
      },
      {
        title: "Content & Navigation Restructure",
        description:
          "Reorganizing cluttered menus and fragmented pages into a logical, frictionless journey for prospective clients.",
      },
      {
        title: "SEO URL & Ranking Preservation",
        description:
          "Careful URL mapping, 301 redirects where necessary, and meta tag preservation to protect established Google rankings.",
      },
      {
        title: "Mobile Usability Overhaul",
        description:
          "Rebuilding dated non-responsive elements into fluid, thumb-friendly mobile layouts with prominent contact options.",
      },
      {
        title: "Conversion Touchpoint Enhancement",
        description:
          "High-visibility inquiry buttons, trust indicators, and streamlined contact forms designed to encourage action.",
      },
      {
        title: "Staging Site Development",
        description:
          "Building the new design in a secure staging sandbox so your current live website remains fully operational until launch day.",
      },
    ],
    problemsAddressed: [
      {
        problem: "The website looks 5 to 10 years old and doesn't reflect your current market standard",
        solution:
          "I redesign your site with contemporary visual aesthetics, refined typography, and engaging layout rhythm.",
      },
      {
        problem: "Fear of losing existing search engine rankings during a redesign",
        solution:
          "I systematically preserve permalinks, verify meta tags, and configure redirects so your SEO ranking signals stay protected.",
      },
      {
        problem: "Visitors get lost in confusing multi-level menus and bounce",
        solution:
          "I restructure your information architecture into clean, intuitive pathways that guide users straight to your key services.",
      },
      {
        problem: "Downtime during the transition process harming business operations",
        solution:
          "All work is executed on a staging server and migrated with zero unexpected downtime during the final switch.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Content Inventory",
        description:
          "Review existing pages, analyze top-performing URLs, and identify outdated elements needing modernization.",
      },
      {
        step: "02",
        title: "Staging Prototype & Redesign",
        description:
          "Build the refreshed design in an isolated staging sandbox without affecting your live website.",
      },
      {
        step: "03",
        title: "Review & Refinement",
        description:
          "Collect your feedback, fine-tune typography and layout details, and test across all standard viewports.",
      },
      {
        step: "04",
        title: "Seamless Cutover & Verification",
        description:
          "Migrate the approved site to your live host, verify redirect integrity, and confirm all forms function properly.",
      },
    ],
    faq: [
      {
        question: "Will my current site go offline while you work on the redesign?",
        answer:
          "No. All redesign work takes place on a secure staging server. Your current website remains 100% online and functional until the approved new design is migrated.",
      },
      {
        question: "Can we keep our existing written content and blog posts?",
        answer:
          "Yes. All existing blog articles, pages, and media can be migrated seamlessly into the new, refreshed design structure.",
      },
      {
        question: "How do you protect our current Google rankings?",
        answer:
          "I preserve existing URL slugs wherever possible. When URL changes are beneficial, I implement 301 redirects and ensure meta titles, descriptions, and sitemaps are verified.",
      },
      {
        question: "What do you need from me to start a redesign?",
        answer:
          "Your current website access, high-resolution logos, brand guidelines (if available), and an overview of what you like and dislike about your current setup.",
      },
    ],
    relatedProjectSlugs: [
      "suriname-tour-website-redesign-ecommerce",
      "landscaping-company-website-redesign",
      "speaking-business-website-rebranding",
    ],
  },
  {
    id: "woocommerce-development",
    slug: "woocommerce-development",
    legacyId: "woocommerce-development",
    title: "WooCommerce Development",
    icon: "woocommerce",
    shortDescription:
      "Structured online storefronts with clean product catalogs, smooth checkout flows, and practical store management on WooCommerce.",
    intro:
      "A dependable e-commerce store needs more than just good looks—it requires a seamless product browsing experience, effortless checkout, secure payment handling, and straightforward inventory management. I build and customize WooCommerce stores tailored to your catalog and customer workflow.",
    whatsIncluded: [
      {
        title: "Custom Storefront & Shop Pages",
        description:
          "Clean product grid displays, intuitive category filtering, and responsive product card presentation.",
      },
      {
        title: "Detailed Single Product Layouts",
        description:
          "High-impact product image galleries, variant selectors, clear pricing, and tabbed descriptions/specifications.",
      },
      {
        title: "Frictionless Checkout Flow",
        description:
          "Distraction-free cart and checkout layouts designed to minimize cart abandonment and streamline purchase completion.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Configuration of reliable payment options including Stripe, PayPal, or regional gateways with SSL security.",
      },
      {
        title: "Shipping & Tax Configuration",
        description:
          "Setting up flat-rate, table-rate, or free shipping rules alongside automated or manual tax calculations.",
      },
      {
        title: "Order & Inventory Management Setup",
        description:
          "Structured dashboard setup for effortless order fulfillment, stock tracking, and automated email notifications.",
      },
    ],
    problemsAddressed: [
      {
        problem: "High cart abandonment due to lengthy or confusing checkout forms",
        solution:
          "I simplify checkout steps, eliminate unnecessary fields, and create a distraction-free order completion flow.",
      },
      {
        problem: "Cluttered product catalogs that make finding items frustrating",
        solution:
          "I implement clear taxonomy, category filtering, search features, and intuitive product attribute selectors.",
      },
      {
        problem: "Slow store load times driven by unoptimized product images and scripts",
        solution:
          "I optimize WooCommerce script execution, configure responsive image sizes, and ensure fast database queries.",
      },
      {
        problem: "Difficulty managing stock, orders, and customer inquiries on the backend",
        solution:
          "I organize your WooCommerce dashboard and provide a straightforward operating guide for your daily store routine.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Store Strategy & Catalog Setup",
        description:
          "Define product types (simple, variable, downloadable), categories, shipping rules, and payment gateways.",
      },
      {
        step: "02",
        title: "Storefront & Template Design",
        description:
          "Design responsive shop catalogs, product detail templates, cart layouts, and brand-aligned checkout pages.",
      },
      {
        step: "03",
        title: "Gateway & Order Flow Integration",
        description:
          "Configure test mode payment gateways, automated transactional emails, and inventory management settings.",
      },
      {
        step: "04",
        title: "Test Transactions & Launch",
        description:
          "Perform live sandbox transactions, verify coupon logic, confirm mobile responsiveness, and push live.",
      },
    ],
    faq: [
      {
        question: "Can I sell both physical and digital products?",
        answer:
          "Yes. WooCommerce natively supports physical goods with shipping calculations, downloadable digital files, services, and appointment bookings.",
      },
      {
        question: "Which payment gateways can be integrated?",
        answer:
          "Standard integrations include Stripe (credit cards, Apple Pay, Google Pay), PayPal, and region-specific payment processors compatible with WordPress.",
      },
      {
        question: "Does WooCommerce have ongoing monthly subscription fees?",
        answer:
          "WooCommerce itself is free and open-source. You only pay for your standard WordPress hosting, payment processor transaction fees, and any specialized premium plugins you may choose.",
      },
      {
        question: "Is WooCommerce secure for accepting payments?",
        answer:
          "Yes. Payment data is processed securely through PCI-compliant gateways (like Stripe or PayPal) via encrypted SSL connections, meaning sensitive card details never touch your server.",
      },
    ],
    relatedProjectSlugs: [
      "suriname-tour-website-redesign-ecommerce",
      "wordpress-website-speed-optimization",
      "beauty-studio-website-development",
    ],
  },
  {
    id: "website-speed-seo-optimization",
    slug: "website-speed-seo-optimization",
    legacyId: "speed-seo-maintenance",
    title: "Website Speed & SEO Optimization",
    icon: "performance",
    shortDescription:
      "Performance tuning, on-page technical SEO foundations, routine updates, backups, and security hardening to keep sites running smoothly.",
    intro:
      "A fast, well-optimized website keeps visitors engaged and satisfies search engine indexing requirements. I analyze technical bottlenecks—from render-blocking scripts and bloated images to unoptimized databases—and implement lasting optimizations that improve Core Web Vitals, organic search foundations, and site security.",
    whatsIncluded: [
      {
        title: "Core Web Vitals Optimization",
        description:
          "Targeted enhancements for Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).",
      },
      {
        title: "Image & Media Optimization",
        description:
          "Next-gen WebP compression, responsive srcset configuration, and intelligent lazy-loading for fast visual delivery.",
      },
      {
        title: "CSS & JavaScript Streamlining",
        description:
          "Minification, script deferral, and removal of render-blocking assets on critical landing pages.",
      },
      {
        title: "Server & Browser Caching",
        description:
          "Configuration of page caching, browser cache headers, and Gzip/Brotli server compression rules.",
      },
      {
        title: "Technical On-Page SEO Foundations",
        description:
          "Semantic heading hierarchy, meta title/description tags, XML sitemap generation, and schema markup integration.",
      },
      {
        title: "Security Hardening & Maintenance",
        description:
          "Firewall configuration, database maintenance, malware scanning, and routine core and plugin update schedules.",
      },
    ],
    problemsAddressed: [
      {
        problem: "Slow load times causing visitors to abandon your site before it renders",
        solution:
          "I isolate network waterfall bottlenecks, optimize media delivery, and implement fast server and browser caching.",
      },
      {
        problem: "Failing Google Core Web Vitals metrics harming search rankings",
        solution:
          "I fix layout shifts, eliminate render-blocking resources, and optimize font loading to meet performance standards.",
      },
      {
        problem: "Search engines not indexing pages or displaying incorrect snippet information",
        solution:
          "I generate clean XML sitemaps, verify robots.txt rules, configure Open Graph data, and structure semantic meta tags.",
      },
      {
        problem: "Vulnerabilities from outdated plugins or unmonitored security risks",
        solution:
          "I establish regular backup schedules, implement security hardening rules, and safely update WordPress components.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Performance Audit",
        description:
          "Analyze Google PageSpeed Insights, GTmetrix waterfalls, server response times, and current SEO health.",
      },
      {
        step: "02",
        title: "Asset & Code Streamlining",
        description:
          "Compress images into modern WebP formats, defer non-critical JavaScript, and eliminate redundant CSS.",
      },
      {
        step: "03",
        title: "Caching & Technical SEO Setup",
        description:
          "Configure page caching, server headers, XML sitemaps, and structured heading tags for search bots.",
      },
      {
        step: "04",
        title: "Verification & Documentation",
        description:
          "Re-run performance audits, verify form operations across devices, and provide maintenance best practices.",
      },
    ],
    faq: [
      {
        question: "Can any WordPress site achieve fast loading speeds?",
        answer:
          "Most WordPress sites can see dramatic improvements with proper caching, asset deferral, and image compression. Extremely limited hosting plans may have server-level bottlenecks that require hosting upgrades for maximum speed.",
      },
      {
        question: "Will optimization break any functionality on my website?",
        answer:
          "No. All optimizations are tested thoroughly on staging or step-by-step to ensure interactive forms, sliders, popups, and e-commerce flows remain completely intact.",
      },
      {
        question: "What is the difference between technical SEO and content SEO?",
        answer:
          "Technical SEO ensures search engines can crawl, understand, and index your website swiftly (speed, mobile layout, schema, sitemaps). Content SEO focuses on keyword strategy and written copy.",
      },
      {
        question: "Do you offer ongoing website maintenance and security checks?",
        answer:
          "Yes. Ongoing maintenance includes regular core and plugin updates, scheduled cloud backups, uptime monitoring, and security scans.",
      },
    ],
    relatedProjectSlugs: [
      "wordpress-website-speed-optimization",
      "senior-community-website-development-optimization",
      "wordpress-malware-removal-security-fixes",
      "wordpress-website-migration-troubleshooting",
    ],
  },
];

export function getServiceBySlug(slug) {
  return (
    services.find(
      (s) => s.slug === slug || s.id === slug || s.legacyId === slug
    ) || null
  );
}
