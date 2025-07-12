// src/components/Hero.jsx

import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import useIdle from "../hooks/useIdle"; // the requestIdleCallback hook

export default function Hero() {
  const idle = useIdle();

  // state to hold dynamically imported components
  const [MotionDiv, setMotionDiv] = useState(null);
  const [ComputersCanvas, setComputersCanvas] = useState(null);

  // Once idle, load framer-motion's motion.div and your canvas
  useEffect(() => {
    if (!idle) return;

    import("framer-motion")
      .then((m) => m.motion.div)
      .then((Comp) => setMotionDiv(() => Comp));

    import("./canvas/Computers")
      .then((m) => m.default)
      .then((Comp) => setComputersCanvas(() => Comp));
  }, [idle]);

  return (
    <section id="home" className="relative w-full h-screen mx-auto scroll-mt-20">
      {/* Hero text paints immediately */}
      <div
        className={`absolute inset-0 top-[115px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I’m <span className="text-[#915EFF]">Rupak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Front-End Engineer crafting intuitive interfaces
            <br className="sm:block hidden" />
            and scalable software applications.
          </p>
        </div>
      </div>

      {/* 3D Canvas: only mounted after idle */}
      {ComputersCanvas && <ComputersCanvas />}

      {/* Rotate buttons: only mounted after idle */}
      {MotionDiv && (
        <div className="absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center space-x-12 pointer-events-auto z-10">
          <MotionDiv
            onClick={() => window.rotateScene("left")}
            whileHover={{ scale: 1.05, opacity: 1 }}
            animate={{ y: [0, 6, 0], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer text-secondary opacity-80"
          >
            {/* Left Arrow SVG */}
            <svg
              className="w-10 h-6"
              viewBox="0 0 60 40"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <marker
                  id="arrowHeadLeft"
                  markerWidth="4"
                  markerHeight="4"
                  refX="4"
                  refY="2"
                  orient="auto"
                >
                  <path d="M0,0 L4,2 L0,4" fill="currentColor" />
                </marker>
              </defs>
              <path
                d="M48 28 C26 28, 26 12, 48 12"
                markerEnd="url(#arrowHeadLeft)"
              />
            </svg>
            <span className="mt-1 text-xs font-medium">
              Pinch and Rotate Left
            </span>
          </MotionDiv>

          <MotionDiv
            onClick={() => window.rotateScene("right")}
            whileHover={{ scale: 1.05, opacity: 1 }}
            animate={{ y: [0, 6, 0], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer text-secondary opacity-80"
          >
            {/* Right Arrow SVG */}
            <svg
              className="w-10 h-6"
              viewBox="0 0 60 40"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <marker
                  id="arrowHeadRight"
                  markerWidth="4"
                  markerHeight="4"
                  refX="0"
                  refY="2"
                  orient="auto"
                >
                  <path d="M4,0 L0,2 L4,4" fill="currentColor" />
                </marker>
              </defs>
              <path
                d="M12 28 C34 28, 34 12, 12 12"
                markerEnd="url(#arrowHeadRight)"
              />
            </svg>
            <span className="mt-1 text-xs font-medium">
              Pinch and Rotate Right
            </span>
          </MotionDiv>
        </div>
      )}
    </section>
  );
}
