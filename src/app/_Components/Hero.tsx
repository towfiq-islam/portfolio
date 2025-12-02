"use client";
import Image from "next/image";
import profile from "@/Assets/profile.png";
import Typewriter from "typewriter-effect";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";

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
      className="lg:min-h-screen flex items-center pt-20 lg:pt-0"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-4 xl:space-y-5.5 2xl:space-y-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white"
            >
              Hello, I'm Towfiq Islam
            </h1>

            <h2 className="!text-[12px] xl:!text-2xl md:!text-3xl 2xl:!text-4xl font-bold">
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 60,
                  wrapperClassName: "text-blue-500",
                  cursorClassName: "text-blue-500",
                }}
              />
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-muted-foreground 2xl:text-lg"
            >
              I am a motivated and detail-oriented Front-End Developer with 1+
              years of experience building modern, responsive, and user-friendly
              web applications using Next.js, React, and TypeScript. Adept at
              managing multiple projects, solving complex issues, and delivering
              clean and maintainable code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                data-aos="fade-up"
                data-aos-delay="100"
                href="https://drive.google.com/file/d/1MKQIIqIQ2ulY3L40lsHtjxHZ70PMf5zq/view?usp=sharing"
                target="_blank"
                className="relative overflow-hidden px-5 py-1.5 rounded-full border border-blue-500 text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-blue-500 before:-z-10 before:transition-all before:duration-600 hover:text-white hover:before:w-0"
              >
                Resume
              </a>

              <a
                data-aos="fade-up"
                data-aos-delay="300"
                href="#contact"
                className="relative overflow-hidden px-5 py-1.5 rounded-full border border-blue-500 text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-blue-500 before:-z-10 before:transition-all before:duration-600 hover:text-white hover:before:w-full"
              >
                Contact Me
              </a>
            </div>
            <div className="flex gap-3 xl:gap-4 pt-2 lg:pt-3">
              <button data-aos="zoom-in" data-aos-delay="300">
                <a
                  href="https://www.facebook.com/towfiqislambd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 xl:size-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-500 transition-all hover:rotate-[360deg]"
                >
                  <FaFacebookF className="text-lg" />
                </a>
              </button>

              <button data-aos="zoom-in" data-aos-delay="700">
                <a
                  href="https://www.linkedin.com/in/towfiqislambd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 xl:size-12 rounded-full border-2 border-primary grid place-items-center hover:bg-primary text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-500 transition-all hover:rotate-[360deg]"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </button>

              <button data-aos="zoom-in" data-aos-delay="1000">
                <a
                  href="https://github.com/towfiqislambd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 xl:size-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-500 transition-all hover:rotate-[360deg]"
                >
                  <PiGithubLogoBold className="text-lg" />
                </a>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
              className="relative size-[400px] xl:size-[420px] 2xl:size-[450px]"
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
                className="absolute inset-7 xl:inset-8 rounded-full bg-muted flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={profile}
                  alt="hero_img"
                  unoptimized
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
