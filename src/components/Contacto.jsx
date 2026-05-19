import { motion, useReducedMotion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { contactoContent } from "../data/contacto.js";
import SectionReveal from "../motion/SectionReveal.jsx";
import { springSoft } from "../motion/variants.js";

export default function Contacto() {
  const reduce = useReducedMotion();
  const { badge, titulo, tituloAccent, lead, cta, mailto, nota } = contactoContent;

  return (
    <SectionReveal id="contacto" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(480px,70vw)] w-[min(480px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"
        aria-hidden="true"
        animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <motion.div
          className="mx-auto mb-10 flex h-20 w-px justify-center bg-gradient-to-b from-transparent via-primary to-transparent"
          aria-hidden="true"
          initial={reduce ? false : { scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ originY: 0 }}
        />

        <motion.span
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-container/15 px-3 py-1 font-label-sm text-xs uppercase tracking-widest text-primary"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          {badge}
        </motion.span>

        <motion.h2
          className="font-display-lg mb-4 text-3xl tracking-tight text-primary md:mb-6 md:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {titulo}
          <br />
          <span className="text-secondary">{tituloAccent}</span>
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 max-w-xl leading-relaxed text-on-surface-variant"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {lead}
        </motion.p>
        <motion.a
          href={mailto}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-5 font-label-sm uppercase tracking-widest text-on-primary md:px-12"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={reduce ? {} : { scale: 1.04, boxShadow: "0 10px 40px rgba(71, 101, 85, 0.12)" }}
          whileTap={reduce ? {} : { scale: 0.97 }}
          transition={springSoft}
        >
          <Mail className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} aria-hidden="true" />
          {cta}
        </motion.a>
        <p className="mt-6 font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">{nota}</p>
      </div>
    </SectionReveal>
  );
}
