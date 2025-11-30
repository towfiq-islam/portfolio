"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./aos-custom.css";
import React, { useEffect } from "react";

function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // once: false, // Play animation every scroll (your choice)
      // mirror: false, // Avoid reverse animation on scroll up
    });

    AOS.refresh();
  }, []);

  return <>{children}</>;
}

export default AosProvider;
