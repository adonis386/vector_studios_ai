import { Blocks, Bot, Gauge, Smartphone } from "lucide-react";

/** Nuestros Servicios — orden fijo 1–4 */
export const serviciosItems = [
  {
    id: "web",
    orden: 1,
    Icon: Gauge,
    titulo: "Ecosistemas Web de Alta Velocidad",
    texto:
      "Desarrollamos plataformas digitales pensadas para cargar al instante y escalar con tu negocio — sobre infraestructura de carga instantánea y máxima seguridad. No es solo un sitio web: es el centro de control de tu operación, seguro, rápido y optimizado para convertir visitantes en clientes.",
  },
  {
    id: "apps",
    orden: 2,
    Icon: Smartphone,
    titulo: "Aplicaciones Móviles Inteligentes",
    texto:
      "Creamos apps nativas que tus clientes realmente querrán usar. Desde herramientas para fidelizar usuarios hasta sistemas de gestión interna, todo sincronizado en tiempo real con tu base de datos inteligente.",
  },
  {
    id: "agentes",
    orden: 3,
    Icon: Bot,
    titulo: "Agentes de Voz y Texto con IA",
    texto:
      "Humanizamos tu tecnología. Implementamos asistentes que no solo responden mensajes, sino que hablan con una voz humana clonada de tu propia marca para cerrar ventas, dar soporte y calificar prospectos vía canal oficial de WhatsApp automatizado con IA, las 24 horas.",
  },
  {
    id: "erp",
    orden: 4,
    Icon: Blocks,
    titulo: "Integración de Sistemas (ERP/Odoo)",
    texto:
      "Conectamos lo que tus clientes ven en línea (web y aplicación) con el núcleo operativo de tu empresa (inventario, facturación, logística). Hacemos que tus sistemas se integren para que dejes de depender del trabajo manual repetitivo.",
  },
];
