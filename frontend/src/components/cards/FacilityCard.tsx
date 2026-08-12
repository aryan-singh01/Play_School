import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import { getIcon } from "@/lib/icons";

export default function FacilityCard({
  name,
  description,
  icon,
  toneIndex = 0,
}: {
  name: string;
  description: string;
  icon: string;
  toneIndex?: number;
}) {
  const Icon = getIcon(icon);

  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
      <div className="relative">
        <PlaceholderPhoto
          label={`Photo: ${name}`}
          aspect="aspect-[4/3]"
          toneIndex={toneIndex}
          className="rounded-none"
        />
        <div className="absolute -bottom-5 left-5 flex size-11 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] text-[var(--color-peacock)] shadow-[var(--shadow-card)]">
          <Icon className="size-5" aria-hidden="true" />
        </div>
      </div>
      <div className="p-6 pt-8">
        <h3 className="font-display text-lg text-[var(--color-ink)]">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{description}</p>
      </div>
    </div>
  );
}
