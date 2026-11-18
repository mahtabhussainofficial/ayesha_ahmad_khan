"use client";

import { useEffect, useRef } from "react";
import { BrandLogo, CloseIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

/**
 * Ashik offcanvas mobile drawer (#0f0f13, 300px, slides in from left,
 * rgba(0,0,0,0.9) backdrop, Escape close, body scroll lock, focus restoration,
 * and inert/tab-safe closed state).
 */
export default function MobileDrawer({
  isOpen,
  onClose,
  activeSection,
  returnFocusRef,
}) {
  const closeButtonRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      returnFocusRef?.current?.focus();
    }
  }, [isOpen, onClose, returnFocusRef]);

  return (
    <div
      id="mobile-navigation-drawer"
      data-dark-surface="true"
      className={`fixed inset-0 z-[9999] lg:hidden transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 transition-opacity duration-500"
      />

      {/* Slide Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed left-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-drawer text-white overflow-y-auto px-[30px] pt-7 pb-12 flex flex-col justify-between transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <a
              href="#home"
              tabIndex={isOpen ? undefined : -1}
              onClick={onClose}
              aria-label={`${profile.fullName} Home`}
            >
              <BrandLogo dark />
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              tabIndex={isOpen ? undefined : -1}
              onClick={onClose}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-accent hover:text-contrast hover:border-accent transition-colors cursor-pointer"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <nav aria-label="Mobile sections" className="mt-8">
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      tabIndex={isOpen ? undefined : -1}
                      onClick={onClose}
                      className={`flex items-center justify-between py-3 px-3 rounded-[10px] text-[16px] font-medium uppercase tracking-[0.04em] transition-colors ${
                        isActive
                          ? "bg-accent text-contrast font-semibold"
                          : "text-white/90 hover:bg-white/10 hover:text-accent"
                      }`}
                    >
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10">
          <p className="text-sm text-white/60 mb-4">{profile.roleBadge}</p>
          <Button
            href="#contact"
            variant="primary"
            size="header"
            tabIndex={isOpen ? undefined : -1}
            onClick={onClose}
            className="w-full !uppercase tracking-[0.03em]"
          >
            LET&apos;S TALK
          </Button>
        </div>
      </aside>
    </div>
  );
}
