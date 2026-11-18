"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@/components/ui/Icons";
import { prefersReducedMotion } from "@/lib/animations";

/**
 * Ashik .progress-wrap floating circular back-to-top widget (50x50px)
 * with smooth SVG circular scroll progress ring.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = null;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      setVisible(scrollTop > 300);
      setProgress(ratio);
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-5 bottom-6 sm:right-7 sm:bottom-7 z-[900] inline-flex items-center justify-center w-[50px] h-[50px] rounded-full bg-canvas text-heading ashik-card-shadow border border-black/10 transition-all duration-300 cursor-pointer hover:bg-accent hover:text-contrast ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        viewBox="0 0 50 50"
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="2.5"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="#222222"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <ChevronUpIcon className="w-5 h-5 relative z-10" />
    </button>
  );
}
