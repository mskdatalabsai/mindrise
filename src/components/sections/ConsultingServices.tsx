import { SectionHeading } from "@/components/ui/SectionHeading";
import { consultingPageServices } from "@/lib/data";

export function ConsultingServices() {
  return (
    <section id="services" className="bg-midnight py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tone="dark" title="Our Consulting Services" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {consultingPageServices.map(({ id, icon: Icon, title, description, examples }) => (
            <div
              key={id}
              className="flex flex-col rounded-2xl border border-hairline bg-panel-solid/60 p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-white/5">
                <Icon className="h-6 w-6 text-brand-teal" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-fog-100">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-fog-400">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-medium text-brand-teal"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
