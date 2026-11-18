import Image from "next/image";
import { ArrowUpRightIcon, CheckIcon } from "@/components/ui/Icons";

/**
 * Ashik `.project-item-container` slide:
 * - Full width of container (`w-full shrink-0`) so slides sit cleanly side-by-side
 *   in the horizontal scroll track on desktop and stack vertically on mobile.
 * - Left col: Full-bleed edge-to-edge 3:2 rounded (30px) website preview.
 * - Right col: `.ashik-timeline-item` left border + 6px dots, title, description, services.
 */
export default function ProjectItem({ project }) {
  return (
    <article className="project-item-container w-full shrink-0 bg-canvas py-2 sm:py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Full-bleed 3:2 Rounded Project Image */}
        <div className="lg:col-span-6">
          <div className="group relative w-full aspect-[3/2] rounded-[30px] overflow-hidden bg-canvas border border-black/10 ashik-card-shadow">
            {project.image && (
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 94vw, 620px"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            )}
          </div>
        </div>

        {/* Right Column: Ashik Timeline Specification Rail */}
        <div className="lg:col-span-6">
          <div className="ashik-timeline-item pl-6 sm:pl-[30px] lg:ml-[24px] py-5 sm:py-[30px]">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-[8px] bg-accent text-[13px] font-bold text-contrast">
                {project.number}
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.05em] text-muted">
                {project.category}
              </span>
            </div>

            <h3 className="text-[26px] leading-[34px] sm:text-[30px] sm:leading-[40px] xl:text-[34px] xl:leading-[44px] font-bold text-heading">
              {project.title}
            </h3>

            {project.summary && (
              <p className="mt-4 text-[16px] leading-[28px] text-body">
                {project.summary}
              </p>
            )}

            {project.services?.length > 0 && (
              <div className="mt-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-heading mb-3">
                  Services Provided
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2.5 text-[14px] leading-[22px] text-heading"
                    >
                      <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/80 text-contrast shrink-0">
                        <CheckIcon className="w-3 h-3" />
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.liveUrl && (
              <div className="mt-6 pt-4 border-t border-border-light">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[16px] font-semibold text-heading hover:text-contrast underline-offset-4 hover:underline decoration-accent decoration-2"
                >
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
