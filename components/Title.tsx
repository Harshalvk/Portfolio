"use client";

import React, { forwardRef, HTMLAttributes } from "react";
import { motion } from "motion/react";
interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const BaseTitle = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ text, id, ...props }, ref) => {
    return (
      <h1
        id={id}
        {...props}
        className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
      >
        {text}
      </h1>
    );
  }
);

BaseTitle.displayName = "Title";

export const Title = motion(BaseTitle);
