/**
 * Consistent Ashik eyebrow (.sub-title) + section H2 (.section-title) pairing.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`${
        isCentered ? "text-center mx-auto max-w-[760px]" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-[15px] sm:text-[18px] font-bold uppercase leading-[26px] sm:leading-[35px] tracking-[0.04em] mb-2 ${
            dark ? "text-accent" : "text-heading"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-[26px] leading-[34px] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[58px] xl:text-[60px] xl:leading-[70px] font-bold tracking-[-0.015em] ${
          dark ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[16px] leading-[28px] ${
            dark ? "text-white/75" : "text-body"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
