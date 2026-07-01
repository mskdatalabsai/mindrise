import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsPipeline, productsPipelineCopy } from "@/lib/data";

export function ProductsPipeline() {
  return (
    <section className="bg-midnight py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title={productsPipelineCopy.title}
          className="max-w-3xl"
        />
        <div className="mx-auto mt-4 flex max-w-3xl flex-col gap-3 text-center text-pretty text-base leading-relaxed text-fog-400">
          {productsPipelineCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-14 text-center font-display text-lg font-bold text-fog-100">
          Coming Soon
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsPipeline.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-hairline bg-panel-solid/60 p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-white/5">
                  <Icon className="h-5 w-5 text-brand-teal" strokeWidth={1.75} aria-hidden />
                </div>
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-fog-400">
                  Coming Soon
                </span>
              </div>
              <h4 className="mt-5 font-display text-base font-bold text-fog-100">
                {title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-fog-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
