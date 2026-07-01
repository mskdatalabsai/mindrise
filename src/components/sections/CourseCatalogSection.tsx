import { BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CourseCatalogCategory } from "@/types";

interface CourseCatalogSectionProps {
  category: CourseCatalogCategory;
}

export function CourseCatalogSection({ category }: CourseCatalogSectionProps) {
  const Icon = category.icon;

  return (
    <div id={category.id} className="scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
          <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} aria-hidden />
        </span>
        <div>
          <h2 className="font-display text-xl font-bold text-slate-900">
            {category.title}
          </h2>
          <p className="text-sm text-slate-500">{category.description}</p>
        </div>
      </div>

      <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        {category.items.map((item, index) => (
          <div
            key={`${category.id}-${index}`}
            className="flex w-80 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-mist bg-cloud shadow-sm"
          >
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-teal/[0.08]">
              <Icon className="h-9 w-9 text-slate-900/25" strokeWidth={1.5} aria-hidden />
              <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
                Coming Soon
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">{item.instructor}</p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {item.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-medium text-brand-blue">
                  <BarChart3 className="h-3.5 w-3.5" aria-hidden />
                  {item.level}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-900">
                Price: {item.price}
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Button href={item.detailsHref} variant="subtle" size="sm">
                  View Details
                </Button>
                <Button href={item.demoHref} size="sm">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
