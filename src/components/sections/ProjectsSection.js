"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProjectItem from "@/components/ui/ProjectItem";
import {
  ArrowUpRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  WavyAccentIcon,
} from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { prefersReducedMotion } from "@/lib/animations";

/**
 * Section 05 — Projects (#projects)
 *
 * Matches live Ashik's `#projects` design & horizontal scroll architecture:
 * - Top 2-column Ashik heading row ("OUR PROJECTS ~~~" + H2 left, lead copy right).
 * - Featured Projects (01–03): Pinned vertical-to-horizontal left-to-right scroll track
 *   on desktop (>= 1024px) using pure CSS sticky + requestAnimationFrame (zero extra packages).
 *   Translates smoothly from 0% -> -100% -> -200% as the visitor scrolls, with synchronized
 *   01/02/03 & Prev/Next controls. Degrades to a clean vertical stack on mobile/reduced-motion.
 * - Archive Projects (04–10): Detailed 2-col row (04–05) + concise 3-col grid (06–10),
 *   all with edge-to-edge full-bleed 3:2 WebP website mockups.
 */
export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const archiveProjects = projects.filter((p) => !p.featured);
  const detailedArchiveProjects = archiveProjects.filter(
    (p) => Boolean(p.summary) || p.services?.length > 0
  );
  const conciseArchiveProjects = archiveProjects.filter(
    (p) => !p.summary && (!p.services || p.services.length === 0)
  );

  const trackWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const slideCount = featuredProjects.length;

  useEffect(() => {
    const wrapper = trackWrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track || slideCount <= 1) return;

    let frameId = null;

    const updateHorizontalScroll = () => {
      frameId = null;
      const isDesktop = window.innerWidth >= 1024;
      const reduced = prefersReducedMotion();

      if (!isDesktop || reduced) {
        track.style.transform = "";
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const stickyTop = 80;
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight + stickyTop;

      if (scrollableDistance <= 0) {
        track.style.transform = "translate3d(0%, 0, 0)";
        setScrollProgress(0);
        setActiveIndex(0);
        return;
      }

      const scrolled = Math.min(
        Math.max(stickyTop - rect.top, 0),
        scrollableDistance
      );
      const progress = scrolled / scrollableDistance;
      const translatePercent = progress * (slideCount - 1) * 100;

      track.style.transform = `translate3d(-${translatePercent}%, 0, 0)`;
      setScrollProgress(progress);

      const nearestIndex = Math.min(
        slideCount - 1,
        Math.round(progress * (slideCount - 1))
      );
      setActiveIndex(nearestIndex);
    };

    const handleScrollOrResize = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateHorizontalScroll);
      }
    };

    handleScrollOrResize();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [slideCount]);

  // Smoothly scroll window to the exact vertical position corresponding to slide `index`
  const scrollToSlide = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(slideCount - 1, index));
      const wrapper = trackWrapperRef.current;
      if (!wrapper) return;

      const isDesktop = window.innerWidth >= 1024 && !prefersReducedMotion();
      if (!isDesktop) {
        setActiveIndex(clamped);
        return;
      }

      const stickyTop = 80;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight + stickyTop;
      const targetProgress = slideCount > 1 ? clamped / (slideCount - 1) : 0;
      const targetScrollY = wrapperTop - stickyTop + targetProgress * scrollableDistance;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    },
    [slideCount]
  );

  return (
    <section id="projects" className="mt-[80px] lg:mt-[120px] bg-canvas">
      {/* Part 1: Ashik Pinned Left-to-Right Horizontal Scroll Showcase (Projects 01–03) */}
      <div
        ref={trackWrapperRef}
        className="relative lg:h-[270vh]"
        data-projects-pin-track="true"
      >
        <div className="lg:sticky lg:top-[80px] lg:min-h-[calc(100vh-80px)] lg:flex lg:flex-col lg:justify-center py-4 lg:py-8">
          <div className="ashik-container">
            {/* Ashik Exact 2-Column Section Header Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="inline-flex items-center gap-3 text-[15px] sm:text-[18px] font-bold uppercase leading-[28px] tracking-[0.04em] text-heading">
                  <span>OUR PROJECTS</span>
                  <WavyAccentIcon className="w-11 h-3 text-heading" />
                </p>
                <h2 className="mt-2 text-[32px] leading-[40px] sm:text-[42px] sm:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] font-bold tracking-[-0.015em] text-heading">
                  Selected WordPress &amp; Elementor Projects
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[16px] leading-[28px] text-body">
                  Highlights of custom WordPress builds, Elementor layouts,
                  WooCommerce upgrades, rebranding, speed optimization, security
                  fixes, and website migrations.
                </p>
              </div>
            </div>

            {/* Horizontal Slide Viewport Mask */}
            <div className="mt-10 lg:mt-12 overflow-hidden">
              <div
                ref={trackRef}
                data-horizontal-scroll="true"
                className="flex flex-col lg:flex-row gap-12 lg:gap-0 will-change-transform"
              >
                {featuredProjects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Ashik Bottom Navigation & Horizontal Scroll Progress Strip (Desktop) */}
            <div className="hidden lg:flex items-center justify-between gap-6 mt-8 pt-6 border-t border-border-light">
              <div className="flex items-center gap-4">
                <span className="text-[14px] font-semibold text-heading">
                  Scroll down to glide horizontally
                </span>
                <div className="w-36 h-1.5 rounded-full bg-surface overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-[width] duration-75"
                    style={{
                      width: `${Math.max(12, Math.round(scrollProgress * 100))}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="inline-flex items-center rounded-[14px] bg-surface p-1 border border-black/8"
                  role="tablist"
                  aria-label="Featured projects"
                >
                  {featuredProjects.map((proj, idx) => {
                    const isSelected = activeIndex === idx;
                    return (
                      <button
                        key={proj.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => scrollToSlide(idx)}
                        className={`px-3.5 py-1.5 rounded-[10px] text-[14px] font-bold transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-accent text-contrast"
                            : "text-heading hover:bg-canvas"
                        }`}
                      >
                        {proj.number}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSlide(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  aria-label="Previous featured project"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/20 text-heading hover:bg-accent hover:border-accent hover:text-contrast disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSlide(activeIndex + 1)}
                  disabled={activeIndex === slideCount - 1}
                  aria-label="Next featured project"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/20 text-heading hover:bg-accent hover:border-accent hover:text-contrast disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: 7-Project Archive (04–10) */}
      <div className="ashik-container mt-14 lg:mt-16 pt-12 lg:pt-14 border-t border-border-light">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[14px] font-bold uppercase tracking-[0.06em] text-heading">
              PROJECT ARCHIVE (04 – 10)
            </p>
            <h3 className="mt-1 text-[26px] sm:text-[32px] leading-[36px] sm:leading-[42px] font-bold text-heading">
              More Completed Work
            </h3>
          </div>
          <p className="text-[14px] text-muted max-w-[400px]">
            Additional WordPress redesigns, rebranding, SEO, security,
            Elementor, performance, and migration projects.
          </p>
        </div>

        {/* Detailed Archive Row (Projects 04–05 with verified descriptions & services) */}
        {detailedArchiveProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {detailedArchiveProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-[30px] bg-canvas p-6 sm:p-8 ashik-card-shadow border border-black/[0.06] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Full-bleed Edge-to-Edge 3:2 Project Preview */}
                <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden bg-canvas border border-black/10">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 580px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                {/* Verified Details */}
                <div className="mt-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] bg-accent text-[12px] font-bold text-contrast">
                      {project.number}
                    </span>
                    <span className="text-[13px] font-semibold uppercase tracking-[0.05em] text-muted">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="mt-3 text-[22px] sm:text-[25px] leading-[32px] font-bold text-heading">
                    {project.title}
                  </h4>

                  {project.summary && (
                    <p className="mt-3 text-[15px] leading-[26px] text-body">
                      {project.summary}
                    </p>
                  )}

                  {project.services?.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-border-light flex-1">
                      <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-heading mb-3">
                        Services Provided
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {project.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2 text-[14px] leading-[21px] text-heading"
                          >
                            <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent/80 text-contrast shrink-0">
                              <CheckIcon className="w-2.5 h-2.5" />
                            </span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className="mt-5 pt-4 border-t border-border-light">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-heading hover:text-contrast underline-offset-4 hover:underline decoration-accent decoration-2"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Concise Archive Grid (Projects 06–10 — Verified Title & Category Only) */}
        {conciseArchiveProjects.length > 0 && (
          <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {conciseArchiveProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-[30px] bg-canvas p-6 ashik-card-shadow border border-black/[0.06] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Full-bleed Edge-to-Edge 3:2 Project Preview */}
                <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden bg-canvas border border-black/10">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 380px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                {/* Verified Category & Title Only */}
                <div className="mt-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] bg-accent text-[12px] font-bold text-contrast">
                      {project.number}
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-muted">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="mt-2.5 text-[20px] leading-[28px] font-bold text-heading">
                    {project.title}
                  </h4>

                  {project.liveUrl && (
                    <div className="mt-5 pt-4 border-t border-border-light">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-heading hover:text-contrast underline-offset-4 hover:underline decoration-accent decoration-2"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
