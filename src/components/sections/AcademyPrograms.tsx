import { SectionHeading } from "@/components/ui/SectionHeading";
import { academyPrograms } from "@/lib/data";

export function AcademyPrograms() {
  return (
    <section className="bg-frost py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tone="light" title="Our Flagship Programs" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {academyPrograms.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-mist bg-cloud p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon className="h-6 w-6 text-brand-blue" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
