"use client";
import { useState, useEffect } from "react";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import profile from "@/Assets/hero_img.png";
import Image from "next/image";

const Hero = () => {
  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React JS Developer",
    "Next JS Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Web Developer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Hi, I'm Arman Mia
            </h1>
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-50">
                {titles[currentTitleIndex]}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              I am a motivated and adaptable individual with a passion for
              learning and delivering high-quality results. With a positive
              attitude and growth mindset, I am eager to take on challenges and
              make a meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90">Resume</button>

              <button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Hire Me
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8801736550601"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
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
