import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CheckIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

/**
 * Section 03 — About (#about)
 * Matches Ashik: rounded #f6f7f9 inset band (30px radius, 80px desktop inset),
 * Left col: eyebrow, H2, verified bio + PUCIT education + 2-col checkmark list.
 * Right col: 2 staggered rounded visuals + floating white .about-counter card under image 1.
 */
export default function AboutSection() {
  const { about } = profile;

  return (
    <section id="about" className="mt-[64px] lg:mt-[100px]">
      <div className="ashik-inset-band bg-surface pt-[72px] pb-[72px] lg:pt-[110px] lg:pb-[110px] px-[15px] sm:px-[30px] relative z-10 overflow-hidden">
        <div className="ashik-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Narrative & Verified Strengths */}
            <RevealOnScroll className="lg:col-span-6 order-2 lg:order-1">
              <SectionHeading eyebrow={about.eyebrow} title={about.headline} />

              <div className="mt-6 space-y-4">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[16px] leading-[28px] text-body">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Verified Education Pill */}
              <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-[15px] bg-canvas px-5 py-3 border border-black/8">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-[15px] font-semibold text-heading">
                  {about.education.degree}
                </span>
                <span className="text-[15px] text-body">
                  — {about.education.institution}, {about.education.period}
                </span>
              </div>

              {/* 2-Column Feature Checklist (.about-list) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                <ul className="space-y-3.5">
                  {about.strengthsLeft.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[16px] font-medium text-heading"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/80 text-contrast shrink-0">
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
                      className="flex items-center gap-3 text-[16px] font-medium text-heading"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/80 text-contrast shrink-0">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* Right Column: Staggered Dual Images + Floating White Highlight Card */}
            <RevealOnScroll delayMs={120} className="lg:col-span-6 order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {/* Sub-col 1: Primary Visual + Floating White .about-counter Card */}
                <div className="space-y-6">
                  <div className="relative w-full aspect-[1/1.26] rounded-[30px] overflow-hidden bg-canvas border border-black/8 ashik-card-shadow flex flex-col items-center justify-center text-center p-6">
                    {about.images.primary.src ? (
                      <Image
                        src={about.images.primary.src}
                        alt={about.images.primary.alt}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 280px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-accent text-[12px] font-bold uppercase tracking-wider text-contrast">
                          Placeholder
                        </span>
                        <p className="text-[15px] font-bold text-heading">
                          {about.images.primary.placeholderLabel}
                        </p>
                        <p className="text-[13px] leading-[20px] text-body">
                          {about.images.primary.placeholderSubtext}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Floating Stat Card (.about-counter geometry) */}
                  <div className="rounded-[30px] bg-canvas px-7 py-7 sm:px-9 sm:py-8 ashik-card-shadow">
                    <p className="text-[36px] sm:text-[42px] leading-[46px] font-bold text-contrast tracking-[-0.02em]">
                      {about.highlightCard.value}
                    </p>
                    <p className="mt-1 text-[16px] font-semibold text-heading">
                      {about.highlightCard.label}
                    </p>
                    <p className="mt-1 text-[12px] leading-[18px] text-muted">
                      {about.highlightCard.pendingNote}
                    </p>
                  </div>
                </div>

                {/* Sub-col 2: Tall Staggered Secondary Visual (mt-[63px] desktop offset) */}
                <div className="sm:mt-[63px]">
                  <div className="relative w-full aspect-[1/1.58] rounded-[30px] overflow-hidden bg-canvas border border-black/8 ashik-card-shadow flex flex-col items-center justify-center text-center p-6">
                    {about.images.secondary.src ? (
                      <Image
                        src={about.images.secondary.src}
                        alt={about.images.secondary.alt}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 280px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-surface border border-black/10 text-[12px] font-bold uppercase tracking-wider text-heading">
                          Placeholder
                        </span>
                        <p className="text-[15px] font-bold text-heading">
                          {about.images.secondary.placeholderLabel}
                        </p>
                        <p className="text-[13px] leading-[20px] text-body">
                          {about.images.secondary.placeholderSubtext}
                        </p>
                      </div>
                    )}
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
