import { Code2, Database, Wrench } from "lucide-react";
import htmlIcon from "@/Assets/html.webp";
import cssIcon from "@/Assets/css.webp";
import bootstrapIcon from "@/Assets/bootstrap.webp";
import tailwindIcon from "@/Assets/tailwind.webp";
import reactIcon from "@/Assets/react.webp";
import nextIcon from "@/Assets/next.webp";
import reduxIcon from "@/Assets/redux.webp";
import jsIcon from "@/Assets/js.webp";
import Image from "next/image";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Next.js", icon: nextIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "React", icon: reactIcon },
  ];

  const backendSkills = [
    { name: "TypeScript", icon: htmlIcon },
    { name: "Node.js", icon: htmlIcon },
    { name: "Express.js", icon: htmlIcon },
    { name: "MongoDB", icon: htmlIcon },
    { name: "Mongoose", icon: htmlIcon },
  ];

  const tools = [
    { name: "Git", icon: htmlIcon },
    { name: "GitHub", icon: htmlIcon },
    { name: "Figma", icon: htmlIcon },
    { name: "VS Code", icon: htmlIcon },
    { name: "Postman", icon: htmlIcon },
    { name: "Firebase", icon: htmlIcon },
    { name: "NPM", icon: htmlIcon },
    { name: "Vercel", icon: htmlIcon },
  ];

  const Card = ({ icon: Icon, title, items }) => (
    <div className="bg-[#0d1117] border border-[#1f2937] rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#1f2937] p-3 rounded-lg">
          <Icon className="text-sky-500" size={28} />
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map(item => (
          <div
            key={item?.name}
            className="px-4 py-2 bg-[#161b22] text-gray-300 text-sm rounded-lg border border-[#1f2937] hover:bg-cyan-500 hover:text-black transition flex gap-2 items-center"
          >
            <Image src={item?.icon} alt="icon" className="size-5" />
            {item?.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="pt-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">My Skills</h2>
        <p className="text-gray-400 text-lg mb-12">
          I specialize in modern web development, creating dynamic and
          responsive applications.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={Code2}
            title="Frontend Development"
            items={frontendSkills}
          />
          <Card
            icon={Database}
            title="Backend Development"
            items={backendSkills}
          />
          <Card icon={Wrench} title="Tools & Technologies" items={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
