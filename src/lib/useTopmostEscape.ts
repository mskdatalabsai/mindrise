"use client";

import { useEffect, useRef } from "react";

// Shared across every open overlay (modals, popovers) so that when several are
// stacked, pressing Escape only closes the topmost one instead of all of them.
const openOverlayStack: symbol[] = [];

export function useTopmostEscape(open: boolean, onClose: () => void) {
  const idRef = useRef(Symbol("overlay"));

  useEffect(() => {
    if (!open) return;

    const id = idRef.current;
    openOverlayStack.push(id);
    return () => {
      const index = openOverlayStack.indexOf(id);
      if (index !== -1) openOverlayStack.splice(index, 1);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const isTopmost = openOverlayStack[openOverlayStack.length - 1] === idRef.current;
      if (isTopmost) onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);
}
