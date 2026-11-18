import Image from "next/image";
import { ArrowUpRightIcon, CheckIcon } from "@/components/ui/Icons";

/**
 * Featured Project Item matching live Ashik's exact 2-column anatomy:
 * Left: 3:2 rounded (30px) project screenshot (or approved-screenshot placeholder)
 * Right: .ashik-timeline-item with 1px #cccccc left border + 6px dot markers,
 * H3 title, verified description, supplied services checklist, and optional live URL link.
 */
export default function ProjectItem({ project }) {
  return (
    <article className="bg-canvas py-4 sm:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: 3:2 Rounded Preview */}
        <div className="lg:col-span-6">
          <div className="group relative w-full aspect-[3/2] rounded-[30px] overflow-hidden bg-surface border border-black/8 ashik-card-shadow flex flex-col items-center justify-center text-center">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 94vw, 620px"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div className="space-y-3 max-w-[340px] p-8">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-accent text-[12px] font-bold uppercase tracking-wider text-contrast">
                  Project {project.number} · {project.platform || project.category}
                </span>
                <p className="text-[18px] font-bold text-heading">
                  {project.shortTitle || project.title}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Ashik Timeline Specification Rail */}
        <div className="lg:col-span-6">
          <div className="ashik-timeline-item pl-6 sm:pl-[30px] lg:ml-[24px] py-6 sm:py-[34px]">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-[8px] bg-accent text-[13px] font-bold text-contrast">
                {project.number}
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.05em] text-muted">
                {project.category}
              </span>
            </div>

            <h3 className="text-[26px] leading-[34px] sm:text-[32px] sm:leading-[42px] xl:text-[36px] xl:leading-[46px] font-bold text-heading">
              {project.title}
            </h3>

            {project.summary && (
              <p className="mt-4 text-[16px] leading-[28px] text-body">
                {project.summary}
              </p>
            )}

            {project.services?.length > 0 && (
              <div className="mt-6">
                <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-heading mb-3">
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
              <div className="mt-7 pt-5 border-t border-border-light">
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
