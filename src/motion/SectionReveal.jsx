/** Contenedor de sección — animaciones de entrada vía GSAP ScrollTrigger */
export default function SectionReveal({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
