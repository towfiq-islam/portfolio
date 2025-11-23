const Skills = () => {
  const frontendSkills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "shadcn/ui",
    "Redux",
    "Zustand",
    "Tanstack Query",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Prisma",
    "JWT",
    "Stripe/Payment",
    "NextAuth.js",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Firebase",
    "Vercel",
    "Postman",
    "Figma",
    "Jira/Trello",
    "Cloud",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-xl text-muted-foreground">
            Technologies I Master as a Full-Stack Developer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
