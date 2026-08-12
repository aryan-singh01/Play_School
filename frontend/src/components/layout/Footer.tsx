import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks, contact, school, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-peacock-dark)] text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20"
        style={{ background: "var(--color-marigold)" }}
        aria-hidden="true"
      />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {school.descriptionShort}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  {s.label.charAt(0)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">School</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/admissions" className="text-sm text-white/75 transition-colors hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-white/75 transition-colors hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-white/75 transition-colors hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/75 transition-colors hover:text-white">
                  Book a Visit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Get in touch</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-marigold)]" aria-hidden="true" />
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-[var(--color-marigold)]" aria-hidden="true" />
                <a href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`} className="hover:text-white">
                  {contact.phonePrimary}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-[var(--color-marigold)]" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-[var(--color-marigold)]" aria-hidden="true" />
                <span>
                  {contact.daysOpen}
                  <br />
                  {contact.hoursWeekday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
          <p className="text-white/40">
            Baseline template — replace placeholder text, images and details before launch.
          </p>
        </div>
      </Container>
    </footer>
  );
}
