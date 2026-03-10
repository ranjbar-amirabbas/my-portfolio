import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/lib/content";

export function SkillsSection() {
  const { skills } = portfolioContent;

  return (
    <section id="skills" className="space-y-8" aria-labelledby="skills-title">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Breadth With Systems-Level Depth"
          description="Core technologies and practices used to deliver high-throughput, resilient software in production."
        />
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-2">
        {skills.map((group, idx) => (
          <Reveal key={group.category} delay={idx * 0.05}>
            <article className="h-full rounded-2xl border border-border/70 bg-card/45 p-5 transition-all duration-300 hover:border-primary/45 hover:bg-card/70">
              <h3 className="font-display text-lg font-medium text-foreground">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} className="text-[11px] leading-5 text-foreground/90">
                    {item}
                  </Badge>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
