import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { mainNav } from "../data/navigation.js";
import { springSoft } from "../motion/variants.js";

export default function Header() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="fixed top-0 z-50 w-full glass-nav"
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...springSoft, delay: 0.05 }}
    >
      <div className="mx-auto flex max-w-container-max items-center justify-between gap-4 px-margin-mobile py-4 md:px-margin-desktop">
        <motion.a
          href="#inicio"
          className="flex shrink-0 items-center gap-3"
          whileHover={reduce ? {} : { scale: 1.02 }}
          whileTap={reduce ? {} : { scale: 0.98 }}
          transition={springSoft}
        >
          <motion.span
            className="text-primary"
            aria-hidden="true"
            animate={reduce ? {} : { rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.75} />
          </motion.span>
          <span className="font-headline-lg text-base font-bold tracking-widest text-on-surface md:text-xl">
            VECTOR STUDIOS AI
          </span>
        </motion.a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {mainNav.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="font-label-sm uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
              whileHover={reduce ? {} : { y: -1 }}
              transition={springSoft}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <motion.a
          href="#contacto"
          className="whitespace-nowrap bg-primary px-4 py-2 text-center font-label-sm uppercase tracking-widest text-on-primary md:px-6"
          whileHover={reduce ? {} : { scale: 1.03, boxShadow: "0 0 24px rgba(173,206,186,0.25)" }}
          whileTap={reduce ? {} : { scale: 0.97 }}
          transition={springSoft}
        >
          Solicitar diagnóstico
        </motion.a>
      </div>
    </motion.header>
  );
}
