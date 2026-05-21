/**
 * Titular de sección — escala display grande (impacto tipo wordart / agencia).
 */
export default function SectionTitle({
  eyebrow,
  title,
  titleAccent,
  lead,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-4xl text-left";

  return (
    <header className={`gsap-reveal-head mb-16 md:mb-20 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="section-eyebrow font-label-sm mb-5 uppercase text-primary md:mb-6">{eyebrow}</p>
      )}

      <h2 className="title-display text-primary-deep">
        {titleAccent != null ? (
          <>
            <span className="gsap-split-words block">{title}</span>
            <span className="gsap-split-words mt-1 block text-secondary md:mt-2">{titleAccent}</span>
          </>
        ) : (
          <span className="gsap-split-words block">{title}</span>
        )}
      </h2>

      {lead && (
        <p className="section-lead mx-auto mt-6 max-w-2xl text-on-surface-variant md:mt-8">{lead}</p>
      )}
    </header>
  );
}
