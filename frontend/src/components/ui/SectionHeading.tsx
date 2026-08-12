import clsx from "clsx";
import Squiggle from "./Squiggle";

export default function SectionHeading({
  eyebrow,
  title,
  emphasis,
  description,
  align = "left",
  tone = "dark",
  emphasisColor = "var(--color-marigold)",
  className,
}: {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  emphasisColor?: string;
  className?: string;
}) {
  const parts = emphasis ? title.split(emphasis) : [title];

  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-4 text-xs font-bold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-[var(--color-peacock)]" : "text-white/70"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-display text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-[var(--color-ink)]" : "text-white"
        )}
      >
        {emphasis ? (
          <>
            {parts[0]}
            <span className="squiggle-underline relative inline-block">
              {emphasis}
              <Squiggle color={emphasisColor} />
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-[var(--color-ink-soft)]" : "text-white/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
