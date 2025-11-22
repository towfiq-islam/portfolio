import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experiences</h2>
          <p className="text-xl text-muted-foreground">Where I've worked</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary mb-2 md:mb-0">
                  Frontend Developer
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>7/1/2025 — 9/30/2025</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span>Mirpur DOHS, Dhaka 1216, Bangladesh · Remote</span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3">Responsibilities:</h4>
                <p className="text-muted-foreground">
                  Served as a dedicated Frontend Developer, translating complex Figma designs
                  into high-fidelity, responsive UIs using React.js and Tailwind CSS.
                  Additionally integrated and tested APIs built with Express.js/Node.js and
                  explored Next.js full-stack architecture.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "JavaScript", "Tailwind CSS", "Next.js", "Express.js", "Node.js"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
