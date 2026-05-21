import { motion, useReducedMotion } from "framer-motion";
import { Activity, Code2, Database, MessageSquare } from "lucide-react";
import SplitChars from "./SplitChars.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { heroContent } from "../data/hero.js";
import { useSectionScrollScale } from "../hooks/useSectionScrollScale.js";

const statusIcons = {
  dev: Code2,
  ia: MessageSquare,
  data: Database,
};

export default function Hero() {
  const reduce = useReducedMotion();
  const { sectionRef, blockScale, imageScale, imageY, contentOpacity } = useSectionScrollScale({
    blockFrom: 1.1,
    blockTo: 0.9,
    imageFrom: 1.18,
    imageTo: 0.96,
  });
  const { badge, titleLine1, titleAccent, description, ctaPrimary, ctaSecondary, statusLines } =
    heroContent;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[125vh] md:min-h-[130vh]"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="sticky top-0 isolate flex min-h-screen items-center overflow-hidden pb-20 pt-28"
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
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/hero.png"
            alt=""
            className="h-full w-full object-cover object-[72%_50%] md:object-[68%_45%]"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background from-45% via-background/92 via-70% to-transparent to-100% md:from-40% md:via-55%"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-background/80 via-transparent to-background/30"
          aria-hidden="true"
        />

        <div
          className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop"
          style={reduce ? undefined : { opacity: contentOpacity }}
        >
          <div className="max-w-xl text-center md:text-left lg:max-w-2xl">
            <div className="gsap-hero-fade mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <Activity className="h-3.5 w-3.5 text-primary" strokeWidth={2} aria-hidden="true" />
              <span className="font-label-sm uppercase tracking-widest text-primary">{badge}</span>
            </div>

            <h1
              id="hero-title"
              className="title-hero mb-6 text-primary-deep md:mb-8"
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
                  <span className="block overflow-hidden pb-1">
                    <SplitChars text={titleLine1} className="gsap-hero-char" />
                  </span>
                  <span className="mt-1 block overflow-hidden pb-1 text-secondary">
                    <SplitChars text={titleAccent} className="gsap-hero-char" />
                  </span>
                </>
              )}
            </h1>

            <p className="gsap-hero-fade font-body-md mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant md:mb-12">
              {description}
            </p>

            <div className="gsap-hero-fade flex flex-col justify-center gap-4 sm:flex-row sm:justify-start md:gap-6">
              <a
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-label-sm uppercase tracking-widest text-on-primary transition-transform hover:scale-[1.02] md:px-10"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                {ctaPrimary.label}
              </a>
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary bg-surface/60 px-8 py-4 font-label-sm uppercase tracking-widest text-primary-deep backdrop-blur-sm transition-colors hover:bg-primary/5 md:px-10"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                {ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>

        <div
          className="gsap-hero-status absolute bottom-8 right-4 z-10 hidden sm:block md:right-10"
          aria-hidden="true"
        >
          <div className="space-y-1 border-b border-l border-primary/20 bg-surface/70 p-4 text-left font-mono-code text-[10px] text-primary/70 shadow-sm backdrop-blur-md">
            {statusLines.map(({ key, text }) => {
              const Icon = statusIcons[key] ?? Activity;
              return (
                <p key={key} className="flex items-center gap-2">
                  <Icon className="h-3 w-3 shrink-0 text-primary/70" strokeWidth={2} />
                  <span>&gt; {text}</span>
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
