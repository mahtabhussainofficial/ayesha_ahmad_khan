import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CountersSection from "@/components/sections/CountersSection";
import ContactSection from "@/components/sections/ContactSection";
import { profile } from "@/data/profile";
import { services } from "@/data/services";

const siteUrl = "https://ayesha-ahmad-khan.vercel.app";

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.fullName,
      jobTitle: profile.roleLine,
      url: siteUrl,
      description: profile.seoDescription,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Punjab University College of Information Technology (PUCIT)",
      },
      knowsAbout: [
        "WordPress Development",
        "Elementor",
        "WooCommerce",
        "Website Redesign",
        "Speed Optimization",
        "Website Maintenance & Security",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profile.fullName} Portfolio`,
      description: profile.seoDescription,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: `${profile.fullName} — WordPress & Elementor Services`,
      url: siteUrl,
      description:
        "Professional WordPress development, Elementor design, WooCommerce setup, website redesign, and performance optimization services.",
      provider: {
        "@id": `${siteUrl}/#person`,
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "WordPress & Elementor Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.shortDescription,
            url: `${siteUrl}/services/${service.slug}`,
          },
        })),
      },
    },
  ],
};

/**
 * Single-page portfolio for Ayesha Ahmad Khan following the verified Ashik section order:
 * 01 Header -> 02 Hero -> 03 About -> 04 Services -> 05 Projects ->
 * 06 Testimonials -> 07 Counters (hidden until verified) ->
 * 08 Contact -> 09 Footer + BackToTop utility.
 */
export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-canvas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData),
        }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CountersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
