import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "marigold" | "peacock" | "berry" | "light";

const tones: Record<Tone, string> = {
  marigold: "bg-[var(--color-marigold-tint)] text-[var(--color-marigold-dark)]",
  peacock: "bg-[var(--color-peacock-tint)] text-[var(--color-peacock-dark)]",
  berry: "bg-[var(--color-berry-tint)] text-[var(--color-berry)]",
  light: "bg-white/15 text-white",
};

export default function Badge({
  children,
  tone = "marigold",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
