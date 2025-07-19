// src/components/Loader2.jsx
import { motion } from "framer-motion";

const Loader2 = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#1e1e1e] z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="p-6 border border-[#3c3c3c] rounded-lg shadow-lg bg-[#252526] text-[#d4d4d4] font-mono text-lg w-[320px] text-center">
        <p>{">"} Welcome to my portfolio</p>
        <p className="mt-2 text-sm text-[#808080]">Loading environment...</p>
      </div>
    </motion.div>
  );
};

export default Loader2;
