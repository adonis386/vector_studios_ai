import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "./variants.js";

/**
 * Sección que entra al hacer scroll — “IA viva” al aparecer contenido.
 */
export default function SectionReveal({ id, className = "", children }) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduce ? 0 : 0.55, ease: easeOutExpo }}
    >
      {children}
    </motion.section>
  );
}
