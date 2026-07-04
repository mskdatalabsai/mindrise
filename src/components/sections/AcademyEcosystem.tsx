"use client";

import { useState } from "react";
import { Clock, Flame, ImagePlay } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import type { CalendarMode } from "@/components/ui/Calendar";
import { EnrollmentModal } from "@/components/sections/EnrollmentModal";
import { cn } from "@/lib/utils";
import { academyEcosystem } from "@/lib/data";
import type { CourseCatalogItem } from "@/types";

interface CardContext {
  item: CourseCatalogItem;
  mode: CalendarMode;
}

interface EcosystemCourseCardProps {
  item: CourseCatalogItem;
  badge?: string;
  mode: CalendarMode;
  onViewDetails: (context: CardContext) => void;
  onEnroll: (context: CardContext) => void;
}

function EcosystemCourseCard({
  item,
  badge,
  mode,
  onViewDetails,
  onEnroll,
}: EcosystemCourseCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-mist bg-cloud shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative flex aspect-video flex-col items-center justify-center gap-1.5 border-b border-dashed border-mist bg-frost">
        <ImagePlay className="h-7 w-7 text-slate-400" strokeWidth={1.5} aria-hidden />
        <span className="text-xs font-medium text-slate-400">Image / video coming soon</span>

        {badge ? (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-semibold text-brand-teal">
              {badge}
            </span>
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <h4 className="font-display text-sm font-bold leading-snug text-slate-900">
          {item.title}
        </h4>
        <p className="mt-1 text-xs text-slate-500">{item.instructor}</p>

        <div className="mt-2 flex items-center gap-2 text-xs">
          <span className="rounded-md bg-brand-blue/10 px-1.5 py-0.5 font-semibold text-brand-blue">
            {item.level}
          </span>
          <span className="text-slate-400">{item.duration}</span>
        </div>

        <p className="mt-2 font-display text-sm font-bold text-slate-900">{item.price}</p>

        <div className="mt-3 flex gap-2">
          <Button
            type="button"
            onClick={() => onViewDetails({ item, mode })}
            variant="subtle"
            size="sm"
            className="flex-1"
          >
            View Details
          </Button>
          <Button
            type="button"
            onClick={() => onEnroll({ item, mode })}
            size="sm"
            className="flex-1"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AcademyEcosystem() {
  const [activeCard, setActiveCard] = useState<CardContext | null>(null);
  const [enrollCard, setEnrollCard] = useState<CardContext | null>(null);

  function handleEnroll(context: CardContext) {
    setActiveCard(null);
    setEnrollCard(context);
  }

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

      <Modal
        open={activeCard !== null}
        onClose={() => setActiveCard(null)}
        title={activeCard?.item.title}
      >
        {activeCard ? (
          <div>
            <h3 className="pr-8 font-display text-lg font-bold text-slate-900">
              {activeCard.item.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{activeCard.item.instructor}</p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {activeCard.item.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 font-semibold text-brand-blue">
                {activeCard.item.level}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2.5 py-1 font-medium text-slate-600">
                <Clock className="h-3 w-3" aria-hidden />
                {activeCard.item.duration}
              </span>
            </div>

            <p className="mt-4 font-display text-xl font-bold text-slate-900">
              {activeCard.item.price}
            </p>

            <Button
              type="button"
              onClick={() => handleEnroll(activeCard)}
              className="mt-5 w-full"
            >
              Enroll Now
            </Button>
          </div>
        ) : null}
      </Modal>

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
