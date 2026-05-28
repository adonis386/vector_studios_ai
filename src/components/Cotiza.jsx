import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import PricingTable from "./PricingTable.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { cotizaIntro, cotizaProceso } from "../data/cotiza.js";
import { preciosIntro } from "../data/precios.js";
import { springSoft } from "../motion/variants.js";

export default function Cotiza() {
  const reduce = useReducedMotion();

  return (
    <ScrollZoomSection id="cotiza" className="scroll-mt-24 bg-surface-container-low/50" minHeightVh={110}>
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <SectionTitle
          title={cotizaIntro.titulo}
          titleAccent={cotizaIntro.tituloAccent}
          lead={preciosIntro.lead}
          align="left"
          className="mb-12 md:mb-14"
        />

        <PricingTable />

        <div className="gsap-reveal-block mx-auto mt-12 max-w-3xl md:mt-14">
          <h3 className="font-headline-lg mb-6 text-center text-xl text-primary-deep md:text-left md:text-2xl">
            Proceso comercial
          </h3>
          <ol className="process-rail space-y-6">
            {cotizaProceso.map(({ n, titulo, texto }) => (
              <li key={n}>
                <span className="font-mono-code text-xs font-medium text-primary/70">{n}</span>
                <h4 className="font-headline-lg mt-1 text-lg text-primary-deep">{titulo}</h4>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{texto}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center md:text-left">
            <motion.a
              href="#contacto"
              className="btn-primary md:px-12"
              whileHover={reduce ? {} : { scale: 1.03 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              transition={springSoft}
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              {cotizaIntro.cta}
            </motion.a>
          </div>
        </div>
      </div>
    </ScrollZoomSection>
  );
}
