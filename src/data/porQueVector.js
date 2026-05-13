import { Code2, Gem, Megaphone, Percent } from "lucide-react";

export const porQueIntro = {
  titulo: "Por qué elegir Vector Studios AI",
  leadBefore:
    "A diferencia de las plataformas de alquiler mensual donde nunca eres dueño de tu sistema, en Vector Studios AI construimos ",
  leadEmphasis: "activos digitales",
  leadAfter: ".",
};

export const porQuePilares = [
  {
    id: "comisiones",
    Icon: Percent,
    titulo: "Sin comisiones por mensaje",
    texto: "Pagas el costo real de la plataforma, sin intermediarios.",
  },
  {
    id: "propiedad",
    Icon: Gem,
    titulo: "Propiedad intelectual",
    texto: "El código y los datos son tuyos, no de una plataforma cerrada.",
  },
  {
    id: "ingenieria",
    Icon: Code2,
    titulo: "Ingeniería y mercadotecnia",
    texto:
      "Unimos el desarrollo de software con la estrategia de mercadotecnia profesional para que tu inversión genere retornos.",
    IconSecondary: Megaphone,
  },
];
