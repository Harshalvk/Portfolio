import React from "react";
import Title from "./Title";

const Projects = () => {
  return (
    <section>
      <Title text="Recent Projects." />
      <p className="md:text-xl dark:text-zinc-400">
        Explore some of my recent projects below. For more, visit my GitHub
        profile.
      </p>
    </section>
  );
};

export default Projects;
