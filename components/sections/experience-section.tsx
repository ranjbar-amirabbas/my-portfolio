import { BriefcaseBusiness } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/lib/content";

export function ExperienceSection() {
  const { experiences } = portfolioContent;

  return (
    <section id="experience" className="space-y-8" aria-labelledby="experience-title">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Built in Production. Proven Under Pressure."
          description="A track record of shipping and scaling backend systems where traffic, complexity, and business expectations are all high."
        />
      </Reveal>

      <div className="relative space-y-6 before:absolute before:bottom-2 before:left-[1.05rem] before:top-2 before:w-px before:bg-gradient-to-b before:from-primary/70 before:to-transparent sm:before:left-[1.18rem]">
        {experiences.map((experience, idx) => (
          <Reveal key={`${experience.company}-${experience.period}`} delay={idx * 0.06}>
            <article className="relative rounded-2xl border border-border/70 bg-card/50 p-6 transition-all duration-300 hover:border-primary/45 hover:bg-card/80 sm:pl-14">
              <div className="absolute left-3 top-7 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background text-primary sm:left-4">
                <BriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" />
              </div>

              <header className="space-y-2">
                <h3 className="font-display text-2xl font-medium text-foreground">{experience.role}</h3>
                <p className="text-base font-medium text-primary">{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.period}</p>
              </header>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
