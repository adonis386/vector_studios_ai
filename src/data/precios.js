/** Planes de inversión (USD) — desarrollo + IA */
export const preciosIntro = {
  eyebrow: "Planes de inversión",
  titulo: "Elige el alcance según tu etapa",
  lead: "Montos en USD. En el diagnóstico afinamos integraciones, volumen de conversaciones y si necesitas app móvil además de web.",
};

export const preciosPlanes = [
  {
    id: "smart-connect",
    nombre: "Smart Connect",
    etiqueta: "Web + IA en texto",
    ideal: "Negocios que quieren presencia profesional y atención automatizada sin app móvil aún.",
    desarrollo: "Sitio o landing de alto rendimiento + asistente de IA en texto (WhatsApp y/o chat web).",
    estrategia: "Configuración del canal, guiones del asistente y conexión básica a tus datos.",
    diferencial: "Entrada accesible al ecosistema: vendes y respondes fuera del horario de oficina.",
    inversion: "$800 – $1,200 (setup) + $150/mes (mantenimiento y ajustes).",
    destacado: false,
    badge: null,
    cta: "Comenzar con Smart Connect",
    ctaVariant: "outline",
  },
  {
    id: "voice-identity",
    nombre: "Voice Identity",
    etiqueta: "Recomendado · texto + voz",
    ideal: "Marcas que quieren diferenciarse con voz propia y mayor tasa de cierre.",
    desarrollo: "Todo Smart Connect + agente con notas de voz y identidad verbal de marca.",
    estrategia: "Diseño de voz, guiones de venta y pruebas en WhatsApp y web.",
    diferencial: "Tu negocio se escucha como humano, no como un chatbot de plantilla.",
    inversion: "$2,000 – $2,500 (setup) + $350/mes (mantenimiento e infraestructura de voz).",
    destacado: true,
    badge: "Recomendado",
    cta: "Quiero Voice Identity",
    ctaVariant: "primary",
  },
  {
    id: "full-ecosystem",
    nombre: "Full Business Ecosystem",
    etiqueta: "App + web + IA unificada",
    ideal: "Empresas que necesitan app móvil, web corporativa e IA en todos los canales.",
    desarrollo:
      "Aplicación móvil + web/panel admin + agentes de texto y voz + integraciones con inventario, pagos o ERP.",
    estrategia: "Lanzamiento integral, optimización de procesos y soporte técnico prioritario.",
    diferencial: "Un solo cerebro de IA para app, web y WhatsApp; propiedad técnica clara.",
    inversion: "Desde $4,500 (proyecto a medida) + $700/mes (soporte premium).",
    destacado: false,
    badge: null,
    cta: "Solicitar ecosistema",
    ctaVariant: "outline",
  },
];
