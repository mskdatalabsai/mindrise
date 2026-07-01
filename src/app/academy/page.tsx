import type { Metadata } from "next";
import { AcademyHero } from "@/components/sections/AcademyHero";
import { AcademyAbout } from "@/components/sections/AcademyAbout";
import { AcademyAudience } from "@/components/sections/AcademyAudience";
import { AcademyEcosystem } from "@/components/sections/AcademyEcosystem";
import { AcademyWhyUs } from "@/components/sections/AcademyWhyUs";
import { AcademyPrograms } from "@/components/sections/AcademyPrograms";
import { AcademyOutcomes } from "@/components/sections/AcademyOutcomes";
import { AcademyCta } from "@/components/sections/AcademyCta";

export const metadata: Metadata = {
  title: "AI Academy",
  description:
    "TheMindRise Academy is a practical AI learning platform offering structured learning paths, live bootcamps, self-paced courses, and hands-on projects in Generative AI and Agentic AI.",
};

export default function AcademyPage() {
  return (
    <>
      <AcademyHero />
      <AcademyAbout />
      <AcademyAudience />
      <AcademyEcosystem />
      <AcademyWhyUs />
      <AcademyPrograms />
      <AcademyOutcomes />
      <AcademyCta />
    </>
  );
}
