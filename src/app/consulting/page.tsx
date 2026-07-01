import type { Metadata } from "next";
import { ConsultingHero } from "@/components/sections/ConsultingHero";
import { ConsultingAbout } from "@/components/sections/ConsultingAbout";
import { ConsultingServices } from "@/components/sections/ConsultingServices";
import { ConsultingIndustries } from "@/components/sections/ConsultingIndustries";
import { ConsultingApproach } from "@/components/sections/ConsultingApproach";
import { ConsultingWhyUs } from "@/components/sections/ConsultingWhyUs";
import { ConsultingCta } from "@/components/sections/ConsultingCta";

export const metadata: Metadata = {
  title: "AI Consulting",
  description:
    "TheMindRise.AI helps organizations accelerate business transformation through AI strategy, Generative AI, Agentic AI, data science, product development, and corporate training.",
};

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />
      <ConsultingAbout />
      <ConsultingServices />
      <ConsultingIndustries />
      <ConsultingApproach />
      <ConsultingWhyUs />
      <ConsultingCta />
    </>
  );
}
