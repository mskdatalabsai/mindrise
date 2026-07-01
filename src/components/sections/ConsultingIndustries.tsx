import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { consultingPageIndustries } from "@/lib/data";

export function ConsultingIndustries() {
  return (
    <section className="bg-frost py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          title="Industries We Serve"
          subtitle="We design AI solutions tailored to industry-specific challenges."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {consultingPageIndustries.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-mist bg-cloud p-7 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-500"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-blue" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
