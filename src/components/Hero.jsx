import { motion, useReducedMotion } from "framer-motion";
import { Activity, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import {
  orbAlive,
  orbTransition,
  staggerChildren,
  staggerItem,
  statusLineDelay,
} from "../motion/variants.js";

const statusLines = [
  { key: "conf", text: "CONFIANZA: ALTA", Icon: ShieldCheck },
  { key: "resp", text: "RESPUESTA: INMEDIATA", Icon: Zap },
  { key: "cierre", text: "CIERRE: ASISTIDO", Icon: TrendingUp },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-20 pt-28"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" aria-hidden="true" />

      <motion.div
        className="voice-wave absolute -z-10 h-[min(800px,120vw)] w-[min(800px,120vw)] rounded-full blur-[100px]"
        aria-hidden="true"
        animate={reduce ? {} : orbAlive}
        transition={orbTransition}
      />

      <motion.div
        className="z-10 max-w-4xl px-margin-mobile text-center"
        variants={staggerChildren}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={staggerItem}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline bg-surface-variant/30 px-4 py-1.5"
        >
          <motion.span
            className="relative flex h-2 w-2"
            aria-hidden="true"
            animate={reduce ? {} : { scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </motion.span>
          <Activity className="h-3.5 w-3.5 text-primary" strokeWidth={2} aria-hidden="true" />
          <span className="font-label-sm uppercase tracking-widest text-on-surface-variant">
            Operaciones activas 24/7
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          variants={staggerItem}
          className="font-display-lg mb-6 text-3xl leading-tight text-on-surface sm:text-4xl md:mb-8 md:text-display-lg"
        >
          Tu negocio no necesita más personal,
          <br />
          <motion.span
            className="inline-block text-primary"
            animate={reduce ? {} : { opacity: [1, 0.88, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            necesita mejores sistemas
          </motion.span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="font-body-md mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:mb-12"
        >
          Desarrollamos aplicaciones y sistemas que piensan, hablan con tu voz y automatizan tus ventas 24/7.
          Infraestructura de carga instantánea y máxima seguridad, con base de datos inteligente con
          sincronización en tiempo real cuando tu operación lo exige.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <motion.a
            href="#contacto"
            className="bg-primary px-8 py-4 text-center font-label-sm uppercase tracking-widest text-on-primary md:px-10"
            whileHover={reduce ? {} : { scale: 1.03, boxShadow: "0 0 22px rgba(173,206,186,0.28)" }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            Impulsar cierres de venta automáticos
          </motion.a>
          <motion.a
            href="#efecto-voz"
            className="border border-outline px-8 py-4 text-center font-label-sm uppercase tracking-widest text-on-surface md:px-10"
            whileHover={reduce ? {} : { scale: 1.02, backgroundColor: "rgba(41, 55, 62, 0.35)" }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            Ver el efecto voz
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 right-4 hidden sm:block md:right-10" aria-hidden="true">
        <div className="space-y-2 border-b border-l border-primary/30 p-4 text-left font-mono-code text-[10px] text-primary/60">
          {statusLines.map(({ key, text, Icon }, i) => (
            <motion.p
              key={key}
              className="flex items-center gap-2"
              initial={reduce ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={statusLineDelay(i)}
            >
              <Icon className="h-3 w-3 shrink-0 text-primary/70" strokeWidth={2} />
              <span>&gt; {text}</span>
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
