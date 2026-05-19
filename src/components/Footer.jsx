import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { mainNav } from "../data/navigation.js";
import { springSoft } from "../motion/variants.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();

  return (
    <motion.footer
      className="w-full border-t border-outline bg-surface-container-high py-14 md:py-16"
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-container-max flex-col items-start justify-between gap-12 px-margin-mobile md:flex-row md:px-margin-desktop">
        <div className="max-w-md space-y-5">
          <div className="flex items-center gap-3">
            <motion.span
              className="text-primary"
              aria-hidden="true"
              whileHover={reduce ? {} : { rotate: 12, scale: 1.08 }}
              transition={springSoft}
            >
              <Sparkles className="h-7 w-7" strokeWidth={1.75} />
            </motion.span>
            <span className="font-headline-lg text-lg font-bold uppercase tracking-widest text-primary">
              Vector Studios AI
            </span>
          </div>
          <p className="font-body-md text-sm leading-relaxed text-on-surface-variant">
            Desarrollo de apps y webs con agentes de IA integrados. Código y datos tuyos; texto y voz con identidad de tu marca.
          </p>
          <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/50">
            © {year} Vector Studios AI. Todos los derechos reservados.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-12" aria-label="Pie de página">
          <div className="flex flex-col gap-3">
            <span className="font-label-sm uppercase tracking-widest text-primary">Navegación</span>
            {mainNav.map((item) => (
              <a
                key={item.href}
                className="font-label-sm uppercase text-on-surface-variant transition-colors hover:text-primary"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-sm uppercase tracking-widest text-primary">Legal</span>
            <a className="font-label-sm uppercase text-on-surface-variant transition-colors hover:text-primary" href="#">
              Aviso de privacidad
            </a>
            <a className="font-label-sm uppercase text-on-surface-variant transition-colors hover:text-primary" href="#">
              Términos
            </a>
          </div>
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <span className="font-label-sm uppercase tracking-widest text-primary">Contacto</span>
            <a className="font-label-sm text-on-surface-variant transition-colors hover:text-primary" href="mailto:hola@vectorstudios.ai">
              hola@vectorstudios.ai
            </a>
          </div>
        </nav>
      </div>
    </motion.footer>
  );
}
