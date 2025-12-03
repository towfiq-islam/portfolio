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
        component={
          <MdKeyboardDoubleArrowUp className="text-[22px] md:text-2xl xl:text-3xl" />
        }
        className="!right-5 xl:!right-10 !bottom-5 xl:!bottom-10 !bg-blue-500 grid place-items-center !size-9.5 md:!size-10 xl:!size-12 !text-accent-white"
      />
    </>
  );
};

export default Page;
