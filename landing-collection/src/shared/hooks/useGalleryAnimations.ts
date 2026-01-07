import { useCallback, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface UseGalleryAnimationsConfig {
  cardSelector?: string;
  duration?: number;
  ease?: string;
}

// Check for reduced motion and mobile
function shouldSkipAnimations(): boolean {
  if (typeof window === "undefined") return true;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const isMobile = window.innerWidth < 768 || "ontouchstart" in window;

  return reducedMotion || isMobile;
}

export function useGalleryAnimations(config: UseGalleryAnimationsConfig = {}) {
  const { duration = 0.6, ease = "power3.out" } = config;

  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Animate card entrance
  const animateCardIn = useCallback(
    (element: HTMLElement, delay: number = 0) => {
      if (shouldSkipAnimations()) {
        gsap.set(element, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 40,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          ease,
          delay,
        }
      );
    },
    [duration, ease]
  );

  // Animate card hover (3D tilt) - only on desktop
  const animateCardHover = useCallback(
    (element: HTMLElement, mouseX: number, mouseY: number, rect: DOMRect) => {
      if (shouldSkipAnimations()) return;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Reduced rotation intensity for smoother performance
      const rotateX = (mouseY - centerY) / 35;
      const rotateY = (centerX - mouseX) / 35;

      gsap.to(element, {
        rotateX,
        rotateY,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    []
  );

  // Reset card transform
  const resetCardTransform = useCallback((element: HTMLElement) => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, []);

  // Animate track position
  const animateTrack = useCallback(
    (element: HTMLElement, offset: number, immediate: boolean = false) => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(element, {
        x: offset,
        duration: immediate ? 0 : duration,
        ease,
        overwrite: "auto",
      });

      return animationRef.current;
    },
    [duration, ease]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return {
    animateCardIn,
    animateCardHover,
    resetCardTransform,
    animateTrack,
  };
}
