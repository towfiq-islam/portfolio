"use client";
import Image from "next/image";
import profile from "@/Assets/profile.png";
import Typewriter from "typewriter-effect";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import { motion } from "framer-motion";

const titles = [
  "Front-End Developer",
  "MERN Stack Developer",
  "React JS Developer",
  "Next JS Developer",
  "JavaScript Developer",
  "Web Developer",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:min-h-screen flex items-center pt-12 md:pt-20 lg:pt-0"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left */}
          <div className="space-y-2.5 md:space-y-4 xl:space-y-5.5 2xl:space-y-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white"
            >
              Hello, I'm Towfiq Islam
            </h1>

            <h2 className="!text-xl xl:!text-2xl md:!text-3xl 2xl:!text-4xl font-bold">
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 60,
                  wrapperClassName: "text-primary",
                  cursorClassName: "text-primary",
                }}
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground text-[15px] md:text-base 2xl:text-lg"
            >
              I am a motivated and detail-oriented Front-End Developer with 1+
              years of experience building modern, responsive, and user-friendly
              web applications using Next.js, React, and TypeScript. Adept at
              managing multiple projects, solving complex issues, and delivering
              clean and maintainable code.
            </motion.p>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-0">
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                href="https://drive.google.com/file/d/1MKQIIqIQ2ulY3L40lsHtjxHZ70PMf5zq/view?usp=sharing"
                target="_blank"
                className="relative overflow-hidden px-4 md:px-5 py-1 md:py-1.5 rounded-full border border-primary text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-primary before:-z-10 before:transition-all before:duration-600 hover:text-white hover:before:w-0"
              >
                Resume
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                href="#contact"
                className="relative overflow-hidden px-4 md:px-5 py-1 md:py-1.5 rounded-full border border-primary text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-primary before:-z-10 before:transition-all before:duration-600 hover:text-white hover:before:w-full"
              >
                Contact Me
              </motion.a>
            </div>
            <div className="flex gap-2.5 md:gap-3 xl:gap-4 pt-2 lg:pt-3">
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <a
                  href="https://www.facebook.com/towfiqislambd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 md:size-10 xl:size-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-primary  hover:text-white hover:border-primary duration-500 transition-all hover:rotate-[360deg]"
                >
                  <FaFacebookF className="md:text-lg" />
                </a>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <a
                  href="https://www.linkedin.com/in/towfiqislambd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 md:size-10 xl:size-12 rounded-full border-2 border-primary grid place-items-center hover:bg-primary text-primary hover:text-white hover:border-primary duration-500 transition-all hover:rotate-[360deg]"
                >
                  <FaLinkedinIn className="md:text-lg" />
                </a>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                <a
                  href="https://github.com/towfiqislambd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 md:size-10 xl:size-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-primary hover:text-white hover:border-primary duration-500 transition-all hover:rotate-[360deg]"
                >
                  <PiGithubLogoBold className="md:text-lg" />
                </a>
              </motion.button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center relative">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
              className="relative size-[300px] sm:size-[400px] xl:size-[420px] 2xl:size-[450px]"
            >
              {/* Outer Glow */}
              <div
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="200"
                className="absolute inset-0 rounded-full shadow-[0_0_10px_5px_rgba(56,189,248,0.15)] backdrop-blur-xl"
              />

              {/* Outer Border */}
              <div
                data-aos="flip-up"
                data-aos-duration="1400"
                data-aos-delay="300"
                data-aos-easing="ease-out-back"
                className="absolute inset-0 rounded-full border-4 border-sky-700 animate-pulse"
              />

              {/* Profile Image */}
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="400"
                className="absolute inset-6 md:inset-7 xl:inset-8 rounded-full bg-muted flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={profile}
                  alt="hero_img"
                  unoptimized
                  width={500}
                  height={300}
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="bg-blue-700/15 shadow-sm shadow-secondary rounded-full px-2 md:px-3 py-1 absolute top-0 md:top-2 -left-5 md:-left-10 text-sm md:text-base"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✨ Clean Code
              </motion.div>

              <motion.div
                className="bg-blue-700/15 shadow-sm shadow-secondary rounded-full px-2 md:px-3 py-1 absolute -bottom-8 md:bottom-0 -right-3 md:-right-10  text-sm md:text-base"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚀 Continuously Learning
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
