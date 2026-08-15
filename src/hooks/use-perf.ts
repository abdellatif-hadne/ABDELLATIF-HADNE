import { useEffect, useRef, useState } from "react";

/**
 * True while the element is (near) the viewport. Used to pause expensive
 * animations and defer image loading for off-screen content.
 */
export const useInView = <T extends HTMLElement>(rootMargin = "300px") => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
};

/**
 * One-shot scroll reveal. Returns a ref to attach to any element plus the
 * class names driving the CSS transition — use it when the revealed element
 * must stay a specific tag (a link, a grid child, ...).
 */
export const useReveal = <T extends HTMLElement>(delay = 0, margin = "-60px") => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return {
    ref,
    className: `reveal ${visible ? "is-visible" : ""}`,
    style: delay ? { transitionDelay: `${delay}s` } : undefined,
  };
};

/**
 * True on small screens or when the visitor asked for reduced motion —
 * i.e. contexts where heavy filter/blur animations should be skipped.
 */
export const useLightMotion = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const query = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
    const update = () => setLight(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return light;
};
