"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { heroCertification, siteConfig, badges } from "@/lib/data";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function scrollToNext() {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] flex-col items-center justify-center overflow-hidden bg-midnight px-4 py-10 sm:px-6 lg:px-8">
      {/* Signature background: faint technical grid + drifting gradient glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 animate-float-slower rounded-full bg-brand-blue/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[30%] h-72 w-72 animate-float-slow rounded-full bg-brand-teal/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div {...fadeUp(0)}>
          <Badge icon={Sparkles} tone="dark">
            {badges.hero}
          </Badge>
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-fog-100 sm:text-5xl lg:text-6xl"
        >
          Empowering Minds through
          <br />
          <span className="text-gradient-cool">AI Intelligence</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.14)}
          className="mt-5 text-lg font-medium text-fog-100/90"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          {...fadeUp(0.18)}
          className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-fog-400"
        >
          Transform your future with cutting-edge AI training, strategic
          consulting, and innovative product solutions that drive intelligent
          growth.
        </motion.p>

        <motion.div
          {...fadeUp(0.22)}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#courses" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Join Weekend Bootcamp
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Book Consulting
          </Button>
        </motion.div>

        <motion.div
          {...fadeUp(0.26)}
          className="mx-auto mt-10 flex max-w-lg items-center gap-4 rounded-2xl border border-hairline bg-panel-solid/60 p-4 text-left backdrop-blur-sm sm:p-5"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand-teal/30 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20">
            <Award className="h-7 w-7 text-brand-teal" strokeWidth={1.75} aria-hidden />
          </div>
          <div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide text-brand-teal">
              {heroCertification.badgeLabel}
            </span>
            <p className="mt-0.5 font-display text-base font-bold text-fog-100">
              {heroCertification.title}
            </p>
            <p className="mt-0.5 text-sm text-fog-400">
              {heroCertification.description}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-brand-teal/40 p-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-brand-teal"
            animate={{ y: [0, 12], opacity: [1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
