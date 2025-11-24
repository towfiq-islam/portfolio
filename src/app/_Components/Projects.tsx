"use client";
import { Github, ExternalLink, LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import projectImg from "@/Assets/p1-BZE1zHxX.png";
import projectImg2 from "@/Assets/p2-D5ICYa09.png";
import projectImg3 from "@/Assets/p3-7fCS-KJe.png";
import reactIcon from "@/Assets/react.png";
import tailwindIcon from "@/Assets/tailwind.png";
import typescriptIcon from "@/Assets/ts.png";
import javascriptIcon from "@/Assets/js.png";
import nextIcon from "@/Assets/next.png";

const projects = [
  {
    thumbnail: projectImg,
    title: "Digital Wallet",
    description:
      "High-performance Full Stack digital wallet built with React/TypeScript, featuring secure operations",
    technologies: [
      { name: "React.js", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Mongoose", icon: javascriptIcon },
      { name: "Express.js", icon: nextIcon },
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    thumbnail: projectImg2,
    title: "LivingNest",
    description:
      "A room rental platform featuring user authentication and separate dashboards for users, members, and admins.",
    technologies: [
      { name: "React.js", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Mongoose", icon: javascriptIcon },
      { name: "Express.js", icon: nextIcon },
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    thumbnail: projectImg3,
    title: "CarePoint",
    description:
      "CarePoint is a scalable platform for volunteer management, built with React, TailwindCSS, Firebase, Express, and MongoDB!",
    technologies: [
      { name: "React.js", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Mongoose", icon: javascriptIcon },
      { name: "Express.js", icon: nextIcon },
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground">
            MERN Stack and Next.js Portfolio Showcase
          </p>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-end mb-6 gap-3">
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 rounded flex items-center gap-2 border transition 
            ${
              view === "grid"
                ? "bg-blue-600 border-blue-500"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Grid
          </button>

          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 rounded flex items-center gap-2 border transition 
            ${
              view === "list"
                ? "bg-blue-600 border-blue-500"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <List className="w-4 h-4" />
            List
          </button>
        </div>

        {/* Projects Grid / List Wrapper */}
        <div
          className={
            view === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto"
              : "flex flex-col gap-6 max-w-5xl mx-auto"
          }
        >
          {projects.map(project => (
            <div
              key={project.title}
              className={`bg-gray-900 rounded-lg overflow-hidden group border border-gray-800 p-3.5 duration-500
                ${view === "grid" ? "hover:scale-[1.02]" : "flex gap-5"}`}
            >
              {/* Thumbnail */}
              <figure
                className={
                  view === "grid"
                    ? "h-[250px] flex items-center justify-center rounded-lg"
                    : "w-80 h-[250px] flex items-center justify-center rounded-lg"
                }
              >
                <Image
                  src={project?.thumbnail as any}
                  alt="project_img"
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>

              {/* Content */}
              <div
                className={
                  view === "list"
                    ? "flex-1 flex flex-col justify-between py-2"
                    : "pt-5"
                }
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <h5 className="mb-2">Tech stack:</h5>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map(tech => (
                    <div
                      key={tech.name}
                      className="text-[13px] px-3 py-1 bg-gray-800 rounded border border-gray-700 flex gap-1 items-center"
                    >
                      <Image src={tech.icon} alt="logo" className="w-4 h-4" />
                      {tech.name}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      view === "grid" && "flex-1"
                    } py-2 bg-gray-700 flex gap-1.5 items-center rounded text-center justify-center text-sm px-4`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      view === "grid" && "flex-1"
                    } py-2 bg-blue-500 flex gap-1.5 items-center rounded text-center justify-center text-sm px-4`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
