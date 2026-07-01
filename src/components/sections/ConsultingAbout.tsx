import { consultingPageAboutCopy } from "@/lib/data";

export function ConsultingAbout() {
  return (
    <section className="bg-frost py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {consultingPageAboutCopy.title}
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-pretty text-base leading-relaxed text-slate-500">
          {consultingPageAboutCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
