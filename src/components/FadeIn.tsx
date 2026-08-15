import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-perf";

interface FadeInProps {
  children: ReactNode;
  /** Seconds of stagger before the element animates in. */
  delay?: number;
  className?: string;
  /** IntersectionObserver rootMargin — negative values trigger later. */
  margin?: string;
}

/**
 * Scroll reveal built on IntersectionObserver + a CSS transition.
 * The observer disconnects after the first reveal, so nothing keeps
 * running once the element has appeared.
 */
const FadeIn = ({ children, delay = 0, className = "", margin = "-60px" }: FadeInProps) => {
  const reveal = useReveal<HTMLDivElement>(delay, margin);

  return (
    <div ref={reveal.ref} className={`${reveal.className} ${className}`} style={reveal.style}>
      {children}
    </div>
  );
};

export default FadeIn;
