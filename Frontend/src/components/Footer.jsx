import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
      <p
  className="caption text-n-4 lg:block text-center flex flex-col items-center justify-center"
>
  © {new Date().getFullYear()}. All rights reserved to
  <span
    className="block w-[12rem] xl:mr-8 text-3xl font-extrabold 
       bg-gradient-to-r from-orange-500 to-red-800 text-transparent 
       bg-clip-text hover:from-yellow-500 hover:to-pink-600 
       lg:bg-neutral-800/90 lg:py-2 lg:px-4 rounded-md 
       hover:scale-105 transition duration-300 transform"
  >
    Trader<span className="text-gray-200">Ports</span>
  </span>
</p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;