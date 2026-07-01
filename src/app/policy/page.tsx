import type { Metadata } from "next";
import { PolicyHero } from "@/components/sections/PolicyHero";
import { PolicySectionBlock } from "@/components/sections/PolicySectionBlock";
import { PolicyContact } from "@/components/sections/PolicyContact";
import { policySections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Policies",
  description:
    "TheMindRise.AI's business policies covering training, registration, payments, refunds, certification, intellectual property, privacy, and more.",
};

export default function PolicyPage() {
  return (
    <>
      <PolicyHero />
      <section className="bg-frost py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          {policySections.map((section) => (
            <PolicySectionBlock key={section.id} section={section} />
          ))}
        </div>
      </section>
      <PolicyContact />
    </>
  );
}
