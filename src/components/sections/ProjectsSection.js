"use client";

import { useId, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { WavyAccentIcon } from "@/components/ui/Icons";
import { PROJECT_CATEGORIES, projects } from "@/data/projects";

/**
 * Section 05 — Projects (#projects)
 * Category-based portfolio showcase featuring all 10 verified projects:
 * - Top Ashik 2-column header row ("OUR PROJECTS ~~~" + H2 left, descriptive paragraph right)
 * - 7 category filter tabs with smooth transition and item counts
 * - Responsive 3-column desktop / 2-column tablet / 1-column mobile grid
 * - Every card links directly to its dynamic case study page at /projects/[slug]
 */
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const tablistId = useId();

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) =>
          project.filterCategories?.includes(activeCategory)
        );

  return (
    <section id="projects" className="mt-[80px] lg:mt-[120px] bg-canvas">
      <div className="ashik-container">
        {/* Ashik 2-Column Section Header Row */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-3 text-[15px] sm:text-[18px] font-bold uppercase leading-[28px] tracking-[0.04em] text-heading">
                <span>OUR PROJECTS</span>
                <WavyAccentIcon className="w-11 h-3 text-heading" />
              </p>
              <h2 className="mt-2 text-[26px] leading-[34px] sm:text-[38px] sm:leading-[46px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] font-bold tracking-[-0.015em] text-heading">
                Selected WordPress &amp; Elementor Projects
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-body">
                Explore custom WordPress builds, Elementor layouts, WooCommerce
                upgrades, redesigns, speed optimization, and maintenance delivered
                with clean engineering standards.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Category Filter Tabs (Swipeable single-row on mobile, wrapping on desktop) */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex items-center gap-2 sm:gap-2.5 pb-2 overflow-x-auto no-scrollbar sm:flex-wrap -mx-[15px] px-[15px] sm:mx-0 sm:px-0 scroll-smooth"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              const count =
                category === "All Projects"
                  ? projects.length
                  : projects.filter((p) =>
                      p.filterCategories?.includes(category)
                    ).length;

              return (
                <button
                  key={category}
                  id={`${tablistId}-${category.replace(/\s+/g, "-").toLowerCase()}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`group shrink-0 inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-[12px] sm:rounded-[14px] text-[13px] sm:text-[14.5px] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-accent text-contrast font-bold shadow-sm"
                      : "bg-surface text-heading hover:bg-canvas border border-black/8 hover:border-black/20"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`inline-flex items-center justify-center min-w-[20px] h-[20px] px-1.5 rounded-full text-[11px] font-bold transition-colors ${
                      isSelected
                        ? "bg-contrast text-accent"
                        : "bg-black/5 text-muted group-hover:bg-black/10 group-hover:text-heading"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Projects Grid with Staggered Card Entrance */}
        <div className="mt-8 lg:mt-10">
          <div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-card-enter h-full"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center rounded-[30px] bg-surface p-8">
              <p className="text-[18px] font-medium text-heading">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
