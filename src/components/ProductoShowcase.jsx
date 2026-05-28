import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { productoContent } from "../data/producto.js";
import { springSoft } from "../motion/variants.js";

export default function ProductoShowcase() {
  const reduce = useReducedMotion();
  const { titulo, tituloAccent, lead, puntos, caption, appAlt, panelAlt, cta } = productoContent;

  return (
    <ScrollZoomSection
      id="producto"
      className="scroll-mt-24 bg-surface-container-low/50"
      minHeightVh={105}
      scaleFrom={1.04}
      scaleTo={0.98}
    >
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-28">
        <div className="gsap-reveal-stagger grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="gsap-reveal-item">
            <SectionTitle
              title={titulo}
              titleAccent={tituloAccent}
              lead={lead}
              align="left"
              className="mb-8 md:mb-0"
            />
            <ul className="mt-8 hidden space-y-3 lg:block">
              {puntos.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-primary/25 pl-4 text-sm leading-relaxed text-on-surface-variant md:text-body-md"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={cta.href}
              className="btn-secondary mt-8 hidden w-full sm:inline-flex sm:w-auto lg:inline-flex"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <motion.figure
            className="gsap-reveal-item relative mx-auto w-full max-w-xl lg:max-w-none"
            whileHover={reduce ? {} : { y: -4 }}
            transition={springSoft}
          >
            <div className="surface-card overflow-hidden rounded-2xl border border-outline/10 p-2 shadow-card md:p-3">
              <img
                src="/panel.png"
                alt={panelAlt}
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl object-cover object-left-top"
              />
            </div>

            <div className="absolute -bottom-6 left-4 w-[min(42%,220px)] sm:left-6 md:-bottom-8 md:left-8 md:w-[min(38%,240px)]">
              <div className="surface-card-featured overflow-hidden rounded-2xl border border-primary/10 p-1.5 shadow-card">
                <img
                  src="/app.png"
                  alt={appAlt}
                  width={600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-[1.1rem] object-cover"
                />
              </div>
            </div>

            <figcaption className="mt-10 pl-1 font-mono-code text-[11px] leading-relaxed text-on-surface-variant/75 md:mt-12">
              {caption}
            </figcaption>
          </motion.figure>

          <ul className="gsap-reveal-item space-y-3 lg:hidden">
            {puntos.map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary/25 pl-4 text-sm leading-relaxed text-on-surface-variant"
              >
                {item}
              </li>
            ))}
          </ul>

          <a href={cta.href} className="btn-secondary gsap-reveal-item w-full sm:w-auto lg:hidden">
            {cta.label}
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </ScrollZoomSection>
  );
}
