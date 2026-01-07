import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Check if device is low-end (mobile or low memory)
function isLowEndDevice(): boolean {
  if (typeof navigator === "undefined") return false;

  // Check device memory (if available)
  const nav = navigator as Navigator & { deviceMemory?: number };
  if (nav.deviceMemory && nav.deviceMemory < 4) return true;

  // Check hardware concurrency (CPU cores)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)
    return true;

  // Check for mobile devices via touch
  if ("ontouchstart" in window && window.innerWidth < 768) return true;

  return false;
}

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Skip smooth scroll if user prefers reduced motion or on low-end devices
    if (prefersReducedMotion() || isLowEndDevice()) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0, // Slightly faster for better responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5, // Reduced from 2 for smoother mobile
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Pause lenis when tab is not visible to save resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
