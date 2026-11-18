import { SocialIcon } from "@/components/ui/Icons";

/**
 * Ashik 40x40px square social buttons (border-radius: 5px, #fff -> #cdfe7d hover).
 * Renders real external links ONLY when confirmed URLs exist; renders accessible
 * non-navigating placeholders otherwise so zero dead or fabricated links exist.
 */
export default function SocialLinks({ socials = [], className = "" }) {
  if (!socials.length) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((item) => {
        const sharedClass =
          "inline-flex items-center justify-center w-[42px] h-[42px] rounded-[5px] bg-canvas text-heading transition-colors duration-300";

        if (item.href) {
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className={`${sharedClass} hover:bg-accent hover:text-contrast`}
            >
              <SocialIcon id={item.id} className="w-[18px] h-[18px]" />
            </a>
          );
        }

        return (
          <span
            key={item.id}
            role="img"
            aria-label={`${item.label} link pending confirmation`}
            title={`${item.label} — URL pending confirmation`}
            className={`${sharedClass} opacity-65 border border-black/10 cursor-default`}
          >
            <SocialIcon id={item.id} className="w-[18px] h-[18px]" />
          </span>
        );
      })}
    </div>
  );
}
