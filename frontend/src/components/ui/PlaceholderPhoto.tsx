import clsx from "clsx";
import { ImageIcon } from "lucide-react";

/**
 * PlaceholderPhoto
 * ---------------------------------------------------------------
 * Stands in for real photography during this baseline build.
 * Swap for a Next.js <Image> (or CMS-driven image) later — the
 * `label` prop documents what each photo should eventually show.
 * ---------------------------------------------------------------
 */

const gradients = [
  "linear-gradient(135deg, var(--color-marigold) 0%, var(--color-marigold-tint) 100%)",
  "linear-gradient(135deg, var(--color-peacock) 0%, var(--color-peacock-tint) 100%)",
  "linear-gradient(135deg, var(--color-berry) 0%, var(--color-berry-tint) 100%)",
  "linear-gradient(135deg, var(--color-peacock-dark) 0%, var(--color-marigold) 100%)",
  "linear-gradient(135deg, var(--color-berry) 0%, var(--color-marigold-tint) 100%)",
];

const blobShapes = [
  "63% 37% 54% 46% / 43% 37% 63% 57%",
  "37% 63% 44% 56% / 55% 45% 55% 45%",
  "58% 42% 35% 65% / 52% 40% 60% 48%",
  "42% 58% 62% 38% / 38% 58% 42% 62%",
];

export default function PlaceholderPhoto({
  label,
  variant = "rounded",
  toneIndex = 0,
  className,
  aspect = "aspect-[4/5]",
}: {
  label: string;
  variant?: "rounded" | "blob";
  toneIndex?: number;
  className?: string;
  aspect?: string;
}) {
  const gradient = gradients[toneIndex % gradients.length];
  const shape = blobShapes[toneIndex % blobShapes.length];

  return (
    <div
      className={clsx(
        "relative flex items-end overflow-hidden",
        aspect,
        variant === "rounded" ? "rounded-[2rem]" : "",
        className
      )}
      style={{
        background: gradient,
        borderRadius: variant === "blob" ? shape : undefined,
      }}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-ink) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex w-full items-center justify-between gap-2 bg-[var(--color-ink)]/25 px-4 py-3 backdrop-blur-[2px]">
        <span className="flex items-center gap-2 text-xs font-medium text-white/95">
          <ImageIcon className="size-3.5 shrink-0" aria-hidden="true" />
          {label}
        </span>
      </div>
    </div>
  );
}
