/**
 * Referencia interna (USD) — no se muestra en la landing.
 * La web usa la sección Cotiza (#cotiza). Ver docs/MODELO-DE-NEGOCIO v2.0.
 */
export const preciosIntro = {
  eyebrow: "Planes de inversión",
  titulo: "Elige el alcance según tu etapa",
  lead: "Montos en USD. En el diagnóstico afinamos integraciones, volumen de conversaciones y si necesitas app móvil además de web.",
};

export const preciosPlanes = [
  {
    id: "smart-connect",
    nombre: "Entrada",
    etiqueta: "Web + IA en texto",
    ideal: "Negocios que quieren presencia profesional y atención automatizada sin app móvil aún.",
    desarrollo:
      "Sitio o landing de alto rendimiento (5–7 secciones) + asistente de IA en texto (WhatsApp y/o chat web).",
    estrategia: "Canal oficial, guiones del asistente y hasta 1 integración simple (CRM, hoja o webhook).",
    diferencial: "Entrada al ecosistema: vendes y respondes fuera del horario (~500 conversaciones/mes incluidas en alcance base).",
    inversion: "$1,400 – $1,800 (setup) + $199 – $249/mes (mantenimiento, ajustes y soporte ~2 h).",
    destacado: false,
    badge: null,
    cta: "Comenzar con Entrada",
    ctaVariant: "outline",
  },
  {
    id: "voice-identity",
    nombre: "Voice Identity",
    etiqueta: "Recomendado · texto + voz",
    ideal: "Marcas que quieren diferenciarse con voz propia y mayor tasa de cierre.",
    desarrollo: "Todo Entrada + agente con notas de voz e identidad verbal de marca.",
    estrategia: "Diseño de voz, guiones de venta y pruebas en WhatsApp y web; minutos de voz/mes acotados.",
    diferencial: "Tu negocio se escucha como humano, no como un chatbot de plantilla.",
    inversion: "$2,500 – $3,500 (setup) + $349 – $449/mes (mantenimiento e infraestructura de voz).",
    destacado: true,
    badge: "Recomendado",
    cta: "Quiero Voice Identity",
    ctaVariant: "primary",
  },
  {
    id: "full-ecosystem",
    nombre: "Completo",
    etiqueta: "Producto digital por fases",
    ideal: "Empresas que necesitan app móvil, web corporativa e IA en todos los canales.",
    desarrollo:
      "Fase 1: web + panel + agentes texto/voz y arquitectura para crecer. Fases 2–3: app móvil e integraciones (inventario, pagos, ERP).",
    estrategia: "Retainer de desarrollo, lanzamiento por fases y soporte técnico prioritario.",
    diferencial: "Un solo cerebro de IA para app, web y WhatsApp; propiedad técnica clara.",
    inversion: "$4,500 (Fase 1) + cotización fases siguientes · $599 – $999/mes (retainer dev y soporte).",
    destacado: false,
    badge: null,
    cta: "Solicitar ecosistema completo",
    ctaVariant: "outline",
  },
];
