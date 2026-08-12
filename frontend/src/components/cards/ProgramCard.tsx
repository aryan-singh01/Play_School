import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import type { programs } from "@/lib/content";

const toneMap: Record<string, { text: string; bg: string; border: string }> = {
  marigold: {
    text: "text-[var(--color-marigold-dark)]",
    bg: "bg-[var(--color-marigold-tint)]",
    border: "group-hover:border-[var(--color-marigold)]",
  },
  peacock: {
    text: "text-[var(--color-peacock)]",
    bg: "bg-[var(--color-peacock-tint)]",
    border: "group-hover:border-[var(--color-peacock)]",
  },
  berry: {
    text: "text-[var(--color-berry)]",
    bg: "bg-[var(--color-berry-tint)]",
    border: "group-hover:border-[var(--color-berry)]",
  },
};

export default function ProgramCard({
  program,
  toneIndex = 0,
  compact = false,
}: {
  program: (typeof programs)[number];
  toneIndex?: number;
  compact?: boolean;
}) {
  const tone = toneMap[program.color] ?? toneMap.marigold;

  return (
    <Link
      href={`/programs#${program.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 ${tone.border}`}
    >
      <PlaceholderPhoto
        label={`Photo: ${program.name} classroom`}
        aspect="aspect-[5/3]"
        toneIndex={toneIndex}
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${tone.bg} ${tone.text}`}>
              {program.ageRange}
            </span>
            <h3 className="mt-3 font-display text-2xl text-[var(--color-ink)]">{program.name}</h3>
          </div>
          <ArrowUpRight
            className="mt-1 size-5 shrink-0 text-[var(--color-ink-faint)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-ink)]"
            aria-hidden="true"
          />
        </div>
        <p className={`mt-1 text-sm font-semibold ${tone.text}`}>{program.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{program.description}</p>

        {!compact && (
          <ul className="mt-5 space-y-2 border-t border-[var(--color-line)] pt-5">
            {program.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]">
                <Check className={`mt-0.5 size-4 shrink-0 ${tone.text}`} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
