import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionCopy, testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-midnight pb-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tone="dark" title={sectionCopy.testimonials.title} subtitle={sectionCopy.testimonials.subtitle} />

        {/* Single card centers nicely; switch to a grid if more testimonials are added later */}
        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-hairline bg-panel-solid/60 p-8"
            >
              <div className="flex gap-1" aria-hidden>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-pretty text-base italic leading-relaxed text-fog-100">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <span className="block text-sm font-semibold text-fog-100">
                  {testimonial.name}
                </span>
                <span className="block text-xs text-brand-teal">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
