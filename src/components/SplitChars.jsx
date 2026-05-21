/** Divide texto en caracteres para animación GSAP (estilo homepage gsap.com) */
export default function SplitChars({ text, className = "" }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`gsap-char inline-block ${className}`}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}
