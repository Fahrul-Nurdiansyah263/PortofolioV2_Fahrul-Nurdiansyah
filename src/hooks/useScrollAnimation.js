import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Hook untuk scroll-triggered animation pengganti AOS.
 * @param {Object} options - { once: bool, amount: number (0-1) }
 * @returns {{ ref, isInView }}
 */
export function useScrollAnimation({ once = true, amount = 0.2 } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  return { ref, isInView };
}

/**
 * Variants standar pengganti data-aos="fade-up"
 */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
};
