import Link from "next/link";
import { ArrowRight, Linkedin, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { portfolioContent } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { person } = portfolioContent;
  const linkedIn = person.socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section id="contact" aria-label="Contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-7 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,219,188,0.14),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(216,255,87,0.11),transparent_45%)]" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Contact</p>

            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href={person.resumeUrl}
                className={cn(buttonVariants({ size: "lg" }))}
                target="_blank"
              >
                Resume
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={linkedIn?.href ?? "#"}
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 pt-2 text-sm text-muted-foreground">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {person.phone}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
