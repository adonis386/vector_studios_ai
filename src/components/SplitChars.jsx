/** Caracteres animables por palabra (evita cortes tipo "platafo| rmas") */
export default function SplitChars({ text, className = "" }) {
  const words = text.trim().split(/\s+/).filter(Boolean);

  return (
    <>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className={`hero-word inline-block whitespace-nowrap ${
            wordIndex < words.length - 1 ? "mr-[0.3em]" : ""
          }`}
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={`${char}-${charIndex}`}
              className={`gsap-char inline-block ${className}`}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}
