import { Button } from "@/components/ui/Button";
import { consultingPageCta } from "@/lib/data";

export function ConsultingCta() {
  return (
    <section className="bg-midnight pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-linear-to-b from-brand-blue/[0.1] via-brand-violet/5 to-transparent px-4 py-16 text-center sm:px-10 sm:py-20">
          <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-fog-400">
            {consultingPageCta.intro}
          </p>
          <h2 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-fog-100 sm:text-4xl">
            {consultingPageCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-fog-400">
            {consultingPageCta.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={consultingPageCta.primaryCta.href} size="lg">
              {consultingPageCta.primaryCta.label}
            </Button>
            <Button href={consultingPageCta.secondaryCta.href} variant="outline" size="lg">
              {consultingPageCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
