import { motion, useReducedMotion } from "framer-motion";
import { Layers3, Mic2, Rocket } from "lucide-react";
import { preciosPlanes } from "../data/precios.js";
import SectionReveal from "../motion/SectionReveal.jsx";
import { staggerChildren, staggerItem, springSoft } from "../motion/variants.js";

const iconosPlan = {
  "smart-connect": Rocket,
  "voice-identity": Mic2,
  "full-ecosystem": Layers3,
};

function Campo({ etiqueta, valor }) {
  return (
    <div className="border-b border-outline/40 py-3 last:border-b-0">
      <p className="font-label-sm uppercase tracking-widest text-primary/90">{etiqueta}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-on-surface md:text-[15px]">{valor}</p>
    </div>
  );
}

export default function Precios() {
  const reduce = useReducedMotion();

  return (
    <SectionReveal id="precios" className="scroll-mt-24">
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center md:mb-24"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-label-sm mb-4 uppercase tracking-[0.3em] text-primary">Planes de inversión</h2>
          <h3 className="font-headline-lg text-2xl text-on-surface md:text-4xl">Elige el alcance que corresponde a tu etapa</h3>
          <p className="mt-4 leading-relaxed text-on-surface-variant">
            Montos expresados en <strong className="text-on-surface">USD</strong>. Los detalles se ajustan en
            diagnóstico según integraciones y volumen.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 items-stretch gap-gutter lg:grid-cols-3"
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {preciosPlanes.map((plan) => {
            const PlanIcon = iconosPlan[plan.id];
            return (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={`relative flex flex-col rounded-xl border p-8 md:p-9 ${
                plan.destacado
                  ? "featured-glow z-10 border-2 border-primary/25 bg-surface-container lg:scale-[1.02]"
                  : "border-outline bg-surface"
              }`}
              whileHover={reduce ? {} : { y: -6 }}
              transition={springSoft}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 font-label-sm text-[10px] uppercase tracking-widest text-on-primary">
                  {plan.badge}
                </div>
              )}
              <div className={`mb-4 flex items-center gap-3 ${plan.destacado ? "mt-2" : ""}`}>
                {PlanIcon && (
                  <PlanIcon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                )}
                <h4 className="font-headline-lg text-lg text-on-surface">{plan.nombre}</h4>
              </div>
              <p
                className={`mb-5 font-label-sm uppercase tracking-widest ${
                  plan.destacado ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {plan.etiqueta}
              </p>

              <div className="mb-6 flex-grow rounded-lg border border-outline/50 bg-surface-variant/10 px-1">
                <Campo etiqueta="Ideal para" valor={plan.ideal} />
                <Campo etiqueta="Desarrollo" valor={plan.desarrollo} />
                <Campo etiqueta="Estrategia" valor={plan.estrategia} />
                <Campo etiqueta="Diferencial" valor={plan.diferencial} />
              </div>

              <p className="mb-8 rounded-lg border border-primary/20 bg-primary-container/15 px-4 py-3 font-body-md text-sm leading-relaxed text-on-surface">
                <span className="font-label-sm uppercase tracking-widest text-primary">Inversión</span>
                <span className="mt-2 block">{plan.inversion}</span>
              </p>

              <motion.a
                href="#contacto"
                className={`mt-auto w-full rounded-lg py-4 text-center font-label-sm uppercase ${
                  plan.ctaVariant === "primary"
                    ? "bg-primary font-bold tracking-widest text-on-primary hover:brightness-110"
                    : "border border-outline text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
                whileHover={reduce ? {} : { scale: 1.02 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                transition={springSoft}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
