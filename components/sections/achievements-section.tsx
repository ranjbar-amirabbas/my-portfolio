import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/lib/content";

export function AchievementsSection() {
  const { achievements } = portfolioContent;

  return (
    <section id="highlights" className="space-y-8" aria-labelledby="highlights-title">
      <Reveal>
        <SectionHeading
          eyebrow="Highlights"
          title="Outcomes That Moved the Business"
          description="Selected outcomes across high-scale commerce systems, real-time architecture, and platform modernization."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, idx) => (
          <Reveal key={item.label} delay={idx * 0.05}>
            <article className="group h-full rounded-2xl border border-border/70 bg-card/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/80">
              <p className="font-display text-3xl font-semibold text-foreground">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-primary">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
