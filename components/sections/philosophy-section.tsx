import { Cpu, Gauge, UsersRound } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    title: "Business-Aligned Engineering",
    body: "Architecture decisions are valuable only when they improve outcomes for customers, teams, and revenue.",
    icon: UsersRound,
  },
  {
    title: "Real-Time By Design",
    body: "When systems move from batch to streaming, products become more adaptive, responsive, and competitive.",
    icon: Gauge,
  },
  {
    title: "AI-Accelerated Delivery",
    body: "Agentic workflows can increase product velocity while preserving engineering discipline and maintainability.",
    icon: Cpu,
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="space-y-6" aria-labelledby="philosophy-title">
      <Reveal>
        <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-primary/15 via-card/40 to-accent/15 p-7 sm:p-10">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Engineering Philosophy</p>
          <h2 id="philosophy-title" className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Shipping Fast Is Not Enough. Systems Must Hold.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I focus on resilient architectures that scale with demand, preserve product quality, and support rapid iteration in real operating environments.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {items.map((item, idx) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={idx * 0.07}>
                  <article className="h-full rounded-2xl border border-border/70 bg-background/55 p-5 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
