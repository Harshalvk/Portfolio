import Image from "next/image";
import React from "react";

const TechBadge = ({
  name,
  Logo,
}: {
  name?: string;
  Logo?: React.ReactNode;
}) => {
  return (
    <div className="h-8 border rounded-sm flex items-center gap-1 w-fit py-1 px-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-500/40 transition-all duration-200 cursor-default">
      {Logo && <div className="h-5 w-5">{Logo}</div>}
      <p className="text-sm font-medium tracking-wide cursor-default">{name}</p>
    </div>
  );
};

export default TechBadge;
