import Link from "next/link";

import { portfolioContent } from "@/lib/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const { person } = portfolioContent;

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/70 bg-background/60 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-lg sm:px-6">
        <Link href="#top" className="font-display text-sm font-semibold text-foreground sm:text-base">
          {person.firstName}
        </Link>

        <nav aria-label="Primary" className="hidden gap-5 sm:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={person.resumeUrl}
          target="_blank"
          className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/20 sm:text-sm"
        >
          Resume
        </Link>
      </div>
    </header>
  );
}
