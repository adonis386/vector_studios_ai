import { Layers3, MessageSquareQuote, ShieldCheck, SlidersHorizontal } from "lucide-react";

export const cotizaIntro = {
  eyebrow: "Inversión a medida",
  titulo: "Cotiza con nosotros",
  tituloAccent: "nos adaptamos a tu proyecto",
  lead:
    "No publicamos tarifas fijas: cada app, web o agente de IA es distinto. En una sesión entendemos tu caso y te proponemos alcance, tiempos e inversión con total transparencia.",
  cta: "Solicitar cotización",
};

export const cotizaPilares = [
  {
    id: "alcance",
    Icon: MessageSquareQuote,
    titulo: "Alcance antes que código",
    texto:
      "Definimos qué entra en la primera versión, qué queda para una fase dos y qué no hace falta — para que inviertas donde genera retorno.",
  },
  {
    id: "flex",
    Icon: SlidersHorizontal,
    titulo: "Proyecto a tu medida",
    texto:
      "Desde una app o web con IA básica hasta un ecosistema con voz de marca, WhatsApp y panel. El presupuesto sigue el scope, no al revés.",
  },
  {
    id: "stack",
    Icon: Layers3,
    titulo: "Todo en un solo equipo",
    texto:
      "Desarrollo móvil y web, infraestructura en la nube, agentes de texto y voz: una propuesta coherente sin coordinar a varios proveedores.",
  },
  {
    id: "claridad",
    Icon: ShieldCheck,
    titulo: "Números sin letra pequeña",
    texto:
      "Separamos desarrollo y costos recurrentes de APIs de IA. Sabes qué es tuyo (código, datos) y qué pagas según uso real.",
  },
];

export const cotizaProceso = [
  {
    n: "01",
    titulo: "Cuéntanos qué quieres construir",
    texto: "App, web, canal de voz, WhatsApp o varias piezas integradas.",
  },
  {
    n: "02",
    titulo: "Sesión de diagnóstico",
    texto: "Alineamos objetivos, usuarios y prioridades — sin compromiso de compra.",
  },
  {
    n: "03",
    titulo: "Propuesta personalizada",
    texto: "Recibes alcance, plazos orientativos e inversión adaptada a tu proyecto.",
  },
];
