"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectItem from "@/components/ui/ProjectItem";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import {
  ArrowUpRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/ui/Icons";
import { projects } from "@/data/projects";

/**
 * Section 05 — Projects (#projects)
 * Preferred Showcase Approach (PD-04): 3 Featured Projects (01–03) + 7-Project Archive (04–10).
 * Projects 01–05 display verified descriptions and services;
 * Projects 06–10 display strictly verified titles and categories without fabricated copy.
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

  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  const handlePrev = () => {
    setActiveFeaturedIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveFeaturedIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="mt-[80px] lg:mt-[120px] bg-canvas">
      <div className="ashik-container">
        {/* Top Row: Heading + Featured Showcase Controls */}
        <RevealOnScroll className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Selected WordPress & Elementor Projects"
            description="Highlights of WordPress builds, Elementor designs, WooCommerce upgrades, rebranding, speed optimization, security fixes, and migrations."
            className="max-w-[720px]"
          />

          {/* Featured Controls */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div
              className="inline-flex items-center rounded-[15px] bg-surface p-1.5 border border-black/8"
              role="tablist"
              aria-label="Featured projects"
            >
              {featuredProjects.map((proj, idx) => {
                const isSelected = !showAllFeatured && activeFeaturedIndex === idx;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setShowAllFeatured(false);
                      setActiveFeaturedIndex(idx);
                    }}
                    className={`px-3.5 py-2 rounded-[10px] text-[14px] font-bold transition-colors cursor-pointer ${
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

            {!showAllFeatured && (
              <div className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous featured project"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-black/20 text-heading hover:bg-accent hover:border-accent hover:text-contrast transition-colors cursor-pointer"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next featured project"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-black/20 text-heading hover:bg-accent hover:border-accent hover:text-contrast transition-colors cursor-pointer"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowAllFeatured((prev) => !prev)}
              className="px-4 py-2.5 rounded-[12px] border border-black/15 text-[14px] font-semibold text-heading hover:bg-surface transition-colors cursor-pointer"
            >
              {showAllFeatured ? "Single Spotlight" : "Stack All 3"}
            </button>
          </div>
        </RevealOnScroll>

        {/* Part 1: 3 Featured Projects (01–03 — Ashik 2-Col Image + Timeline Rail) */}
        <div className="mt-10 lg:mt-12">
          {showAllFeatured ? (
            <div className="space-y-12">
              {featuredProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          ) : (
            featuredProjects[activeFeaturedIndex] && (
              <ProjectItem project={featuredProjects[activeFeaturedIndex]} />
            )
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
              Additional WordPress redesigns, rebranding, SEO, security, Elementor, performance, and migration projects.
            </p>
          </div>

          {/* Detailed Archive Row (Projects 04–05 with verified descriptions & services) */}
          {detailedArchiveProjects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {detailedArchiveProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-[30px] bg-canvas p-6 sm:p-8 ashik-card-shadow border border-black/[0.05] transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* 3:2 Project Mockup */}
                  <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden bg-surface border border-black/6">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 92vw, 580px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
                  className="group flex flex-col rounded-[30px] bg-canvas p-6 ashik-card-shadow border border-black/[0.05] transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* 3:2 Project Mockup */}
                  <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden bg-surface border border-black/6">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 380px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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

                    <h4 className="mt-2 text-[20px] leading-[28px] font-bold text-heading">
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
