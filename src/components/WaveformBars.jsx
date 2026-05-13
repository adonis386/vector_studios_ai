import { motion, useReducedMotion } from "framer-motion";

const HEIGHTS_PCT = [40, 70, 55, 90, 45, 80, 60, 75];

/**
 * Barras de “audio” animadas — refuerza nota de voz cuando `playing`.
 */
export default function WaveformBars({ playing }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-12 items-end justify-between gap-1 opacity-90" aria-hidden="true">
      {HEIGHTS_PCT.map((pct, i) => (
        <motion.div
          key={i}
          className="w-1 origin-bottom rounded-full bg-primary/90"
          style={{ height: `${pct}%` }}
          animate={
            reduce
              ? { scaleY: 0.55 }
              : playing
                ? { scaleY: [0.32, 1, 0.48, 0.92, 0.36, 1, 0.32] }
                : { scaleY: 0.38 }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 1.1 + i * 0.05,
                  repeat: playing ? Infinity : 0,
                  ease: "easeInOut",
                  delay: i * 0.07,
                }
          }
        />
      ))}
    </div>
  );
}
