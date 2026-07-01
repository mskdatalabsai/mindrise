import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Courses } from "@/components/sections/Courses";
import { Consulting } from "@/components/sections/Consulting";
import { Products } from "@/components/sections/Products";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Courses />
      <Consulting />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}
