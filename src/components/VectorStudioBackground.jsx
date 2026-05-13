import { motion, useReducedMotion } from "framer-motion";
import { useId, useMemo } from "react";

const VB = 100;
/** Origen del campo: ligeramente bajo el centro (composición tipo “emisión”) */
const CX = 50;
const CY = 58;

function raysFromOrigin(count, lengthMin, lengthMax, angleOffsetDeg) {
  return Array.from({ length: count }, (_, i) => {
    const angleDeg = (360 / count) * i + angleOffsetDeg;
    const rad = (angleDeg * Math.PI) / 180;
    const t = (i * 7) % 5;
    const len = lengthMin + (t / 4) * (lengthMax - lengthMin);
    return {
      x2: CX + Math.cos(rad) * len,
      y2: CY + Math.sin(rad) * len,
      strokeWidth: i % 4 === 0 ? 0.22 : 0.12,
      opacity: 0.06 + (i % 5) * 0.018,
    };
  });
}

/**
 * Fondo tipo “campo vectorial”: rayos orientados desde un origen (dirección + magnitud),
 * en honor al nombre Vector Studios AI. Muy sutil, no compite con el contenido.
 */
export default function VectorStudioBackground() {
  const reduce = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const gradId = `vec-fade-${id}`;

  const primary = useMemo(() => raysFromOrigin(56, 36, 78, 0), []);
  const secondary = useMemo(() => raysFromOrigin(28, 62, 95, 6.43), []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
      aria-hidden="true"
    >
      <motion.div
        className="absolute left-1/2 top-[42%] h-[min(140vh,1400px)] w-[min(140vw,1400px)] -translate-x-1/2 -translate-y-1/2"
        animate={reduce ? {} : { rotate: [0, 360] }}
        transition={{ duration: 520, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <svg
          className="h-full w-full"
          viewBox={`0 0 ${VB} ${VB}`}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={gradId} cx={CX} cy={CY} r="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgb(173, 206, 186)" stopOpacity="0.14" />
              <stop offset="45%" stopColor="rgb(173, 206, 186)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="rgb(5, 5, 5)" stopOpacity="0" />
            </radialGradient>
            <marker
              id={`${id}-arrow`}
              markerWidth="2.2"
              markerHeight="2.2"
              refX="2"
              refY="1.1"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M 0 0 L 2.2 1.1 L 0 2.2 Z" fill="rgba(173,206,186,0.14)" />
            </marker>
          </defs>
          <rect width={VB} height={VB} fill={`url(#${gradId})`} />
          <g strokeLinecap="round">
            {primary.map((r, i) => (
              <line
                key={`p-${i}`}
                x1={CX}
                y1={CY}
                x2={r.x2}
                y2={r.y2}
                stroke="rgba(173, 206, 186, 0.11)"
                strokeWidth={r.strokeWidth}
                opacity={r.opacity}
              />
            ))}
            {secondary.map((r, i) => (
              <line
                key={`s-${i}`}
                x1={CX}
                y1={CY}
                x2={r.x2}
                y2={r.y2}
                stroke="rgba(173, 206, 186, 0.08)"
                strokeWidth={r.strokeWidth * 0.85}
                opacity={r.opacity * 0.75}
                markerEnd={i % 5 === 0 ? `url(#${id}-arrow)` : undefined}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-[48%] h-[min(90vh,900px)] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 opacity-30"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 640, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <svg className="h-full w-full" viewBox={`0 0 ${VB} ${VB}`} preserveAspectRatio="xMidYMid meet">
            <g strokeLinecap="round" stroke="rgba(180, 198, 244, 0.06)">
              {Array.from({ length: 16 }, (_, i) => {
                const a = ((360 / 16) * i + 11) * (Math.PI / 180);
                const len = 28 + (i % 3) * 6;
                return (
                  <line
                    key={`t-${i}`}
                    x1={CX}
                    y1={CY}
                    x2={CX + Math.cos(a) * len}
                    y2={CY + Math.sin(a) * len}
                    strokeWidth={0.08}
                  />
                );
              })}
            </g>
          </svg>
        </motion.div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_0%,#050505_75%)]" />
    </div>
  );
}
