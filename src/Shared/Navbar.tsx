"use client";
import Link from "next/link";
import { CodeXml } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdOptions } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaBars } from "react-icons/fa6";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "skills", label: "Skills", icon: <FaSortAmountUpAlt /> },
    { id: "experiences", label: "Experiences", icon: <FaGraduationCap /> },
    { id: "projects", label: "Projects", icon: <MdDocumentScanner /> },
    { id: "services", label: "Services", icon: <IoMdOptions /> },
    { id: "contact", label: "Contact", icon: <IoMdMail /> },
  ];

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
        rootMargin: "-100px 0px -85% 0px",
        threshold: 0,
      }
    );

    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <nav data-aos="zoom-in" className="container sticky top-3 lg:top-5 z-50">
        <div className="backdrop-blur-3xl bg-black/10 border-2 border-blue-500 rounded-full px-3.5 md:px-4 py-2 md:py-3 xl:px-4 2xl:px-5 xl:py-3.5 2xl:py-4">
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
            <div className="hidden lg:flex items-center justify-end gap-2.5 xl:gap-4 2xl:gap-6 grow">
              {menuItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    scrollToTop();
                    setActiveSection(item.id);
                  }}
                  className={`font-semibold rounded-full px-3 2xl:px-4 py-1.5 flex gap-2 items-center text-sm 2xl:text-[15px] duration-300 ${
                    activeSection === item.id
                      ? "text-sky-500 bg-gray-900"
                      : "text-white hover:bg-gray-900 hover:text-sky-500"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}

              <a
                href="/resume_of_towfiq_islam.pdf"
                className="px-3.5 xl:px-4 py-1.5 xl:py-2 rounded-full bg-blue-500 text-sm font-medium text-white flex gap-1 items-center cursor-pointer"
                download
              >
                Resume <MdOutlineFileDownload className="text-lg" />
              </a>
            </div>

            {/* Hamburger btn */}
            <button
              onClick={() => setOpen(!isOpen)}
              className="size-8 rounded lg:hidden grid place-items-center bg-blue-500 text-lg md:text-xl text-white cursor-pointer"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-[999] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-500 transition-transform fixed top-0 z-[9999] left-0 bg-[#000014] px-5 py-7 shadow-lg overflow-y-auto border-r border-gray-800 max-h-screen min-h-screen w-[250px] lg:hidden`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex gap-3 justify-center items-center border-b border-blue-500 pb-5 mb-5"
        >
          <p className="w-11 h-10 rounded-xl bg-blue-500 grid place-items-center text-white">
            <CodeXml />
          </p>
          <p className="text-[26px] font-black text-white font-macondo">
            Tow<span className="text-blue-500">fiq</span>
          </p>
        </Link>

        {/* Menu */}
        <div className="flex flex-col gap-4">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                scrollToTop();
                setActiveSection(item.id);
                setOpen(false);
              }}
              className={`font-semibold rounded-full px-4 py-2 flex gap-2 items-center text-sm duration-300 ${
                activeSection === item.id
                  ? "text-sky-500 bg-gray-900"
                  : "text-white hover:bg-gray-900 hover:text-sky-500"
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}

          <a
            download
            onClick={() => setOpen(false)}
            href="/resume_of_towfiq_islam.pdf"
            className="px-3 py-2.5 rounded-full bg-blue-500 text-sm font-medium text-white flex gap-1 items-center justify-center cursor-pointer mt-5"
          >
            Resume <MdOutlineFileDownload className="text-lg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
