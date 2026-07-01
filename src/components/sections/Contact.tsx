import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactChannels, sectionCopy, whyPartnerWithUs } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="bg-midnight py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title={sectionCopy.contact.title}
          subtitle={sectionCopy.contact.subtitle}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <ul className="flex flex-col gap-6">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-white/5">
                    <Icon className="h-5 w-5 text-brand-teal" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-fog-100">{label}</p>
                    <a
                      href={href}
                      className="text-sm text-fog-400 transition-colors hover:text-brand-teal"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-hairline bg-panel-solid/60 p-7">
              <h3 className="font-display text-base font-bold text-fog-100">
                Why Partner With Us?
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {whyPartnerWithUs.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fog-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
