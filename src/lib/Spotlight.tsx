"use client";
import React, { useEffect, useState } from "react";

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        width: "150px",
        height: "150px",
        background: "rgba(0, 163, 255, 0.60)",
        filter: "blur(100px)",
        borderRadius: "50%",
        top: position.y - 75,
        left: position.x - 75,
      }}
    />
  );
};

export default Spotlight;
