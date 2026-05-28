import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { porQueIntro, porQuePilares } from "../data/porQueVector.js";
import ScrollZoomSection from "./ScrollZoomSection.jsx";
import { springSoft } from "../motion/variants.js";

export default function DiferenciaVector() {
  const reduce = useReducedMotion();
  const [featured, ...rest] = porQuePilares;
  const FeaturedIcon = featured.Icon;
  const FeaturedIconSecondary = featured.IconSecondary;

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
      minHeightVh={118}
    >
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <SectionTitle title={porQueIntro.titulo} lead={lead} align="left" />

        <div className="gsap-reveal-stagger grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article
            key={featured.id}
            className="gsap-reveal-item surface-card-featured flex flex-col p-8 md:p-10 lg:min-h-[22rem]"
            whileHover={reduce ? {} : { y: -6 }}
            transition={springSoft}
          >
            <div className="icon-well mb-6 inline-flex h-16 min-w-16 items-center justify-center gap-2 px-4 text-primary">
              <FeaturedIcon className="h-8 w-8 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              {FeaturedIconSecondary && (
                <FeaturedIconSecondary
                  className="h-7 w-7 shrink-0 opacity-85"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              )}
            </div>
            <h3 className="font-headline-lg mb-4 text-2xl text-primary-deep md:text-3xl">{featured.titulo}</h3>
            <p className="mt-auto text-base leading-relaxed text-on-surface-variant md:text-lg">{featured.texto}</p>
          </motion.article>

          <div className="flex flex-col gap-6">
            {rest.map(({ id, Icon, titulo, texto, IconSecondary }) => (
              <motion.article
                key={id}
                className="gsap-reveal-item surface-card flex flex-1 flex-col p-7 md:p-8"
                whileHover={reduce ? {} : { y: -5 }}
                transition={springSoft}
              >
                <div className="icon-well mb-5 inline-flex h-14 min-w-14 items-center justify-center gap-2 px-3.5 text-primary">
                  <Icon className="h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  {IconSecondary && (
                    <IconSecondary className="h-6 w-6 shrink-0 opacity-85" strokeWidth={1.75} aria-hidden="true" />
                  )}
                </div>
                <h3 className="font-headline-lg mb-2 text-xl text-primary-deep">{titulo}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant md:text-body-md">{texto}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </ScrollZoomSection>
  );
}
