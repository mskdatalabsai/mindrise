import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { consultingServices, sectionCopy } from "@/lib/data";

export function Consulting() {
  return (
    <section id="consulting" className="bg-midnight py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title={sectionCopy.consulting.title}
          subtitle={sectionCopy.consulting.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {consultingServices.map(({ icon: Icon, title, description, ctaHref }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-hairline bg-panel-solid/60 p-7 transition-colors hover:border-brand-teal/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-white/5">
                <Icon className="h-6 w-6 text-brand-teal" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-fog-100">
                {title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-fog-400">
                {description}
              </p>
              <Button href={ctaHref} variant="outline" size="sm" className="mt-6 self-start">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
