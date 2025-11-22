import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = menuItems.map((item) => ({
  //       id: item.id,
  //       element: document.getElementById(item.id),
  //     }));

  //     const scrollPosition = window.scrollY + 100;

  //     for (let i = sections.length - 1; i >= 0; i--) {
  //       const section = sections[i];
  //       if (section.element && section.element.offsetTop <= scrollPosition) {
  //         setActiveSection(section.id);
  //         break;
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className="mx-5 fixed top-3 left-0 right-0 z-50 backdrop-blur bg-[#000014] border border-blue-500 rounded-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold text-white">
            Towfiq<span className="text-white">.</span>
          </div>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm xl:text-base transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-white" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
