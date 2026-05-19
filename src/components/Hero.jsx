import { motion, useReducedMotion } from "framer-motion";
import { Activity, Code2, Database, MessageSquare } from "lucide-react";
import { heroContent } from "../data/hero.js";
import {
  orbAlive,
  orbTransition,
  staggerChildren,
  staggerItem,
  statusLineDelay,
} from "../motion/variants.js";

const statusIcons = {
  dev: Code2,
  ia: MessageSquare,
  data: Database,
};

export default function Hero() {
  const reduce = useReducedMotion();
  const { badge, titleLine1, titleAccent, description, ctaPrimary, ctaSecondary, statusLines } =
    heroContent;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-20 pt-28"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 grid-lines opacity-100"
        aria-hidden="true"
      />
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
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
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
          <span className="font-label-sm uppercase tracking-widest text-primary">{badge}</span>
        </motion.div>

        <motion.h1
          id="hero-title"
          variants={staggerItem}
          className="font-display-lg mb-6 text-4xl leading-tight text-primary md:mb-8 md:text-display-lg"
        >
          {titleLine1}
          <br />
          <motion.span
            className="inline-block text-secondary"
            animate={reduce ? {} : { opacity: [1, 0.92, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {titleAccent}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="font-body-md mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:mb-12"
        >
          {description}
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <motion.a
            href={ctaPrimary.href}
            className="bg-primary px-8 py-4 text-center font-label-sm uppercase tracking-widest text-on-primary md:px-10"
            whileHover={reduce ? {} : { scale: 1.02, boxShadow: "0 10px 40px rgba(71, 101, 85, 0.12)" }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            {ctaPrimary.label}
          </motion.a>
          <motion.a
            href={ctaSecondary.href}
            className="border-2 border-primary px-8 py-4 text-center font-label-sm uppercase tracking-widest text-primary md:px-10"
            whileHover={reduce ? {} : { scale: 1.01, backgroundColor: "rgba(6, 36, 24, 0.05)" }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            {ctaSecondary.label}
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-4 hidden sm:block md:right-10"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div className="space-y-1 border-b border-l border-primary/20 bg-surface/50 p-4 text-left font-mono-code text-[10px] text-primary/60 backdrop-blur-sm">
          {statusLines.map(({ key, text }, i) => {
            const Icon = statusIcons[key] ?? Activity;
            return (
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
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
