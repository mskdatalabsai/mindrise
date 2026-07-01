import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: { icon?: LucideIcon; label: string };
  title: ReactNode;
  subtitle?: string;
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <Badge icon={eyebrow.icon} tone={tone} className="mb-4">
          {eyebrow.label}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-fog-100" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed",
            tone === "dark" ? "text-fog-400" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
