import React, { useEffect } from "react";
import { Title } from "./Title";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { projects } from "@/components/constants";
import TechBadge from "./TechBadge";
import { Button } from "./ui/button";
import { ArrowRight, Link as LinkLogo } from "lucide-react";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";
import { GitHub } from "./logos";
import { stagger, useAnimate, motion } from "motion/react";

const Projects = () => {
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
        initial="initial"
        variants={animation}
        text="Recent Projects."
      />
      <motion.p
        id="hero"
        initial="initial"
        variants={animation}
        className="dark:text-zinc-400 font-mono"
      >
        Explore some of my recent projects below. For more, visit my{" "}
        <LinkPreview
          url="https://github.com/Harshalvk/"
          className="hover:underline transition-all underline-offset-4"
        >
          GitHub Profile
        </LinkPreview>
        .
      </motion.p>
      <motion.div
        id="hero"
        initial="initial"
        variants={animation}
        className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 mt-2"
      >
        {projects.map((project) => (
          <ProjectBlock
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            techBadge={project.techBadge}
            link={project.link}
          />
        ))}
      </motion.div>
    </section>
  );
};

function ProjectBlock({
  title,
  description,
  imageSrc,
  techBadge,
  link,
}: {
  title: string;
  description: string;
  imageSrc: string;
  techBadge: {
    name: string;
    item: React.ReactNode;
  }[];
  link: string;
}) {
  return (
    <div className="border p-4 rounded-xl">
      <div>
        <h1 className="font-semibold tracking-tighter text-xl md:text-2xl lg:text-3xl">
          {title}
        </h1>
        <p className="my-3 font-mono dark:text-zinc-400 text-[14px]">
          {description}
        </p>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={`${imageSrc}`}
            alt={`${imageSrc.split("/")[1]}`}
            fill
            className="w-full h-full border rounded-md"
          />
        </AspectRatio>
      </div>
      <div className="flex items-center gap-1 flex-wrap mt-3">
        {techBadge.map((badge, index) => (
          <TechBadge
            key={index}
            name={badge.name}
            Logo={badge.item}
            className="text-xs "
          />
        ))}
      </div>
      <Button variant={"link"} className="mt-3 group">
        <Link href={link} target="_blank" className="flex gap-1 items-center">
          <LinkLogo /> Visit Website
          <ArrowRight className="-translate-x-0.5 group-hover:translate-x-0.5 transition-all" />
        </Link>
      </Button>
      <Button variant={"outline"} className="mt-3 group">
        <Link href={link} target="_blank" className="flex gap-1 items-center">
          <GitHub className="h-5 w-5" /> Code
          <ArrowRight className="-translate-x-0.5 group-hover:translate-x-0.5 transition-all" />
        </Link>
      </Button>
    </div>
  );
}

export default Projects;
