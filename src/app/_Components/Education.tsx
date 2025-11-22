import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      location: "City, Country",
      period: "2020 - 2024",
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Completed various projects using modern technologies.",
      achievements: ["GPA: 3.8/4.0", "Dean's List", "Best Project Award"],
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "College Name",
      location: "City, Country",
      period: "2018 - 2020",
      description: "Science background with focus on Mathematics and Computer Science.",
      achievements: ["GPA: 5.0/5.0", "Merit Scholarship"],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">My Academic Journey</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-colors"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-1">{edu.institution}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{edu.location}</p>

                    <p className="text-muted-foreground mb-4">{edu.description}</p>

                    <div>
                      <h5 className="text-sm font-semibold mb-2">Achievements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-secondary px-3 py-1"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
