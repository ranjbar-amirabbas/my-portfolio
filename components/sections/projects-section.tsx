import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/lib/content";

export function ProjectsSection() {
  const { projects } = portfolioContent;

  return (
    <section id="projects" className="space-y-8" aria-labelledby="projects-title">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected Projects With Measurable Impact"
          description="A snapshot of the systems and products that combined technical rigor with revenue and operational outcomes."
        />
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 0.05}>
            <article className="group h-full rounded-2xl border border-border/70 bg-card/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/75">
              <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-black/20 text-primary">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </div>

              <h3 className="font-display text-2xl font-medium text-foreground">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-primary">{project.impact}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
