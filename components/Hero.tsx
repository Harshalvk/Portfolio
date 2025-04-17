"use client";

import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section>
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
            Hey, I&apos;m Harshal
          </h1>
          <h3
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            )}
          >
            A Full Stack Developer
          </h3>
        </div>
        {/* <ModeToggle /> */}
      </div>
      <p className="mt-7 text-zinc-600 font-mono leading-6 dark:text-zinc-400 font-medium">
        I create quick, scalable, and user-friendly web applications with a mix
        of tidy code and well-considered design.
      </p>
      <div className="my-5 flex items-center gap-5">
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
      </div>
    </section>
  );
};

export default Hero;
