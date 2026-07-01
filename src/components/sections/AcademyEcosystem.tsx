import { SectionHeading } from "@/components/ui/SectionHeading";
import { academyEcosystem } from "@/lib/data";

export function AcademyEcosystem() {
  return (
    <section className="bg-frost py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          title="Our Learning Ecosystem"
          subtitle="The Academy is built around four learning experiences."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {academyEcosystem.map(({ id, icon: Icon, title, description, examples }) => (
            <div
              key={title}
              id={id}
              className="flex flex-col rounded-2xl border border-mist bg-cloud p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon className="h-6 w-6 text-brand-blue" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
              {examples.length > 0 ? (
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
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
