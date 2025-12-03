import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Bdcalling IT Ltd.",
    period: "Jan 2025 — Present",
    location: "On-site",
    description:
      "Developed responsive web applications and interactive experiences for diverse clients, focusing on performance optimization and accessibility.",
    achievements: [
      "Built 15+ high-performance, responsive web applications, achieving perfect accessibility scores and SEO-optimized architecture.",
      "Improved cross-browser compatibility and mobile responsiveness across all major devices, resulting in zero UI-related production bugs.",
      "Developed a scalable design system with UI/UX teams, increasing brand consistency across multiple projects.",
      "Optimized codebases and asset pipelines, achieving sub-2-second load times and reducing bundle sizes by 35%.",
      "Led the frontend development of complex features, resolving major performance issues and improving overall system stability.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React.js",
      "JavaScript",
      "Framer Motion",
      "Git",
      "Pusher.js",
    ],
  },
];

const EditorialExperience = () => {
  return (
    <section id="experiences" className="pt-14 md:pt-28">
      <div className="container">
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-5 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-[32px] 2xl:text-4xl font-bold text-center"
          >
            My <span className="text-blue-500">Experience</span>
            <div className="w-20 md:w-24 h-1 rounded bg-blue-500 mx-auto mt-1 2xl:mt-2.5"></div>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-sm md:text-base 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] mx-auto"
          >
            I have hands-on experience developing real-world web applications,
            collaborating with teams, and delivering scalable solutions that
            enhance user experience.
          </p>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
                {/* Left Column - Role & Company */}
                <div data-aos="fade-up" className="lg:col-span-5 space-y-6">
                  <div className="relative">
                    <div className="md:pt-4">
                      <h2 className="text-2xl md:text-[33px] xl:text-4xl 2xl:text-5xl font-display font-bold leading-tight mb-2 md:mb-3 group-hover:translate-x-2 transition-transform duration-500">
                        {exp.role}
                      </h2>

                      <div className="flex items-center gap-2 text-accent md:text-lg font-medium mb-4 md:mb-6">
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Meta information */}
                  <div className="space-y-2 md:space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 mt-0.5 shrink-0" />
                      <span className="font-medium">{exp.period}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-lg border-l-2 border-border pl-3 md:pl-4 2xl:pl-6">
                    {exp.description}
                  </p>
                </div>

                {/* Right Column - Achievements & Skills */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="lg:col-span-7 space-y-10"
                >
                  {/* Achievements Card */}
                  <div className="border rounded-lg p-4 md:p-6 2xl:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 group-hover:border-accent/30">
                    <h3 className="text-lg md:text-xl font-display font-bold mb-4 md:mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 bg-white rounded-full" />
                      Key Achievements
                    </h3>

                    <ul className="text-sm md:text-base space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-4 group/item"
                          style={{
                            animationDelay: `${index * 100 + i * 50}ms`,
                          }}
                        >
                          <span className="text-accent font-bold text-lg mt-1 shrink-0">
                            •
                          </span>
                          <span className="text-foreground/70 leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-3 text-sm py-1 border rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialExperience;
