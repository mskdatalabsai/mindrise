import type { CourseCatalogCategory } from "@/types";

interface CourseCatalogNavProps {
  categories: CourseCatalogCategory[];
}

export function CourseCatalogMobileTabs({ categories }: CourseCatalogNavProps) {
  return (
    <nav
      aria-label="Course categories"
      className="mb-10 flex gap-2 overflow-x-auto pb-1 lg:hidden"
    >
      {categories.map(({ id, icon: Icon, title }) => (
        <a
          key={id}
          href={`#${id}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-mist bg-cloud px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
          {title}
        </a>
      ))}
    </nav>
  );
}

export function CourseCatalogSidebar({ categories }: CourseCatalogNavProps) {
  return (
    <aside className="hidden lg:mt-16 lg:block">
      <nav
        aria-label="Course categories"
        className="sticky top-24 flex flex-col gap-1 self-start rounded-2xl border border-mist bg-cloud p-2 shadow-sm"
      >
        {categories.map(({ id, icon: Icon, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            <span className="truncate">{title}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
