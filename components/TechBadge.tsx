import Image from "next/image";
import React from "react";

const TechBadge = ({
  imageSrc,
  name,
  alt,
}: {
  imageSrc: string;
  name: string;
  alt: string;
}) => {
  return (
    <div className="h-8 border rounded-sm flex items-center gap-1 w-fit py-1 px-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-500/40 transition-all duration-200 cursor-default">
      <Image src={`${imageSrc}`} alt={`${alt}`} width={20} height={20} className="h-4 sm:h-6 rounded-sm" />
      <p className="text-sm font-medium tracking-wide cursor-default">{name}</p>
    </div>
  );
};

export default TechBadge;
