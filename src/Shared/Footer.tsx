"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, CodeXml } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0d0d1f] pt-10 md:pt-12 pb-6 md:pb-7">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-7 lg:gap-10">
          {/* Left */}
          <div>
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex gap-3 items-center pb-3 md:pb-5">
                <p className="w-10 md:w-11 h-9 md:h-10 rounded-xl bg-primary grid place-items-center text-white">
                  <CodeXml />
                </p>
                <p className="text-2xl md:text-[26px] font-black text-white font-macondo">
                  Tow<span className="text-primary">fiq</span>
                </p>
              </Link>
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 mt-2 max-w-sm text-sm md:text-base"
            >
              Building modern, scalable, and high-performance web applications
              using Next.js, React, and TypeScript with clean UI and smooth user
              experiences.
            </motion.p>
          </div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-2.5 md:gap-4 xl:gap-6 text-gray-400 text-sm md:text-[15px] xl:text-base"
          >
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
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            <a
              href="https://github.com/towfiq-islam"
              target="_blank"
              className="text-gray-600 hover:text-primary transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/towfiq03"
              target="_blank"
              className="text-gray-600 hover:text-primary transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:tofiqislam03@gmail.com"
              className="text-gray-600 hover:text-primary transition"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 flex justify-center items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-[13px] md:text-sm"
          >
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="text-primary">Towfiq Islam</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
