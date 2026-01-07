/**
 * ScrollToTop Component
 * Scrolls to top on route change - ensures all pages start from the beginning
 */

import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  // Use layoutEffect to scroll before the browser paints
  useLayoutEffect(() => {
    // Immediate scroll to top without any animation
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  // Also ensure scroll on regular effect as backup
  useEffect(() => {
    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, [pathname]);

  return null;
}
