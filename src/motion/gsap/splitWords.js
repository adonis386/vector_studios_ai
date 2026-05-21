/** Envuelve cada palabra en un span para stagger al scroll */
export function splitWordsInElement(el) {
  if (el.dataset.gsapSplit === "true") return el.querySelectorAll(".gsap-word");

  const text = el.textContent?.trim() ?? "";
  if (!text) return [];

  const words = text.split(/\s+/);
  el.textContent = "";
  el.dataset.gsapSplit = "true";

  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.className = "gsap-word inline-block";
    span.textContent = word;
    el.appendChild(span);
    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });

  return el.querySelectorAll(".gsap-word");
}
