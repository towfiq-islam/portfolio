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
      title: "Backend Development",
      desc: "Developing robust and scalable server-side solutions with secure API integrations.",
    },
    {
      icon: <MonitorCog className="size-10 text-blue-500" />,
      title: "Fix Website Bugs",
      desc: "quickly fix website bugs and resolve errors to ensure smooth performance from UI glitches to functionality issues.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#000014] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Services</span>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#0d0d1f] p-8 rounded-2xl shadow hover:shadow-blue-500 transition-shadow duration-300 border border-transparent hover:border-blue-500"
            >
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-[#0a0a18] border border-blue-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
