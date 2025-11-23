"use client";
import Container from "@/Components/Common/Container";
import Hero from "./_Components/Hero";
import Skills from "./_Components/Skills";
import Education from "./_Components/Education";
import Experiences from "./_Components/Experiences";
import Projects from "./_Components/Projects";
import Contact from "./_Components/Contact";
import ScrollToTop from "react-scroll-to-top";
import { UpArrowSvg } from "@/Components/Svg/SvgContainer";
import Services from "./_Components/Services";

const Page = () => {
  return (
    <>
      <Hero />
      <Skills />
      {/* <Education /> */}
      <Experiences />
      <Projects />
      <Services />
      <Contact />

      <ScrollToTop
        smooth={true}
        top={50}
        component={<UpArrowSvg />}
        className="!bg-gray-300 grid place-items-center !size-12 !text-accent-white"
      />
    </>
  );
};

export default Page;
