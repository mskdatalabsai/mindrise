import { ArrowUpRight, BarChart3, Calendar, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { badges, courses, sectionCopy } from "@/lib/data";

export function Courses() {
  return (
    <section id="courses" className="bg-frost pb-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-b from-brand-blue/[0.07] via-brand-violet/[0.05] to-transparent px-4 py-16 sm:px-10 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow={{ icon: Calendar, label: badges.courses }}
            title={sectionCopy.courses.title}
            subtitle={sectionCopy.courses.subtitle}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="flex flex-col rounded-2xl border border-mist bg-cloud p-7 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
                    {course.title}
                  </h3>
                  <ArrowUpRight
                    className="mt-1 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {course.description}
                </p>

                {course.instructor ? (
                  <p className="mt-4 text-xs text-slate-500">
                    <span className="font-semibold text-slate-900">
                      Instructor
                    </span>
                    <br />
                    {course.instructor}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-medium text-brand-blue">
                    <BarChart3 className="h-3.5 w-3.5" aria-hidden />
                    {course.level}
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={course.detailsHref} variant="subtle" size="sm" className="sm:flex-1">
                    View Details
                  </Button>
                  <Button href={course.registerHref} size="sm" className="sm:flex-1">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
