"use client";
import React, { useState } from "react";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdDocumentScanner } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <FaHome />,
    },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <GiSkills /> },
    { id: "experiences", label: "Experiences", icon: <FaGraduationCap /> },
    { id: "projects", label: "Projects", icon: <MdDocumentScanner /> },
    { id: "contact", label: "Contact", icon: <IoMdMail /> },
  ];

  return (
    <nav className="mx-10 fixed top-3 left-0 right-0 z-50 backdrop-blur bg-[#000014] border-2 border-blue-500 rounded-full px-5 py-4">
      {/* container mx-auto */}
      <div className="">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <Link href="/" className="flex gap-2 items-center shrink-0">
            <p className="w-10 h-9 rounded-xl bg-blue-500 grid place-items-center text-white">
              <CodeXml />
            </p>

            <p className="text-xl md:text-2xl font-black text-white font-macondo">
              Tow<span className="text-blue-500">fiq</span>
            </p>
          </Link>

          {/* Right - Links */}
          <div className="flex items-center justify-end gap-6 grow">
            {menuItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item?.label)}
                className={`font-semibold rounded-full px-4 py-1.5 duration-300 transition-all flex gap-2 items-center text-[15px] ${
                  activeSection === item?.label
                    ? "text-sky-500 bg-gray-900"
                    : "text-white"
                }`}
              >
                {item?.icon}
                {item.label}
              </a>
            ))}
            <button className="px-4 py-2 rounded-full bg-blue-500 text-sm font-medium text-white flex gap-1 items-center cursor-pointer">
              Resume <MdOutlineFileDownload className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
