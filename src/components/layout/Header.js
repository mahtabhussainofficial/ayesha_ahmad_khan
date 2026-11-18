"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

/**
 * Ashik Header:
 * - Default desktop: position absolute, top 0, pt-[30px] over white Hero
 * - Scrolled sticky (> 120px): position fixed, py-[15px], #ffffff, drop shadow, slideDown
 * - Deterministic scroll-position active section tracking (works cleanly on tall sections like #projects)
 * - Mobile (< 1024px / lg): 51x51px circular hamburger toggle opening MobileDrawer
 */
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuToggleRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const updateOnScroll = () => {
      frameId = null;
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 120);

      // If near the bottom of the page, highlight the last section (Contact)
      const nearBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 40;
      if (nearBottom) {
        setActiveSection(navLinks[navLinks.length - 1].id);
        return;
      }

      // Deterministic check: pick the last nav section whose top crossed 180px from viewport top
      const offset = 180;
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            current = link.id;
          }
        }
      }
      setActiveSection(current);
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateOnScroll);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <header
        className={`left-0 right-0 top-0 w-full transition-colors duration-300 ${
          isSticky
            ? "fixed z-[999] bg-canvas py-[15px] ashik-header-shadow animate-header-slide-down"
            : "absolute z-30 bg-transparent pt-[24px] lg:pt-[30px] pb-3"
        }`}
      >
        <div className="ashik-container flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            aria-label={`${profile.fullName} — Home`}
            className="shrink-0"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.id)}
                      className={`relative py-1.5 text-[16px] font-medium uppercase leading-[24px] text-heading transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-accent after:origin-left after:transition-transform after:duration-300 ${
                        isActive
                          ? "after:scale-x-100 text-contrast font-semibold"
                          : "after:scale-x-0 hover:after:scale-x-100 hover:text-contrast"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden lg:block shrink-0">
            <Button
              href="#contact"
              variant="secondary"
              size="header"
              onClick={() => setActiveSection("contact")}
              className="!uppercase tracking-[0.03em]"
            >
              LET&apos;S TALK
            </Button>
          </div>

          {/* Mobile Circular Toggle Button (51x51px matching Ashik .toggle-sidebar) */}
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-navigation-drawer"
            className="lg:hidden inline-flex flex-col items-center justify-center gap-[5px] w-[51px] h-[51px] rounded-full border border-black/20 bg-canvas text-heading hover:bg-accent hover:border-accent transition-colors cursor-pointer"
          >
            <span className="block w-[16px] h-[2px] bg-heading rounded-full" />
            <span className="block w-[16px] h-[2px] bg-heading rounded-full" />
          </button>
        </div>
      </header>

      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeSection={activeSection}
        returnFocusRef={menuToggleRef}
      />
    </>
  );
}
