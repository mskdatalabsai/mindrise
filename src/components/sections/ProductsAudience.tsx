import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsAudience } from "@/lib/data";

export function ProductsAudience() {
  return (
    <section className="bg-frost py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tone="light" title="Who Can Benefit?" />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {productsAudience.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-mist bg-cloud px-4 py-3.5 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                <Icon className="h-4 w-4 text-brand-blue" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="text-sm font-medium text-slate-900">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
