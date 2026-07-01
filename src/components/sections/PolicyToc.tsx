import type { PolicySection } from "@/types";

interface PolicyTocProps {
  sections: PolicySection[];
}

export function PolicyMobileToc({ sections }: PolicyTocProps) {
  return (
    <nav
      aria-label="Policy sections"
      className="mb-10 flex gap-2 overflow-x-auto pb-1 lg:hidden"
    >
      {sections.map(({ id, title }) => (
        <a
          key={id}
          href={`#${id}`}
          className="inline-flex shrink-0 items-center rounded-full border border-mist bg-cloud px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
        >
          {title}
        </a>
      ))}
    </nav>
  );
}

export function PolicyToc({ sections }: PolicyTocProps) {
  return (
    <aside className="hidden self-start lg:block">
      <nav
        aria-label="Policy sections"
        className="sticky top-24 flex max-h-[calc(100vh-7rem)] flex-col gap-0.5 overflow-y-auto rounded-2xl border border-mist bg-cloud p-2 shadow-sm"
      >
        {sections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-xl px-2.5 py-2 text-xs font-medium leading-snug text-slate-600 transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
          >
            {title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
