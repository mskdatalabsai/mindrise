import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { contactPageHero } from "@/lib/data";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-midnight px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Badge icon={Mail} tone="dark">
          Get In Touch
        </Badge>

        <h1 className="mt-6 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-fog-100 sm:text-4xl lg:text-5xl">
          {contactPageHero.title}
        </h1>

        <div className="mx-auto mt-4 flex max-w-2xl flex-col gap-3 text-pretty text-base leading-relaxed text-fog-400">
          {contactPageHero.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
