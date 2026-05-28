import { Code2, Gem, Megaphone, Percent, Smartphone } from "lucide-react";

export const porQueIntro = {
  titulo: "Ingeniería de producto, no suscripción genérica",
  leadBefore: "Las plataformas cerradas retienen datos y escalan costos por uso. En Vector Studios AI entregamos ",
  leadEmphasis: "activos digitales",
  leadAfter:
    ": aplicaciones móviles, software web e inteligencia artificial con código, repositorio e infraestructura bajo su control.",
};

export const porQuePilares = [
  {
    id: "apps",
    Icon: Smartphone,
    titulo: "Apps móviles como especialidad",
    texto:
      "Desde el MVP en tiendas hasta ecosistemas app + web + panel. Misma base de datos, reglas de negocio unificadas y camino claro para sumar IA y voz dentro de la aplicación.",
  },
  {
    id: "propiedad",
    Icon: Gem,
    titulo: "Propiedad técnica",
    texto:
      "El producto se despliega en su cuenta de nube y repositorio. Sin dependencia de un panel de terceros que limite funciones o modifique condiciones unilateralmente.",
  },
  {
    id: "ingenieria",
    Icon: Code2,
    titulo: "Producto e inteligencia artificial",
    texto:
      "Desarrollo de software y diseño conversacional en un mismo equipo: guiones, identidad verbal y arquitectura lista para texto y voz en app, web y WhatsApp.",
    IconSecondary: Megaphone,
  },
];
