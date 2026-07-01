import { Button } from "@/components/ui/Button";
import { productsFinalCta } from "@/lib/data";

export function ProductsCta() {
  return (
    <section className="bg-midnight pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-linear-to-b from-brand-blue/[0.1] via-brand-violet/5 to-transparent px-4 py-16 text-center sm:px-10 sm:py-20">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-fog-100 sm:text-4xl">
            {productsFinalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-fog-400">
            {productsFinalCta.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={productsFinalCta.primaryCta.href} size="lg">
              {productsFinalCta.primaryCta.label}
            </Button>
            <Button href={productsFinalCta.secondaryCta.href} variant="outline" size="lg">
              {productsFinalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
