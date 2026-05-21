import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { porQueIntro, porQuePilares } from "../data/porQueVector.js";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { springSoft } from "../motion/variants.js";

export default function DiferenciaVector() {
  const reduce = useReducedMotion();

  const lead = (
    <>
      {porQueIntro.leadBefore}
      <strong className="text-on-surface">{porQueIntro.leadEmphasis}</strong>
      {porQueIntro.leadAfter}
    </>
  );

  return (
    <ScrollZoomSection
      id="diferencia"
      className="scroll-mt-24 bg-surface-container-low/80"
      minHeightVh={125}
    >
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <SectionTitle eyebrow="Por qué Vector" title={porQueIntro.titulo} lead={lead} />

        <div className="gsap-reveal-stagger grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {porQuePilares.map(({ id, Icon, titulo, texto, IconSecondary }) => (
            <motion.article
              key={id}
              className="gsap-reveal-item surface-card flex flex-col p-8 md:p-9"
              whileHover={reduce ? {} : { y: -6 }}
              transition={springSoft}
            >
              <div className="icon-well mb-6 inline-flex h-14 min-w-14 items-center justify-center gap-2 px-3.5 text-primary">
                <Icon className="h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {IconSecondary && (
                  <IconSecondary className="h-6 w-6 shrink-0 opacity-85" strokeWidth={1.75} aria-hidden="true" />
                )}
              </div>
              <h3 className="font-headline-lg mb-3 text-xl text-primary-deep md:text-2xl">{titulo}</h3>
              <p className="mt-auto text-sm leading-relaxed text-on-surface-variant md:text-body-md">{texto}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollZoomSection>
  );
}
