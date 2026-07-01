import { SectionHeading } from "@/components/ui/SectionHeading";
import { academyWhyUs } from "@/lib/data";

export function AcademyWhyUs() {
  return (
    <section className="bg-midnight py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title="Why Learn with TheMindRise Academy?"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academyWhyUs.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-hairline bg-panel-solid/60 p-7 transition-colors hover:border-brand-teal/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-white/5">
                <Icon className="h-5 w-5 text-brand-teal" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-fog-100">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
