import React from "react";
import TechBadge from "../TechBadge";
import { myTechLogos } from "@/components/constants";
import Title from "../Title";

const MyTechnologies = () => {
  return (
    <section className="my-5">
      <Title text="Technologies I use." />
      <p className="text-muted-foreground font-mono leading-5">
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </p>
      <div className="flex flex-wrap gap-2 my-4">
        {myTechLogos.map((logo, index) => (
          <TechBadge key={index} Logo={logo.item} name={logo.name} />
        ))}
      </div>
      <p className="text-center font-mono text-muted-foreground">
        ...and many more!
      </p>
    </section>
  );
};

export default MyTechnologies;
