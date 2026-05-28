import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { contactoContent } from "../data/contacto.js";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { springSoft } from "../motion/variants.js";

export default function Contacto() {
  const reduce = useReducedMotion();
  const { titulo, tituloAccent, lead, cta, mailto, nota } = contactoContent;

  return (
    <ScrollZoomSection id="contacto" className="relative scroll-mt-24 overflow-hidden" minHeightVh={110}>
      <div className="relative py-24 md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(420px,65vw)] w-[min(420px,65vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-fixed/40 blur-[90px]"
          aria-hidden="true"
        />

        <div className="gsap-reveal-block relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="investment-panel mx-auto max-w-3xl px-8 py-12 text-center md:px-14 md:py-14">
            <SectionTitle
              title={titulo}
              titleAccent={tituloAccent}
              lead={lead}
              className="mb-8 md:mb-10"
            />

            <motion.a
              href={mailto}
              className="btn-primary md:px-12"
              whileHover={reduce ? {} : { scale: 1.03 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              transition={springSoft}
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
              {cta}
            </motion.a>
            <p className="mt-6 font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/70">
              {nota}
            </p>
          </div>
        </div>
      </div>
    </ScrollZoomSection>
  );
}
