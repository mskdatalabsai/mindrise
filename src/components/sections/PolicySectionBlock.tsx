import type { PolicySection } from "@/types";

interface PolicySectionBlockProps {
  section: PolicySection;
}

export function PolicySectionBlock({ section }: PolicySectionBlockProps) {
  return (
    <div id={section.id} className="scroll-mt-28">
      <h2 className="font-display text-xl font-bold text-slate-900">{section.title}</h2>

      <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-slate-500">
        {section.blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return <p key={index}>{block.text}</p>;
          }
          if (block.type === "subheading") {
            return (
              <h3 key={index} className="mt-2 font-display text-base font-bold text-slate-900">
                {block.text}
              </h3>
            );
          }
          return (
            <ul key={index} className="flex flex-col gap-1.5 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-blue" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
