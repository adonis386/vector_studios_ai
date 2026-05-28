/**
 * Planes públicos en #cotiza — una sola sección, 3 rutas + Plus IA.
 * Integraciones, landings puntuales y alcances menores: solo en diagnóstico.
 */

export const preciosIntro = {
  titulo: "Inversión de referencia",
  tituloAccent: "tres rutas, un diagnóstico",
  lead: "Precios desde en USD, alineados al mercado regional en web y competitivos en producto móvil. Plus IA e integraciones se cotizan en diagnóstico según alcance.",
  nota: "Los montos finales dependen del alcance acordado. Uso de APIs de conversación y voz con topes en contrato. Código y datos en cuentas de su organización.",
  pie: "También disponible: web esencial desde $499, App MVP desde $3,200, app operativa interna y programa Ecosistema multi-fase desde $2,500. Integraciones CRM, pagos e inventario según alcance.",
};

/** Tres planes principales — única grilla de la landing */
export const preciosPlanes = [
  {
    id: "negocio",
    nombre: "Negocio",
    etiqueta: "Plataforma web",
    ideal: "Sitio corporativo que opera: catálogo, reservas o captación diaria. Sin agente IA incluido.",
    setupDesde: 799,
    mensualDesde: 109,
    incluye: [
      "Sitio a medida y panel o CMS acordado",
      "Mobile-first, SEO básico y analítica",
      "Formularios, catálogo o reservas",
      "Código en su cuenta de nube",
      "Base para sumar app móvil o Plus IA",
    ],
    destacado: false,
    badge: null,
    cta: "Cotizar web",
    ctaVariant: "outline",
    sinIa: true,
  },
  {
    id: "app-plataforma",
    nombre: "App + Plataforma",
    etiqueta: "Especialidad Vector",
    ideal: "Ecosistema unificado: aplicación iOS/Android, web y panel con la misma base de datos.",
    setupDesde: 4800,
    mensualDesde: 249,
    incluye: [
      "App móvil + web + panel administrativo",
      "Roles cliente, operador y administrador",
      "Backend en nube y sincronización en tiempo real",
      "Preparado para Plus IA in-app y WhatsApp",
      "Hasta 2 integraciones en alcance inicial",
    ],
    destacado: true,
    badge: "Recomendado",
    cta: "Cotizar app y plataforma",
    ctaVariant: "primary",
  },
  {
    id: "ecosistema",
    nombre: "Ecosistema",
    etiqueta: "A medida",
    ideal: "Programa por fases: integraciones corporativas, app, web e IA en todos los canales.",
    setupDesde: 2500,
    mensualDesde: 399,
    incluye: [
      "Alcance y cronograma por fases documentados",
      "CRM, pagos, inventario o ERP según diagnóstico",
      "Un equipo para producto e inteligencia artificial",
      "Propiedad técnica y roadmap evolutivo",
      "Retainer de desarrollo y soporte prioritario",
    ],
    destacado: false,
    badge: null,
    cta: "Solicitar ecosistema",
    ctaVariant: "outline",
    faseNota: "Inversión inicial según Fase 1 acordada",
  },
];

/** Plus IA — una franja, no tres tarjetas */
export const preciosPlusIa = {
  titulo: "Plus IA",
  subtitulo: "Capa opcional sobre web o app",
  lead: "Agentes de texto y voz integrados en WhatsApp, web y aplicación móvil. Diseño conversacional e identidad de marca, no chatbot genérico.",
  opciones: [
    {
      id: "texto",
      nombre: "Agente de texto",
      setupDesde: 599,
      mensualDesde: 139,
      detalle: "WhatsApp, chat web e in-app. Guiones, topes de conversación e integración operativa.",
    },
    {
      id: "completo",
      nombre: "Texto + voz de marca",
      setupDesde: 1550,
      mensualDesde: 279,
      detalle: "Un cerebro multi-canal con notas de voz e identidad verbal acordada en contrato.",
    },
  ],
  cta: "Consultar Plus IA",
};
