import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Digital Wallet",
      category: "Full Stack Project",
      description:
        "High-performance Full Stack digital wallet built with React/TypeScript, featuring secure operations and a sleek UI.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Shadcn UI",
        "MongoDB",
        "Mongoose",
        "Express.js",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "LivingNest",
      category: "Full Stack Project",
      description:
        "A room rental platform featuring user authentication and separate dashboards for users, members, and admins.",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "MongoDB", "Express.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground">
            MERN Stack and Next.js Portfolio Showcase
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary transition-all overflow-hidden group"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-4xl font-bold text-muted-foreground">
                  {project.title.substring(0, 2)}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-secondary">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-border text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="border-primary text-primary">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
