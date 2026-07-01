import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsPhilosophy } from "@/lib/data";

export function ProductsPhilosophy() {
  return (
    <section className="bg-frost py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          title="Our Product Philosophy"
          subtitle="Every AI product we build is guided by five principles."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {productsPhilosophy.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-mist bg-cloud p-6 text-center shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
