"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
 * - Route-aware subpage active state: highlights SERVICES on /services/* and PROJECTS on /projects/*
 * - Mobile (< 1024px / lg): 51x51px circular hamburger toggle opening MobileDrawer
 */
export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolledSection, setScrolledSection] = useState("home");
  const menuToggleRef = useRef(null);

  // Derive active navigation state directly from route, falling back to scroll position on homepage
  const activeSection = pathname.startsWith("/services")
    ? "services"
    : pathname.startsWith("/projects")
    ? "projects"
    : scrolledSection;

  const handleNavClick = (e, linkId) => {
    setScrolledSection(linkId);
    if (pathname === "/" || pathname === "") {
      if (linkId === "home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          history.pushState(null, "", "/#home");
        }
      } else {
        const target = document.getElementById(linkId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", `#${linkId}`);
        }
      }
    }
  };

  useEffect(() => {
    let frameId = null;

    const updateOnScroll = () => {
      frameId = null;
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 120);

      // Only track section positions on the homepage
      if (pathname === "/" || pathname === "") {
        // If near the bottom of the page, highlight the last section (Contact)
        const nearBottom =
          window.innerHeight + scrollY >=
          document.documentElement.scrollHeight - 40;
        if (nearBottom) {
          setScrolledSection(navLinks[navLinks.length - 1].id);
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
        setScrolledSection(current);
      }
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
  }, [pathname]);

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
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            aria-label={`${profile.fullName} — Home`}
            className="shrink-0"
          >
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`relative py-1.5 text-[16px] font-medium uppercase leading-[24px] text-heading transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-accent after:origin-left after:transition-transform after:duration-300 ${
                        isActive
                          ? "after:scale-x-100 text-contrast font-semibold"
                          : "after:scale-x-0 hover:after:scale-x-100 hover:text-contrast"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden lg:block shrink-0">
            <Button
              href="/#contact"
              variant="secondary"
              size="header"
              onClick={(e) => handleNavClick(e, "contact")}
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
