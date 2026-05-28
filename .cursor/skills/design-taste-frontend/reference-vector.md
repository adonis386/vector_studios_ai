# Vector Studios AI — marca (prioridad sobre defaults genéricos)

Al trabajar en este repo (`vector_studios_ia`), **lee primero** `docs/MANUAL-DE-MARCA-VECTOR-STUDIOS.md`.

## Dirección visual obligatoria

- Modo **claro** fijo (laboratorio de ingeniería de lujo, no cyberpunk ni neon).
- Paleta: verde salvia / bosque (`primary`, `primary-deep`), perla/azul gris (`secondary`), fondo `#faf9f6`.
- Tipografía: **Plus Jakarta Sans** (ya en el proyecto).
- Sin gradientes mesh morados, sin tres cards iguales en fila, sin copy con em-dash decorativo.
- Motion: **GSAP ScrollTrigger + Lenis** y Framer Motion ya instalados; no `window.addEventListener('scroll')` para animaciones.

## Stack

- Vite + React + Tailwind. Tokens en `tailwind.config.js` y `src/index.css`.
- No reescribir la arquitectura de scroll/embed (Header portal, ElevenLabs nativo) sin pedirlo.

Cuando Taste Skill y el manual discrepen, **gana el manual de Vector Studios**.
