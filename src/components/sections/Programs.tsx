import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { badges, programCards, sectionCopy } from "@/lib/data";

export function Programs() {
  return (
    <section id="programs" className="bg-frost pb-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow={{ icon: GraduationCap, label: badges.programs }}
          title={sectionCopy.programs.title}
          subtitle={sectionCopy.programs.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programCards.map(({ icon: Icon, title, description, tags, ctaHref }) => (
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
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-medium text-brand-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button href={ctaHref} size="sm" className="mt-6 w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
