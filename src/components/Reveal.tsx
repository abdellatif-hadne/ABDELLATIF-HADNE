import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

/**
 * Section-level scroll reveal. Thin wrapper over the CSS-based FadeIn so
 * every section shares the same timing.
 */
const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <FadeIn delay={delay} margin="-120px">
    {children}
  </FadeIn>
);

export default Reveal;
