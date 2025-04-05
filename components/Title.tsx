import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="md:text-xl font-semibold tracking-tight my-3">{text}</h1>
  );
};

export default Title;
