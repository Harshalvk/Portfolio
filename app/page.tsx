import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section className="container mx-auto max-w-4xl p-10">
      <Hero />
      <AboutMe />
      <Projects />
    </section>
  );
}
