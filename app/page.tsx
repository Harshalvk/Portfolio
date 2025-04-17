import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactMe from "@/components/Sections/ContactMe";
import Footer from "@/components/Sections/Footer";
import MyTechnologies from "@/components/Sections/MyTechnologies";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <section className="container mx-auto max-w-4xl p-10">
      <Hero />
      <AboutMe />
      <Projects />
      <MyTechnologies />
      <ContactMe />
      <Separator className="my-5"/>
      <Footer />
    </section>
  );
}
