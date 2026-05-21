import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { serviciosIntro, serviciosItems } from "../data/servicios.js";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { springSoft } from "../motion/variants.js";

export default function Servicios() {
  const reduce = useReducedMotion();

  return (
    <ScrollZoomSection id="servicios" className="scroll-mt-24" minHeightVh={130}>
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
        <SectionTitle
          eyebrow={serviciosIntro.eyebrow}
          title={serviciosIntro.titulo}
          lead={serviciosIntro.lead}
        />

        <div className="gsap-reveal-stagger grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {serviciosItems.map(({ id, orden, Icon, titulo, texto }) => (
            <motion.article
              key={id}
              className="gsap-reveal-item surface-card group p-8 text-left md:p-10"
              whileHover={reduce ? {} : { y: -8 }}
              transition={springSoft}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="font-mono-code text-sm font-medium text-primary/70">{orden}</span>
                <motion.div
                  className="icon-well h-14 w-14 shrink-0 text-primary"
                  whileHover={reduce ? {} : { scale: 1.06 }}
                  transition={{ duration: 0.35 }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.65} aria-hidden="true" />
                </motion.div>
              </div>
              <h3 className="font-headline-lg mb-3 text-xl text-primary-deep transition-colors group-hover:text-secondary md:text-2xl">
                {titulo}
              </h3>
              <p className="font-body-md leading-relaxed text-on-surface-variant">{texto}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollZoomSection>
  );
}
