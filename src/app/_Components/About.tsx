"use client";
import CodeCard from "./CodeCard";

export default function About() {
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
            I specialize in modern web development, crafting dynamic,
            responsive, and visually engaging applications that deliver seamless
            user experiences across all devices.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left */}
          <div className="col-span-6">
            <CodeCard
            />
          </div>

          {/* Right */}
          <div className="col-span-6 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Hi, I'm <span className="text-blue-400">John Portfolio</span>
            </h1>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of
              experience building modern web applications. I specialize in
              creating seamless user experiences with cutting-edge technologies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in tech started with a curiosity about how things work,
              and has evolved into a career where I get to solve complex
              problems and bring ideas to life through code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or mentoring aspiring
              developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
