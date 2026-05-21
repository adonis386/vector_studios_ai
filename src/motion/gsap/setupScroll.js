import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { initHeroIntro } from "./heroIntro.js";
import { splitWordsInElement } from "./splitWords.js";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function bindLenisToScrollTrigger(lenis) {
  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  lenis.on("scroll", ScrollTrigger.update);
}

export function initScrollAnimations() {
  const reduced = prefersReducedMotion();
  let lenis = null;
  let tickerRaf = null;

  if (!reduced) {
    lenis = new Lenis({
      duration: 1.12,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    bindLenisToScrollTrigger(lenis);

    tickerRaf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerRaf);
    gsap.ticker.lagSmoothing(0);
  }

  const ctx = gsap.context(() => {
    if (reduced) return;

    initHeroIntro();

    gsap.utils.toArray(".gsap-split-words").forEach((el) => {
      const words = splitWordsInElement(el);
      if (!words.length) return;

      gsap.from(words, {
        yPercent: 110,
        opacity: 0,
        rotateX: -42,
        transformOrigin: "50% 100%",
        duration: 0.75,
        stagger: 0.045,
        ease: "back.out(1.35)",
        scrollTrigger: {
          trigger: el.closest(".gsap-reveal-head") || el,
          start: "top 84%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".gsap-reveal-head").forEach((el) => {
      const nonSplit = el.querySelectorAll(":scope > .section-eyebrow, :scope > .section-lead");
      if (nonSplit.length) {
        gsap.from(nonSplit, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    gsap.utils.toArray(".gsap-reveal-stagger").forEach((container) => {
      const items = container.querySelectorAll(".gsap-reveal-item");
      if (!items.length) return;

      gsap.from(items, {
        y: 48,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.11,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".gsap-reveal-block").forEach((el) => {
      const split = el.querySelector(".gsap-split-words");
      const rest = split
        ? [...el.children].filter((c) => !c.classList.contains("gsap-split-words"))
        : [...el.children];

      if (rest.length) {
        gsap.from(rest, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

  });

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  return () => {
    ctx.revert();
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.scrollerProxy(document.documentElement, {});

    if (lenis) {
      if (tickerRaf) gsap.ticker.remove(tickerRaf);
      lenis.destroy();
    }
  };
}
