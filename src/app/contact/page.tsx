import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TheMindRise.ai for training inquiries, consulting opportunities, or partnership collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />
    </>
  );
}
