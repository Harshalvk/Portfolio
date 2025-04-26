"use client";

import React from "react";
import { motion } from "motion/react";
import { myTechLogosType } from "./constants";
import TechBadge from "./TechBadge";

const MotionBadge = ({
  badges,
  reverse,
}: {
  badges: myTechLogosType[];
  reverse?: boolean;
}) => {
  return (
    <div className="flex overflow-hidden mt-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-x-clip">
      <motion.div
        initial={{
          x: reverse ? "-50%" : 0,
        }}
        animate={{
          x: reverse ? 0 : "-50%",
        }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-none gap-2"
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <React.Fragment key={i}>
            {badges.map((badge, idx) => (
              <TechBadge Logo={badge.item} key={idx} name={badge.name} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionBadge;
