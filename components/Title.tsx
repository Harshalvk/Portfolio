import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
      {text}
    </h1>
  );
};

export default Title;
