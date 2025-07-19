// src/components/Hero.jsx

import React, { useState, useEffect, lazy, Suspense } from "react";
import { styles } from "../styles";
import Loader2 from "./Loader2";
import { AnimatePresence, motion } from "framer-motion";

// Lazy-loaded components
const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);
const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000); // 4s loader
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen mx-auto scroll-mt-20 overflow-hidden"
    >
      {/* 3D Canvas (Always Interactive) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Suspense fallback={null}>
          <ComputersCanvas />
        </Suspense>
      </div>

      {/* Loader Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-20 bg-[#1e1e1e] flex items-center justify-center pointer-events-auto"
          >
            <Loader2 />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Text */}
      {!loading && (
        <motion.div
          key="heroText"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`absolute inset-0 top-[115px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
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
              Software Engineer crafting intuitive interfaces
              <br className="sm:block hidden" />
              and scalable web applications.
            </p>
          </div>
        </motion.div>
      )}

      {/* Rotate Buttons */}
      {!loading && (
        <div className="absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center space-x-12 z-10 pointer-events-none">
          <Suspense fallback={null}>
            <MotionDiv
              onClick={() => window.rotateScene?.("left")}
              whileHover={{ scale: 1.05, opacity: 1 }}
              animate={{ y: [0, 6, 0], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center cursor-pointer text-secondary opacity-80 pointer-events-auto"
            >
              <svg className="w-10 h-6" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <defs>
                  <marker id="arrowHeadLeft" markerWidth="4" markerHeight="4" refX="4" refY="2" orient="auto">
                    <path d="M0,0 L4,2 L0,4" fill="currentColor" />
                  </marker>
                </defs>
                <path d="M48 28 C26 28, 26 12, 48 12" markerEnd="url(#arrowHeadLeft)" />
              </svg>
              <span className="mt-1 text-xs font-medium">Pinch image to Rotate Left</span>
            </MotionDiv>
          </Suspense>

          <Suspense fallback={null}>
            <MotionDiv
              onClick={() => window.rotateScene?.("right")}
              whileHover={{ scale: 1.05, opacity: 1 }}
              animate={{ y: [0, 6, 0], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center cursor-pointer text-secondary opacity-80 pointer-events-auto"
            >
              <svg className="w-10 h-6" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <defs>
                  <marker id="arrowHeadRight" markerWidth="4" markerHeight="4" refX="0" refY="2" orient="auto">
                    <path d="M4,0 L0,2 L4,4" fill="currentColor" />
                  </marker>
                </defs>
                <path d="M12 28 C34 28, 34 12, 12 12" markerEnd="url(#arrowHeadRight)" />
              </svg>
              <span className="mt-1 text-xs font-medium">Pinch image to Rotate Right</span>
            </MotionDiv>
          </Suspense>
        </div>
      )}
    </section>
  );
};

export default Hero;
