import Image from "next/image";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import {
  ArrowRightIcon,
  CheckIcon,
  WavyAccentIcon,
} from "@/components/ui/Icons";
import { profile } from "@/data/profile";

/**
 * Section 03 — About (#about)
 * Ashik rounded #f6f7f9 inset band (30px radius) with editorial diagonal symmetry:
 * - Left: Eyebrow + wavy accent, bold H2, verified bio (PUCIT BS CS 2020–2024),
 *   aligned 6-point checklist, dual CTAs.
 * - Right: Staggered 2-column Pinterest / Ashik editorial layout:
 *   Left sub-col: Full-bleed studio/portrait visual + floating white `5+ Years Of Experience` card.
 *   Right sub-col (staggered sm:mt-10): Floating white `300+ Projects Delivered` card +
 *   full-bleed responsive-design studio visual with floating `#cdfe7d` Explore Projects CTA.
 */
export default function AboutSection() {
  const { about } = profile;

  return (
    <section id="about" className="mt-[64px] lg:mt-[100px]">
      <div className="ashik-inset-band bg-surface pt-[72px] pb-[72px] lg:pt-[110px] lg:pb-[110px] px-[15px] sm:px-[30px] relative z-10 overflow-hidden">
        <div className="ashik-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Narrative, Education & Aligned 6-Point Checklist */}
            <RevealOnScroll className="lg:col-span-6">
              <p className="inline-flex items-center gap-3 text-[15px] sm:text-[18px] font-bold uppercase leading-[28px] tracking-[0.04em] text-heading">
                <span>{about.eyebrow}</span>
                <WavyAccentIcon className="w-11 h-3 text-heading" />
              </p>

              <h2 className="mt-2 text-[32px] leading-[40px] sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px] xl:text-[56px] xl:leading-[66px] font-bold tracking-[-0.015em] text-heading">
                {about.headline}
              </h2>

              <div className="mt-6 space-y-4">
                {about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[16px] leading-[28px] text-body"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* 2-Column Verified Strengths Checklist */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                <ul className="space-y-3.5">
                  {about.strengthsLeft.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[24px] font-medium text-heading"
                    >
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-contrast shrink-0">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3.5">
                  {about.strengthsRight.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[24px] font-medium text-heading"
                    >
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-contrast shrink-0">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="#contact" variant="primary">
                  Work With Me
                </Button>
                <Button href="#services" variant="secondary">
                  Explore Services
                </Button>
              </div>
            </RevealOnScroll>

            {/* Right Column: Staggered Editorial Visuals + Diagonal Floating Stat Pills */}
            <RevealOnScroll delayMs={100} className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {/* Left Sub-Column: Top Editorial Visual + Bottom Experience Counter */}
                <div className="flex flex-col gap-6">
                  <div className="group relative w-full aspect-[4/4.6] rounded-[30px] overflow-hidden bg-canvas ashik-card-shadow">
                    <Image
                      src={about.images.primary.src}
                      alt={about.images.primary.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 300px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Floating Ashik White Counter Card: 5+ Years Of Experience */}
                  <div className="rounded-[28px] bg-canvas px-6 py-6 sm:px-7 sm:py-7 ashik-card-shadow border border-black/[0.04] flex items-center gap-4">
                    <span
                      className="w-1.5 h-12 rounded-full bg-accent shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-[42px] sm:text-[46px] leading-none font-bold text-contrast tracking-[-0.02em] tabular-nums shrink-0">
                      {about.stats.experience.value}
                    </p>
                    <p className="text-[15px] sm:text-[16px] leading-[22px] font-medium text-heading">
                      Years Of
                      <br />
                      Experience
                    </p>
                  </div>
                </div>

                {/* Right Sub-Column (Staggered downward): Top Projects Counter + Bottom Editorial Visual with Floating CTA */}
                <div className="flex flex-col gap-6 sm:mt-10">
                  {/* Floating Ashik White Counter Card: 300+ Projects Delivered */}
                  <div className="rounded-[28px] bg-canvas px-6 py-6 sm:px-7 sm:py-7 ashik-card-shadow border border-black/[0.04] flex items-center gap-4">
                    <span
                      className="w-1.5 h-12 rounded-full bg-accent shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-[42px] sm:text-[46px] leading-none font-bold text-contrast tracking-[-0.02em] tabular-nums shrink-0">
                      {about.stats.projectsDelivered.value}
                    </p>
                    <p className="text-[15px] sm:text-[16px] leading-[22px] font-medium text-heading">
                      Projects
                      <br />
                      Delivered
                    </p>
                  </div>

                  {/* Second Editorial Visual + Floating Ashik Lime Action Pill */}
                  <div className="group relative w-full aspect-[4/4.8] rounded-[30px] overflow-hidden bg-canvas ashik-card-shadow">
                    <Image
                      src={about.images.secondary.src}
                      alt={about.images.secondary.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 300px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-4 bottom-4 z-10">
                      <a
                        href="#projects"
                        className="flex items-center justify-between gap-3 rounded-[18px] bg-accent px-5 py-3.5 text-contrast shadow-md transition-all duration-300 hover:bg-canvas hover:text-contrast"
                      >
                        <span className="text-[15px] font-bold">
                          Explore Projects
                        </span>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-contrast text-white shrink-0">
                          <ArrowRightIcon className="w-4 h-4" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
