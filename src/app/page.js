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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.roleLine,
  description: profile.seoDescription,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Punjab University College of Information Technology (PUCIT)",
  },
  knowsAbout: services.map((service) => service.title),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
