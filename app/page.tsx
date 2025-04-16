import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import MyTechnologies from "@/components/Sections/MyTechnologies";

export default function Home() {
  return (
    <section className="container mx-auto max-w-4xl p-10">
      <Hero />
      <AboutMe />
      <Projects />
      <MyTechnologies />
    </section>
  );
}
