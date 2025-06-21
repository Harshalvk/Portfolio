"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Title } from "./Title";
import Link from "next/link";
import { stagger, useAnimate, motion } from "motion/react";

const AboutMe = () => {
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

  const animation = {
    initial: { y: 8, opacity: 0, filter: "blur(10px)" },
  };

  return (
    <section ref={scope}>
      <Title
        id="hero"
        initial={"initial"}
        variants={animation}
        text="About Me."
      />
      <motion.p
        id="hero"
        initial={"initial"}
        variants={animation}
        className="flex flex-col gap-2 md:text-lg dark:text-muted-foreground font-mono leading-6"
      >
        <span>
          I&apos;ve been coding for the past 3 years, mainly focusing on web
          development and building scalable backend systems.
        </span>
        <span>
          In this time, I&apos;ve worked with various technologies to create
          fast, responsive applications, from backend architecture to frontend
          development and deployment.
        </span>
        <span>
          I enjoy solving real-world problems with code and constantly aim to
          improve while staying current with tech trends.
        </span>
      </motion.p>
      <motion.div
        id="hero"
        initial={"initial"}
        variants={animation}
        className="my-5 flex items-center gap-5 flex-wrap"
      >
        <Button
          variant={"secondary"}
          className="flex items-center justify-center group"
        >
          <Link
            href={"https://github.com/harshalvk/"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <SiGithub size={5} />
            View my GitHub
            <ArrowRight
              size={5}
              className="-translate-x-0 group-hover:translate-x-0.5 transition duration-200"
            />
          </Link>
        </Button>
        <Button variant={"outline"} className="group">
          Contact me
          <ArrowRight
            size={5}
            className="-translate-x-0 group-hover:translate-x-0.5 transition duration-200"
          />
        </Button>
      </motion.div>
    </section>
  );
};

export default AboutMe;
