"use client";
import Link from "next/link";
import { CodeXml } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { GiSkills } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "skills", label: "Skills", icon: <GiSkills /> },
    { id: "experiences", label: "Experiences", icon: <FaGraduationCap /> },
    { id: "projects", label: "Projects", icon: <MdDocumentScanner /> },
    { id: "services", label: "Services", icon: <FaUser /> },
    { id: "contact", label: "Contact", icon: <IoMdMail /> },
  ];

  // ---------------------------
  // 🔥 Intersection Observer
  // ---------------------------
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% visible
      }
    );

    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed mx-auto container top-0 left-0 right-0 z-50 w-[calc(100%-30px)] mt-5 backdrop-blur bg-[#000014] border-2 border-blue-500 rounded-full px-5 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center shrink-0">
          <p className="w-10 h-9 rounded-xl bg-blue-500 grid place-items-center text-white">
            <CodeXml />
          </p>
          <p className="text-xl md:text-2xl font-black text-white font-macondo">
            Tow<span className="text-blue-500">fiq</span>
          </p>
        </Link>

        {/* Menu */}
        <div className="flex items-center justify-end gap-6 grow">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`font-semibold rounded-full px-4 py-1.5 flex gap-2 items-center text-[15px] duration-300 ${
                activeSection === item.id
                  ? "text-sky-500 bg-gray-900"
                  : "text-white hover:bg-gray-900 hover:text-sky-500"
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}

          <button className="px-4 py-2 rounded-full bg-blue-500 text-sm font-medium text-white flex gap-1 items-center cursor-pointer">
            Resume <MdOutlineFileDownload className="text-lg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
