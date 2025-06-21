"use client";

import React, { useEffect } from "react";
import {
  frameworksAndLibraries,
  backendAndDatabases,
  devopsAndCloud,
  programmingLanguagesAndOthers,
} from "@/components/constants";
import { Title } from "../Title";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import MotionBadge from "../MotionBadge";

const MyTechnologies = () => {
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
    <section ref={scope} className="my-5">
      <Title
        id="hero"
        initial="initial"
        variants={animation}
        text="Technologies I use."
      />
      <motion.p
        id="hero"
        initial="initial"
        variants={animation}
        className="text-muted-foreground font-mono leading-5"
      >
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </motion.p>
      <motion.div id="hero" initial="initial" variants={animation}>
        <MotionBadge badges={frameworksAndLibraries} />
        <MotionBadge badges={backendAndDatabases} reverse={true} />
        <MotionBadge badges={devopsAndCloud} />
        <MotionBadge badges={programmingLanguagesAndOthers} reverse={true} />
        <p className="text-center font-mono text-muted-foreground mt-1">
          ...and many more!
        </p>
      </motion.div>
    </section>
  );
};

export default MyTechnologies;
