"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "../magicui/particles";

const ParticleBackground = ({
  navbarHeight,
  children,
}: {
  navbarHeight: string;
  children: any;
}) => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    // make sure this div is 'relative' if using particles
    <div className={`relative h-[calc(100vh-56px)] p-3`}>
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={color}
        refresh
      />
      {children}
    </div>
  );
};

export { ParticleBackground };
