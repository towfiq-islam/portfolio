"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const About = () => {
  const code = `const Profile = {
  name: 'Towfiq Islam',
  role: 'Front-End Developer',
  seniority: 'Mid-Level',
  location: 'Bangladesh',
  hardWorker: true,
  quickLearner: true,
  yearsOfExperience: 1,
  skills: [
    'React.js', 'Next.js', 'TypeScript',
    'JavaScript', 'TailwindCSS', 'NextAuth',
    'Redux', 'Bootstrap', 'Node.js', 'Express', 'JWT',
    'Pusher', 'MongoDB', 'Redux Toolkit', 'Shadcn UI',
    'Material UI', 'Firebase', 'Figma', 'GitHub',
    'Git', 'Vercel', 'Netlify'
  ],
};

export default Profile;`;

  return (
    <section id="about" className="pt-18 md:pt-28">
      <div className="container">
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-5 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-[32px] 2xl:text-4xl font-bold text-center"
          >
            About <span className="text-primary">Me</span>
            <div className="w-14 md:w-18 h-1 rounded bg-primary mx-auto mt-1.5 2xl:mt-2.5"></div>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-[15px] md:text-base 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] mx-auto"
          >
            Where clean code meets great design, bringing clarity, creativity to
            every build while crafting smooth, scalable and visually engaging
            web experiences that truly feel effortless to use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-7 xl:gap-12">
          {/* Left */}
          <div className="w-full rounded-xl border border-gray-500 code-card shadow-2xl shadow-black/50 overflow-hidden">
            {/* Top bar - macOS style */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-auto text-sm text-muted-foreground">
                developer.ts
              </span>
            </div>

            {/* Code Highlight */}
            <div className="overflow-x-auto custom_scrollbar">
              <SyntaxHighlighter
                language="typescript"
                style={atomDark}
                showLineNumbers
                customStyle={{
                  background: "transparent",
                  padding: "20px",
                  fontSize: "14px",
                  margin: 0,
                }}
                lineNumberStyle={{
                  color: "hsl(215 15% 40%)",
                  paddingRight: "1em",
                  minWidth: "2em",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>

            {/* Status bar */}
            <div className="flex justify-between px-4 py-2 border-t border-gray-500 text-muted-foreground text-xs bg-transparent">
              <span>UTF-8</span>
              <span>TypeScript</span>
              <span>Ln 12, Col 2</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-4 xl:space-y-6">
            <h3 className="text-2xl xl:text-3xl font-bold text-blue-400">
              Front-End Developer & Problem Solver
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Front-End Developer with over 1 years of
              experience building modern web applications. I specialize in
              creating seamless user experiences with cutting-edge technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              With a strong commitment to writing clean, maintainable, and
              scalable code, I collaborate effectively with UI/UX designers and
              backend teams to deliver visually appealing, functional, and
              future-ready digital solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies. I
              enjoy blending modern development practices with good design so
              every project not only performs well but also looks and feels
              great to use.
            </p>

            <div className="grid grid-cols-3 gap-5 xl:gap-7">
              <div className="bg-black/20 p-4 xl:p-5 text-center flex flex-col gap-1.5 justify-center items-center rounded-xl shadow shadow-primary">
                <p className="text-2xl xl:text-3xl font-black">20+</p>
                <h3 className="text-gray-300 text-sm xl:text-base text-nowrap">
                  Total projects
                </h3>
              </div>

              <div className="bg-black/20 p-4 xl:p-5 text-center flex flex-col gap-1.5 justify-center items-center rounded-xl shadow shadow-primary">
                <p className="text-2xl xl:text-3xl font-black">1+</p>
                <h3 className="text-gray-300 text-sm xl:text-base text-nowrap">
                  Years Experience
                </h3>
              </div>

              <div className="bg-black/20 p-4 xl:p-5 text-center flex flex-col gap-1.5 justify-center items-center rounded-xl shadow shadow-blue-500">
                <p className="text-2xl xl:text-3xl font-black">99%</p>
                <h3 className="text-gray-300 text-sm xl:text-base text-nowrap">
                  Satisfaction rate
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
