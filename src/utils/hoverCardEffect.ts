import type { MouseEvent } from "react";

/**
 *
 * Give an id `hover-cards` to element this function is given on `onMouseMove`
 *
 * *Example:*
 * ```jsx
 * <div onMouseMove={handleHoverEffect} id="hover-cards">
 *  <div id="hover-card">
 *    <span id="hover-card-overlay" />
 *    card 1
 *  </div>
 * </div>
 * ```
 */
export const handleHoverEffect = (
  e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
) => {
  for (const card of e.currentTarget.querySelectorAll("#hover-card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    (card as HTMLDivElement).style.setProperty("--mouse-x", `${x}px`);
    (card as HTMLDivElement).style.setProperty("--mouse-y", `${y}px`);
  }
};
