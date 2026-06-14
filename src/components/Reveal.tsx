import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Premium scroll-reveal wrapper. As the element scrolls into view it
 * focuses in (blur → sharp), zooms up slightly, and rises — for a
 * cinematic "section appears in style" effect.
 */
const Reveal = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(12px)" }}
    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
  >
    {children}
  </motion.div>
);

export default Reveal;
