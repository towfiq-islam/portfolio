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
import antIcon from "@/Assets/icons/ant.png";
import framerIcon from "@/Assets/icons/framer.png";
import cnIcon from "@/Assets/icons/cn.png";
import uiIcon from "@/Assets/icons/ui.png";
import tanstackIcon from "@/Assets/icons/tanstack.png";
import sassIcon from "@/Assets/icons/sass.png";

import { FaBookOpenReader } from "react-icons/fa6";

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
    { name: "React.js", icon: reactIcon },
    { name: "Framer Motion", icon: framerIcon },
    { name: "SASS", icon: sassIcon },
    { name: "Shadcn UI", icon: cnIcon },
    { name: "Material UI", icon: uiIcon },
    { name: "Ant Design", icon: antIcon },
    { name: "Tanstack Query", icon: tanstackIcon },
  ];

  const backendSkills: SkillItem[] = [
    { name: "TypeScript", icon: tsIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express.js", icon: exIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "JWT", icon: jwtIcon },
    { name: "Firebase", icon: firebaseIcon },
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
    <div className="bg-[#0d0d1f] border border-blue-500 rounded-xl p-4 2xl:p-6 shadow-lg">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center gap-3 mb-5 md:mb-6"
      >
        <div className="bg-[#1f2937] p-3 rounded-lg">
          <Icon className="text-sky-500 size-[20px] md:size-[28px]" />
        </div>
        <h3 className="text-xl md:text-[22px] xl:text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5 md:gap-3">
        {items.map((item, index) => (
          <div
            key={item?.name}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="px-2.5 md:px-3 2xl:px-4 py-1.5 xl:py-2 bg-[#161b22] text-gray-300 text-sm rounded-lg border border-[#1f2937] flex gap-1.5 md:gap-2 items-center"
          >
            <Image
              src={item?.icon}
              alt="icon"
              className="size-5 md:size-6 xl:size-7"
            />
            {item?.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="pt-14 md:pt-28">
      <div className="container text-center">
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-5 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-[32px] 2xl:text-4xl font-bold text-center"
          >
            My <span className="text-blue-500">Skills</span>
            <div className="w-14 md:w-18 h-1 rounded bg-blue-500 mx-auto mt-1.5 2xl:mt-2.5"></div>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-sm md:text-base 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] mx-auto"
          >
            I specialize in modern web development, crafting dynamic,
            responsive, and visually engaging applications that deliver seamless
            user experiences across all devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 2xl:gap-8">
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
          <Card
            icon={FaBookOpenReader}
            title="Soft Skills"
            items={softSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
