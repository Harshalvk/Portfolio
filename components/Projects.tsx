import React from "react";
import Title from "./Title";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import TechBadge from "./TechBadge";
import { projects } from "@/lib/constants";

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
}: {
  title: string;
  description: string;
  imageSrc: string;
  techBadge: {
    logo: string;
    alt: string;
    name: string;
  }[];
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
      <div className="flex items-center gap-1">
        {techBadge.map((badge) => (
          <TechBadge
            key={badge.name}
            imageSrc={badge.logo}
            alt={badge.logo}
            name={badge.name}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
