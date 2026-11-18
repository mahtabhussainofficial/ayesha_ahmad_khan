/**
 * Lightweight native motion utilities (zero external packages).
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Animates an integer count-up using requestAnimationFrame.
 * Respects prefers-reduced-motion and returns a cancel function.
 */
export function animateNumberCount({ from = 0, to, duration = 1200, onUpdate }) {
  if (typeof window === "undefined" || prefersReducedMotion()) {
    onUpdate(to);
    return () => {};
  }

  let frameId = null;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + (to - from) * eased);
    onUpdate(current);

    if (progress < 1) {
      frameId = window.requestAnimationFrame(tick);
    }
  };

  frameId = window.requestAnimationFrame(tick);

  return () => {
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
    }
  };
}
