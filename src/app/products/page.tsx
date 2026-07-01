import type { Metadata } from "next";
import { ProductsHero } from "@/components/sections/ProductsHero";
import { ProductsAbout } from "@/components/sections/ProductsAbout";
import { ProductsFlagship } from "@/components/sections/ProductsFlagship";
import { ProductsAudience } from "@/components/sections/ProductsAudience";
import { ProductsPipeline } from "@/components/sections/ProductsPipeline";
import { ProductsPhilosophy } from "@/components/sections/ProductsPhilosophy";
import { ProductsDifferentiators } from "@/components/sections/ProductsDifferentiators";
import { ProductsVision } from "@/components/sections/ProductsVision";
import { ProductsCta } from "@/components/sections/ProductsCta";

export const metadata: Metadata = {
  title: "AI Products",
  description:
    "Explore TheMindRise.AI's intelligent AI products, including Dhiti.ai — our AI-powered career intelligence platform — and our growing innovation pipeline.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsAbout />
      <ProductsFlagship />
      <ProductsAudience />
      <ProductsPipeline />
      <ProductsPhilosophy />
      <ProductsDifferentiators />
      <ProductsVision />
      <ProductsCta />
    </>
  );
}
