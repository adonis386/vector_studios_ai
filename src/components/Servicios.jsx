import { motion, useReducedMotion } from "framer-motion";
import { serviciosItems } from "../data/servicios.js";
import SectionReveal from "../motion/SectionReveal.jsx";
import { staggerChildren, staggerItem, springSoft } from "../motion/variants.js";

export default function Servicios() {
  const reduce = useReducedMotion();

  return (
    <SectionReveal id="servicios" className="scroll-mt-24">
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-label-sm mb-4 uppercase tracking-[0.3em] text-primary">Nuestros Servicios</h2>
          <h3 className="font-headline-lg text-2xl text-on-surface md:text-4xl">
            De la presencia digital al núcleo de tu operación
          </h3>
          <p className="mt-4 leading-relaxed text-on-surface-variant">
            Cuatro líneas de trabajo para que vendas más, con menos fricción y con sistemas que puedes hacer crecer.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-gutter md:grid-cols-2"
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {serviciosItems.map(({ id, orden, Icon, titulo, texto }) => (
            <motion.article
              key={id}
              variants={staggerItem}
              className="group border border-outline bg-surface-container-lowest p-8 text-left md:p-10"
              whileHover={reduce ? {} : { y: -6, borderColor: "rgba(173, 206, 186, 0.4)" }}
              transition={springSoft}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="font-mono-code text-sm font-medium text-primary/80">{orden}.</span>
                <motion.span
                  className="text-primary"
                  whileHover={reduce ? {} : { rotate: [0, -6, 6, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
                </motion.span>
              </div>
              <h4 className="font-headline-lg mb-3 text-xl transition-colors group-hover:text-primary">{titulo}</h4>
              <p className="font-body-md leading-relaxed text-on-surface-variant">{texto}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
