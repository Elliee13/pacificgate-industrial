import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Fades sections up as they scroll into view. CSS skips the effect for reduced-motion users. */
export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    sections.forEach((el, i) => {
      // Leave the first (hero) section visible immediately for fast paint.
      if (i === 0) return;
      el.setAttribute("data-reveal", "");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
}
