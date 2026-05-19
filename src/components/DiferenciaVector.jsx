import { motion, useReducedMotion } from "framer-motion";
import { porQueIntro, porQuePilares } from "../data/porQueVector.js";
import SectionReveal from "../motion/SectionReveal.jsx";

export default function DiferenciaVector() {
  const reduce = useReducedMotion();

  return (
    <SectionReveal id="diferencia" className="scroll-mt-24 bg-surface-container-low py-24 md:py-32">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-label-sm mb-4 uppercase tracking-[0.3em] text-primary">Por qué Vector</h2>
          <h3 className="font-display-lg text-2xl leading-tight text-primary md:text-4xl">{porQueIntro.titulo}</h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {porQueIntro.leadBefore}
            <strong className="text-on-surface">{porQueIntro.leadEmphasis}</strong>
            {porQueIntro.leadAfter}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {porQuePilares.map(({ id, Icon, titulo, texto, IconSecondary }, i) => (
            <motion.article
              key={id}
              className="border border-outline bg-surface-container-lowest p-8 text-left md:p-10"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { y: -4, borderColor: "rgba(71, 101, 85, 0.35)" }}
            >
              <div className="mb-5 flex items-center gap-3 text-primary">
                <Icon className="h-8 w-8 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {IconSecondary && (
                  <IconSecondary className="h-7 w-7 shrink-0 opacity-90" strokeWidth={1.75} aria-hidden="true" />
                )}
              </div>
              <h4 className="font-headline-lg mb-3 text-xl text-primary">{titulo}</h4>
              <p className="text-sm leading-relaxed text-on-surface-variant md:text-body-md">{texto}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
