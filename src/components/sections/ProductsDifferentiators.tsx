import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsDifferentiators } from "@/lib/data";

export function ProductsDifferentiators() {
  return (
    <section className="bg-midnight py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title="Why Our Products Are Different"
          subtitle={productsDifferentiators.intro}
        />

        <ul className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {productsDifferentiators.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-hairline bg-panel-solid/60 px-4 py-3.5 text-sm text-fog-100"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
