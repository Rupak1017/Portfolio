import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"; // ✅ IMPORT HOC
import StarsCanvas from "./canvas/Stars"; // ✅ Star background



const About = () => {
  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center px-6 py-16 scroll-mt-20">
      {/* 🌌 Star Background */}
      <StarsCanvas />

      {/* 🧾 Main Content */}
      <div className="relative z-10 max-w-5xl w-full">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
className='mt-4 text-secondary text-[17px] leading-[30px] text-left sm:text-justify'

        >
          Software Engineer with 3 years of experience building scalable, consumer-facing platforms in transportation, healthcare, hospitality, and AI. Specialized in JavaScript and TypeScript with expertise in libraries like React.js, and frameworks like Next.js
           delivering high-performing, accessible, and responsive interfaces with Jest for testing. Optimized speed and scalability for applications serving 50K+ daily users while streamlining CI/CD pipelines using Azure, Docker, and GitHub Actions.
          <br /><br />
          Well-versed in JS runtime environments like Node.js and Express, with experience working with both SQL and NoSQL databases. Skilled in Python for object-oriented programming and backend integration, ensuring clean, performant, and scalable full-stack applications.
        </motion.p>

        {/* Uncomment this block if you want to show services */}
        {/* 
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        */}
      </div>
    </div>
  );
};

// ✅ This makes #about anchor work for scrolling
export default SectionWrapper(About, "about");
