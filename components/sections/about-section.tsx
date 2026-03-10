import { Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { portfolioContent } from "@/lib/content";

export function AboutSection() {
  const { about } = portfolioContent;

  return (
    <section id="about" className="space-y-8" aria-labelledby="about-title">
      <Reveal>
        <div className="space-y-4 rounded-2xl border border-border/70 bg-card/45 p-6 sm:p-7">
          <p
            id="about-title"
            className="font-display text-xs uppercase tracking-[0.2em] text-primary"
          >
            Summary
          </p>
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            {about.title}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.narrative}
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {about.principles.map((principle, idx) => (
          <Reveal key={principle} delay={idx * 0.06}>
            <article className="group h-full rounded-2xl border border-border/70 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/75">
              <Sparkles className="mb-4 h-4 w-4 text-primary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">{principle}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
