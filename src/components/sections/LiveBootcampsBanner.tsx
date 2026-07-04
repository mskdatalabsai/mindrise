"use client";

import { Flame } from "lucide-react";
import { EnrollmentModal } from "@/components/sections/EnrollmentModal";
import {
  CourseDetailsModal,
  EcosystemCourseCard,
  useCourseCardModals,
} from "@/components/sections/CourseCard";
import type { CalendarMode } from "@/components/ui/Calendar";
import { academyEcosystem } from "@/lib/data";

interface LiveBootcampsBannerProps {
  compact?: boolean;
}

export function LiveBootcampsBanner({ compact = false }: LiveBootcampsBannerProps) {
  const { activeCard, setActiveCard, enrollCard, setEnrollCard, handleEnroll } =
    useCourseCardModals();

  const bootcampsTrack = academyEcosystem.find((track) => track.id === "bootcamps");
  if (!bootcampsTrack) return null;

  const { icon: Icon, title, description, groups } = bootcampsTrack;
  const items = groups.flatMap((group) => {
    const badge = group.title?.replace(" Live Bootcamp", "");
    const mode: CalendarMode =
      badge === "Weekend" ? "weekend" : badge === "Weekdays" ? "weekday" : "any";
    return group.items.map((item) => ({ item, badge, mode }));
  });

  if (compact) {
    return (
      <>
        <section className="border-b border-hairline bg-midnight px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-blue to-brand-teal">
              <Icon className="h-4 w-4 text-white" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-sm font-bold text-fog-100">{title}</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-brand-blue to-brand-teal px-2 py-0.5 text-[9px] font-semibold tracking-wide text-white">
                  <Flame className="h-3 w-3" aria-hidden />
                  Most Popular
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-2.5 grid max-w-7xl gap-2.5 sm:grid-cols-2">
            {items.map(({ item, badge, mode }, index) => (
              <EcosystemCourseCard
                key={index}
                item={item}
                badge={badge}
                mode={mode}
                compact
                onViewDetails={setActiveCard}
                onEnroll={handleEnroll}
              />
            ))}
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

  return (
    <>
      <section className="bg-frost px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-brand-blue/25 bg-linear-to-b from-brand-blue/5 to-transparent p-6 shadow-lg shadow-brand-blue/5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-blue to-brand-teal">
              <Icon className="h-6 w-6 text-white" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                  {title}
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-brand-blue to-brand-teal px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                  <Flame className="h-3 w-3" aria-hidden />
                  Most Popular
                </span>
              </div>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
