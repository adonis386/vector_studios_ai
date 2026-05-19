import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { Bot, Pause, Play } from "lucide-react";
import { efectoVozContent } from "../data/efectoVoz.js";
import SectionReveal from "../motion/SectionReveal.jsx";
import { springSnappy, springSoft } from "../motion/variants.js";
import WaveformBars from "./WaveformBars.jsx";

export default function EfectoVoz() {
  const [mode, setMode] = useState("voz");
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  const { eyebrow, titulo, lead, bullets, hintTexto, hintVozIdle, hintVozPlay } = efectoVozContent;

  const setTexto = useCallback(() => {
    setMode("texto");
    setPlaying(false);
  }, []);

  const setVoz = useCallback(() => {
    setMode("voz");
  }, []);

  const togglePlay = useCallback(() => {
    setMode("voz");
    setPlaying((p) => !p);
  }, []);

  return (
    <SectionReveal id="efecto-voz" className="scroll-mt-24 bg-surface-container-low">
      <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-28">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-label-sm mb-3 uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          <h2 className="font-headline-lg text-2xl text-primary md:text-4xl">{titulo}</h2>
          <p className="mt-4 leading-relaxed text-on-surface-variant">{lead}</p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-3 text-sm text-on-surface-variant md:text-body-md">
            {bullets.map(({ Icon, text }, i) => (
              <motion.li
                key={text}
                className="flex gap-3"
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
                {text}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="rounded-xl border border-outline bg-surface-container-lowest p-6 shadow-sm md:p-8"
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={springSoft}
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="font-label-sm uppercase tracking-widest text-on-surface-variant">
                Demo interactiva
              </span>
              <motion.div
                className="flex rounded-lg border border-outline bg-surface/80 p-0.5"
                role="tablist"
                aria-label="Modo de mensaje"
              >
                <motion.button
                  type="button"
                  role="tab"
                  aria-selected={mode === "texto"}
                  onClick={setTexto}
                  className={`rounded-md border border-transparent px-3 py-2 font-label-sm uppercase tracking-wider ${
                    mode === "texto"
                      ? "border-primary/50 bg-primary-container/35 text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                >
                  Solo texto
                </motion.button>
                <motion.button
                  type="button"
                  role="tab"
                  aria-selected={mode === "voz"}
                  onClick={setVoz}
                  className={`rounded-md border border-transparent px-3 py-2 font-label-sm uppercase tracking-wider ${
                    mode === "voz"
                      ? "border-primary/50 bg-primary-container/35 text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                >
                  + Nota de voz
                </motion.button>
              </motion.div>
            </div>

            <div className="min-h-[220px] space-y-4 rounded-lg border border-outline bg-surface-container-high/50 p-4">
              <motion.div
                className="flex justify-end gap-3"
                initial={reduce ? false : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, ...springSoft }}
              >
                <motion.div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-primary/25 bg-primary-fixed/55 px-4 py-3 text-left text-sm text-on-surface">
                  Hola, ¿tienen disponible el pedido al por mayor que consulté? Necesito factura y entrega para mañana.
                </motion.div>
              </motion.div>

              <div className="flex items-end justify-start gap-3">
                <motion.div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline bg-surface-variant"
                  aria-hidden="true"
                  animate={
                    reduce
                      ? {}
                      : {
                          boxShadow: [
                            "0 0 0 0 rgba(6,36,24,0)",
                            "0 0 0 6px rgba(6,36,24,0.06)",
                            "0 0 0 0 rgba(6,36,24,0)",
                          ],
                        }
                  }
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Bot className="h-4 w-4 text-primary" strokeWidth={2} />
                </motion.div>
                <div className="max-w-[88%] space-y-3 text-left">
                  <AnimatePresence mode="wait">
                    {mode === "texto" && (
                      <motion.div
                        key="texto"
                        role="tabpanel"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.22 }}
                        className="rounded-2xl rounded-tl-sm border border-outline bg-surface-container-high px-4 py-3 text-sm text-on-surface-variant"
                      >
                        Estimado cliente: adjunto PDF. Quedamos atentos a cualquier duda. Saludos cordiales.
                      </motion.div>
                    )}
                    {mode === "voz" && (
                      <motion.div
                        key="voz"
                        role="tabpanel"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.22 }}
                        className="flex items-center gap-4 rounded-2xl rounded-tl-sm border border-primary/30 bg-surface-container-high px-4 py-3 text-sm text-on-surface"
                        aria-label="Reproductor de nota de voz simulada"
                      >
                        <motion.button
                          type="button"
                          onClick={togglePlay}
                          aria-pressed={playing}
                          aria-label="Reproducir o pausar animación de onda"
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/15"
                          whileHover={reduce ? {} : { scale: 1.06 }}
                          whileTap={{ scale: 0.94 }}
                          transition={springSnappy}
                        >
                          {playing ? (
                            <Pause className="h-6 w-6 text-primary" strokeWidth={2} />
                          ) : (
                            <Play className="h-6 w-6 text-primary" strokeWidth={2} />
                          )}
                        </motion.button>
                        <motion.div className="min-w-0 flex-1">
                          <p className="mb-2 font-label-sm text-xs uppercase tracking-widest text-primary">
                            Nota de voz · tu marca
                          </p>
                          <WaveformBars playing={playing} />
                          <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">
                            “Te confirmo existencias, te envío la cotización y reservo con un anticipo mínimo. ¿Prefieres
                            que te llamemos en 10 minutos o que lo resolvamos por este canal?”
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <motion.p
              className="mt-4 text-center font-label-sm text-[11px] uppercase tracking-widest text-primary/90"
              key={mode + (playing ? "p" : "s")}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {mode === "texto" ? hintTexto : playing ? hintVozPlay : hintVozIdle}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}
