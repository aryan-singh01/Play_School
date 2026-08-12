"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";

export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--color-line)] rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)]">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg text-[var(--color-ink)]">{item.question}</span>
                <Plus
                  className={clsx(
                    "size-5 shrink-0 text-[var(--color-marigold-dark)] transition-transform duration-300",
                    open && "rotate-45"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className={clsx(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0">
                <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
