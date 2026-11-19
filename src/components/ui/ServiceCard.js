import Link from "next/link";
import { LongArrowRightIcon, ServiceIcon } from "@/components/ui/Icons";

/**
 * Ashik .service-item card:
 * #ffffff surface, 30px radius, 40px desktop padding, soft 60px shadow,
 * 65x65px #cdfe7d icon square (10px radius), centered H3 + copy + hover-animated long arrow.
 * Links to /services/[slug] detail page.
 */
export default function ServiceCard({ service, className = "" }) {
  const serviceSlug = service.slug || service.id;

  return (
    <article
      className={`group h-full flex flex-col items-center text-center rounded-[30px] bg-canvas p-[28px] sm:p-[40px] ashik-card-shadow border border-black/[0.04] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/15 ${className}`}
    >
      <Link
        href={`/services/${serviceSlug}`}
        aria-label={`View details for ${service.title}`}
        className="w-[65px] h-[65px] rounded-[10px] bg-accent text-contrast flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <ServiceIcon name={service.icon} className="w-8 h-8" />
      </Link>

      <h3 className="mt-7 text-[22px] leading-[32px] xl:text-[25px] xl:leading-[38px] font-bold text-heading">
        <Link
          href={`/services/${serviceSlug}`}
          className="hover:underline underline-offset-4 decoration-accent decoration-2"
        >
          {service.title}
        </Link>
      </h3>

      <p className="mt-4 text-[16px] leading-[28px] text-body flex-1">
        {service.shortDescription || service.description}
      </p>

      <Link
        href={`/services/${serviceSlug}`}
        aria-label={`Learn more about ${service.title}`}
        className="mt-7 inline-flex items-center justify-center w-12 h-12 rounded-full border border-black/15 text-heading transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-contrast"
      >
        <LongArrowRightIcon className="w-6 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
