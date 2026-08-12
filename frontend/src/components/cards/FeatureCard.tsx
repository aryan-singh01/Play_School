import clsx from "clsx";
import { getIcon } from "@/lib/icons";

export default function FeatureCard({
  title,
  description,
  icon,
  tone = "light",
}: {
  title: string;
  description: string;
  icon: string;
  tone?: "light" | "dark";
}) {
  const Icon = getIcon(icon);

  return (
    <div
      className={clsx(
        "flex h-full flex-col rounded-[1.5rem] p-6 transition-all duration-300 hover:-translate-y-1",
        tone === "light"
          ? "border border-[var(--color-line)] bg-[var(--color-card)] hover:shadow-[var(--shadow-card)]"
          : "border border-white/10 bg-white/5 hover:bg-white/10"
      )}
    >
      <div
        className={clsx(
          "flex size-11 items-center justify-center rounded-xl",
          tone === "light"
            ? "bg-[var(--color-marigold-tint)] text-[var(--color-marigold-dark)]"
            : "bg-white/10 text-[var(--color-marigold)]"
        )}
      >
        <Icon className="size-5.5" aria-hidden="true" />
      </div>
      <h3
        className={clsx(
          "mt-4 font-display text-lg",
          tone === "light" ? "text-[var(--color-ink)]" : "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "mt-2 text-sm leading-relaxed",
          tone === "light" ? "text-[var(--color-ink-soft)]" : "text-white/65"
        )}
      >
        {description}
      </p>
    </div>
  );
}
