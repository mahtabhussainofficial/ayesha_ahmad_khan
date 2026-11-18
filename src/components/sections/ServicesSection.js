import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/data/services";

/**
 * Section 04 — Services (#services)
 * Keeps all 5 verified services (CD-01) in the preferred 3+2 desktop grid (PD-03):
 * 6-column lg grid where each card spans 2 cols and item #4 starts at col 2,
 * centering the bottom 2 cards with identical widths and 30px gutters.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="mt-[80px] lg:mt-[120px] bg-canvas">
      <div className="ashik-container">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="WordPress & Elementor Services"
            description="Focused frontend and WordPress implementation covering custom builds, Elementor design, redesigns, WooCommerce, and ongoing optimization."
            align="center"
          />
        </RevealOnScroll>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[30px]">
          {services.map((service, index) => {
            // Preferred 3+2 desktop layout: items 0,1,2 form row 1; items 3,4 center on row 2.
            const positionClass =
              index === 3
                ? "lg:col-start-2 lg:col-span-2"
                : index === 4
                ? "md:col-span-2 md:max-w-[calc(50%-15px)] md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2"
                : "lg:col-span-2";

            return (
              <RevealOnScroll
                key={service.id}
                delayMs={index * 70}
                className={`${positionClass} h-full`}
              >
                <ServiceCard service={service} />
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
