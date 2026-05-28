import {
  IconAgentes,
  IconApps,
  IconIntegraciones,
  IconWeb,
} from "../components/icons/ServicioIcons.jsx";

/** Servicios — apps como especialidad, IA como capa */
export const serviciosIntro = {
  titulo: "Capacidades de desarrollo",
  tituloAccent: "producto, plataforma e inteligencia artificial",
  lead: "Un solo equipo técnico para aplicaciones móviles, plataformas web, agentes conversacionales e integraciones con sus sistemas existentes.",
};

export const serviciosItems = [
  {
    id: "apps",
    Icon: IconApps,
    titulo: "Aplicaciones móviles",
    badge: "Especialidad",
    texto:
      "Apps nativas multiplataforma para clientes finales o equipos internos: reservas, pedidos, seguimiento y notificaciones. Sincronización en tiempo real con su base de datos, panel administrativo y agentes de IA embebidos en la experiencia móvil.",
  },
  {
    id: "web",
    Icon: IconWeb,
    titulo: "Plataformas web y paneles",
    texto:
      "Sitios corporativos, portales de conversión y dashboards operativos. Arquitectura preparada para escalar hacia app móvil, integraciones empresariales y capas de inteligencia artificial.",
  },
  {
    id: "agentes",
    Icon: IconAgentes,
    titulo: "Agentes de IA (texto y voz)",
    texto:
      "Asistentes conversacionales integrados en WhatsApp, web y aplicación móvil. Identidad verbal de marca, calificación de leads y notas de voz. Un mismo criterio de comunicación en todos los canales.",
  },
  {
    id: "integraciones",
    Icon: IconIntegraciones,
    titulo: "Integraciones y sistemas a medida",
    texto:
      "Conexión con CRM, ERP, pasarelas de pago e inventario. Desarrollamos flujos y herramientas internas para que operación, ventas y producto digital trabajen sobre la misma información.",
  },
];
