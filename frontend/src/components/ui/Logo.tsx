import clsx from "clsx";
import { school } from "@/lib/content";

// REPLACE: swap this SVG monogram for the school's real logo file.
export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <circle cx="19" cy="19" r="19" fill={light ? "#FFFFFF" : "var(--color-peacock)"} />
        <path
          d="M12 24C13.5 17.5 16.8 13.5 19 13.5C21.2 13.5 24.5 17.5 26 24"
          stroke={light ? "var(--color-peacock)" : "var(--color-marigold)"}
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="19" cy="13" r="2.6" fill={light ? "var(--color-marigold-dark)" : "var(--color-marigold)"} />
      </svg>
      <span
        className={clsx(
          "font-display text-lg font-semibold leading-none tracking-tight",
          light ? "text-white" : "text-[var(--color-ink)]"
        )}
      >
        {school.shortName}
      </span>
    </span>
  );
}
