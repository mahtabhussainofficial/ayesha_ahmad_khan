/**
 * Clean inline SVG recreation of Ashik's .banner-shap background geometry:
 * neon lime (#cdfe7d) circular segments + crisp dark thin orbital ring.
 */
export default function HeroDecoration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Large vibrant neon lime circle extending cleanly around portrait */}
      <circle cx="322" cy="312" r="218" fill="#cdfe7d" />
      {/* Secondary upper-left lime semicircle accent */}
      <path
        d="M52 198C52 132.83 104.83 80 170 80C235.17 80 288 132.83 288 198H52Z"
        fill="#cdfe7d"
        fillOpacity="0.65"
      />
      {/* Fine circular orbital stroke */}
      <circle
        cx="275"
        cy="275"
        r="248"
        stroke="#222222"
        strokeOpacity="0.2"
        strokeWidth="1.35"
      />
      {/* Accent geometric nodes */}
      <circle cx="72" cy="418" r="18" fill="#cdfe7d" />
      <circle cx="496" cy="138" r="8" fill="#222222" />
    </svg>
  );
}
