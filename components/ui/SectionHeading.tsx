import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-8 md:mb-12 ${alignClass}`}>
      {label && (
        <ScrollReveal>
          <span
            className={`inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4 sm:text-sm ${
              light ? "text-cgh-yellow" : "text-cgh-red"
            }`}
          >
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-display text-3xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl ${
            light ? "text-white" : "text-cgh-charcoal"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed ${
              light ? "text-gray-300" : "text-cgh-muted"
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
