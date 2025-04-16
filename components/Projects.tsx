import React from "react";
import Title from "./Title";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { projects } from "@/components/constants";
import TechBadge from "./TechBadge";
import { Button } from "./ui/button";
import { ArrowRight, Link as LinkLogo } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <section>
      <Title text="Recent Projects." />
      <p className="md:text-xl dark:text-zinc-400">
        Explore some of my recent projects below. For more, visit my GitHub
        profile.
      </p>
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
    </section>
  );
};

function ProjectBlock({
  title,
  description,
  imageSrc,
  techBadge,
  link
}: {
  title: string;
  description: string;
  imageSrc: string;
  techBadge: {
    name: string;
    item: React.ReactNode;
  }[];
  link: string
}) {
  return (
    <>
      <div className="my-5">
        <h1 className="font-semibold tracking-tighter text-xl">{title}</h1>
        <p className="my-3 dark:text-zinc-400 md:text-lg">{description}</p>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={`${imageSrc}`}
            alt={`${imageSrc.split("/")[1]}`}
            fill
            className="w-full h-full border rounded-xl"
          />
        </AspectRatio>
      </div>
      <div className="flex items-center gap-1 flex-wrap">
        {techBadge.map((badge) => (
          <TechBadge name={badge.name} Logo={badge.item} />
        ))}
      </div>
      <Button variant={"link"} className="mt-3 group">
        <Link href={link} target="_blank" className="flex gap-1 items-center">
          <LinkLogo /> Visit Website
          <ArrowRight className="-translate-x-0.5 group-hover:translate-x-0.5 transition-all" />
        </Link>
      </Button>
    </>
  );
}

export default Projects;
