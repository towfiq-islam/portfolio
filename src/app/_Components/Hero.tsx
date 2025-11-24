"use client";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import profile from "@/Assets/profile.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";

const Hero = () => {
  const titles = [
    "Front-End Developer",
    "MERN Stack Developer",
    "React JS Developer",
    "Next JS Developer",
    "JavaScript Developer",
    "Web Developer",
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Hello, I'm Towfiq Islam
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-50">
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

            <p className="text-muted-foreground text-lg">
              I am a motivated and adaptable individual with a passion for
              learning and delivering high-quality results. With a positive
              attitude and growth mindset, I am eager to take on challenges and
              make a meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 cursor-pointer px-5 py-1.5 rounded-full border border-blue-500 hover:bg-transparent hover:text-blue-500">
                Resume
              </button>

              <button className="bg-transparent cursor-pointer px-5 py-1.5 rounded-full border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white">
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 pt-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-300 transition-all"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-300 transition-all"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="https://wa.me/8801736550601"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-300 transition-all"
              >
                <PiGithubLogoBold className="text-lg" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              {/* Outer Glow Border */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_10px_5px_rgba(56,189,248,0.15)] backdrop-blur-xl" />

              <div className="absolute inset-0 rounded-full border-4 border-sky-700 animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
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
