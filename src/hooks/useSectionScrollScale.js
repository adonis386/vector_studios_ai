import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DEFAULTS = {
  blockFrom: 1.08,
  blockTo: 0.92,
  opacityFrom: 1,
  opacityTo: 0.94,
};

/**
 * Escala de sección al scroll: empieza más grande y se reduce al recorrer el bloque (como el hero).
 */
export function useSectionScrollScale(options = {}) {
  const {
    blockFrom = DEFAULTS.blockFrom,
    blockTo = DEFAULTS.blockTo,
    opacityFrom = DEFAULTS.opacityFrom,
    opacityTo = DEFAULTS.opacityTo,
    imageFrom,
    imageTo,
  } = options;

  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const blockScale = useTransform(scrollYProgress, [0, 1], [blockFrom, blockTo]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [opacityFrom, opacityTo]);
  const hasImageScale = imageFrom != null && imageTo != null;
  const imageScale = useTransform(scrollYProgress, [0, 1], [imageFrom ?? 1, imageTo ?? 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", hasImageScale ? "4%" : "0%"]);

  if (reduce) {
    return {
      sectionRef,
      blockScale: 1,
      contentOpacity: 1,
      imageScale: 1,
      imageY: "0%",
      reduced: true,
    };
  }

  return {
    sectionRef,
    blockScale,
    contentOpacity,
    imageScale: hasImageScale ? imageScale : null,
    imageY: hasImageScale ? imageY : null,
    reduced: false,
  };
}
