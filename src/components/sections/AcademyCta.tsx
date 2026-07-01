import { Button } from "@/components/ui/Button";
import { academyCta } from "@/lib/data";

export function AcademyCta() {
  return (
    <section className="bg-frost pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-linear-to-b from-brand-blue/[0.07] via-brand-violet/5 to-transparent px-4 py-16 text-center sm:px-10 sm:py-20">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {academyCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-500">
            {academyCta.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={academyCta.primaryCta.href} size="lg">
              {academyCta.primaryCta.label}
            </Button>
            <Button href={academyCta.secondaryCta.href} variant="subtle" size="lg">
              {academyCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
