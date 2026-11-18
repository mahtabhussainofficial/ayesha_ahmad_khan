"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RatingStarIcon,
  WavyAccentIcon,
} from "@/components/ui/Icons";
import { testimonials } from "@/data/testimonials";

/**
 * Section 06 — Testimonials (#testimonials)
 * Matches live Ashik's dark contrast band (.testimonial-bg):
 * - Rounded 30px #000000 inset band with left black-to-transparent edge fade mask on desktop.
 * - White 20px-radius cards (.testimonial-item) with #ffd234 5-star ratings, quote copy,
 *   60x60 circular author avatar, and Ashik's active-card upward lift (-24px, 0.5s transition).
 * - Built with zero extra packages (no Swiper installed).
 */
export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials.length) {
    return null;
  }

  const total = testimonials.length;
  const hasPlaceholders = testimonials.some((t) => t.isPlaceholder);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Display a 3-card window on desktop centered on activeIndex so the middle/active slide lifts like Ashik
  const getVisibleIndices = () => {
    if (total <= 3) return testimonials.map((_, idx) => idx);
    const prevIdx = (activeIndex - 1 + total) % total;
    const nextIdx = (activeIndex + 1) % total;
    return [prevIdx, activeIndex, nextIdx];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="testimonials" className="mt-[80px] lg:mt-[120px]">
      <div
        data-dark-surface="true"
        className="ashik-inset-band bg-contrast text-white pt-[72px] pb-[72px] lg:pt-[110px] lg:pb-[95px] px-[15px] sm:px-[30px] relative overflow-hidden"
      >
        {/* Ashik-style subtle left fade mask on wide desktop */}
        <div
          aria-hidden="true"
          className="hidden xl:block pointer-events-none absolute inset-y-0 left-0 w-[140px] z-20"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0))",
          }}
        />

        <div className="ashik-container relative z-10">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-[680px]">
              <p className="inline-flex items-center gap-3 text-[15px] sm:text-[18px] font-bold uppercase leading-[28px] tracking-[0.04em] text-accent">
                <span>TESTIMONIALS</span>
                <WavyAccentIcon className="w-11 h-3 text-accent" />
              </p>
              <h2 className="mt-2 text-[32px] leading-[40px] sm:text-[42px] sm:leading-[50px] lg:text-[52px] lg:leading-[62px] xl:text-[58px] xl:leading-[68px] font-bold tracking-[-0.015em] text-white">
                What Clients Say About Working Together
              </h2>
              {hasPlaceholders && (
                <p className="mt-3 text-[14px] leading-[22px] text-white/60">
                  Editable testimonial slots matching the Ashik layout — ready
                  for verified client quotes.
                </p>
              )}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <span
                aria-live="polite"
                className="text-[14px] font-semibold tracking-[0.06em] text-white/75 mr-1 tabular-nums"
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-accent hover:border-accent hover:text-contrast transition-colors cursor-pointer"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-accent hover:border-accent hover:text-contrast transition-colors cursor-pointer"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3-Card Carousel Stage (Active center card lifts up like Ashik .swiper-slide-active) */}
          <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-[30px] items-stretch">
            {visibleIndices.map((idx) => {
              const item = testimonials[idx];
              const isActive = idx === activeIndex;

              return (
                <article
                  key={item.id}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveIndex(idx)}
                  className={`${
                    isActive ? "flex" : "hidden lg:flex"
                  } flex-col justify-between rounded-[20px] bg-canvas text-heading p-8 sm:p-10 transition-all duration-500 ease-out cursor-pointer ${
                    isActive
                      ? "lg:-translate-y-[28px] ring-2 ring-accent opacity-100"
                      : "opacity-85 hover:opacity-100"
                  }`}
                >
                  <div>
                    {/* 5-Star Rating Bar (#ffd234) + Optional Placeholder Pill */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div
                        className="flex items-center gap-1 text-rating"
                        aria-label={`${item.rating || 5} out of 5 stars`}
                      >
                        {Array.from({ length: item.rating || 5 }).map(
                          (_, starIdx) => (
                            <RatingStarIcon
                              key={starIdx}
                              className="w-[18px] h-[18px]"
                            />
                          )
                        )}
                      </div>
                      {item.isPlaceholder && (
                        <span className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
                          Slot {item.number}
                        </span>
                      )}
                    </div>

                    {/* Quote Text (Ashik 18px/30px #222222) */}
                    <p className="text-[17px] sm:text-[18px] leading-[29px] sm:leading-[30px] text-heading">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Client Attribution Row (60x60 Circular Avatar) */}
                  <div className="mt-8 pt-6 border-t border-border-light flex items-center gap-4">
                    <div className="relative w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden bg-surface border border-black/10 flex items-center justify-center shrink-0">
                      {item.avatar ? (
                        <Image
                          src={item.avatar}
                          alt={`Portrait of ${item.name}`}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-[16px] font-bold text-heading">
                          {item.initials || item.number}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[17px] leading-[24px] font-bold text-heading truncate">
                        {item.name}
                      </h3>
                      <p className="text-[14px] leading-[20px] text-body">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div
            className="mt-10 flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`View testimonial ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
