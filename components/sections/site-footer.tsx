import Link from "next/link";

import { portfolioContent } from "@/lib/content";

export function SiteFooter() {
  const { person } = portfolioContent;

  return (
    <footer className="mt-12 border-t border-border/70 py-8 text-sm text-muted-foreground">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {person.fullName}.</p>
        <div className="flex gap-4">
          {person.socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
