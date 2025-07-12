import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png"],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // bundle three.js & friends separately
            if (
              id.includes("@react-three/fiber") ||
              id.includes("@react-three/drei") ||
              id.includes("three")
            ) {
              return "three-vendor";
            }
            // bundle framer-motion separately
            if (id.includes("framer-motion")) {
              return "framer-motion";
            }
            // everything else in vendor
            return "vendor";
          }
        },
      },
    },
  },
});
