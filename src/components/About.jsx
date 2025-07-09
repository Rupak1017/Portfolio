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
          Tech-savvy Software Engineer with 2+ years of hands-on experience building scalable web applications using JavaScript and TypeScript.
          Proficient in modern libraries like React and frameworks such as Next.js, and skilled in writing test cases using Jest.
          Strong focus on crafting intuitive, user-friendly interfaces that elevate the user experience.
          <br /><br />
          Well-versed in JS runtime environments like Node.js and Express, with experience working with both SQL and NoSQL databases
          to deliver clean, performant, and scalable full-stack applications. Experienced in deploying applications via Azure and configuring
          frontend CI/CD pipelines using GitHub Actions.
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
