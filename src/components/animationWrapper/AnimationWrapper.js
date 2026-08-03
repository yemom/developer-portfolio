import React from "react";
import {motion} from "framer-motion";

/**
 * AnimationWrapper — Framer Motion scroll-reveal wrapper
 *
 * Wraps any content with a configurable scroll-triggered animation.
 * Replaces react-reveal's <Fade> with Framer Motion equivalents.
 *
 * @param {ReactNode} children    — Content to animate
 * @param {string}    variant     — "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "zoom" | "none"
 * @param {number}    delay       — Animation delay in seconds (default: 0)
 * @param {number}    duration    — Animation duration in seconds (default: 0.6)
 * @param {number}    staggerIdx  — Position in a stagger group (multiplied by 0.1s)
 * @param {string}    className   — Extra class names
 * @param {object}    style       — Inline style overrides
 * @param {string}    threshold   — Viewport threshold to trigger (default: 0.15)
 */

const variants = {
  fadeUp: {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0},
  },
  fadeDown: {
    hidden: {opacity: 0, y: -40},
    visible: {opacity: 1, y: 0},
  },
  fadeLeft: {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0},
  },
  fadeRight: {
    hidden: {opacity: 0, x: 50},
    visible: {opacity: 1, x: 0},
  },
  zoom: {
    hidden: {opacity: 0, scale: 0.88},
    visible: {opacity: 1, scale: 1},
  },
  none: {
    hidden: {opacity: 1},
    visible: {opacity: 1},
  },
};

export default function AnimationWrapper({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  staggerIdx = 0,
  className = "",
  style = {},
  threshold = 0.1,
}) {
  const selectedVariant = variants[variant] || variants.fadeUp;
  const totalDelay = delay + staggerIdx * 0.1;

  return (
    <motion.div
      className={className}
      style={style}
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: threshold}}
      transition={{
        duration,
        delay: totalDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer — Framer Motion stagger parent
 * Used to orchestrate staggered children animations.
 *
 * @param {ReactNode} children
 * @param {number}    staggerChildren  — Stagger delay between children (default: 0.1)
 * @param {string}    className
 * @param {object}    style
 */
export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  className = "",
  style = {},
  threshold = 0.1,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: threshold}}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem — Child of StaggerContainer
 * Animates as part of a stagger group.
 *
 * @param {ReactNode} children
 * @param {string}    variant    — Same variants as AnimationWrapper
 * @param {string}    className
 */
export function StaggerItem({children, variant = "fadeUp", className = ""}) {
  const selectedVariant = variants[variant] || variants.fadeUp;

  return (
    <motion.div
      className={className}
      variants={selectedVariant}
      transition={{duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94]}}
    >
      {children}
    </motion.div>
  );
}
