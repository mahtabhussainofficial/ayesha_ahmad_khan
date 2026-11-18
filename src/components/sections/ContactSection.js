import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MailIcon, MapPinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

/**
 * Section 08 — Contact (#contact)
 * Matches Ashik: inside 1320px container, rounded #f6f7f9 outer card (30px radius),
 * left column details + 40x40px social squares, right column elevated white form card.
 */
export default function ContactSection() {
  const { contact } = profile;

  return (
    <section id="contact" className="mt-[80px] lg:mt-[120px] bg-canvas">
      <div className="ashik-container">
        <div className="rounded-[30px] bg-surface px-[18px] py-[48px] sm:px-[36px] sm:py-[64px] lg:px-[60px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Contact Intro, Pending/Confirmed Info & Socials */}
            <RevealOnScroll className="lg:col-span-5">
              <SectionHeading
                eyebrow={contact.eyebrow}
                title={contact.headline}
                description={contact.description}
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-canvas text-heading shrink-0 ashik-card-shadow">
                    <MailIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-muted">
                      Email
                    </p>
                    {contact.email ? (
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[16px] font-semibold text-heading hover:underline decoration-accent decoration-2 underline-offset-4"
                      >
                        {contact.email}
                      </a>
                    ) : (
                      <p className="text-[15px] font-medium text-body">
                        {contact.emailPlaceholder}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-canvas text-heading shrink-0 ashik-card-shadow">
                    <MapPinIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-muted">
                      Location
                    </p>
                    <p className="text-[15px] font-medium text-body">
                      {contact.location || contact.locationPlaceholder}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-light">
                <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-muted mb-3">
                  Social Profiles
                </p>
                <SocialLinks socials={contact.socials} />
              </div>
            </RevealOnScroll>

            {/* Right Column: Elevated White Contact Form Card */}
            <RevealOnScroll delayMs={100} className="lg:col-span-7">
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
