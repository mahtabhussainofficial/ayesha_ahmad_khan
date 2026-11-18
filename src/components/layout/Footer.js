import { BrandLogo, StarAccentIcon } from "@/components/ui/Icons";
import SocialLinks from "@/components/ui/SocialLinks";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

/**
 * Ashik Footer (#f6f7f9 surface, giant 80px CTA headline + star accent,
 * brand summary & anchor navigation, clean copyright bar — zero demo switcher links).
 */
export default function Footer() {
  return (
    <footer className="mt-[80px] lg:mt-[120px] bg-surface pt-[64px] lg:pt-[75px] pb-[30px] relative z-10">
      <div className="ashik-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 lg:pb-16">
          {/* Left Column: Giant CTA Headline + Star + Socials */}
          <div className="lg:col-span-6">
            <div className="flex items-start gap-4">
              <h2 className="text-[38px] leading-[46px] sm:text-[52px] sm:leading-[62px] lg:text-[66px] lg:leading-[78px] xl:text-[80px] xl:leading-[96px] font-bold uppercase text-heading tracking-[-0.02em]">
                {profile.footer.ctaLine1}
                <br />
                <span className="inline-flex items-center gap-3 sm:gap-4">
                  <span>{profile.footer.ctaLine2}</span>
                  <StarAccentIcon className="w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 shrink-0" />
                </span>
              </h2>
            </div>

            <div className="mt-8">
              <SocialLinks socials={profile.contact.socials} />
            </div>
          </div>

          {/* Right Column: Brand Summary + Quick Navigation */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-between gap-8">
            <div>
              <a href="#home" aria-label={`${profile.fullName} — Home`}>
                <BrandLogo />
              </a>
              <p className="mt-5 text-[16px] leading-[28px] text-body">
                {profile.footer.summary}
              </p>
              <p className="mt-3 text-[14px] font-medium text-heading">
                {profile.about.education.degree} — {profile.about.education.institution},{" "}
                {profile.about.education.period}
              </p>
            </div>

            <nav aria-label="Footer Navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-heading hover:text-contrast underline-offset-4 hover:underline decoration-accent decoration-2 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-border-light pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-muted">
          <p>
            © {profile.footer.copyrightYear} {profile.footer.copyrightName}. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="font-medium text-heading hover:text-contrast underline-offset-4 hover:underline decoration-accent decoration-2 transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
