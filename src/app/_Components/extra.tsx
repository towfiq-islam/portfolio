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

const EditorialExperience = () => {
  const experiences: Experience[] = [
    {
      role: "Frontend Developer",
      company: "Bdcalling IT Ltd.",
      period: "Jan 2025 — Present",
      location: "On-site",
      description:
        "Developed responsive web applications and interactive experiences for diverse clients, focusing on performance optimization and accessibility.",
      achievements: [
        "Built 15+ client websites with perfect accessibility scores and SEO optimization",
        "Implemented advanced animations using Framer Motion and GSAP, increasing user engagement by 45%",
        "Collaborated with designers to create a design system that improved brand consistency",
        "Optimized bundle sizes and loading times, achieving sub-2s page loads across all projects",
      ],
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
        "REST APIs",
        "Git",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <h2 className="text-4xl font-extrabold text-white mb-4 text-center">
        My Experience
      </h2>
      <p className="text-gray-400 text-lg mb-12 text-center">
        I specialize in modern web development, creating dynamic and responsive
        applications.
      </p>
      <div className="container mx-auto px-6 md:px-12">
        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Grid Layout */}
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Left Column - Role & Company */}
                <div className="md:col-span-5 space-y-6">
                  <div className="relative">
                    <div className="pt-4">
                      <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-3 group-hover:translate-x-2 transition-transform duration-500">
                        {exp.role}
                      </h2>

                      <div className="flex items-center gap-2 text-accent text-lg font-medium mb-6">
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Meta information */}
                  <div className="space-y-3 text-muted-foreground">
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
                  <p className="text-foreground/80 leading-relaxed text-lg border-l-2 border-border pl-6">
                    {exp.description}
                  </p>
                </div>

                {/* Right Column - Achievements & Skills */}
                <div className="md:col-span-7 space-y-5">
                  {/* Achievements Card */}
                  <div className="border rounded-lg p-8 shadow-soft hover:shadow-elevated transition-all duration-500 group-hover:border-accent/30">
                    <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 bg-white rounded-full" />
                      Key Achievements
                    </h3>

                    <ul className="space-y-2">
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
                  </div>

                  {/* Skills */}

                  <div className="border p-5 rounded-xl">
                    <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 bg-white rounded-full" />
                      Technologies Used
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map(skill => (
                        <span
                          key={skill}
                          className="px-5 py-2.5 bg-secondary/80 hover:bg-accent hover:text-accent-foreground border border-border hover:border-accent rounded-sm text-sm font-medium transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
