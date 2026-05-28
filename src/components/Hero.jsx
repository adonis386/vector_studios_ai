import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SplitChars from "./SplitChars.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { heroContent } from "../data/hero.js";
import { useSectionScrollScale } from "../hooks/useSectionScrollScale.js";

export default function Hero() {
  const reduce = useReducedMotion();
  const { sectionRef, blockScale, imageScale, imageY, contentOpacity } = useSectionScrollScale({
    blockFrom: 1.06,
    blockTo: 0.94,
    imageFrom: 1.1,
    imageTo: 0.98,
  });
  const { badge, titleLine1, titleAccent, description, ctaPrimary, ctaSecondary } = heroContent;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh]"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="sticky top-0 isolate flex min-h-[100dvh] items-center overflow-hidden pb-12 pt-24 md:pt-24"
        style={reduce ? undefined : { scale: blockScale }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 -z-20 origin-center bg-background will-change-transform"
          aria-hidden="true"
          style={
            reduce
              ? undefined
              : {
                  scale: imageScale ?? 1,
                  y: imageY ?? "0%",
                }
          }
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/hero.png"
            alt=""
            className="h-full w-full object-cover object-[78%_50%] md:object-[72%_45%]"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background from-50% via-background/94 via-75% to-transparent to-100% md:from-[42%] md:via-[58%]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-background/70 via-transparent to-background/25"
          aria-hidden="true"
        />

        <div
          className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop"
          style={reduce ? undefined : { opacity: contentOpacity }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="max-w-xl text-center lg:col-span-6 lg:max-w-none lg:text-left">
              <div className="gsap-hero-fade mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/85 px-4 py-1.5 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-label-sm uppercase tracking-widest text-primary">{badge}</span>
              </div>

              <h1
                id="hero-title"
                className="title-hero mb-5 text-primary-deep md:mb-6"
                style={{ perspective: "600px" }}
                aria-label={`${titleLine1} ${titleAccent}`}
              >
                {reduce ? (
                  <>
                    {titleLine1}
                    <br />
                    <span className="text-secondary">{titleAccent}</span>
                  </>
                ) : (
                  <>
                    <span className="block overflow-hidden pb-1 [text-wrap:balance]">
                      <SplitChars text={titleLine1} className="gsap-hero-char" />
                    </span>
                    <span className="mt-0.5 block overflow-hidden pb-1 text-secondary [text-wrap:balance]">
                      <SplitChars text={titleAccent} className="gsap-hero-char" />
                    </span>
                  </>
                )}
              </h1>

              <p className="gsap-hero-fade mx-auto mb-8 max-w-md text-base leading-relaxed text-on-surface-variant md:mb-9 lg:mx-0 lg:max-w-lg lg:text-lg">
                {description}
              </p>

              <div className="gsap-hero-fade flex flex-col justify-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a href={ctaPrimary.href} className="btn-primary md:px-10">
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  {ctaPrimary.label}
                </a>
                <a href={ctaSecondary.href} className="btn-secondary md:px-10">
                  {ctaSecondary.label}
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hidden lg:col-span-6 lg:block" aria-hidden="true" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
