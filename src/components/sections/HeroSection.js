import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroDecoration from "@/components/ui/HeroDecoration";
import { profile } from "@/data/profile";

/**
 * Section 02 — Hero (#home)
 * Matches Ashik: pure white canvas, 2-column split (left display H1 + copy + 2 CTAs,
 * right portrait framed over neon lime #cdfe7d geometric shapes). No Hero social icons or scroll cue.
 */
export default function HeroSection() {
  const { hero, roleBadge } = profile;

  return (
    <section
      id="home"
      className="relative bg-canvas overflow-hidden pt-[128px] sm:pt-[152px] lg:pt-[176px] pb-[48px] lg:pb-[72px]"
    >
      <div className="ashik-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Uppercase Display H1, Role, Positioning & CTAs */}
          <div className="lg:col-span-7 2xl:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-black/8 text-[10px] sm:text-[13px] font-semibold uppercase tracking-[0.04em] sm:tracking-[0.06em] text-heading mb-4 sm:mb-5">
              <span
                className="w-2 h-2 rounded-full bg-accent shrink-0"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap">{roleBadge}</span>
            </div>

            <h1
              className="text-[32px] leading-[40px] sm:text-[50px] sm:leading-[60px] md:text-[58px] md:leading-[68px] lg:text-[68px] lg:leading-[80px] xl:text-[80px] xl:leading-[94px] font-bold uppercase text-contrast tracking-[-0.02em]"
              aria-label={hero.headlineLines.join(" ")}
            >
              {hero.headlineLines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    className="animate-reveal-line"
                    style={{ animationDelay: `${index * 110}ms` }}
                  >
                    {line}
                  </span>{" "}
                </span>
              ))}
            </h1>

            <p className="mt-5 sm:mt-6 max-w-[540px] text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-body">
              {hero.positioning}
            </p>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href={hero.primaryCta.href}
                variant="primary"
                className="w-full sm:w-auto text-center justify-center"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                className="w-full sm:w-auto text-center justify-center"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Right Column: Portrait Visual + Ashik Lime Geometric Shapes */}
          <div className="lg:col-span-5 2xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[470px] xl:max-w-[520px] aspect-[1/1.12] flex items-center justify-center">
              {/* Background Geometric Decoration (.banner-shap) */}
              <HeroDecoration className="absolute -inset-6 sm:-inset-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)] sm:w-[calc(100%+5rem)] sm:h-[calc(100%+5rem)] z-0" />

              {/* Portrait Frame (Real approved image OR clean temporary placeholder) */}
              <div className="relative z-10 w-[76%] h-[82%] rounded-[30px] overflow-hidden bg-canvas/95 border border-black/10 ashik-card-shadow flex flex-col items-center justify-center text-center p-7">
                {hero.portrait.src ? (
                  <Image
                    src={hero.portrait.src}
                    alt={hero.portrait.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 420px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-accent border border-heading/15 flex items-center justify-center text-[30px] font-bold text-contrast">
                      AAK
                    </div>
                    <div>
                      <p className="text-[15px] font-bold uppercase tracking-[0.04em] text-heading">
                        {hero.portrait.placeholderLabel}
                      </p>
                      <p className="mt-1.5 text-[14px] leading-[22px] text-body max-w-[230px]">
                        {hero.portrait.placeholderSubtext}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
