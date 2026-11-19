import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ServiceIcon,
  WavyAccentIcon,
} from "@/components/ui/Icons";
import { services, getServiceBySlug } from "@/data/services";
import { getProjectBySlug, projects } from "@/data/projects";
import { profile } from "@/data/profile";

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const pageTitle = `${service.title} | Services`;
  const fullTitle = `${service.title} | Services — ${profile.fullName}`;
  const metaDescription =
    service.shortDescription ||
    `${service.title} services by WordPress developer & Elementor expert ${profile.fullName}.`;
  const pageUrl = `/services/${service.slug}`;

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
      type: "website",
      images: [
        {
          url: "/images/profile/about-studio-1.webp",
          width: 1200,
          height: 630,
          alt: `${service.title} — ${profile.fullName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: ["/images/profile/about-studio-1.webp"],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Find relevant projects based on service.relatedProjectSlugs
  const relevantProjects = (service.relatedProjectSlugs || [])
    .map((projSlug) => getProjectBySlug(projSlug))
    .filter(Boolean);

  // Fallback if none mapped: take first 3 projects
  const displayProjects =
    relevantProjects.length > 0 ? relevantProjects : projects.slice(0, 3);

  const siteUrl = "https://ayesha-ahmad-khan.vercel.app";
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.title,
    description: service.shortDescription || service.intro,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@type": "Person",
      name: profile.fullName,
      jobTitle: profile.roleLine,
      url: siteUrl,
    },
    serviceType: service.title,
    areaServed: "Worldwide",
  };

  const faqJsonLd =
    service.faq && service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      )}
      <Header />

      <main className="min-h-screen bg-canvas pt-[100px] sm:pt-[125px] lg:pt-[145px] pb-[60px] sm:pb-[80px] animate-fade-in overflow-x-hidden">
        {/* Navigation Breadcrumb Bar */}
        <div className="ashik-container">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-border-light">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-heading hover:text-contrast transition-colors group cursor-pointer"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-black/10 group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              </span>
              <span>Back to Services</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-[8px] bg-accent text-[11.5px] sm:text-[12px] font-bold text-contrast whitespace-nowrap">
                Service Overview
              </span>
              <span className="text-[12px] sm:text-[13px] font-semibold text-muted hidden sm:inline whitespace-nowrap">
                {profile.roleBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Service Hero Section */}
        <section className="mt-6 sm:mt-10 lg:mt-12">
          <div className="ashik-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
              {/* Left / Hero Column */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] rounded-[18px] bg-accent text-contrast flex items-center justify-center shrink-0 ashik-card-shadow">
                    <ServiceIcon
                      name={service.icon}
                      className="w-7 h-7 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-2 text-[12.5px] sm:text-[13.5px] font-bold uppercase tracking-wider text-heading">
                      <span>OUR EXPERTISE</span>
                      <WavyAccentIcon className="w-8 h-2 text-heading" />
                    </p>
                    <p className="text-[12px] sm:text-[13.5px] text-muted">
                      WordPress &amp; Elementor Specialist
                    </p>
                  </div>
                </div>

                <h1 className="text-[26px] leading-[34px] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[58px] xl:text-[52px] xl:leading-[62px] font-bold text-heading tracking-[-0.015em]">
                  {service.title}
                </h1>

                <p className="mt-4 sm:mt-6 text-[15.5px] leading-[26px] sm:text-[18px] sm:leading-[30px] text-body max-w-[800px]">
                  {service.intro}
                </p>

                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Button
                    href="/#contact"
                    variant="primary"
                    className="w-full sm:w-auto text-center justify-center"
                  >
                    Request a Free Quote
                  </Button>
                  <Button
                    href="#portfolio-examples"
                    variant="secondary"
                    className="w-full sm:w-auto text-center justify-center"
                  >
                    View Portfolio Examples
                  </Button>
                </div>
              </div>

              {/* Right Side Trust & Scope Highlight Card */}
              <div className="lg:col-span-4 w-full">
                <div className="rounded-[24px] sm:rounded-[30px] bg-surface p-6 sm:p-8 border border-black/5 ashik-card-shadow space-y-5">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-[6px] bg-accent text-contrast text-[11px] font-bold uppercase tracking-wider">
                      Execution Standard
                    </span>
                    <p className="mt-2 text-[20px] sm:text-[22px] font-bold text-heading">
                      Clean &amp; Maintainable
                    </p>
                    <p className="mt-1.5 text-[14px] leading-[23px] text-body">
                      Every project is built with clean architecture, responsive grids, and strict WordPress conventions.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-light">
                    <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted">
                      Direct Developer Delivery
                    </p>
                    <p className="mt-1 text-[16px] font-bold text-heading">
                      {profile.fullName}
                    </p>
                    <p className="mt-0.5 text-[13px] text-muted">
                      {profile.about.education.degree} ({profile.about.education.institution})
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-light">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-heading hover:text-contrast underline-offset-4 hover:underline decoration-accent decoration-2"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. What's Included Section */}
        {service.whatsIncluded?.length > 0 && (
          <section className="mt-14 sm:mt-20 lg:mt-24">
            <div className="ashik-container">
              <div className="max-w-[700px] mb-8 sm:mb-10">
                <p className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                  <span>SERVICE SCOPE</span>
                  <WavyAccentIcon className="w-8 h-2 text-heading" />
                </p>
                <h2 className="mt-2 text-[24px] sm:text-[34px] font-bold text-heading">
                  What&apos;s Included in This Service
                </h2>
                <p className="mt-2.5 text-[15px] sm:text-[16px] text-body">
                  Everything necessary for a robust, accessible, and scalable implementation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                {service.whatsIncluded.map((item, index) => (
                  <div
                    key={item.title}
                    className="group rounded-[24px] bg-canvas p-6 sm:p-7 ashik-card-shadow border border-black/[0.06] hover:border-black/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-contrast text-[12.5px] font-bold">
                          0{index + 1}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-black/10 group-hover:bg-accent transition-colors" />
                      </div>

                      <h3 className="mt-4 text-[18px] sm:text-[19px] font-bold text-heading group-hover:text-contrast transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[14.5px] leading-[24px] text-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2. Problems Addressed Section (Comparative Challenge vs Solution) */}
        {service.problemsAddressed?.length > 0 && (
          <section className="mt-14 sm:mt-20 lg:mt-24">
            <div className="ashik-container">
              <div className="rounded-[24px] sm:rounded-[32px] bg-surface p-6 sm:p-10 lg:p-14 border border-black/5 ashik-card-shadow">
                <div className="max-w-[700px] mb-8 sm:mb-10">
                  <p className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                    <span>WHY IT MATTERS</span>
                    <WavyAccentIcon className="w-8 h-2 text-heading" />
                  </p>
                  <h2 className="mt-2 text-[24px] sm:text-[34px] font-bold text-heading">
                    Common Problems This Service Solves
                  </h2>
                  <p className="mt-2.5 text-[15px] sm:text-[16px] text-body">
                    Practical engineering solutions to frequent WordPress, Elementor, and site performance bottlenecks.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                  {service.problemsAddressed.map((pair, idx) => (
                    <div
                      key={idx}
                      className="rounded-[22px] bg-canvas p-5 sm:p-7 border border-border-light ashik-card-shadow flex flex-col gap-4"
                    >
                      {/* Problem Statement */}
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600 shrink-0 text-[11px] font-bold">
                          ✕
                        </span>
                        <div>
                          <p className="text-[11.5px] font-bold uppercase tracking-wider text-red-600">
                            The Challenge
                          </p>
                          <p className="mt-0.5 text-[14.5px] sm:text-[15px] font-semibold text-heading leading-[23px]">
                            {pair.problem}
                          </p>
                        </div>
                      </div>

                      {/* Solution Statement */}
                      <div className="flex items-start gap-3 pt-3.5 border-t border-border-light">
                        <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent text-contrast shrink-0">
                          <CheckIcon className="w-3 h-3" />
                        </span>
                        <div>
                          <p className="text-[11.5px] font-bold uppercase tracking-wider text-contrast">
                            Our Strategic Approach
                          </p>
                          <p className="mt-0.5 text-[14px] sm:text-[14.5px] text-body leading-[24px]">
                            {pair.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Working Process Section (Roadmap) */}
        {service.process?.length > 0 && (
          <section className="mt-14 sm:mt-20 lg:mt-24">
            <div className="ashik-container">
              <div className="max-w-[700px] mb-8 sm:mb-10">
                <p className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                  <span>STEP-BY-STEP</span>
                  <WavyAccentIcon className="w-8 h-2 text-heading" />
                </p>
                <h2 className="mt-2 text-[24px] sm:text-[34px] font-bold text-heading">
                  Our Working Process
                </h2>
                <p className="mt-2.5 text-[15px] sm:text-[16px] text-body">
                  A transparent, collaborative workflow from initial discovery to final launch.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-[22px] bg-canvas p-5 sm:p-6 ashik-card-shadow border border-black/[0.06] hover:border-black/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-1 w-10 rounded-full bg-accent mb-4" />
                      <span className="inline-block px-2.5 py-0.5 rounded-[6px] bg-surface text-contrast text-[12px] font-bold border border-black/5">
                        Step {step.step}
                      </span>
                      <h3 className="mt-3.5 text-[17px] sm:text-[18px] font-bold text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-[23px] text-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4. Relevant Portfolio Projects */}
        {displayProjects.length > 0 && (
          <section id="portfolio-examples" className="mt-14 sm:mt-20 lg:mt-24">
            <div className="ashik-container">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
                <div>
                  <p className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                    <span>PORTFOLIO EXAMPLES</span>
                    <WavyAccentIcon className="w-8 h-2 text-heading" />
                  </p>
                  <h2 className="mt-1 text-[24px] sm:text-[34px] font-bold text-heading">
                    Relevant Portfolio Projects
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
                {displayProjects.slice(0, 3).map((proj) => (
                  <ProjectCard key={proj.id} project={proj} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. FAQ Section */}
        {service.faq?.length > 0 && (
          <section className="mt-16 sm:mt-20 lg:mt-24">
            <div className="ashik-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-5">
                  <p className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-heading">
                    <span>QUESTIONS &amp; ANSWERS</span>
                    <WavyAccentIcon className="w-8 h-2 text-heading" />
                  </p>
                  <h2 className="mt-2 text-[24px] sm:text-[34px] font-bold text-heading">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-3 text-[15px] sm:text-[16px] leading-[26px] text-body">
                    Here are answers to common questions regarding timelines,
                    maintenance, tools, and ongoing support for this service.
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <Button
                      href="/#contact"
                      variant="secondary"
                      className="w-full sm:w-auto text-center justify-center"
                    >
                      Have Another Question?
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-7 w-full">
                  <FaqAccordion items={service.faq} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Closing Contact / Quote CTA Banner */}
        <section className="mt-16 sm:mt-20 lg:mt-28">
          <div className="ashik-container">
            <div className="rounded-[24px] sm:rounded-[32px] bg-surface p-7 sm:p-12 lg:p-16 border border-black/5 ashik-card-shadow text-center max-w-[1000px] mx-auto">
              <span className="inline-block px-3 py-1 rounded-[8px] bg-accent text-[11.5px] sm:text-[12px] font-bold text-contrast uppercase tracking-wider">
                Get Started
              </span>
              <h2 className="mt-4 text-[24px] sm:text-[36px] lg:text-[44px] font-bold text-heading leading-tight">
                Ready to Discuss Your {service.title}?
              </h2>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[18px] text-body max-w-[620px] mx-auto leading-relaxed">
                Send your project details, questions, or timeline expectations.
                I will review your requirements and provide a clear plan.
              </p>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button
                  href="/#contact"
                  variant="primary"
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Request a Free Quote
                </Button>
                <Button
                  href="/#services"
                  variant="secondary"
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Explore Other Services
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
