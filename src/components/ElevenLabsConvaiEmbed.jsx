import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ELEVENLABS_AGENT_ID, ELEVENLABS_WIDGET_SCRIPT } from "../config/elevenlabs.js";

let scriptLoadPromise = null;

function loadWidgetScript() {
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${ELEVENLABS_WIDGET_SCRIPT}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = ELEVENLABS_WIDGET_SCRIPT;
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });

  return scriptLoadPromise;
}

async function mountWidget(host) {
  await loadWidgetScript();
  await customElements.whenDefined("elevenlabs-convai");

  if (host.querySelector("elevenlabs-convai")) return;

  const widget = document.createElement("elevenlabs-convai");
  widget.setAttribute("agent-id", ELEVENLABS_AGENT_ID);
  host.appendChild(widget);
}

/** Widget flotante nativo de ElevenLabs (sin UI personalizada). */
export default function ElevenLabsConvaiEmbed() {
  const hostRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!mounted || !host) return;

    mountWidget(host).catch((err) => {
      console.error("[ElevenLabs ConvAI] No se pudo cargar el widget:", err);
    });
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div ref={hostRef} className="convai-embed-root" aria-label="Asistente de voz Vector Studios AI" />,
    document.body
  );
}
