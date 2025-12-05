import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, CodeXml } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0d0d1f] pt-8 md:pt-12 pb-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-7 lg:gap-10">
          {/* Left */}
          <div>
            <Link href="/" className="flex gap-3 items-center pb-3 md:pb-5">
              <p className="w-10 md:w-11 h-9 md:h-10 rounded-xl bg-primary grid place-items-center text-white">
                <CodeXml />
              </p>
              <p className="text-2xl md:text-[26px] font-black text-white font-macondo">
                Tow<span className="text-primary">fiq</span>
              </p>
            </Link>

            <p className="text-gray-400 mt-2 max-w-sm text-sm md:text-base">
              Building modern, scalable, and high-performance web applications
              using Next.js, React, and TypeScript with clean UI and smooth user
              experiences.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-4 xl:gap-6 text-gray-700 dark:text-gray-300 text-sm md:text-[15px] xl:text-base">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-primary transition">
              Projects
            </Link>
            <Link href="#experiences" className="hover:text-primary transition">
              Experience
            </Link>
          </div>

          {/* Right */}
          <div className="flex gap-5">
            <a
              href="https://github.com/towfiqislambd"
              target="_blank"
              className="text-gray-600 hover:text-primary transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/towfiqislambd"
              target="_blank"
              className="text-gray-600 hover:text-primary transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:towfiqlslambd@gmail.com"
              className="text-gray-600 hover:text-primary transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-5 md:mt-8 pt-4 md:pt-6 flex justify-center items-center">
          <p className="text-gray-600 dark:text-gray-400 text-[13px] md:text-sm">
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="text-primary">Towfiq Islam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
