import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

/**
 * Ashik-matched primary filled (#cdfe7d) and secondary outline buttons.
 * Geometry: 20px 30px padding (desktop default), 15px border-radius,
 * 18px/21.6px weight 600, 0.4s ease-in-out hover inversion.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  showArrow = true,
  className = "",
  type = "button",
  disabled = false,
  ...rest
}) {
  const sizeClasses =
    size === "header"
      ? "px-5 py-2.5 sm:px-6 sm:py-3.5 text-[14.5px] sm:text-[16px] leading-[20px] rounded-[15px]"
      : "px-5 py-3.5 sm:px-[30px] sm:py-[20px] text-[15px] sm:text-[18px] leading-[21.6px] rounded-[15px]";

  const variantClasses =
    variant === "primary"
      ? "bg-accent text-contrast border border-accent hover:bg-transparent hover:text-heading hover:border-black/20"
      : "bg-transparent text-contrast border border-black/20 hover:bg-accent hover:text-contrast hover:border-accent";

  const baseClasses = `group inline-flex items-center justify-center gap-2 font-semibold capitalize transition-all duration-400 ease-in-out cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={baseClasses} {...rest}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={baseClasses} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={baseClasses} {...rest}>
      {content}
    </button>
  );
}
