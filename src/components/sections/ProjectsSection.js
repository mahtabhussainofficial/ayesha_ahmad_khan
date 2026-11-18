"use client";

import { useState } from "react";
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

/**
 * Section 05 — Projects (#projects)
 *
 * Clean, rock-solid Ashik-inspired layout (no sticky-scroll bugs):
 * - Top 2-column Ashik header row ("OUR PROJECTS ~~~" + H2 left, lead copy right).
 * - Featured Projects (01–03): Horizontal track (`data-horizontal-scroll`) that smoothly
 *   glides left-to-right via 01/02/03 tabs & Prev/Next buttons, plus a "Show All 3" stack
 *   toggle. Structured cleanly for optional GSAP ScrollTrigger horizontal animation later.
 * - Archive Projects (04–10): Detailed 2-col row (04–05) + concise 3-col grid (06–10),
 *   with edge-to-edge full-bleed 3:2 WebP website previews filling their boxes cleanly.
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  const handlePrev = () => {
    setShowAllFeatured(false);
    setActiveIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setShowAllFeatured(false);
    setActiveIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="mt-[80px] lg:mt-[120px] bg-canvas">
      <div className="ashik-container">
        {/* Ashik 2-Column Section Header Row */}
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

          <div className="lg:col-span-5 flex flex-col gap-5">
            <p className="text-[16px] leading-[28px] text-body">
              Highlights of custom WordPress builds, Elementor layouts,
              WooCommerce upgrades, rebranding, speed optimization, security
              fixes, and website migrations.
            </p>

            {/* Featured Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div
                className="inline-flex items-center rounded-[14px] bg-surface p-1 border border-black/8"
                role="tablist"
                aria-label="Featured projects"
              >
                {featuredProjects.map((proj, idx) => {
                  const isSelected = !showAllFeatured && activeIndex === idx;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => {
                        setShowAllFeatured(false);
                        setActiveIndex(idx);
                      }}
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

              <div className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous featured project"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/20 text-heading hover:bg-accent hover:border-accent hover:text-contrast transition-colors cursor-pointer"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next featured project"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/20 text-heading hover:bg-accent hover:border-accent hover:text-contrast transition-colors cursor-pointer"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowAllFeatured((prev) => !prev)}
                className="px-4 py-2 rounded-[12px] border border-black/15 text-[14px] font-semibold text-heading hover:bg-surface transition-colors cursor-pointer"
              >
                {showAllFeatured ? "Slide View" : "Show All 3"}
              </button>
            </div>
          </div>
        </div>

        {/* Part 1: 3 Featured Projects (01–03) — Smooth Horizontal Slide Track OR Full Stack */}
        <div className="mt-10 lg:mt-14">
          {showAllFeatured ? (
            <div className="space-y-12">
              {featuredProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="overflow-hidden">
              <div
                data-horizontal-scroll="true"
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
                }}
              >
                {featuredProjects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Part 2: 7-Project Archive (04–10) */}
        <div className="mt-16 lg:mt-20 pt-12 lg:pt-14 border-t border-border-light">
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
      </div>
    </section>
  );
}
