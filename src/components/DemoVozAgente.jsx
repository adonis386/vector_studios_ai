import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mic, Radio } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { demoVozIntro, demoVozPasos } from "../data/demoVoz.js";
import { springSoft } from "../motion/variants.js";

export default function DemoVozAgente() {
  const reduce = useReducedMotion();

  return (
    <ScrollZoomSection
      id="demo-voz"
      className="scroll-mt-24 bg-surface-container-low/60"
      minHeightVh={110}
    >
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-28">
        <SectionTitle
          eyebrow={demoVozIntro.eyebrow}
          title={demoVozIntro.titulo}
          titleAccent={demoVozIntro.tituloAccent}
          lead={demoVozIntro.lead}
          align="left"
        />

        <div className="gsap-reveal-stagger grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_min(380px,38%)] lg:gap-10">
          <ol className="gsap-reveal-item detail-stack surface-card p-6 md:p-8">
            {demoVozPasos.map(({ id, titulo, texto }) => (
              <li key={id}>
                <h3 className="font-headline-lg text-lg text-primary-deep">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant md:text-body-md">{texto}</p>
              </li>
            ))}
          </ol>

          <motion.aside
            className="convai-callout gsap-reveal-item relative flex flex-col justify-between overflow-hidden p-8 md:p-9"
            aria-labelledby="convai-callout-title"
            whileHover={reduce ? {} : { scale: 1.01 }}
            transition={springSoft}
          >
            <div className="relative z-[1]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-3 py-1.5">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <Radio className="h-3.5 w-3.5 text-primary" strokeWidth={2} aria-hidden="true" />
                <span className="font-label-sm uppercase tracking-widest text-primary">{demoVozIntro.hint}</span>
              </div>

              <div className="icon-well mb-6 inline-flex h-16 w-16 items-center justify-center text-primary">
                <Mic className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
              </div>

              <h3 id="convai-callout-title" className="font-headline-lg mb-3 text-2xl text-primary-deep md:text-3xl">
                {demoVozIntro.calloutTitle}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant md:text-body-md">
                {demoVozIntro.calloutText}
              </p>
            </div>

            <div className="convai-callout__pointer relative z-[1] mt-8 flex items-end justify-end gap-2">
              <p className="max-w-[10rem] text-right font-label-sm uppercase tracking-widest text-primary-deep">
                {demoVozIntro.pointerLine1}
                <span className="block text-secondary">{demoVozIntro.pointerLine2}</span>
              </p>
              <motion.span
                className="convai-callout__arrow flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm"
                aria-hidden="true"
                animate={reduce ? {} : { x: [0, 6, 0], y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDownRight className="h-6 w-6" strokeWidth={2} />
              </motion.span>
            </div>

            <div
              className="convai-callout__glow pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />
          </motion.aside>
        </div>
      </div>
    </ScrollZoomSection>
  );
}
