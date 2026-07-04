"use client";

import { Flame } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CalendarMode } from "@/components/ui/Calendar";
import { EnrollmentModal } from "@/components/sections/EnrollmentModal";
import {
  CourseDetailsModal,
  EcosystemCourseCard,
  useCourseCardModals,
} from "@/components/sections/CourseCard";
import { cn } from "@/lib/utils";
import { academyEcosystem } from "@/lib/data";

export function AcademyEcosystem() {
  const { activeCard, setActiveCard, enrollCard, setEnrollCard, handleEnroll } =
    useCourseCardModals();

  return (
    <>
      <section id="ecosystem" className="scroll-mt-24 bg-frost py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="light"
            title="Our Learning Ecosystem"
            subtitle="The Academy is built around live and self-paced learning, organized into three tracks."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {academyEcosystem.map(({ id, icon: Icon, title, description, groups }, trackIndex) => {
              const items = groups.flatMap((group) => {
                const badge = groups.length > 1 ? group.title?.replace(" Live Bootcamp", "") : undefined;
                const mode: CalendarMode =
                  badge === "Weekend" ? "weekend" : badge === "Weekdays" ? "weekday" : "any";
                return group.items.map((item) => ({ item, badge, mode }));
              });
              const isFeatured = trackIndex === 0;

              return (
                <div
                  key={id}
                  id={id}
                  className={cn(
                    "scroll-mt-24 flex flex-col rounded-2xl border p-6",
                    isFeatured
                      ? "border-brand-blue/25 bg-linear-to-b from-brand-blue/5 to-transparent shadow-lg shadow-brand-blue/5"
                      : "border-mist bg-cloud shadow-sm"
                  )}
                >
                  <div className="flex items-start gap-3 lg:min-h-28">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        isFeatured ? "bg-linear-to-br from-brand-blue to-brand-teal" : "bg-brand-blue/10"
                      )}
                    >
                      <Icon
                        className={cn("h-5 w-5", isFeatured ? "text-white" : "text-brand-blue")}
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-base font-bold text-slate-900">{title}</h3>
                        {isFeatured ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-brand-blue to-brand-teal px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                            <Flame className="h-3 w-3" aria-hidden />
                            Most Popular
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-4">
                    {items.map(({ item, badge, mode }, index) => (
                      <EcosystemCourseCard
                        key={index}
                        item={item}
                        badge={badge}
                        mode={mode}
                        onViewDetails={setActiveCard}
                        onEnroll={handleEnroll}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CourseDetailsModal
        activeCard={activeCard}
        onClose={() => setActiveCard(null)}
        onEnroll={handleEnroll}
      />

      <EnrollmentModal
        open={enrollCard !== null}
        onClose={() => setEnrollCard(null)}
        courseTitle={enrollCard?.item.title ?? ""}
        coursePrice={enrollCard?.item.price ?? ""}
        scheduleMode={enrollCard?.mode ?? "any"}
      />
    </>
  );
}
