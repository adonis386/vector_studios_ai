import { useEffect } from "react";
import "lenis/dist/lenis.css";
import { initScrollAnimations } from "./setupScroll.js";

export default function GsapScrollProvider({ children }) {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return children;
}
