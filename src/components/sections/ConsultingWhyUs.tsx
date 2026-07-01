import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { consultingPageWhyChoose, consultingPageWhyPartner } from "@/lib/data";

export function ConsultingWhyUs() {
  return (
    <section className="bg-frost py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tone="light" title="Why Partner with TheMindRise.AI?" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {consultingPageWhyPartner.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-mist bg-cloud p-6 text-center shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-center font-display text-xl font-bold text-slate-900">
          Why Choose TheMindRise.AI?
        </h3>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {consultingPageWhyChoose.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-mist bg-cloud px-4 py-3.5 text-sm text-slate-900 shadow-sm"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
