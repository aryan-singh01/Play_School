import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-marigold)] text-[var(--color-ink)] hover:bg-[var(--color-marigold-dark)] hover:-translate-y-0.5 shadow-[0_10px_25px_-10px_rgba(226,161,58,0.6)]",
  secondary:
    "bg-[var(--color-peacock)] text-white hover:bg-[var(--color-peacock-dark)] hover:-translate-y-0.5 shadow-[0_10px_25px_-10px_rgba(40,92,82,0.55)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-line)] hover:border-[var(--color-ink)] hover:bg-white/60",
  "outline-light":
    "bg-transparent text-white border border-white/50 hover:bg-white/10 hover:border-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow = true,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = clsx(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
