"use client";

import { useState } from "react";
import clsx from "clsx";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import { galleryCategories, galleryItems } from "@/lib/content";

const tallIndices = new Set([0, 3, 7, 10]);

export default function GalleryFilterGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter gallery by category">
        {galleryCategories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                isActive
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-4 sm:auto-rows-[190px] sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <PlaceholderPhoto
            key={item.title}
            label={`Photo: ${item.title}`}
            toneIndex={i}
            aspect=""
            className={clsx("h-full w-full", tallIndices.has(i) && "sm:row-span-2")}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-[var(--color-ink-soft)]">
          No photos in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
