import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { aboutCopy, aboutStats, sectionCopy } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="bg-frost py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          title={
            <>
              About{" "}
              <span className="text-gradient-brand">
                {sectionCopy.about.titleAccent}
              </span>
            </>
          }
          subtitle={sectionCopy.about.subtitle}
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          <div className="mx-auto flex aspect-4/5 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-mist bg-cloud text-center">
            <GraduationCap className="h-8 w-8 text-brand-blue" strokeWidth={1.5} aria-hidden />
            <p className="px-4 text-xs text-slate-400">
              Founder photo coming soon
            </p>
          </div>

          <div className="space-y-4 text-pretty text-base leading-relaxed text-slate-500">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {aboutStats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-mist bg-cloud px-4 py-6 text-center shadow-sm"
            >
              <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} aria-hidden />
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-2xl font-extrabold text-slate-900">
                {value}
              </dd>
              <dd className="text-xs text-slate-500">{label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex justify-center">
          <Button href="#contact">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
