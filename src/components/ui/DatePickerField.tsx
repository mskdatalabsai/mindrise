"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays } from "lucide-react";
import { Calendar, type CalendarMode } from "@/components/ui/Calendar";
import { cn } from "@/lib/utils";
import { useTopmostEscape } from "@/lib/useTopmostEscape";

interface DatePickerFieldProps {
  mode: CalendarMode;
  selected: Date | null;
  onSelect: (date: Date) => void;
  placeholder?: string;
}

interface Position {
  top: number;
  left: number;
  width: number;
  height: number;
}

const POPOVER_WIDTH = 300;
const POPOVER_HEIGHT = 320;

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function DatePickerField({
  mode,
  selected,
  onSelect,
  placeholder = "Select a date",
}: DatePickerFieldProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const margin = 8;

      const fitsRight = rect.right + margin + POPOVER_WIDTH <= window.innerWidth;
      const left = fitsRight
        ? rect.right + margin
        : Math.max(rect.left - POPOVER_WIDTH - margin, margin);

      // Prefer anchoring the popover's top to the field. But if that would
      // push its bottom past the surrounding dialog (e.g. the enrollment
      // form), flip it to bottom-align with the dialog's edge instead so it
      // never dangles below the form.
      const dialogRect = triggerRef.current?.closest('[role="dialog"]')?.getBoundingClientRect();
      const dialogBottom = dialogRect?.bottom ?? window.innerHeight - margin;
      const dialogTop = dialogRect?.top ?? margin;

      let top = rect.top;
      if (top + POPOVER_HEIGHT > dialogBottom) {
        top = dialogBottom - POPOVER_HEIGHT;
      }
      top = Math.max(top, dialogTop, margin);
      top = Math.min(top, window.innerHeight - POPOVER_HEIGHT - margin);

      setPosition({ top, left, width: POPOVER_WIDTH, height: POPOVER_HEIGHT });
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || popoverRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useTopmostEscape(open, () => setOpen(false));

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full items-center gap-2 rounded-xl border border-mist bg-cloud px-4 py-2.5 text-left text-sm transition-colors focus:border-brand-blue/60 focus:outline-none focus:ring-2 focus:ring-brand-blue/15",
          selected ? "text-slate-900" : "text-slate-400"
        )}
      >
        <CalendarDays className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
        {selected ? formatDate(selected) : placeholder}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={popoverRef}
              style={{
                position: "fixed",
                top: position?.top ?? 0,
                left: position?.left ?? 0,
                width: position?.width ?? POPOVER_WIDTH,
                height: position?.height ?? POPOVER_HEIGHT,
                visibility: position ? "visible" : "hidden",
              }}
              className="z-110 flex flex-col rounded-xl border border-mist bg-cloud p-3 shadow-2xl"
            >
              <Calendar
                mode={mode}
                selected={selected}
                onSelect={(date) => {
                  onSelect(date);
                  setOpen(false);
                }}
                className="flex-1"
              />
            </div>,
            document.body
          )
        : null}
    </>
  );
}
