"use client";

import { useState } from "react";
import { Clock, ImagePlay } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import type { CalendarMode } from "@/components/ui/Calendar";
import type { CourseCatalogItem } from "@/types";

export interface CardContext {
  item: CourseCatalogItem;
  mode: CalendarMode;
}

interface EcosystemCourseCardProps {
  item: CourseCatalogItem;
  badge?: string;
  mode: CalendarMode;
  compact?: boolean;
  onViewDetails: (context: CardContext) => void;
  onEnroll: (context: CardContext) => void;
}

export function EcosystemCourseCard({
  item,
  badge,
  mode,
  compact = false,
  onViewDetails,
  onEnroll,
}: EcosystemCourseCardProps) {
  if (compact) {
    return (
      <div className="flex gap-3 rounded-xl border border-hairline bg-panel-solid/60 p-2.5 shadow-sm transition-shadow hover:shadow-lg">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border border-dashed border-hairline bg-white/5 sm:h-28 sm:w-28">
          <ImagePlay className="h-7 w-7 text-fog-400/70" strokeWidth={1.5} aria-hidden />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              {badge ? (
                <span className="rounded-full bg-brand-teal/15 px-1.5 py-0.5 text-[10px] font-semibold text-brand-teal">
                  {badge}
                </span>
              ) : null}
              <h4 className="mt-0.5 font-display text-xs font-bold leading-snug text-fog-100">
                {item.title}
              </h4>
            </div>
            <p className="shrink-0 font-display text-xs font-bold text-fog-100">{item.price}</p>
          </div>

          <div className="mt-1 flex items-center gap-2 text-[11px]">
            <span className="rounded-md bg-brand-blue/15 px-1.5 py-0.5 font-semibold text-brand-cyan">
              {item.level}
            </span>
            <span className="text-fog-400">{item.duration}</span>
          </div>

          <div className="mt-2 flex gap-2">
            <Button
              type="button"
              onClick={() => onViewDetails({ item, mode })}
              variant="outline"
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

interface CourseDetailsModalProps {
  activeCard: CardContext | null;
  onClose: () => void;
  onEnroll: (context: CardContext) => void;
}

export function CourseDetailsModal({ activeCard, onClose, onEnroll }: CourseDetailsModalProps) {
  return (
    <Modal open={activeCard !== null} onClose={onClose} title={activeCard?.item.title}>
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

          <Button type="button" onClick={() => onEnroll(activeCard)} className="mt-5 w-full">
            Enroll Now
          </Button>
        </div>
      ) : null}
    </Modal>
  );
}

export function useCourseCardModals() {
  const [activeCard, setActiveCard] = useState<CardContext | null>(null);
  const [enrollCard, setEnrollCard] = useState<CardContext | null>(null);

  function handleEnroll(context: CardContext) {
    setActiveCard(null);
    setEnrollCard(context);
  }

  return {
    activeCard,
    setActiveCard,
    enrollCard,
    setEnrollCard,
    handleEnroll,
  };
}
