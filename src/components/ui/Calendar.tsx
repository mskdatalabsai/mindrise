"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CalendarMode = "weekend" | "weekday" | "any";

interface CalendarProps {
  mode: CalendarMode;
  selected: Date | null;
  onSelect: (date: Date) => void;
  className?: string;
}

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function Calendar({ mode, selected, onSelect, className }: CalendarProps) {
  const today = startOfDay(new Date());
  const [viewMonth, setViewMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const firstWeekday = viewMonth.getDay();
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
  const isCurrentMonth =
    viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() === today.getMonth();

  function isDisabled(day: number) {
    const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
    if (date < today) return true;
    const dayOfWeek = date.getDay();
    if (mode === "weekend") return dayOfWeek >= 1 && dayOfWeek <= 5;
    if (mode === "weekday") return dayOfWeek === 0 || dayOfWeek === 6;
    return false;
  }

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
          disabled={isCurrentMonth}
          aria-label="Previous month"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-900/5 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <p className="text-sm font-semibold text-slate-900">
          {viewMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
        <button
          type="button"
          onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
          aria-label="Next month"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-900/5"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-slate-400">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="mt-1 grid flex-1 auto-rows-fr grid-cols-7 gap-1.5">
        {Array.from({ length: firstWeekday }).map((_, index) => (
          <span key={`blank-${index}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => {
          const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
          const disabled = isDisabled(day);
          const isSelected = selected ? isSameDay(selected, date) : false;

          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(date)}
              className={cn(
                "flex h-full w-full items-center justify-center rounded-lg text-xs font-medium transition-colors",
                disabled
                  ? "cursor-not-allowed text-slate-300"
                  : isSelected
                    ? "bg-linear-to-r from-brand-blue to-brand-teal text-white"
                    : "bg-brand-teal/10 text-slate-700 hover:bg-brand-teal/20"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
