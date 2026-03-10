import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(25,219,188,0.14),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(216,255,87,0.12),transparent_35%),linear-gradient(180deg,#070b14_0%,#060a10_45%,#050709_100%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_100%)]" />
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <SiteHeader />

        <div className="mt-6 space-y-14 sm:space-y-20">
          <HeroSection />
          <AboutSection />
          <AchievementsSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <PhilosophySection />
          <ContactSection />
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
