"use client";

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactMe from "@/components/Sections/ContactMe";
import Footer from "@/components/Sections/Footer";
import MyTechnologies from "@/components/Sections/MyTechnologies";
import { Separator } from "@/components/ui/separator";
import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

export default function Home() {
  const [scope, animate] = useAnimate();

  const startAnimating = () => {
    animate(
      "#hero",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        delay: stagger(0.1, { startDelay: 0.2 }),
        duration: 0.3,
        ease: "easeInOut",
      }
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);

  return (
    <motion.section ref={scope} className="container mx-auto max-w-4xl p-10">
      <Hero />
      <AboutMe />
      <Projects />
      <MyTechnologies />
      <ContactMe />
      <Footer />
    </motion.section>
  );
}
