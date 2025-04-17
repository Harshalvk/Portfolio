import React from "react";

const Footer = () => {
  return (
    <section className="font-mono">
      <p className="text-muted-foreground text-sm font-mono">
        Copyright &#169; 2021 - 2025 Harshal Khobragade
      </p>
      <div className="w-full flex justify-between mt-4">
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
      </div>
    </section>
  );
};

export default Footer;
