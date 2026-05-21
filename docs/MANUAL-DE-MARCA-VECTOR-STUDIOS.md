# Vector Studios AI — Manual de marca

**Versión:** 1.0 · Mayo 2026  
**Estado:** Documento base (v1) — listo para revisión de socios  
**Uso:** Web, propuestas comerciales, redes, presentaciones y materiales de partners  

---

## Índice

1. [Esencia de marca](#1-esencia-de-marca)
2. [Posicionamiento y mensajes](#2-posicionamiento-y-mensajes)
3. [Logotipo y nombre](#3-logotipo-y-nombre)
4. [Paleta de color](#4-paleta-de-color)
5. [Tipografía](#5-tipografía)
6. [Iconografía e ilustración](#6-iconografía-e-ilustración)
7. [Fotografía y arte hero](#7-fotografía-y-arte-hero)
8. [Voz y tono](#8-voz-y-tono)
9. [Layout, espaciado y formas](#9-layout-espaciado-y-formas)
10. [Componentes UI](#10-componentes-ui)
11. [Aplicaciones](#11-aplicaciones)
12. [Co-branding y partners](#12-co-branding-y-partners)
13. [Qué no hacer](#13-qué-no-hacer)
14. [Archivos y tokens en el repo](#14-archivos-y-tokens-en-el-repo)
15. [Próximos entregables de branding](#15-próximos-entregables-de-branding)

---

## 1. Esencia de marca

### Quiénes somos

**Vector Studios AI** es un estudio de **desarrollo de productos digitales** (apps móviles y webs) que integra **agentes de inteligencia artificial** (texto y voz) como capa de valor. Entregamos código y datos bajo control del cliente, no un SaaS cerrado.

### Personalidad (3 palabras)

| Precisión | Confianza | Claridad |
|-----------|-----------|----------|
| Como un laboratorio de ingeniería | Sin hype vacío; resultados medibles | Lenguaje directo, español neutro |

### Metáfora visual

**Laboratorio de ingeniería de lujo en modo claro:** espacio amplio, rejilla sutil, líneas vectoriales, glow suave verde salvia y azul perla. Nada cyberpunk, nada “startup neon”, nada mascota robot.

### Audiencia

- Dueños de PYME y equipos operativos que necesitan **vender y atender** fuera del horario.
- Perfiles que valoran **propiedad del sistema** (app, web, WhatsApp oficial).
- Mercado principal previsto: **LATAM / hispanohablante**, precios en USD.

---

## 2. Posicionamiento y mensajes

### Propuesta de valor (oficial)

> Construimos apps y webs que venden y atienden solas: producto en la nube, agentes en WhatsApp, la app y la web, con propiedad técnica clara.

### Elevator pitch (30 s)

Vector Studios AI desarrolla aplicaciones móviles y plataformas web con Firebase y Next.js, y les suma agentes de IA en texto y voz para WhatsApp y canales digitales. No alquilas un chatbot genérico: obtienes un activo digital que puedes hacer crecer.

### Mensajes por pilar

| Pilar | Mensaje corto |
|-------|----------------|
| Desarrollo | App + web + panel, hechos a medida |
| IA texto | Atención y ventas 24/7 por WhatsApp y chat |
| IA voz | Tu marca se escucha, no un bot de plantilla |
| Propiedad | Código y datos tuyos; costos de API transparentes |

### Taglines alternativos (uso secundario)

- *Apps, webs e IA en un solo equipo*
- *Desarrollo propio. Conversación que convierte.*
- *El plus es la IA; el núcleo es tu producto.*

### Lo que no decimos en público

- Nombres de proveedores (OpenAI, ElevenLabs, WhatChimp) en la web general.
- “Laboratorio de voz” como único eje (la voz es **diferencial**, no el negocio entero).
- Promesas de ads/SEO/360° si no están en el contrato.

---

## 3. Logotipo y nombre

### Nombre legal / comercial

**Vector Studios AI** — en propuestas formales puede usarse **Vector Studios AI, LLC** o la razón social que definan los socios.

### Wordmark (mientras no exista logo final)

| Regla | Especificación |
|-------|----------------|
| Tipografía | **Plus Jakarta Sans**, peso **600–700**, tracking moderado (mayúsculas opcionales en nav) |
| Color sobre claro | `#062418` (primary-deep) o `#1D3A2C` (primary) |
| Color sobre oscuro | `#FFFFFF` o `#C9EAD6` (primary-fixed) |
| Escritura | **VECTOR STUDIOS AI** (nav) o **Vector Studios AI** (prosa) |

### Isotipo (dirección creativa v1)

- Símbolo derivado de **punto + rayos vectoriales** (coherente con `hero.png` y campo vectorial).
- Trazo fino, 1.5–2px a escala media; sin rellenos pesados.
- Puede incorporar un arco de **onda de voz** muy sutil (opcional).

*Assets en repo:* `public/logo.svg`, `public/logo-mark.svg`, `public/favicon.svg`.

### Zona de protección

Altura mínima de espacio libre alrededor del logo = **altura de la “V”** del wordmark en todos los lados.

### Tamaño mínimo

- Digital: wordmark ancho mínimo **120px**; isotipo **24px**.
- Impreso: ancho mínimo **30mm**.

### Usos incorrectos del logo

- No estirar, rotar, sombra dura, contorno, gradiente arcoíris.
- No sobre fotos sin overlay que garantice contraste.
- No cambiar verde por azul eléctrico o neon.

---

## 4. Paleta de color

### Principio

**Premium Light:** fondo cálido claro, verde bosque para acción y marca, azul pizarra para acento secundario (alineado al arte hero). Profundidad por **capas de superficie** y bordes, no por sombras fuertes.

### Colores de marca (usar estos en identidad)

| Token | HEX | Rol |
|-------|-----|-----|
| **Background** | `#FAF9F6` | Fondo principal de página (crema laboratorio) |
| **On background** | `#1A1C1B` | Texto largo, párrafos |
| **Primary deep** | `#062418` | Titulares, wordmark, máximo contraste de marca |
| **Primary** | `#1D3A2C` | Botones primarios, iconos de acción, bordes fuertes |
| **On primary** | `#FFFFFF` | Texto sobre botón verde |
| **Secondary** | `#4C5E86` | Acento en titulares (segunda línea), links, glow azul en arte |
| **Navy** | `#0A1F44` | Opcional: navegación o énfasis editorial (design doc) |
| **Primary fixed** | `#C9EAD6` | Fondos suaves, badges, highlights |
| **On surface variant** | `#424844` | Texto secundario, metadatos |

### Superficies (capas)

| Token | HEX | Uso |
|-------|-----|-----|
| surface-container-lowest | `#FFFFFF` | Tarjetas elevadas |
| surface-container-low | `#F4F4F1` | Secciones alternas |
| surface-container-high | `#E9E8E5` | Footer, paneles |
| outline / border-subtle | `#727973` / `#E2E8F0` | Bordes de tarjetas e inputs |

### Funcionales

| Estado | HEX |
|--------|-----|
| Error | `#BA1A1A` |
| Error container | `#FFDAD6` |

### Proporción recomendada en un layout

- **70%** background + superficies neutras  
- **20%** primary / primary-deep (texto + CTA)  
- **10%** secondary + primary-fixed (acentos)

### Accesibilidad (mínimo)

- Texto body `#1A1C1B` sobre `#FAF9F6`: OK.
- Texto `#FFFFFF` sobre `#1D3A2C` o `#062418`: OK para botones.
- No usar `#424844` sobre `#1D3A2C` (falla contraste).

---

## 5. Tipografía

### Familias

| Rol | Familia | Fallback |
|-----|---------|----------|
| **UI y marketing** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | system-ui, sans-serif |
| **Código / status / metadata técnica** | [JetBrains Mono](https://www.jetbrains.com/linode/mono/) | ui-monospace, monospace |

*Nota: el design doc menciona “Geist Mono” para tablas numéricas; en código usamos JetBrains Mono para bloques `> STATUS` — unificar en v1.1 si se licencia Geist Mono.*

### Escala tipográfica

| Estilo | Tamaño | Peso | Line-height | Tracking | Uso |
|--------|--------|------|-------------|----------|-----|
| **Display lg** | 48px (64px hero opcional) | 600 | 1.1 | -0.04em | Hero principal |
| **Headline lg** | 32px | 500 | 1.2 | -0.02em | Títulos de sección |
| **Headline md** | 24px | 500 | 1.3 | -0.01em | Subtítulos |
| **Body lg** | 18px | 400 | 1.6 | 0 | Lead / intro |
| **Body md** | 16px | 400 | 1.5 | 0 | Párrafos |
| **Body sm** | 14px | 400 | 1.5 | 0 | Tarjetas, notas |
| **Label md** | 12px | 600 | 1 | +0.05em | Eyebrows **MAYÚSCULAS** |
| **Mono code** | 13px | 400 | 1 | 0 | Terminal, KPIs |

### Reglas

- Eyebrows de sección: **LABEL MD**, uppercase, color **primary** o **primary-deep**.
- Titular hero: línea 1 **primary-deep**; acento línea 2 **secondary**.
- Máximo **2 pesos** por bloque (ej. 500 + 600, no 400 + 500 + 700 + 800).
- En móvil: display baja a **40–48px**, headline lg a **24–28px**.

---

## 6. Iconografía e ilustración

### Estilo de iconos

- Librería: **Lucide** (trazo 1.5–2px).
- Color: **primary** o **on-surface-variant**; nunca multicolor.
- Tamaños: 16px inline, 24px UI, 40px features.

### Ilustración

- Líneas vectoriales finas, radiantes, baja opacidad.
- Glows suaves **verde salvia** y **lavanda/azul** (como `public/hero.png`).
- Iconos de chat y ondas de voz **geométricos**, no personajes.

### No usar

- Robots 3D, cerebros, globos terráqueos cliché, iconos “IA” purple gradient.

---

## 7. Fotografía y arte hero

### Arte principal

Archivo: **`public/hero.png`**

| Atributo | Guía |
|----------|------|
| Composición | **Espacio libre a la izquierda** para titular y CTAs; gráfica a la derecha |
| Mood | Calma, precisión, confianza B2B |
| Elementos | Rejilla sutil, rayos vectoriales, burbujas de chat, ondas |
| Overlay web | Gradiente `from-background` 40–55% → transparente hacia la derecha |

### Fotografía (si se usa en futuro)

- Luz natural, oficina moderna, dispositivos reales; desaturada.
- Sin stock “sonrisas forzadas con laptop”.
- Tratamiento: leve calidez, no filtro frío azul corporativo.

---

## 8. Voz y tono

### Personalidad verbal

| Somos | No somos |
|-------|----------|
| Claros, directos | Hype (“revolucionario”, “disruptivo”) |
| Técnicos cuando hace falta | Jerga vacía de IA |
| Cercanos pero profesionales | Memes, chistes locales fuertes |
| Honestos con límites y precios | Prometer todo incluido sin scope |

### Español

- **Neutro internacional** (evitar modismos de un solo país).
- Tuteo o usted según cliente; en web: **tú** implícito (“tu marca”, “tu negocio”).

### Ejemplos de copy

| Contexto | Bien | Mal |
|----------|------|-----|
| CTA | Solicitar diagnóstico | ¡Empieza ya! |
| IA | Agentes de texto y voz integrados | IA de última generación potenciada |
| Precio | Montos en USD; alcance en diagnóstico | La solución más barata del mercado |

---

## 9. Layout, espaciado y formas

### Grid

| Breakpoint | Columnas | Márgenes | Max width |
|------------|----------|----------|-----------|
| Desktop | 12 | 48px (margin-desktop) | 1280px |
| Mobile | 4 | 16px (margin-mobile) | 100% |

### Baseline

Unidad base: **4px**. Espaciado entre secciones: **96–128px** (py-24 / py-32).

### Border radius

| Token | Valor | Uso |
|-------|-------|-----|
| sm | 4px | Chips pequeños |
| DEFAULT | 8px | Botones, inputs |
| lg | 16px | Tarjetas |
| xl | 24px | Modales, paneles grandes |
| full | 9999px | Pills, badges de estado |

### Elevación

- Preferir **borde 1px** `outline` / `border-subtle`.
- Sombra ambiental única: `0 4px 20px rgba(10, 31, 68, 0.04)` o `0 10px 40px rgba(71, 101, 85, 0.1)` en tarjetas destacadas.
- Glass: `bg-surface/80` + `backdrop-blur-sm` solo en hero/nav.

---

## 10. Componentes UI

### Botón primario

- Fondo: **primary** `#1D3A2C`
- Texto: **on-primary**, label uppercase (label-sm), tracking amplio
- Hover: ligero scale o sombra ambient verde
- Sin gradiente

### Botón secundario

- Borde **2px primary**
- Fondo transparente o `surface/60` + blur en hero
- Texto **primary**

### Badge / pill (hero)

- `border-primary/20`, `bg-primary/5` o `bg-surface/80`
- Punto pulsante **primary** (estado “activo”)

### Tarjetas

- Fondo `surface-container-lowest`, borde `outline`, `shadow-sm`
- Hover: `border-primary/50`, translateY -4px sutil

### Bloque “terminal”

- Font: **JetBrains Mono**, 10–13px
- Color: `primary/60`–`70`
- Borde L + B `primary/20`, fondo `surface/70` + blur

---

## 11. Aplicaciones

### Web (landing)

- Modo **claro fijo** (`class="light"`, `color-scheme: light`).
- Header: glass-nav, logo wordmark, CTA primario.
- Secciones: Servicios → Demo voz → Por qué → Planes → Contacto.

### Propuesta comercial (PDF)

- Portada: hero.png o fondo `#FAF9F6` + wordmark.
- Tipografía Geist; acentos verde; tablas con mono para precios.
- Tres líneas de facturación: Setup / Retainer / Uso IA (ver modelo de negocio).

### Redes sociales

- Avatar: isotipo sobre `#FAF9F6` o `#062418`.
- Posts: 40% texto máximo; gráfica vectorial; sin stock photos cliché.
- Formatos: 1080×1080, 1080×1920, 1200×628.

### Presentación socios

- Misma paleta; fondos claros; gráficos simples (tablas del manual de negocio).

---

## 12. Co-branding y partners

### WhatChimp (WhatsApp / Meta)

- En web pública: “WhatsApp oficial” / “canal verificado”, sin logo WhatChimp en hero.
- En propuesta técnica: nombre del BSP y desglose de costos.
- No usar colores de WhatChimp como si fueran de Vector.

### Cliente final

- En productos white-label: priorizar marca del cliente; Vector en “Powered by” pequeño si se acuerda.

---

## 13. Qué no hacer

- Modo oscuro sin adaptar tokens (evitar hasta tener tema completo).
- Gradientes purple/pink “AI”.
- Tipografía Inter/Roboto/Arial por defecto en materiales de marca.
- Mascotas, robots amigables, cerebros holográficos.
- Prometer “sin costo de API” o “WhatsApp gratis ilimitado”.
- Mezclar estilo agencia de diseño barata (Phantom) con precios premium sin entregar scope.

---

## 14. Archivos y tokens en el repo

| Recurso | Ruta |
|---------|------|
| Tokens Tailwind | `tailwind.config.js` |
| Design tokens YAML | `DESIGN (1).md` |
| Estilos globales | `src/index.css` |
| Hero art | `public/hero.png` |
| Logo / favicon / OG | `public/logo.svg`, `logo-mark.svg`, `favicon.svg`, `og-image.svg` |
| Manual PDF | `docs/MANUAL-DE-MARCA-VECTOR-STUDIOS.pdf` |
| Modelo de negocio | `docs/MODELO-DE-NEGOCIO-VECTOR-STUDIOS.md` |
| Copy web | `src/data/*.js` |

### Exportar a diseño (Figma)

Crear variables 1:1 con la tabla de color y tipografía de este manual. Importar `hero.png` como referencia de atmósfera.

---

## 15. Próximos entregables de branding

Checklist para cerrar identidad visual v1:

- [x] **Logo SVG** — `public/logo-mark.svg`, `public/logo.svg`
- [x] **Favicon** — `public/favicon.svg`
- [x] **OG image** — `public/og-image.svg` + `public/og-image.png` (regenerar con `public/og-export.html` + Edge screenshot)
- [x] **Componente** — `src/components/BrandLogo.jsx`
- [x] **Alinear tokens** en landing (titulares `primary-deep`, CTAs `primary`)
- [ ] **Plantilla propuesta** PDF (InDesign/Canva/Figma)
- [ ] **Tarjeta de presentación** digital
- [x] **PDF de este manual** — `docs/MANUAL-DE-MARCA-VECTOR-STUDIOS.pdf` (desde `MANUAL-DE-MARCA-VECTOR-STUDIOS.html`)

---

**Aprobación**

| Rol | Nombre | Fecha | Firma |
|-----|--------|-------|-------|
| Socio 1 | | | |
| Socio 2 | | | |

---

*Vector Studios AI · Manual de marca v1.0 · PDF: `docs/MANUAL-DE-MARCA-VECTOR-STUDIOS.pdf`*
