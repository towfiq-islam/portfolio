"use client";
import Hero from "./_Components/Hero";
import Skills from "./_Components/Skills";
import Experiences from "./_Components/Experiences";
import Projects from "./_Components/Projects";
import Contact from "./_Components/Contact";
import ScrollToTop from "react-scroll-to-top";
import Services from "./_Components/Services";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import LightRays from "@/lib/LightRays";
import About from "./_Components/About";

const Page = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays !z-50"
        />
      </div>
      <Hero />
      <About />
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
        className="!right-5 xl:!right-10 !bottom-5 xl:!bottom-10 !bg-primary grid place-items-center !size-9.5 md:!size-10 xl:!size-12 !text-accent-white"
      />
    </>
  );
};

export default Page;
