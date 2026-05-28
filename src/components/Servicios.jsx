import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { serviciosIntro, serviciosItems } from "../data/servicios.js";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { springSoft } from "../motion/variants.js";

const bentoSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export default function Servicios() {
  const reduce = useReducedMotion();

  return (
    <ScrollZoomSection id="servicios" className="scroll-mt-24" minHeightVh={120}>
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <SectionTitle
          title={serviciosIntro.titulo}
          titleAccent={serviciosIntro.tituloAccent}
          lead={serviciosIntro.lead}
          align="left"
        />

        <div className="gsap-reveal-stagger grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {serviciosItems.map(({ id, Icon, titulo, texto, badge }, index) => {
            const featured = index === 0 || index === 3;
            return (
              <motion.article
                key={id}
                className={`gsap-reveal-item group p-7 md:p-9 ${bentoSpans[index]} ${
                  featured ? "surface-card-featured" : "surface-card"
                }`}
                whileHover={reduce ? {} : { y: -6 }}
                transition={springSoft}
              >
                {badge && (
                  <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary-fixed px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest text-primary-deep">
                    {badge}
                  </span>
                )}
                <motion.div
                  className="icon-well mb-5 inline-flex h-14 w-14 shrink-0 text-primary"
                  whileHover={reduce ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.35 }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.65} aria-hidden="true" />
                </motion.div>
                <h3 className="font-headline-lg mb-3 text-xl text-primary-deep transition-colors group-hover:text-secondary md:text-2xl">
                  {titulo}
                </h3>
                <p className="font-body-md max-w-prose leading-relaxed text-on-surface-variant">{texto}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </ScrollZoomSection>
  );
}
