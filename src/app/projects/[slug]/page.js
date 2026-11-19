import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  WavyAccentIcon,
} from "@/components/ui/Icons";
import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";
import { profile } from "@/data/profile";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const pageTitle = `${project.title} | Case Study`;
  const fullTitle = `${project.title} | Case Study — ${profile.fullName}`;
  const rawSummary = project.summary || `Case study for ${project.title}.`;
  const metaDescription =
    rawSummary.length < 100
      ? `${rawSummary} Portfolio case study by ${profile.fullName}.`
      : rawSummary.length > 165
      ? `${rawSummary.slice(0, 155).trim()}...`
      : rawSummary;
  const pageUrl = `/projects/${project.slug}`;
  const ogImage = project.image || "/images/profile/about-studio-1.webp";

  return {
    title: pageTitle,
    description: metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 800,
          alt: project.imageAlt || project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, 3);

  // Distinguish verified case study vs placeholder documentation
  const hasDetailedProcess = project.process && project.process.length > 0;
  const hasTools = project.tools && project.tools.length > 0;
  const hasServices = project.services && project.services.length > 0;

  const siteUrl = "https://ayesha-ahmad-khan.vercel.app";
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/projects/${project.slug}#case-study`,
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: `${siteUrl}/projects/${project.slug}`,
    ...(project.image ? { image: `${siteUrl}${project.image}` } : {}),
    author: {
      "@type": "Person",
      name: profile.fullName,
      jobTitle: profile.roleLine,
      url: siteUrl,
    },
    creator: {
      "@type": "Person",
      name: profile.fullName,
    },
    genre: project.category,
    keywords: (project.filterCategories || []).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd),
        }}
      />
      <Header />

      <main className="min-h-screen bg-canvas pt-[100px] sm:pt-[125px] lg:pt-[145px] pb-[60px] sm:pb-[80px] animate-fade-in overflow-x-hidden">
        {/* Navigation Breadcrumb Bar */}
        <div className="ashik-container">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-border-light">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-heading hover:text-contrast transition-colors group cursor-pointer"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-black/10 group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              </span>
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-[8px] bg-accent text-[11.5px] sm:text-[12px] font-bold text-contrast tracking-wide whitespace-nowrap">
                Project {project.number}
              </span>
              <span className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-muted hidden sm:inline whitespace-nowrap">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Project Hero Section */}
        <section className="mt-6 sm:mt-10 lg:mt-12">
          <div className="ashik-container">
            <div className="max-w-[960px]">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.filterCategories?.map((cat) => (
                  <span
                    key={cat}
                    className="inline-block px-2.5 sm:px-3 py-1 rounded-[8px] bg-surface text-[11.5px] sm:text-[12.5px] font-semibold text-heading border border-black/5"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Project Title */}
              <h1 className="text-[26px] leading-[34px] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[58px] xl:text-[54px] xl:leading-[64px] font-bold text-heading tracking-[-0.015em]">
                {project.title}
              </h1>

              {/* Subtitle / Executive Summary */}
              {project.summary && (
                <p className="mt-4 sm:mt-6 text-[15.5px] leading-[26px] sm:text-[18px] sm:leading-[30px] text-body max-w-[820px]">
                  {project.summary}
                </p>
              )}
            </div>

            {/* Premium Browser Mockup Showcase */}
            <div className="mt-6 sm:mt-10 lg:mt-12 rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden bg-surface border border-black/10 ashik-card-shadow">
              {/* Browser Window Chrome Bar */}
              <div className="bg-canvas border-b border-black/8 px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/80 inline-block" />
                </div>

                <div className="flex-1 max-w-[420px] mx-auto px-3 py-1 rounded-full bg-surface text-[11px] sm:text-[12.5px] font-medium text-muted border border-black/5 flex items-center justify-center gap-1.5 truncate">
                  <svg
                    className="w-3 h-3 text-muted shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="truncate">
                    ayeshakhan.dev/case-studies/{project.slug}
                  </span>
                </div>

                <div className="w-10 sm:w-16 flex justify-end shrink-0">
                  <span className="text-[11px] font-bold text-muted uppercase tracking-wider hidden sm:inline">
                    Live Preview
                  </span>
                </div>
              </div>

              {/* Edge-to-Edge 3:2 Hero Image */}
              <div className="relative w-full aspect-[3/2] max-h-[720px] bg-surface">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    fill
                    priority
                    sizes="(max-width: 1320px) 100vw, 1320px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full min-h-[260px] sm:min-h-[360px] flex flex-col items-center justify-center p-6 sm:p-8 text-center text-muted">
                    <p className="text-[16px] sm:text-[18px] font-bold text-heading">
                      Preview Image Pending
                    </p>
                    <p className="mt-1 text-[13px] sm:text-[14px]">
                      Asset to be added upon project verification
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile-Only Quick Project Specs Strip (Appears below hero on mobile only) */}
            <div className="mt-6 block lg:hidden rounded-[22px] bg-surface p-5 border border-black/5 ashik-card-shadow">
              <div className="pb-4 border-b border-border-light">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-[6px] bg-accent text-[11.5px] font-bold text-contrast tracking-wide">
                    Project #{project.number}
                  </span>
                  <span className="text-[12.5px] font-semibold text-muted">
                    {project.platform}
                  </span>
                </div>
                <p className="text-[16px] font-bold text-heading leading-snug">
                  {project.category}
                </p>
              </div>

              {hasTools && (
                <div className="pt-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
                    Key Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-block px-2.5 py-1 rounded-[6px] bg-canvas text-[12px] font-medium text-heading border border-black/8"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {hasServices && (
                <div className="pt-4 mt-4 border-t border-border-light">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2.5">
                    Delivered Services
                  </p>
                  <ul className="space-y-1.5">
                    {project.services.slice(0, 3).map((svc) => (
                      <li
                        key={svc}
                        className="flex items-center gap-2 text-[13.5px] text-heading font-medium"
                      >
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent text-contrast shrink-0">
                          <CheckIcon className="w-2.5 h-2.5" />
                        </span>
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-border-light">
                <Button
                  href="/#contact"
                  variant="primary"
                  className="w-full text-center justify-center !py-3 !text-[14px]"
                >
                  Inquire About This Project
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout: 2 Columns on Desktop, Clean Stack on Mobile */}
        <section className="mt-10 sm:mt-14 lg:mt-20">
          <div className="ashik-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left / Main Narrative Column */}
              <div className="lg:col-span-8 space-y-10 sm:space-y-14 lg:space-y-16">
                {/* 1. Project Overview */}
                {project.overview && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                        PROJECT OVERVIEW
                      </p>
                      <WavyAccentIcon className="w-8 h-2 text-heading" />
                    </div>
                    <h2 className="text-[22px] sm:text-[28px] font-bold text-heading tracking-tight">
                      Background &amp; Strategic Context
                    </h2>
                    <div className="mt-4 p-5 sm:p-7 rounded-[22px] bg-surface border-l-4 border-accent">
                      <p className="text-[15.5px] sm:text-[17px] leading-[27px] sm:leading-[30px] text-heading font-medium">
                        {project.overview}
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. Client Goals & Requirements (Varied Layout) */}
                {project.clientRequirements?.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                        CLIENT BRIEF
                      </p>
                      <WavyAccentIcon className="w-8 h-2 text-heading" />
                    </div>
                    <h2 className="text-[22px] sm:text-[28px] font-bold text-heading tracking-tight mb-5 sm:mb-6">
                      Project Objectives &amp; Requirements
                    </h2>

                    <div className="rounded-[24px] sm:rounded-[30px] bg-surface p-5 sm:p-8 border border-black/5 ashik-card-shadow">
                      <div className="space-y-3.5 sm:space-y-4">
                        {project.clientRequirements.map((req, idx) => {
                          const isPlaceholder =
                            req.startsWith("[") && req.endsWith("]");
                          return (
                            <div
                              key={idx}
                              className={`p-4 sm:p-5 rounded-[18px] transition-colors ${
                                isPlaceholder
                                  ? "bg-canvas/60 border border-black/5"
                                  : "bg-canvas border border-black/5 hover:border-black/15"
                              }`}
                            >
                              <div className="flex items-start gap-3.5">
                                <span
                                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold shrink-0 mt-0.5 ${
                                    isPlaceholder
                                      ? "bg-black/10 text-muted"
                                      : "bg-accent text-contrast"
                                  }`}
                                >
                                  {isPlaceholder ? "i" : `0${idx + 1}`}
                                </span>
                                <p
                                  className={`text-[14.5px] sm:text-[15.5px] leading-[25px] sm:leading-[26px] ${
                                    isPlaceholder
                                      ? "text-muted italic"
                                      : "text-heading font-medium"
                                  }`}
                                >
                                  {req}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Challenges & Strategic Solutions (High Visual Interest) */}
                {project.challenges?.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                        TECHNICAL FOCUS
                      </p>
                      <WavyAccentIcon className="w-8 h-2 text-heading" />
                    </div>
                    <h2 className="text-[22px] sm:text-[28px] font-bold text-heading tracking-tight mb-5 sm:mb-6">
                      Key Challenges &amp; Strategic Solutions
                    </h2>

                    <div className="space-y-4 sm:space-y-5">
                      {project.challenges.map((challenge, idx) => {
                        const isPlaceholder =
                          challenge.startsWith("[") && challenge.endsWith("]");

                        if (isPlaceholder) {
                          return (
                            <div
                              key={idx}
                              className="rounded-[22px] bg-surface p-5 sm:p-6 border border-black/5"
                            >
                              <p className="text-[12px] font-bold uppercase tracking-wider text-muted mb-1.5">
                                Documentation Note
                              </p>
                              <p className="text-[14.5px] text-muted italic leading-[24px]">
                                {challenge}
                              </p>
                            </div>
                          );
                        }

                        return (
                          <div
                            key={idx}
                            className="rounded-[24px] bg-canvas p-5 sm:p-7 border border-black/8 ashik-card-shadow transition-all duration-300 hover:border-black/20"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2.5 py-0.5 rounded-[6px] bg-contrast text-accent text-[11.5px] font-bold uppercase tracking-wider">
                                Focus Area 0{idx + 1}
                              </span>
                            </div>
                            <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[27px] text-heading font-medium">
                              {challenge}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 4. Development Process (Stepped Flow for Verified Projects) */}
                {hasDetailedProcess && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                        EXECUTION PATH
                      </p>
                      <WavyAccentIcon className="w-8 h-2 text-heading" />
                    </div>
                    <h2 className="text-[22px] sm:text-[28px] font-bold text-heading tracking-tight mb-5 sm:mb-6">
                      Step-by-Step Development Process
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {project.process.map((step) => (
                        <div
                          key={step.step}
                          className="rounded-[22px] bg-surface p-5 sm:p-6 border border-black/5 flex flex-col justify-between transition-all duration-300 hover:bg-canvas hover:border-black/15 ashik-card-shadow"
                        >
                          <div>
                            <span className="inline-block px-3 py-1 rounded-[8px] bg-accent text-contrast text-[12.5px] font-bold">
                              Step {step.step}
                            </span>
                            <h3 className="mt-3.5 text-[17px] sm:text-[18px] font-bold text-heading">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-[14px] sm:text-[14.5px] leading-[24px] text-body">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Website Preview Frame */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                      VISUAL INTERFACE
                    </p>
                    <WavyAccentIcon className="w-8 h-2 text-heading" />
                  </div>
                  <h2 className="text-[22px] sm:text-[28px] font-bold text-heading tracking-tight mb-5 sm:mb-6">
                    Interface Preview &amp; Layout
                  </h2>

                  <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden bg-surface border border-black/10 ashik-card-shadow">
                    <div className="relative w-full aspect-[3/2]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} interface preview`}
                          fill
                          sizes="(max-width: 1024px) 94vw, 800px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex flex-col items-center justify-center p-6 sm:p-8 text-center text-muted">
                          <p className="text-[16px] font-medium text-heading">
                            Website preview image to be uploaded
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4 bg-canvas border-t border-black/5 flex items-center justify-between text-[13px] text-muted">
                      <span>Responsive layout &amp; design elements</span>
                      <span className="font-semibold text-heading">
                        {project.platform}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Sticky Rail (Desktop Only — Preserved Approved Layout) */}
              <aside className="hidden lg:block lg:col-span-4 space-y-8 lg:sticky lg:top-[120px]">
                {/* Meta Details Box */}
                <div className="rounded-[28px] bg-surface p-6 sm:p-8 border border-black/5 ashik-card-shadow">
                  <h3 className="text-[17px] font-bold uppercase tracking-wider text-heading pb-4 border-b border-border-light">
                    Project Details
                  </h3>

                  <dl className="mt-5 space-y-4">
                    <div>
                      <dt className="text-[12px] font-bold uppercase tracking-wider text-muted">
                        Project Number
                      </dt>
                      <dd className="mt-1 text-[16px] font-semibold text-heading">
                        #{project.number}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[12px] font-bold uppercase tracking-wider text-muted">
                        Category
                      </dt>
                      <dd className="mt-1 text-[16px] font-semibold text-heading">
                        {project.category}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[12px] font-bold uppercase tracking-wider text-muted">
                        Platform
                      </dt>
                      <dd className="mt-1 text-[16px] font-semibold text-heading">
                        {project.platform}
                      </dd>
                    </div>

                    {hasTools && (
                      <div>
                        <dt className="text-[12px] font-bold uppercase tracking-wider text-muted mb-2">
                          Tools &amp; Technologies
                        </dt>
                        <dd className="flex flex-wrap gap-1.5">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="inline-block px-2.5 py-1 rounded-[6px] bg-canvas text-[12px] font-medium text-heading border border-black/8"
                            >
                              {tool}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )}
                  </dl>

                  {/* Services Delivered */}
                  {hasServices ? (
                    <div className="mt-6 pt-6 border-t border-border-light">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-muted mb-3">
                        Services Delivered
                      </p>
                      <ul className="space-y-2.5">
                        {project.services.map((svc) => (
                          <li
                            key={svc}
                            className="flex items-start gap-2.5 text-[14px] leading-[21px] text-heading font-medium"
                          >
                            <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent text-contrast shrink-0">
                              <CheckIcon className="w-2.5 h-2.5" />
                            </span>
                            <span>{svc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="mt-6 pt-6 border-t border-border-light">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-muted mb-2">
                        Service Scope
                      </p>
                      <p className="text-[13.5px] leading-[22px] text-muted">
                        Custom implementation tailored to the client brief.
                      </p>
                    </div>
                  )}

                  {/* Side Rail Action Button */}
                  <div className="mt-8 pt-6 border-t border-border-light">
                    <Button
                      href="/#contact"
                      variant="primary"
                      className="w-full text-center justify-center !text-[15px] !py-3.5"
                    >
                      Inquire About Similar Project
                    </Button>
                  </div>
                </div>

                {/* Developer Profile Card */}
                <div className="rounded-[24px] bg-canvas p-6 border border-border-light">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-muted">
                    Delivered By
                  </p>
                  <p className="mt-1 text-[17px] font-bold text-heading">
                    {profile.fullName}
                  </p>
                  <p className="mt-1 text-[13.5px] text-body leading-[22px]">
                    {profile.roleLine} • {profile.about.education.degree} (
                    {profile.about.education.institution}).
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <section className="mt-16 sm:mt-20 lg:mt-28 pt-12 sm:pt-16 border-t border-border-light">
            <div className="ashik-container">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
                <div>
                  <p className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                    <span>EXPLORE MORE</span>
                    <WavyAccentIcon className="w-8 h-2 text-heading" />
                  </p>
                  <h2 className="mt-1 text-[24px] sm:text-[34px] font-bold text-heading">
                    Related Projects
                  </h2>
                </div>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-1.5 text-[14.5px] sm:text-[15px] font-semibold text-heading hover:text-contrast underline-offset-4 hover:underline decoration-accent decoration-2"
                >
                  <span>View All Projects</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
                {relatedProjects.map((relProj) => (
                  <ProjectCard key={relProj.id} project={relProj} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Closing Contact CTA Banner */}
        <section className="mt-16 sm:mt-20 lg:mt-28">
          <div className="ashik-container">
            <div className="rounded-[24px] sm:rounded-[32px] bg-surface p-7 sm:p-12 lg:p-16 border border-black/5 ashik-card-shadow text-center max-w-[1000px] mx-auto">
              <span className="inline-block px-3 py-1 rounded-[8px] bg-accent text-[11.5px] sm:text-[12px] font-bold text-contrast uppercase tracking-wider">
                Start Your Project
              </span>
              <h2 className="mt-4 text-[24px] sm:text-[36px] lg:text-[44px] font-bold text-heading leading-tight">
                Have a Similar Website in Mind?
              </h2>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[18px] text-body max-w-[620px] mx-auto leading-relaxed">
                Let&apos;s build a responsive, structured, and high-performance
                WordPress or Elementor site tailored to your goals.
              </p>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button
                  href="/#contact"
                  variant="primary"
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Get in Touch Today
                </Button>
                <Button
                  href="/#projects"
                  variant="secondary"
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Explore All Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
