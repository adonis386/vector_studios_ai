import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { preciosIntro, preciosPlanes, preciosPlusIa } from "../data/precios.js";
import { springSoft } from "../motion/variants.js";

function formatUsd(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDesde(value) {
  return `Desde ${formatUsd(value)}`;
}

function mailSubject(label) {
  return `mailto:hola@vectorstudios.ai?subject=${encodeURIComponent(`${label} - Vector Studios AI`)}`;
}

function PlanCard({ plan, reduce }) {
  const { nombre, etiqueta, ideal, incluye, destacado, badge, cta, ctaVariant, faseNota, sinIa } =
    plan;

  return (
    <motion.article
      id={`plan-${plan.id}`}
      className={`gsap-reveal-item relative flex flex-col p-7 md:p-8 ${
        destacado ? "surface-card-featured ring-1 ring-primary/15" : "surface-card"
      } ${destacado ? "lg:-mt-2 lg:mb-2 lg:pb-10 lg:pt-9" : ""}`}
      whileHover={reduce ? {} : { y: -6 }}
      transition={springSoft}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/20 bg-primary-fixed px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest text-primary-deep">
          {badge}
        </span>
      )}

      <p className="font-label-sm uppercase tracking-widest text-primary">{etiqueta}</p>
      <h3 className="font-headline-lg mt-2 text-2xl text-primary-deep md:text-3xl">{nombre}</h3>
      <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{ideal}</p>

      {sinIa && (
        <p className="mt-3 text-xs leading-snug text-on-surface-variant/90">Sin Plus IA incluido</p>
      )}

      <div className="mt-6 border-t border-outline/15 pt-6">
        <p className="font-mono-code text-xs uppercase tracking-wide text-on-surface-variant">
          Inversión inicial
        </p>
        <p className="mt-1 text-3xl font-semibold tracking-tight text-primary-deep md:text-4xl">
          {formatDesde(plan.setupDesde)}
        </p>
        <p className="mt-2 font-mono-code text-sm text-primary/80">
          + {formatDesde(plan.mensualDesde)}
          <span className="text-on-surface-variant">/mes</span>
        </p>
        {faseNota && (
          <p className="mt-1 font-mono-code text-xs text-on-surface-variant">{faseNota}</p>
        )}
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5">
        {incluye.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-snug text-on-surface-variant">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={mailSubject(nombre)}
        className={`mt-8 w-full ${ctaVariant === "primary" ? "btn-primary" : "btn-secondary"}`}
      >
        {ctaVariant === "primary" && <WhatsAppIcon className="h-5 w-5 shrink-0" />}
        {cta}
      </a>
    </motion.article>
  );
}

export default function PricingTable() {
  const reduce = useReducedMotion();
  const ordered = [
    preciosPlanes.find((p) => p.id === "negocio"),
    preciosPlanes.find((p) => p.destacado),
    preciosPlanes.find((p) => p.id === "ecosistema"),
  ].filter(Boolean);

  return (
    <div className="gsap-reveal-block space-y-10 md:space-y-12">
      <div className="gsap-reveal-stagger grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
        {ordered.map((plan) => (
          <PlanCard key={plan.id} plan={plan} reduce={reduce} />
        ))}
      </div>

      <motion.div
        className="gsap-reveal-item investment-panel p-6 md:p-8"
        whileHover={reduce ? {} : { y: -2 }}
        transition={springSoft}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex gap-3 md:max-w-md">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
            <div>
              <h4 className="font-headline-lg text-xl text-primary-deep md:text-2xl">
                {preciosPlusIa.titulo}
              </h4>
              <p className="mt-1 text-sm font-medium text-secondary">{preciosPlusIa.subtitulo}</p>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{preciosPlusIa.lead}</p>
            </div>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {preciosPlusIa.opciones.map(({ id, nombre, setupDesde, mensualDesde, detalle }) => (
              <div
                key={id}
                className="rounded-lg border border-primary/10 bg-white/60 p-4 backdrop-blur-sm"
              >
                <p className="font-headline-lg text-base text-primary-deep">{nombre}</p>
                <p className="mt-1 font-mono-code text-sm font-medium text-primary">
                  {formatDesde(setupDesde)} + {formatDesde(mensualDesde)}
                  <span className="text-on-surface-variant">/mes</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">{detalle}</p>
              </div>
            ))}
          </div>

          <a
            href={mailSubject(preciosPlusIa.cta)}
            className="btn-primary shrink-0 self-start lg:self-center"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            {preciosPlusIa.cta}
          </a>
        </div>
      </motion.div>

      <p className="text-sm leading-relaxed text-on-surface-variant">{preciosIntro.nota}</p>
      <p className="font-mono-code text-xs leading-relaxed text-on-surface-variant/80">{preciosIntro.pie}</p>
    </div>
  );
}
