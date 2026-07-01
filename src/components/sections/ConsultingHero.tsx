import { ArrowRight, Network } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { consultingPageHero } from "@/lib/data";

export function ConsultingHero() {
  return (
    <section className="relative overflow-hidden bg-midnight px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 animate-float-slower rounded-full bg-brand-blue/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[30%] h-72 w-72 animate-float-slow rounded-full bg-brand-teal/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Badge icon={Network} tone="dark">
          AI Consulting
        </Badge>

        <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-fog-100 sm:text-5xl lg:text-6xl">
          {consultingPageHero.title}
        </h1>

        <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 text-pretty text-base leading-relaxed text-fog-400">
          {consultingPageHero.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={consultingPageHero.primaryCta.href}
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {consultingPageHero.primaryCta.label}
          </Button>
          <Button href={consultingPageHero.secondaryCta.href} variant="outline" size="lg">
            {consultingPageHero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
