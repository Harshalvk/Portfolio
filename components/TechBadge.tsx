import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TechBadge = ({
  name,
  Logo,
  className,
}: {
  name?: string;
  Logo?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-8 border rounded-sm flex items-center gap-1 w-fit py-1 px-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-500/40 transition-all duration-200 cursor-default",
        className
      )}
    >
      {Logo && <div className="h-5 w-5">{Logo}</div>}
      <p
        className={cn(
          "text-sm font-medium tracking-wide cursor-default",
          className
        )}
      >
        {name}
      </p>
    </div>
  );
};

export default TechBadge;
