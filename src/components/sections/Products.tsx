import { Check, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { badges, featuredProduct, productFeatures, sectionCopy } from "@/lib/data";

export function Products() {
  return (
    <section id="products" className="bg-midnight pb-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow={{ icon: Rocket, label: badges.products }}
          title={sectionCopy.products.title}
          subtitle={sectionCopy.products.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col justify-between rounded-3xl border border-brand-teal/25 bg-gradient-to-br from-panel-solid to-brand-blue/[0.08] p-8 lg:col-span-3 sm:p-10">
            <div>
              <span className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-teal">
                {featuredProduct.label}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-fog-100 sm:text-3xl">
                {featuredProduct.name}
              </h3>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-fog-400 sm:text-base">
                {featuredProduct.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {featuredProduct.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-fog-100">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <Button href={featuredProduct.ctaHref} className="mt-8 self-start">
              {featuredProduct.ctaLabel}
            </Button>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {productFeatures.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex-1 rounded-3xl border border-hairline bg-panel-solid/60 p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-white/5">
                  <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-fog-100">
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-fog-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
