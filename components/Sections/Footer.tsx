"use client";

import React, { useEffect } from "react";
import { ModeToggle } from "../ModeToggle";
import { stagger, useAnimate, motion } from "motion/react";

const Footer = () => {
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
    <section ref={scope} className="font-mono">
      <motion.div
        id="hero"
        initial="initial"
        variants={animation}
        className="w-full flex justify-between items-center"
      >
        <p className="text-muted-foreground text-sm font-mono">
          Copyright &#169; 2021 - 2025 Harshal Khobragade
        </p>
        <ModeToggle />
      </motion.div>
      <motion.div
        id="hero"
        initial="initial"
        variants={animation}
        className="w-full flex justify-between mt-4"
      >
        <div className="flex flex-col">
          <h2 className="text-[18px]">Important Links</h2>
          <a
            className="hover:underline underline-offset-4 text-muted-foreground"
            href="/"
          >
            Home
          </a>
          <a
            className="hover:underline underline-offset-4 text-muted-foreground"
            href="/work"
          >
            Work
          </a>
          <a
            className="hover:underline underline-offset-4 text-muted-foreground"
            href="/blogs"
          >
            Blog
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[18px]">Social</h2>
          <a
            className="hover:underline underline-offset-4 text-muted-foreground"
            href="https://github.com/Harshalvk/"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:underline underline-offset-4 text-muted-foreground"
            href="https://x.com/Harshalvk_"
            target="_blank"
          >
            Twitter / X
          </a>
          <a
            className="hover:underline underline-offset-4 text-muted-foreground"
            href="https://discord.com/users/harsshal."
            target="_blank"
          >
            Discord
          </a>
          <a
            className="hover:underline underline-offset-4 text-muted-foreground"
            href="https://www.linkedin.com/in/harshalvk/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[18px]">Other</h2>
          <a className="hover:underline underline-offset-4 text-muted-foreground">
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
