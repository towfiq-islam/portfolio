import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import projectImg from "@/Assets/p1-BZE1zHxX.png";
import projectImg2 from "@/Assets/p2-D5ICYa09.png";
import projectImg3 from "@/Assets/p3-7fCS-KJe.png";

const Projects = () => {
  const projects = [
    {
      thumbnail: projectImg,
      title: "Digital Wallet",
      category: "Full Stack Project",
      description:
        "High-performance Full Stack digital wallet built with React/TypeScript, featuring secure operations",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Express.js",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      thumbnail: projectImg2,
      title: "LivingNest",
      category: "Full Stack Project",
      description:
        "A room rental platform featuring user authentication and separate dashboards for users, members, and admins.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "Express.js",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      thumbnail: projectImg3,
      title: "CarePoint",
      category: "Fullstack Website",
      description:
        "CarePoint is a scalable platform for volunteer management, built with React, TailwindCSS, Firebase, Express, and MongoDB!",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "GameScope",
      category: "Fullstack Website",
      description:
        "A platform for reviewing and rating games, where users can share their experiences and ratings. Easy to use and community-driven",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Discount Pro",
      category: "React Website",
      description:
        "Discount PRO is a coupon app for discovering and using discounts at e-commerce stores in Bangladesh, with responsive design.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Paddy",
      category: "JavaScript Website",
      description:
        "Peddy is a user-friendly pet adoption web app built with HTML, Tailwind CSS, DaisyUI, and JavaScript, offering a modern interface for easy pet adoption.",
      technologies: ["Tailwind CSS", "DaisyUI", "JavaScript"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground">
            MERN Stack and Next.js Portfolio Showcase
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {projects.map(project => (
            <div
              key={project.title}
              className="bg-[#101622] rounded-lg overflow-hidden group border border-gray-800"
            >
              <figure className="h-[250px] flex items-center justify-center">
                <Image
                  src={project?.thumbnail}
                  alt="project_img"
                  className="w-full h-full"
                />
              </figure>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <div
                      key={tech}
                      className="text-sm px-3 py-1 bg-gray-800 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border flex gap-2 items-center rounded-lg text-center justify-center text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border flex gap-2 items-center rounded-lg text-center justify-center text-sm"
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
