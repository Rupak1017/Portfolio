// src/hooks/useIdle.js
import { useEffect, useState } from "react";

export default function useIdle() {
  const [isIdle, setIdle] = useState(false);
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => setIdle(true));
    } else {
      // fallback
      const id = setTimeout(() => setIdle(true), 2000);
      return () => clearTimeout(id);
    }
  }, []);
  return isIdle;
}
