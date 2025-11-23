import { Calendar, MapPin } from "lucide-react";

const Experiences = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-4">
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

            <ul className="list-disc list-outside space-y-3">
              <li>
                Collaborate closely with UI/UX designers and backend developers
                to translate design specifications into high-quality,
                interactive web interfaces using modern frameworks such as
                Next.js, React, and TypeScript.
              </li>
              <li>
                Maintain responsive, SEO-optimized applications with a strong
                emphasis on performance, scalability, mobile responsiveness, and
                cross-browser compatibility.
              </li>
              <li>
                Manage multiple concurrent projects, delivering clean,
                maintainable, and scalable code within tight deadlines and
                high-pressure environments.
              </li>
              <li>
                Identify and resolve complex frontend issues to enhance
                stability and performance, while adhering to best practices in
                accessibility, optimization, and code quality.
              </li>
              <li>
                Develop developer-friendly, sustainable codebases to support
                long-term scalability, team collaboration, and efficient
                onboarding of new developers.
              </li>
            </ul>
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
                <div
                  key={tech}
                  className="border-2 text-sm border-blue-500 rounded-full px-4.5 py-1.5"
                >
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
