import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col items-center text-center mt-[-60px]">
      <h1 className={`${styles.sectionHeadText} mb-7`}>Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center" key={technology.name}>
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-center text-sm mt-2">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
