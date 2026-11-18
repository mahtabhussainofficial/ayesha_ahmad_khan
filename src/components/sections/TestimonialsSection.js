import { RatingStarIcon } from "@/components/ui/Icons";
import { testimonials } from "@/data/testimonials";

/**
 * Section 06 — Testimonials (#testimonials)
 * Confirmed Decision (CD-02): MUST remain hidden (return null) until
 * client-approved testimonials are supplied in src/data/testimonials.js.
 */
export default function TestimonialsSection() {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="mt-[80px] lg:mt-[120px]">
      <div className="ashik-inset-band bg-contrast text-white pt-[80px] pb-[65px] lg:pt-[120px] px-[15px] sm:px-[30px] relative overflow-hidden">
        <div className="ashik-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="rounded-[20px] bg-canvas text-heading p-8 sm:p-10"
              >
                <div className="flex items-center gap-1 text-rating mb-5" aria-label={`${item.rating || 5} out of 5 stars`}>
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <RatingStarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-[18px] leading-[30px] text-heading">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-[17px] font-bold text-heading">{item.name}</p>
                  <p className="text-[15px] text-body">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
