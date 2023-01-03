import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center gap-8 border-t">
      <a
        className="flex items-center justify-center gap-2 font-bold"
        href="https://github.com/terrnit"
        target="_blank"
        rel="noopener noreferrer"
      >
        @terrnit
      </a>

      <a
        className="flex items-center justify-center gap-2 font-bold"
        href="https://telegram/terrnit"
        target="_blank"
        rel="noopener noreferrer"
      >
        message
      </a>
    </footer>
  );
};

export default Footer;
