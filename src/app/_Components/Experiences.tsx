import { Calendar, MapPin } from "lucide-react";

const Experiences = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Experiences
        </h2>

        <div className="border-2 border-sky-500 bg-gray-900 rounded-xl p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-2xl font-bold text-primary mb-2 md:mb-0">
              Frontend Developer
            </h3>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>14/1/2025 — Present</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span>Mohakhali, Dhaka 1212, Bangladesh · On-site</span>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold mb-3">Responsibilities:</h4>

            <p className="text-muted-foreground">
              Served as a dedicated Frontend Developer, translating complex
              Figma designs into high-fidelity, responsive UIs using React.js
              and Tailwind CSS. Additionally integrated and tested APIs built
              with Express.js/Node.js and explored Next.js full-stack
              architecture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Key Technologies:</h4>

            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "Next.js",
                "Express.js",
                "Node.js",
              ].map(tech => (
                <div key={tech} className="border-2 text-sm border-blue-500 rounded-full px-4.5 py-1.5">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
