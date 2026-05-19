import { Code2, Gem, Megaphone, Percent } from "lucide-react";

export const porQueIntro = {
  titulo: "Desarrollo propio, no alquiler de un SaaS cerrado",
  leadBefore: "Muchas herramientas cobran por mensaje y retienen tus datos. En Vector Studios AI construimos ",
  leadEmphasis: "activos digitales",
  leadAfter:
    ": apps y webs con IA integrada, código y base de datos que puedes hacer crecer sin depender de una plataforma genérica.",
};

export const porQuePilares = [
  {
    id: "comisiones",
    Icon: Percent,
    titulo: "Costos transparentes",
    texto: "Pagas el desarrollo, el mantenimiento y el uso real de las APIs de conversación y voz — sin comisiones ocultas por mensaje.",
  },
  {
    id: "propiedad",
    Icon: Gem,
    titulo: "Código y datos tuyos",
    texto: "El producto vive en tu cuenta de nube y repositorio. No quedas encerrado en un panel de terceros que puede subir precios o limitar funciones.",
  },
  {
    id: "ingenieria",
    Icon: Code2,
    titulo: "Ingeniería + conversación",
    texto:
      "No solo programamos: diseñamos guiones, identidad verbal y flujos de venta para que la IA suene como tu marca, no como un bot de plantilla.",
    IconSecondary: Megaphone,
  },
];
