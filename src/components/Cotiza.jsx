import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { cotizaIntro, cotizaPilares, cotizaProceso } from "../data/cotiza.js";
import { springSoft } from "../motion/variants.js";

export default function Cotiza() {
  const reduce = useReducedMotion();

  return (
    <ScrollZoomSection id="cotiza" className="scroll-mt-24 bg-surface-container-low/50" minHeightVh={125}>
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <SectionTitle
          eyebrow={cotizaIntro.eyebrow}
          title={cotizaIntro.titulo}
          titleAccent={cotizaIntro.tituloAccent}
          lead={cotizaIntro.lead}
        />

        <div className="gsap-reveal-stagger mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mb-16 lg:gap-6">
          {cotizaPilares.map(({ id, Icon, titulo, texto }) => (
            <motion.article
              key={id}
              className="gsap-reveal-item surface-card flex flex-col p-7 md:p-8"
              whileHover={reduce ? {} : { y: -6 }}
              transition={springSoft}
            >
              <div className="icon-well mb-5 inline-flex h-14 w-14 items-center justify-center text-primary">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="font-headline-lg mb-2 text-xl text-primary-deep">{titulo}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant md:text-body-md">{texto}</p>
            </motion.article>
          ))}
        </div>

        <div className="gsap-reveal-block investment-panel mx-auto max-w-4xl px-8 py-10 text-center md:px-12 md:py-12">
          <p className="section-eyebrow font-label-sm mb-6 uppercase text-primary">Cómo trabajamos</p>
          <ol className="mb-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3 sm:gap-8">
            {cotizaProceso.map(({ n, titulo, texto }) => (
              <li key={n}>
                <span className="font-mono-code text-sm font-medium text-primary/75">{n}</span>
                <h4 className="font-headline-lg mt-2 text-lg text-primary-deep">{titulo}</h4>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{texto}</p>
              </li>
            ))}
          </ol>

          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-4 font-label-sm uppercase tracking-widest text-on-primary shadow-card md:px-12"
            whileHover={reduce ? {} : { scale: 1.03, boxShadow: "0 10px 40px rgba(71, 101, 85, 0.14)" }}
            whileTap={reduce ? {} : { scale: 0.97 }}
            transition={springSoft}
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            {cotizaIntro.cta}
          </motion.a>
        </div>
      </div>
    </ScrollZoomSection>
  );
}
