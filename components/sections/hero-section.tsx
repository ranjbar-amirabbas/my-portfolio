"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { portfolioContent } from "@/lib/content";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { person } = portfolioContent;

  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/65 px-6 py-10 backdrop-blur-md sm:px-10 sm:py-14"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="pointer-events-none absolute -left-16 -top-12 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
        animate={{ scale: [0.9, 1.1, 0.95], opacity: [0.3, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-16 right-8 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
        animate={{ scale: [1, 1.15, 0.9], opacity: [0.2, 0.45, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-7">
          <Badge className="border-primary/40 bg-primary/10 text-primary">Senior Engineer • Product Builder</Badge>

          <div className="space-y-5">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-muted-foreground">
              {person.location}
            </p>
            <h1 id="hero-title" className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {person.fullName}
            </h1>
            <p className="text-xl font-medium text-primary sm:text-2xl">{person.role}</p>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{person.headline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={person.resumeUrl}
              className={cn(buttonVariants({ size: "lg" }))}
              target="_blank"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
            <Link
              href={person.socialLinks[0].href}
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {person.location}
            </div>
            {person.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-r from-primary/25 via-white/5 to-accent/25 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-black/20 p-2">
            <Image
              src={person.avatar}
              alt={`${person.firstName} portrait`}
              width={620}
              height={760}
              className="h-auto w-full rounded-[1.4rem] object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
