import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon?: LucideIcon;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

export function Badge({ icon: Icon, children, tone = "dark", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide",
        tone === "dark"
          ? "border-white/10 bg-white/5 text-fog-100 backdrop-blur-sm"
          : "border-brand-blue/15 bg-brand-blue/[0.06] text-brand-blue",
        className
      )}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden /> : null}
      {children}
    </span>
  );
}
