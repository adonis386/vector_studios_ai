import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { contactoContent } from "../data/contacto.js";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { springSoft } from "../motion/variants.js";

export default function Contacto() {
  const reduce = useReducedMotion();
  const { badge, titulo, tituloAccent, lead, cta, mailto, nota } = contactoContent;

  return (
    <ScrollZoomSection id="contacto" className="relative scroll-mt-24 overflow-hidden" minHeightVh={120}>
      <div className="relative py-24 md:py-32">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(480px,70vw)] w-[min(480px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"
          aria-hidden="true"
          animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="gsap-reveal-block relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div
            className="mx-auto mb-8 h-20 w-px bg-gradient-to-b from-transparent via-primary to-transparent md:mb-10"
            aria-hidden="true"
          />

          <SectionTitle
            eyebrow={badge}
            title={titulo}
            titleAccent={tituloAccent}
            lead={lead}
            className="mb-10 md:mb-12"
          />

          <div className="flex flex-col items-center">
            <motion.a
              href={mailto}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-5 font-label-sm uppercase tracking-widest text-on-primary shadow-card md:px-12"
              whileHover={reduce ? {} : { scale: 1.04, boxShadow: "0 10px 40px rgba(71, 101, 85, 0.12)" }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              transition={springSoft}
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
              {cta}
            </motion.a>
            <p className="mt-6 font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60">
              {nota}
            </p>
          </div>
        </div>
      </div>
    </ScrollZoomSection>
  );
}
