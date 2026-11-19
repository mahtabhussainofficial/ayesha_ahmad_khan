import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

/**
 * Responsive Ashik Portfolio Grid Card:
 * - Edge-to-edge 3:2 WebP preview with smooth hover zoom
 * - Number badge (#cdfe7d) & Category tag
 * - Project Title H3
 * - Brief summary text
 * - "View Case Study →" CTA linking to /projects/[slug]
 */
export default function ProjectCard({ project, priority = false }) {
  return (
    <article className="group relative h-full flex flex-col rounded-[30px] bg-canvas p-6 sm:p-7 ashik-card-shadow border border-black/[0.06] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/15">
      {/* 3:2 Aspect Ratio Edge-to-Edge Website Preview */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block w-full aspect-[3/2] rounded-[20px] overflow-hidden bg-surface border border-black/10 shrink-0"
        aria-label={`View case study for ${project.title}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 46vw, 400px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-muted">
            <span className="text-[14px] font-semibold text-heading">Image Pending</span>
            <span className="text-[12px]">Preview to be uploaded</span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="mt-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] bg-accent text-[12px] font-bold text-contrast tracking-wide">
              {project.number}
            </span>
            <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-muted">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-[21px] sm:text-[23px] leading-[30px] sm:leading-[32px] font-bold text-heading group-hover:text-contrast transition-colors">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline underline-offset-4 decoration-accent decoration-2"
            >
              {project.title}
            </Link>
          </h3>

          {/* Summary */}
          {project.summary && (
            <p className="mt-3 text-[14.5px] leading-[24px] text-body line-clamp-3">
              {project.summary}
            </p>
          )}

          {/* Tools Tags */}
          {project.tools?.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="inline-block px-2.5 py-1 rounded-[8px] bg-surface text-[12px] font-medium text-heading border border-black/5"
                >
                  {tool}
                </span>
              ))}
            </div>
          ) : project.platform ? (
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="inline-block px-2.5 py-1 rounded-[8px] bg-surface text-[12px] font-medium text-heading border border-black/5">
                {project.platform}
              </span>
            </div>
          ) : null}
        </div>

        {/* View Case Study CTA Link */}
        <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-[14.5px] font-bold text-heading group-hover:text-contrast group-hover:underline underline-offset-4 decoration-accent decoration-2 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface text-heading transition-colors group-hover:bg-accent group-hover:text-contrast"
            aria-hidden="true"
          >
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
