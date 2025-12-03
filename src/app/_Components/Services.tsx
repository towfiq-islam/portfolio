import { Code2, Palette, Database, MonitorCog } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="size-10 text-blue-500" />,
      title: "Web Development",
      desc: "Building responsive and performant web applications using modern frameworks and best practices.",
    },
    {
      icon: <Palette className="size-10 text-blue-500" />,
      title: "UI/UX Design",
      desc: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Database className="size-10 text-blue-500" />,
      title: "Full Stack Solutions",
      desc: "End-to-end development services from concept to deployment and maintenance.",
    },
    {
      icon: <MonitorCog className="size-10 text-blue-500" />,
      title: "Performance Optimization",
      desc: "Optimizing applications for speed, efficiency, and scalability to enhance user satisfaction.",
    },
  ];

  return (
    <section id="services" className="pt-14 md:pt-28">
      <div className="container">
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-5 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-[32px] 2xl:text-4xl font-bold text-center"
          >
            My <span className="text-blue-500">Services</span>
            <div className="w-20 md:w-24 h-1 rounded bg-blue-500 mx-auto mt-1 2xl:mt-2.5"></div>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-sm md:text-base 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] mx-auto"
          >
            Delivering professional web development services that combine clean
            code, modern UI design, and seamless functionality to bring ideas to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 2xl:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 300}
              className="bg-[#0d0d1f] p-5 md:p-5.5 2xl:p-8 rounded-2xl shadow hover:shadow-blue-500 transition-shadow duration-300 border border-transparent hover:border-blue-500"
            >
              <div className="mb-4 2xl:mb-6 size-14 flex items-center justify-center rounded-xl bg-[#0a0a18] border border-blue-500">
                {s.icon}
              </div>
              <h3 className="text-lg md:text-xl 2xl:text-2xl font-semibold mb-2 md:mb-3 truncate">
                {s.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
