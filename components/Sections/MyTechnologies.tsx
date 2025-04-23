"use client";

import React from "react";
import TechBadge from "../TechBadge";
import {
  myTechLogos,
  testAni,
  frameworksAndLibraries,
  backendAndDatabases,
  devopsAndCloud,
  programmingLanguagesAndOthers,
} from "@/components/constants";
import Title from "../Title";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import MotionBadge from "../MotionBadge";

const MyTechnologies = () => {
  return (
    <section className="my-5">
      <Title text="Technologies I use." />
      <p className="text-muted-foreground font-mono leading-5">
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </p>
      <MotionBadge badges={frameworksAndLibraries} />
      <MotionBadge badges={backendAndDatabases} reverse={true} />
      <MotionBadge badges={devopsAndCloud} />
      <MotionBadge badges={programmingLanguagesAndOthers} reverse={true} />
      <p className="text-center font-mono text-muted-foreground mt-1">
        ...and many more!
      </p>
    </section>
  );
};

export default MyTechnologies;
