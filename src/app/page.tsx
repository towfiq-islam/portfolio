"use client";
import Hero from "./_Components/Hero";
import Skills from "./_Components/Skills";
import Experiences from "./_Components/Experiences";
import Projects from "./_Components/Projects";
import Contact from "./_Components/Contact";
import ScrollToTop from "react-scroll-to-top";
import Services from "./_Components/Services";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Services />
      <Contact />
      <ScrollToTop
        smooth={true}
        top={50}
        component={<MdKeyboardDoubleArrowUp className="text-3xl" />}
        className="!bg-blue-500 grid place-items-center !size-12 !text-accent-white"
      />
    </>
  );
};

export default Page;
