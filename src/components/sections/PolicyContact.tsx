import { Globe, Mail } from "lucide-react";
import { policyContact } from "@/lib/data";

export function PolicyContact() {
  return (
    <section className="bg-midnight py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-fog-100 sm:text-3xl">
          {policyContact.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-fog-400">{policyContact.paragraph}</p>

        <p className="mt-6 font-display text-lg font-bold text-fog-100">
          {policyContact.companyName}
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${policyContact.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-fog-100 transition-colors hover:text-brand-teal"
          >
            <Mail className="h-4 w-4 text-brand-teal" aria-hidden />
            {policyContact.email}
          </a>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-fog-100">
            <Globe className="h-4 w-4 text-brand-teal" aria-hidden />
            {policyContact.website}
          </span>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-pretty text-sm leading-relaxed text-fog-400">
          {policyContact.thankYou}
        </p>
      </div>
    </section>
  );
}
