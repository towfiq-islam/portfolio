"use client";
import { Github, ExternalLink, LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import projectImg from "@/Assets/p1.png";
import projectImg2 from "@/Assets/p2.png";
import projectImg3 from "@/Assets/p3.png";
import projectImg4 from "@/Assets/p4.png";
import projectImg5 from "@/Assets/p5.png";
import projectImg6 from "@/Assets/p6.png";
import reactIcon from "@/Assets/icons/react.png";
import reduxIcon from "@/Assets/icons/redux.png";
import tailwindIcon from "@/Assets/icons/tailwind.png";
import typescriptIcon from "@/Assets/icons/ts.png";
import javascriptIcon from "@/Assets/icons/js.png";
import nextIcon from "@/Assets/icons/next.webp";
import axiosIcon from "@/Assets/icons/adapt.png";
import framerIcon from "@/Assets/icons/framer.png";
import shadCnIcon from "@/Assets/icons/cn.png";
import tanstackIcon from "@/Assets/icons/tanstack.png";
import pusherIcon from "@/Assets/icons/cn.png";
import momentIcon from "@/Assets/icons/vercel.png";
const projects = [
  {
    id: 1,
    thumbnail: projectImg,
    title: "Healthy Recipes",
    description:
      "A fully dynamic, responsive recipe management platform with dual dashboards, advanced recipe management, CRUD operations, and SEO-optimized performance.",
    technologies: [
      { name: "Next.js", icon: nextIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Tanstack Query", icon: tanstackIcon },
      { name: "Shadcn UI", icon: shadCnIcon },
    ],
    github: "https://github.com/towfiqislambd/healthy-recipes",
    demo: "https://healthy-care-recipes.vercel.app",
  },
  {
    id: 2,
    thumbnail: projectImg2,
    title: "Job Minds",
    description:
      "AI-powered resume builder & career assistant platform. Enables users to create professional resumes, generate cover letters, optimize LinkedIn with AI-driven insights.",
    technologies: [
      { name: "Next.js", icon: nextIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Framer Motion", icon: framerIcon },
      { name: "Axios", icon: axiosIcon },
    ],
    github: "https://github.com/towfiqislambd/job-minds",
    demo: "https://job-minds.vercel.app",
  },
  {
    id: 3,
    thumbnail: projectImg3,
    title: "Sustainable Trades",
    description:
      "Multi-Vendor E-Commerce Platform enabling admins, vendors, and customers to manage shops, products, orders, and real-time interactions.",
    technologies: [
      { name: "Next.js", icon: nextIcon },
      { name: "TypeScript ", icon: typescriptIcon },
      { name: "Pusher.js", icon: pusherIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Moment.js", icon: momentIcon },
    ],
    github: "https://github.com/towfiqislambd/sustainable-trades",
    demo: "https://sustainable-trades.vercel.app",
  },
  {
    id: 4,
    thumbnail: projectImg4,
    title: "Blackjack Payments",
    description:
      "Developed a crypto website using React, Redux, and Tailwind CSS, featuring a modern UI and smooth, user-friendly experience.",
    technologies: [
      { name: "React.js", icon: reactIcon },
      { name: "JavaScript ", icon: javascriptIcon },
      { name: "Swiper Slider", icon: typescriptIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "React Hook Form", icon: nextIcon },
    ],
    github: "https://github.com/towfiqislambd/blackjack-payments",
    demo: "https://blackjack-payments.vercel.app",
  },
  {
    id: 5,
    thumbnail: projectImg5,
    title: "Park Clear",
    description:
      "ParkClear is a modern, responsive parking management website. It features beautiful animations, a user dashboard, reusable components and seamless user experience.",
    technologies: [
      { name: "React.js", icon: reactIcon },
      { name: "JavaScript ", icon: javascriptIcon },
      { name: "Aos Animation", icon: typescriptIcon },
      { name: "React Router", icon: javascriptIcon },
      { name: "Shadcn UI", icon: shadCnIcon },
    ],
    github: "https://github.com/towfiqislambd/park-clear",
    demo: "https://park-clear.netlify.app",
  },
  {
    id: 6,
    thumbnail: projectImg6,
    title: "More Realty",
    description:
      "Built a real-estate platform where users can view plots, buy homes, and list properties for sale with a smooth and intuitive experience.",
    technologies: [
      { name: "Next.js", icon: nextIcon },
      { name: "TypeScript ", icon: typescriptIcon },
      { name: "Axios", icon: axiosIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "AOS", icon: nextIcon },
    ],
    github: "https://github.com/towfiqislambd/more-reality",
    demo: "https://more-reality.vercel.app",
  },
];

const Projects = () => {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <section id="projects" className="py-20">
      <div
        className={`${
          view === "grid" ? "max-w-7xl" : "max-w-5xl"
        } mx-auto px-4`}
      >
        <div className="mb-12 space-y-5 text-center">
          <h2 className="text-4xl font-bold text-center">
            My <span className="text-blue-500">Projects</span>
            <div className="w-22 h-1 rounded bg-blue-500 mx-auto mt-2.5"></div>
          </h2>

          <p className="text-gray-300 text-lg max-w-[800px] mx-auto">
            Explore the projects I’ve built using modern technologies,
            showcasing my expertise in front-end development, UI implementation,
            and the ability to deliver user-focused solutions.
          </p>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-end mb-6 gap-3">
          <button
            onClick={() => setView("grid")}
            className={`cursor-pointer px-4 py-2 rounded flex items-center gap-2 border transition 
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
            className={`cursor-pointer px-4 py-2 rounded flex items-center gap-2 border transition 
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
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              : "flex flex-col gap-6 max-w-5xl mx-auto"
          }
        >
          {projects.map(project => (
            <div
              key={project.title}
              className={`bg-[#0d0d1f] rounded-lg overflow-hidden group border border-gray-800 p-3.5 duration-500
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
                  className="w-full h-full object-fit rounded-lg"
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
