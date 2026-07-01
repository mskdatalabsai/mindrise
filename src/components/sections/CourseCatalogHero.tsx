import { Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CourseCatalogHero() {
  return (
    <section className="relative overflow-hidden bg-midnight px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Badge icon={Layers} tone="dark">
          TheMindRise Academy
        </Badge>

        <h1 className="mt-6 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-fog-100 sm:text-4xl lg:text-5xl">
          Course Catalog
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-fog-400">
          Browse Live Classes, Self-Paced courses, and AI Courses in one
          place. Full course details are coming soon — this catalog shows
          placeholder listings for now.
        </p>
      </div>
    </section>
  );
}
