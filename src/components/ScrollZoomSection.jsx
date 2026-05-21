import { motion, useReducedMotion } from "framer-motion";
import { useSectionScrollScale } from "../hooks/useSectionScrollScale.js";

/**
 * Sección con recorrido de scroll extra: el contenido empieza con zoom y se reduce al bajar (efecto hero).
 */
export default function ScrollZoomSection({
  id,
  className = "",
  children,
  minHeightVh = 118,
  sticky = false,
  stickyClassName = "",
  scaleFrom,
  scaleTo,
}) {
  const reduce = useReducedMotion();
  const { sectionRef, blockScale, contentOpacity } = useSectionScrollScale({
    blockFrom: scaleFrom,
    blockTo: scaleTo,
  });

  const inner = (
    <motion.div
      className={`origin-center will-change-transform ${sticky ? stickyClassName : ""}`}
      style={
        reduce
          ? undefined
          : {
              scale: blockScale,
              opacity: contentOpacity,
            }
      }
    >
      {children}
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-x-clip ${className}`}
      style={{ minHeight: `${minHeightVh}vh` }}
    >
      {sticky ? (
        <div className="sticky top-0 z-0 flex min-h-screen flex-col justify-center">{inner}</div>
      ) : (
        inner
      )}
    </section>
  );
}
