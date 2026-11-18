/**
 * Crisp inline SVG icon primitives matching the Ashik reference aesthetic.
 * Zero external icon fonts or extra npm packages.
 */

export function BrandLogo({ dark = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Ashik-inspired geometric lime "A" mark */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M17.2 4.5C17.6 3.6 18.8 3.6 19.2 4.5L31.4 30.2C31.8 31 31.2 32 30.3 32H24.6C24 32 23.5 31.6 23.3 31.1L18.2 19.8L12.7 31.1C12.5 31.6 12 32 11.4 32H5.7C4.8 32 4.2 31 4.6 30.2L17.2 4.5Z"
          fill="#cdfe7d"
        />
        <circle cx="24.5" cy="24.5" r="4.2" fill="#cdfe7d" stroke={dark ? "#0f0f13" : "#ffffff"} strokeWidth="2.2" />
      </svg>
      <span
        className={`text-[24px] font-bold tracking-[-0.02em] leading-none ${
          dark ? "text-white" : "text-contrast"
        }`}
      >
        Ayesha
      </span>
    </span>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 10h12" />
      <path d="M11 5l5 5-5 5" />
    </svg>
  );
}

export function LongArrowRightIcon({ className = "w-7 h-5" }) {
  return (
    <svg
      viewBox="0 0 32 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 10h27" />
      <path d="M22 4l7 6-7 6" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 14L14 6" />
      <path d="M7 6h7v7" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function CloseIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function ChevronUpIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12.5l5-5 5 5" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.5 5l-5 5 5 5" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7.5 5l5 5-5 5" />
    </svg>
  );
}

export function StarAccentIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 2L28.8 19.2L46 24L28.8 28.8L24 46L19.2 28.8L2 24L19.2 19.2L24 2Z"
        fill="#cdfe7d"
        stroke="#222222"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WavyAccentIcon({ className = "w-11 h-3" }) {
  return (
    <svg
      viewBox="0 0 54 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 9C6 3 10 3 14 9C18 15 22 3 26 9C30 15 34 3 38 9C42 15 46 3 52 9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RatingStarIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M10 1.8l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.42l-4.94 2.6.94-5.51-4-3.9 5.53-.8L10 1.8z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ServiceIcon({ name, className = "w-8 h-8" }) {
  switch (name) {
    case "wordpress":
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
          <circle cx="16" cy="16" r="12" />
          <path d="M9.5 11.5l3.6 10.5 3.1-8.5 3.1 8.5 3.3-9.5" />
          <path d="M7.5 11.5h4.2" />
        </svg>
      );
    case "elementor":
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
          <rect x="4" y="5" width="24" height="22" rx="3" />
          <path d="M11 10v12" />
          <path d="M16 10h6" />
          <path d="M16 16h5" />
          <path d="M16 22h6" />
        </svg>
      );
    case "redesign":
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
          <path d="M5 23l5.5-1.5L24.2 7.8a2.2 2.2 0 0 0-3.1-3.1L7.4 18.4 5 23z" />
          <path d="M18.5 7.3l3.2 3.2" />
          <path d="M16 26h11" />
        </svg>
      );
    case "woocommerce":
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
          <path d="M5 7h3.5l2.5 12h13l2.5-8.5H9.5" />
          <circle cx="13" cy="24.5" r="1.8" />
          <circle cx="22" cy="24.5" r="1.8" />
        </svg>
      );
    case "performance":
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
          <path d="M16 4l9 4v7.5c0 5.5-3.8 10-9 12.5-5.2-2.5-9-7-9-12.5V8l9-4z" />
          <path d="M12.5 16.5l2.5 2.5 5-5.5" />
        </svg>
      );
  }
}

export function SocialIcon({ id, className = "w-4 h-4" }) {
  switch (id) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 12.82C20.44 9.57 18.7 8.06 16.38 8.06C14.51 8.06 13.67 9.09 13.2 9.81V8.5H9.83C9.88 9.48 9.83 19.5 9.83 19.5H13.2V13.36C13.2 13.03 13.23 12.7 13.33 12.46C13.59 11.81 14.18 11.14 15.17 11.14C16.46 11.14 17.07 12.12 17.07 13.55V19.5H20.44V12.82Z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.76 4.87 20.6 8.84 21.95C9.34 22.04 9.52 21.73 9.52 21.46C9.52 21.22 9.51 20.43 9.51 19.57C6.73 20.19 6.14 18.2 6.14 18.2C5.68 17.02 5.03 16.71 5.03 16.71C4.12 16.08 5.1 16.09 5.1 16.09C6.1 16.16 6.63 17.15 6.63 17.15C7.52 18.71 8.97 18.26 9.54 18C9.63 17.34 9.89 16.89 10.18 16.63C7.96 16.37 5.62 15.49 5.62 11.57C5.62 10.45 6.01 9.54 6.65 8.82C6.55 8.56 6.2 7.52 6.75 6.11C6.75 6.11 7.59 5.83 9.5 7.16C10.3 6.93 11.15 6.82 12 6.82C12.85 6.82 13.7 6.93 14.5 7.16C16.41 5.83 17.25 6.11 17.25 6.11C17.8 7.52 17.45 8.56 17.35 8.82C17.99 9.54 18.38 10.45 18.38 11.57C18.38 15.5 16.04 16.37 13.81 16.62C14.17 16.94 14.5 17.56 14.5 18.52C14.5 19.89 14.49 20.99 14.49 21.46C14.49 21.73 14.67 22.05 15.18 21.95C19.14 20.59 22 16.76 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M12 3a13.5 13.5 0 0 1 0 18" />
          <path d="M12 3a13.5 13.5 0 0 0 0 18" />
        </svg>
      );
  }
}
