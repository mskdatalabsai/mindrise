import { Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { productsFlagship } from "@/lib/data";

export function ProductsFlagship() {
  return (
    <section id="dhiti" className="bg-midnight py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col justify-between rounded-3xl border border-brand-teal/25 bg-gradient-to-br from-panel-solid to-brand-blue/[0.08] p-8 lg:col-span-3 sm:p-10">
            <div>
              <span className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-teal">
                {productsFlagship.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-fog-100 sm:text-3xl">
                {productsFlagship.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-brand-teal">
                {productsFlagship.tagline}
              </p>

              <div className="mt-5 flex flex-col gap-3 text-pretty text-sm leading-relaxed text-fog-400 sm:text-base">
                {productsFlagship.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-hairline bg-white/5 p-5">
                <Quote className="h-5 w-5 text-brand-teal/60" aria-hidden />
                <p className="mt-2 text-sm text-fog-400 line-through decoration-fog-400/40">
                  {productsFlagship.quote.question}
                </p>
                <p className="mt-1.5 font-display text-base font-bold text-fog-100">
                  {productsFlagship.quote.answer}
                </p>
              </div>
            </div>

            <Button href={productsFlagship.ctaHref} className="mt-8 self-start">
              {productsFlagship.ctaLabel}
            </Button>
          </div>

          <div className="rounded-3xl border border-hairline bg-panel-solid/60 p-7 lg:col-span-2 sm:p-8">
            <h3 className="font-display text-base font-bold text-fog-100">
              Key Features
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {productsFlagship.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-fog-100">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
