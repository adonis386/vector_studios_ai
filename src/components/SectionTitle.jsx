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
            <span className="gsap-split-words block overflow-hidden px-1 pb-1 md:overflow-visible md:px-0 md:pb-0">
              {title}
            </span>
            <span className="gsap-split-words mt-1 block overflow-hidden px-1 pb-1 text-secondary md:mt-2 md:overflow-visible md:px-0 md:pb-0">
              {titleAccent}
            </span>
          </>
        ) : (
          <span className="gsap-split-words block overflow-hidden px-1 pb-1 md:overflow-visible md:px-0 md:pb-0">
            {title}
          </span>
        )}
      </h2>

      {lead && (
        <p className="section-lead mx-auto mt-6 max-w-2xl text-on-surface-variant md:mt-8">{lead}</p>
      )}
    </header>
  );
}
