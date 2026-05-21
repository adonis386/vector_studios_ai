import {
  IconAgentes,
  IconApps,
  IconIntegraciones,
  IconWeb,
} from "../components/icons/ServicioIcons.jsx";

/** Servicios — desarrollo primero, IA como capa */
export const serviciosIntro = {
  eyebrow: "Qué construimos",
  titulo: "Producto digital + inteligencia artificial",
  lead: "Cuatro líneas de trabajo con un solo socio técnico: desde la app en el bolsillo del cliente hasta el agente que cierra ventas a las 3 de la mañana.",
};

export const serviciosItems = [
  {
    id: "apps",
    orden: 1,
    Icon: IconApps,
    titulo: "Aplicaciones móviles",
    texto:
      "Apps para tus clientes o para tu equipo interno: reservas, pedidos, seguimiento y notificaciones. Sincronización en tiempo real con tu base de datos y panel de administración cuando lo necesites.",
  },
  {
    id: "web",
    orden: 2,
    Icon: IconWeb,
    titulo: "Webs y paneles de control",
    texto:
      "Sitios corporativos, landings de conversión y dashboards para operar el negocio. Rápidos, seguros y pensados para conectar con tus agentes de IA y tus procesos de venta.",
  },
  {
    id: "agentes",
    orden: 3,
    Icon: IconAgentes,
    titulo: "Agentes de IA (texto y voz)",
    texto:
      "Asistentes que califican leads, responden dudas y envían notas de voz con identidad de tu marca. Mismo tono en WhatsApp, chat web y dentro de la app — disponibles 24/7 sin saturar a tu equipo.",
  },
  {
    id: "integraciones",
    orden: 4,
    Icon: IconIntegraciones,
    titulo: "Integraciones a medida",
    texto:
      "Conectamos tu producto digital con pagos, CRM, inventario o sistemas que ya usas. Menos copiar datos a mano y más operación fluida entre lo que ve el cliente y lo que pasa en tu negocio.",
  },
];
