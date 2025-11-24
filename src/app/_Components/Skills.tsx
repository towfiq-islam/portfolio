import { Code2, Database, Wrench } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import htmlIcon from "@/Assets/icons/html.png";
import cssIcon from "@/Assets/icons/css.png";
import bootstrapIcon from "@/Assets/icons/bootstrap.png";
import tailwindIcon from "@/Assets/icons/tailwind.png";
import reactIcon from "@/Assets/icons/react.png";
import nextIcon from "@/Assets/icons/next.webp";
import reduxIcon from "@/Assets/icons/redux.png";
import jsIcon from "@/Assets/icons/js.png";
import tsIcon from "@/Assets/icons/ts.png";
import mongoIcon from "@/Assets/icons/mongodb.png";
import exIcon from "@/Assets/icons/ex.png";
import nodeIcon from "@/Assets/icons/node.png";
import jwtIcon from "@/Assets/icons/jwt.png";
import postmanIcon from "@/Assets/icons/Postman.webp";
import vsCodeIcon from "@/Assets/icons/vscode.png";
import figmaIcon from "@/Assets/icons/figma.png";
import vercelIcon from "@/Assets/icons/vercel.png";
import githubIcon from "@/Assets/icons/github.png";
import gitIcon from "@/Assets/icons/git.png";
import npmIcon from "@/Assets/icons/npm.png";
import firebaseIcon from "@/Assets/icons/firebase.png";
import dedicationIcon from "@/Assets/icons/dedication.png";
import communicationIcon from "@/Assets/icons/communication.png";
import teamIcon from "@/Assets/icons/team.png";
import timeIcon from "@/Assets/icons/time-management.png";
import thinkingIcon from "@/Assets/icons/thinking.png";
import problemIcon from "@/Assets/icons/problem.png";
import adaptIcon from "@/Assets/icons/adapt.png";

type SkillItem = {
  name: string;
  icon: StaticImageData;
};

type CardProps = {
  icon: React.ElementType;
  title: string;
  items: SkillItem[];
};

const Skills = () => {
  const frontendSkills: SkillItem[] = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Next.js", icon: nextIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "React", icon: reactIcon },
  ];

  const backendSkills: SkillItem[] = [
    { name: "TypeScript", icon: tsIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express.js", icon: exIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "JWT", icon: jwtIcon },
  ];

  const tools: SkillItem[] = [
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "VS Code", icon: vsCodeIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "NPM", icon: npmIcon },
    { name: "Vercel", icon: vercelIcon },
  ];

  const softSkills: SkillItem[] = [
    { name: "Adaptability", icon: adaptIcon },
    { name: "Team Work", icon: teamIcon },
    { name: "Dedicated Learner", icon: dedicationIcon },
    { name: "Communication", icon: communicationIcon },
    { name: "Problem Solving", icon: problemIcon },
    { name: "Time Management", icon: timeIcon },
    { name: "Critical Thinking", icon: thinkingIcon },
  ];

  const Card = ({ icon: Icon, title, items }: CardProps) => (
    <div className="bg-gray-900 border border-blue-500 rounded-xl p-6 shadow-lg">
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
            className="px-4 py-2 bg-[#161b22] text-gray-300 text-sm rounded-lg border border-[#1f2937] flex gap-2 items-center"
          >
            <Image src={item?.icon} alt="icon" className="size-7" />
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

        <div className="grid md:grid-cols-2 gap-8">
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
          <Card icon={Wrench} title="Soft Skills" items={softSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
