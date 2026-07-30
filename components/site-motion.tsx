"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR =
  "main > section, main article, main [data-reveal], main [data-motion-card]";

export function SiteMotion() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;
    let frameOne = 0;
    let frameTwo = 0;
    let timer = 0;

    function initializeMotion() {
      if (cancelled) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
      );

      if (reducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => {
          element.dataset.motionReady = "true";
          element.dataset.motionVisible = "true";
        });
        return;
      }

      elements.forEach((element, index) => {
        element.dataset.motionReady = "true";
        element.style.setProperty(
          "--motion-delay",
          `${Math.min(index % 4, 3) * 70}ms`,
        );
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const target = entry.target as HTMLElement;
            target.dataset.motionVisible = "true";
            observer?.unobserve(target);
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.08,
        },
      );

      elements.forEach((element) => observer?.observe(element));
    }

    function scheduleInitialization() {
      /*
       * Wait until the initial streamed page has hydrated before mutating
       * server-rendered elements. Two animation frames plus a short delay
       * avoids React hydration mismatch warnings in Next.js development mode.
       */
      frameOne = window.requestAnimationFrame(() => {
        frameTwo = window.requestAnimationFrame(() => {
          timer = window.setTimeout(initializeMotion, 120);
        });
      });
    }

    if (document.readyState === "complete") {
      scheduleInitialization();
    } else {
      window.addEventListener("load", scheduleInitialization, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleInitialization);
      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return null;
}
