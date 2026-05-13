/** Transiciones reutilizables — sensación de sistema “vivo” sin marear al usuario */

export const easeOutExpo = [0.22, 1, 0.36, 1];

export const springSoft = { type: "spring", stiffness: 120, damping: 22, mass: 0.9 };

export const springSnappy = { type: "spring", stiffness: 280, damping: 26 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

/** Orbe / resplandor — pulso orgánico tipo “núcleo activo” */
export const orbAlive = {
  scale: [1, 1.06, 0.98, 1.04, 1],
  opacity: [0.45, 0.72, 0.5, 0.68, 0.45],
};

export const orbTransition = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
};

/** Línea de estado tipo terminal */
export const statusLineDelay = (i) => ({ delay: 0.35 + i * 0.12, duration: 0.4, ease: easeOutExpo });
