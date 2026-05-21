import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BrandLogo from "./BrandLogo.jsx";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";
import { mainNav } from "../data/navigation.js";
import { springSoft, springSnappy } from "../motion/variants.js";

export default function Header() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  if (!mounted) return null;

  return createPortal(
    <>
      <motion.header
        className={`site-header-layer w-full transition-[background,box-shadow,padding] duration-300 ${
          scrolled ? "glass-nav-scrolled" : "glass-nav"
        }`}
        initial={reduce ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...springSoft, delay: 0.05 }}
      >
        <div
          className={`mx-auto flex max-w-container-max items-center justify-between gap-4 px-margin-mobile transition-[padding] duration-300 md:px-margin-desktop ${
            scrolled ? "py-3" : "py-4 md:py-5"
          }`}
        >
          <motion.a
            href="#inicio"
            className="flex min-w-0 shrink-0 items-center"
            aria-label="Vector Studios AI — inicio"
            onClick={closeMenu}
            whileHover={reduce ? {} : { scale: 1.02 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={springSoft}
          >
            <BrandLogo size="md" wordmarkClassName="hidden sm:inline" />
          </motion.a>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
            {mainNav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contacto"
              className="header-cta hidden items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 text-center font-label-sm uppercase tracking-widest text-on-primary sm:inline-flex md:px-6"
              whileHover={reduce ? {} : { scale: 1.02 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              transition={springSnappy}
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              Solicitar diagnóstico
            </motion.a>

            <motion.button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-outline/60 bg-white/70 text-primary-deep backdrop-blur-sm lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((o) => !o)}
              whileTap={reduce ? {} : { scale: 0.94 }}
              transition={springSnappy}
            >
              {menuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-[199] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-primary-deep/20 backdrop-blur-[2px]"
              aria-label="Cerrar menú"
              onClick={closeMenu}
            />
            <motion.nav
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col border-l border-outline/50 bg-background/98 px-margin-mobile pb-8 pt-24 shadow-card-hover backdrop-blur-xl"
              aria-label="Menú móvil"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={springSoft}
            >
              <ul className="flex flex-col gap-1">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, ...springSoft }}
                  >
                    <a
                      href={item.href}
                      className="block rounded-lg px-3 py-4 font-headline-lg text-lg text-primary-deep transition-colors hover:bg-primary-fixed/40"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#contacto"
                className="header-cta mt-6 flex w-full items-center justify-center gap-2 py-4 text-center font-label-sm uppercase tracking-widest text-on-primary"
                onClick={closeMenu}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ...springSoft }}
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                Solicitar diagnóstico
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}
