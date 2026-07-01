import type { Metadata } from "next";
import { CourseCatalogHero } from "@/components/sections/CourseCatalogHero";
import {
  CourseCatalogMobileTabs,
  CourseCatalogSidebar,
} from "@/components/sections/CourseCatalogSidebar";
import { CourseCatalogSection } from "@/components/sections/CourseCatalogSection";
import { courseCatalog } from "@/lib/data";

export const metadata: Metadata = {
  title: "Course Catalog",
  description:
    "Browse TheMindRise Academy's Live Classes, Self-Paced courses, and AI Courses in one place.",
};

export default function CourseCatalogPage() {
  return (
    <>
      <CourseCatalogHero />
      <section className="bg-frost py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CourseCatalogMobileTabs categories={courseCatalog} />
          <div className="lg:grid lg:grid-cols-[1fr_168px] lg:gap-8">
            <div className="flex flex-col gap-16">
              {courseCatalog.map((category) => (
                <CourseCatalogSection key={category.id} category={category} />
              ))}
            </div>
            <CourseCatalogSidebar categories={courseCatalog} />
          </div>
        </div>
      </section>
    </>
  );
}
