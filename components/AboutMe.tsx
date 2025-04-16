import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section>
      <Title text="About Me." />
      <p className="flex flex-col gap-2 md:text-lg dark:text-muted-foreground font-mono">
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
      </p>
      <div className="my-5 flex items-center gap-5">
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
      </div>
    </section>
  );
};

export default AboutMe;
