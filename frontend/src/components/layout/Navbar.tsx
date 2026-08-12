"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-line)] bg-[var(--color-cream)]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label={`${"Home"} — go to homepage`}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative py-2 text-sm font-semibold transition-colors",
                      active
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-[var(--color-marigold)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/admissions" size="md">
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] p-2.5 text-[var(--color-ink)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={clsx(
          "grid overflow-hidden bg-[var(--color-cream)] transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] border-b border-[var(--color-line)]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                    active
                      ? "bg-[var(--color-marigold-tint)] text-[var(--color-ink)]"
                      : "text-[var(--color-ink-soft)] hover:bg-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/admissions" size="md" className="mt-3 w-full">
              Enquire Now
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
