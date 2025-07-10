// src/pages/Splash.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGLTF, useProgress } from "@react-three/drei";
import { ComputersCanvas } from "../components/canvas";



import { Typewriter } from "react-simple-typewriter";

const Splash = () => {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  const { progress } = useProgress();

  useEffect(() => {
    // Preload the GLTF model
    useGLTF.preload("./desktop_pc/scene.gltf");

    // Wait a bit after 100% before showing buttons
    if (progress === 100) {
      const timeout = setTimeout(() => setShowButtons(true), 800); // delay for effect
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const handleNavigate = () => {
    localStorage.setItem("visitedPortfolio", "true");
    navigate("/portfolio");
  };

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono flex flex-col justify-center items-start p-8">
      <div className="text-xl">
        <span className="text-green-400">
          $ <Typewriter
            words={["welcome to my portfolio", "cd visitor"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </span>
      </div>

      {/* Optional progress display */}
      <div className="mt-4 text-sm text-green-500">
        {progress < 100 ? `Loading... ${Math.floor(progress)}%` : ""}
      </div>

      {/* Buttons after preload complete */}
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex space-x-4"
        >
          <button
            onClick={handleNavigate}
            className="bg-transparent border border-green-500 hover:bg-green-600 text-green-300 hover:text-white px-4 py-2 rounded transition"
          >
            visitor
          </button>
          <button
            onClick={handleNavigate}
            className="bg-transparent border border-green-500 hover:bg-green-600 text-green-300 hover:text-white px-4 py-2 rounded transition"
          >
            recruiter
          </button>
        </motion.div>
      )}

      {/* 🔥 Hidden canvas pre-rendering to avoid delays on main page */}
      <div className="absolute top-[-9999px] left-[-9999px] w-[1px] h-[1px] overflow-hidden opacity-0 pointer-events-none">
        <ComputersCanvas />
      </div>
    </div>
  );
};

export default Splash;
