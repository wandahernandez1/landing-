import { useCallback, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface UseGalleryAnimationsConfig {
  cardSelector?: string;
  duration?: number;
  ease?: string;
}

export function useGalleryAnimations(config: UseGalleryAnimationsConfig = {}) {
  const { duration = 0.8, ease = "power3.out" } = config;

  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Animate card entrance
  const animateCardIn = useCallback(
    (element: HTMLElement, delay: number = 0) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
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

  // Animate card hover (3D tilt)
  const animateCardHover = useCallback(
    (element: HTMLElement, mouseX: number, mouseY: number, rect: DOMRect) => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (mouseY - centerY) / 25;
      const rotateY = (centerX - mouseX) / 25;

      gsap.to(element, {
        rotateX,
        rotateY,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    []
  );

  // Reset card transform
  const resetCardTransform = useCallback((element: HTMLElement) => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
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
