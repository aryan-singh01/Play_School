import { getIcon } from "@/lib/icons";

export default function ActivityCard({
  name,
  category,
  description,
  icon,
}: {
  name: string;
  category: string;
  description: string;
  icon: string;
}) {
  const Icon = getIcon(icon);

  return (
    <div className="group flex h-full flex-col rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-peacock-tint)] text-[var(--color-peacock)] transition-colors duration-300 group-hover:bg-[var(--color-peacock)] group-hover:text-white">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <span className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
        {category}
      </span>
      <h3 className="mt-1.5 font-display text-xl text-[var(--color-ink)]">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{description}</p>
    </div>
  );
}
