"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useAnimate, motion, stagger } from "motion/react";
import { cn } from "@/lib/utils";

const Hero = () => {
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
      <div className="w-full flex items-center justify-between">
        <div>
          <motion.h1
            id="hero"
            initial={"initial"}
            variants={animation}
            className="text-2xl md:text-3xl lg:text-4xl tracking-tight"
          >
            Hey, I&apos;m Harshal
          </motion.h1>
          <motion.h3
            id="hero"
            initial={"initial"}
            variants={animation}
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            )}
          >
            A Full Stack Developer
          </motion.h3>
        </div>
      </div>
      <motion.p
        id="hero"
        initial={"initial"}
        variants={animation}
        className="mt-7 text-zinc-600 font-mono leading-6 dark:text-zinc-400 font-medium"
      >
        I create quick, scalable, and user friendly web applications with a mix
        of tidy code and well-considered design.
      </motion.p>
      <motion.div
        id="hero"
        initial={"initial"}
        variants={animation}
        className="my-5 flex items-center gap-5"
      >
        <Button
          variant={"secondary"}
          className="flex items-center justify-center group"
        >
          Contact Me
          <ArrowRight
            size={5}
            className="-translate-x-0 group-hover:translate-x-0.5 transition duration-200"
          />
        </Button>
        <Button variant={"outline"}>Resume</Button>
      </motion.div>
    </section>
  );
};

export default Hero;
