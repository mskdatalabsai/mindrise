import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { academyOutcomes } from "@/lib/data";

export function AcademyOutcomes() {
  return (
    <section className="bg-midnight py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title="Learning Outcomes"
          subtitle="By learning with TheMindRise Academy, participants will be able to:"
        />

        <ul className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {academyOutcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-2.5 rounded-xl border border-hairline bg-panel-solid/60 px-4 py-3.5 text-sm text-fog-100"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
