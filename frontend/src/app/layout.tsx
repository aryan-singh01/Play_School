import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { school } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: `${school.name} — ${school.tagline}`,
    template: `%s — ${school.name}`,
  },
  description: school.descriptionShort,
  keywords: [
    "preschool",
    "playschool",
    "kindergarten",
    "early childhood education",
    "nursery school",
    "play-based learning",
  ],
  openGraph: {
    title: `${school.name} — ${school.tagline}`,
    description: school.descriptionShort,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
