import gsap from "gsap";

export function initHeroIntro() {
  const chars = document.querySelectorAll(".gsap-hero-char");
  const fades = document.querySelectorAll(".gsap-hero-fade");

  if (!chars.length) return;

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.from(chars, {
    yPercent: 120,
    opacity: 0,
    rotateX: -75,
    transformOrigin: "50% 100%",
    duration: 0.85,
    stagger: { amount: 0.55, from: "start" },
    ease: "back.out(1.4)",
  });

  if (fades.length) {
    tl.from(
      fades,
      {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.35"
    );
  }

  const status = document.querySelector(".gsap-hero-status");
  if (status) {
    tl.from(
      status,
      {
        x: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }
}
