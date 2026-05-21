/** Iconos de servicios — trazo fino, coherente con logo-mark (punto + vectores) */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
};

function IconFrame({ children, className = "h-10 w-10", ...props }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** 1 — App móvil: dispositivo + señal vectorial desde el centro */
export function IconApps({ className, ...props }) {
  return (
    <IconFrame className={className} {...props}>
      <rect x="12" y="6" width="16" height="28" rx="3" {...stroke} />
      <line x1="17" y1="30" x2="23" y2="30" {...stroke} opacity="0.5" />
      <circle cx="20" cy="18" r="1.75" fill="currentColor" stroke="none" />
      <g opacity="0.75">
        <line x1="20" y1="18" x2="20" y2="11" {...stroke} />
        <line x1="20" y1="18" x2="26" y2="14" {...stroke} />
        <line x1="20" y1="18" x2="27" y2="18" {...stroke} />
        <line x1="20" y1="18" x2="26" y2="22" {...stroke} />
      </g>
    </IconFrame>
  );
}

/** 2 — Web / panel: ventana con layout de dashboard */
export function IconWeb({ className, ...props }) {
  return (
    <IconFrame className={className} {...props}>
      <rect x="7" y="9" width="26" height="22" rx="2" {...stroke} />
      <line x1="7" y1="14" x2="33" y2="14" {...stroke} />
      <circle cx="10.5" cy="11.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="11.5" r="0.75" fill="currentColor" stroke="none" opacity="0.5" />
      <rect x="10" y="18" width="11" height="10" rx="1" {...stroke} opacity="0.85" />
      <line x1="24" y1="18" x2="30" y2="18" {...stroke} opacity="0.7" />
      <line x1="24" y1="22" x2="28" y2="22" {...stroke} opacity="0.7" />
      <rect x="24" y="25" width="6" height="3" rx="0.5" {...stroke} opacity="0.7" />
    </IconFrame>
  );
}

/** 3 — Agentes IA: burbujas + onda de voz (sin robot) */
export function IconAgentes({ className, ...props }) {
  return (
    <IconFrame className={className} {...props}>
      <path
        d="M9 14a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5l-3 3v-3H12a3 3 0 0 1-3-3v-5z"
        {...stroke}
      />
      <path
        d="M20 20a2.5 2.5 0 0 1 2.5-2.5H29a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-3.5l-2.5 2.5v-2.5H22.5A2.5 2.5 0 0 1 20 24v-4z"
        {...stroke}
        opacity="0.65"
      />
      <path
        d="M14 28 Q20 32 26 28"
        {...stroke}
        strokeWidth="1.2"
        opacity="0.55"
      />
      <circle cx="14" cy="15" r="0.9" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="25" cy="21" r="0.75" fill="currentColor" stroke="none" opacity="0.35" />
    </IconFrame>
  );
}

/** 4 — Integraciones: nodos conectados + enchufe abstracto */
export function IconIntegraciones({ className, ...props }) {
  return (
    <IconFrame className={className} {...props}>
      <circle cx="11" cy="20" r="3.5" {...stroke} />
      <circle cx="29" cy="20" r="3.5" {...stroke} />
      <line x1="14.5" y1="20" x2="25.5" y2="20" {...stroke} />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" opacity="0.5" />
      <path d="M20 10v5M17 10h6" {...stroke} opacity="0.7" />
      <path d="M20 30v5M17 35h6" {...stroke} opacity="0.7" />
      <g opacity="0.6">
        <line x1="11" y1="16.5" x2="11" y2="12" {...stroke} />
        <line x1="9" y1="12" x2="13" y2="12" {...stroke} />
        <line x1="29" y1="23.5" x2="29" y2="28" {...stroke} />
        <line x1="27" y1="28" x2="31" y2="28" {...stroke} />
      </g>
    </IconFrame>
  );
}
