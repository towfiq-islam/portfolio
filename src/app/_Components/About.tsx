import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-primary mb-2">A dedicated MERN and Next.js Developer</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Arman Mia is a Full Stack Developer experienced in React, Next.js, TypeScript,
            JavaScript, Node.js, Express, MongoDB, PostgreSQL, and Prisma.
          </h3>
          <p className="text-muted-foreground text-lg text-center">
            Hi there! I'm Arman Mia, a <span className="text-primary font-semibold">Full Stack Developer</span> specializing
            in building modern web applications with the <span className="text-primary font-semibold">MERN</span>,{" "}
            <span className="text-primary font-semibold">Next.js</span>, and{" "}
            <span className="text-primary font-semibold">PostgreSQL/Prisma</span> stacks. I focus on delivering{" "}
            <span className="text-primary font-semibold">seamless, high-performance</span> web solutions that are both
            visually appealing and highly functional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">Frontend</h4>
              <p className="text-muted-foreground">React, Next.js, Tailwind CSS</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">Backend</h4>
              <p className="text-muted-foreground">Node.js, Express</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">Full Stack</h4>
              <p className="text-muted-foreground">MongoDB, PostgreSQL</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
