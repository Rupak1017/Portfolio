import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
   <section id="home" className="relative w-full h-screen mx-auto scroll-mt-20">
      <div
        className={`absolute inset-0 top-[115px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rupak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           Front-End Engineer crafting intuitive interfaces  <br className='sm:block hidden' />
          and scalable software applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

<div className="absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center space-x-12 pointer-events-auto">
  {/* Rotate Left */}
  <motion.div
    onClick={() => rotateScene("left")}
    whileHover={{ scale: 1.05, opacity: 1 }}
    animate={{ y: [0, 6, 0], opacity: [1, 0.8, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="flex flex-col items-center cursor-pointer text-secondary opacity-80"
  >
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
    <span className="mt-1 text-xs font-medium">Pinch and Rotate Left</span>
  </motion.div>

  {/* Rotate Right */}
  <motion.div
    onClick={() => rotateScene("right")}
    whileHover={{ scale: 1.05, opacity: 1 }}
    animate={{ y: [0, 6, 0], opacity: [1, 0.8, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="flex flex-col items-center cursor-pointer text-secondary opacity-80"
  >
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
    <span className="mt-1 text-xs font-medium">Pinch and Rotate Right</span>
  </motion.div>
</div>


    </section>
  );
};

export default Hero;
