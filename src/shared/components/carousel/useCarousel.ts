/**
 * useCarousel Hook
 * Manages carousel state and logic with smooth animations
 * Performance optimized with throttled updates
 */

import { useState, useCallback, useEffect, useRef } from "react";
import type { LandingConfig } from "@/shared/types";

interface UseCarouselOptions {
  items: LandingConfig[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  initialIndex?: number;
  onSlideChange?: (index: number) => void;
}

interface UseCarouselReturn {
  currentIndex: number;
  isTransitioning: boolean;
  progress: number;
  isPaused: boolean;
  goToSlide: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  pause: () => void;
  resume: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

// Check if reduced motion is preferred
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useCarousel({
  items,
  autoplay = false,
  autoplayDelay = 6000, // Increased default delay
  loop = true,
  initialIndex = 0,
  onSlideChange,
}: UseCarouselOptions): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const progressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isPausedRef = useRef(isPaused);
  const lastProgressUpdate = useRef(0);

  // Keep ref in sync with state
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const totalItems = items.length;

  // Navigation availability
  const canGoNext = loop || currentIndex < totalItems - 1;
  const canGoPrev = loop || currentIndex > 0;

  // Go to specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      let targetIndex = index;

      // Handle loop wrapping
      if (loop) {
        if (index < 0) targetIndex = totalItems - 1;
        else if (index >= totalItems) targetIndex = 0;
      } else {
        targetIndex = Math.max(0, Math.min(index, totalItems - 1));
      }

      if (targetIndex !== currentIndex) {
        setIsTransitioning(true);
        setCurrentIndex(targetIndex);
        onSlideChange?.(targetIndex);

        // Reset progress
        progressRef.current = 0;
        setProgress(0);

        // End transition after animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }
    },
    [currentIndex, isTransitioning, loop, totalItems, onSlideChange]
  );

  // Navigation helpers
  const goToNext = useCallback(() => {
    if (canGoNext) goToSlide(currentIndex + 1);
  }, [canGoNext, currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    if (canGoPrev) goToSlide(currentIndex - 1);
  }, [canGoPrev, currentIndex, goToSlide]);

  // Pause/Resume controls
  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  // Autoplay animation loop - throttled for performance
  useEffect(() => {
    // Disable autoplay if reduced motion is preferred
    if (!autoplay || prefersReducedMotion()) return;

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPausedRef.current && !isTransitioning) {
        progressRef.current += (deltaTime / autoplayDelay) * 100;

        if (progressRef.current >= 100) {
          progressRef.current = 0;
          goToNext();
        }

        // Throttle progress state updates to every 100ms for performance
        if (currentTime - lastProgressUpdate.current > 100) {
          setProgress(progressRef.current);
          lastProgressUpdate.current = currentTime;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [autoplay, autoplayDelay, goToNext, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return {
    currentIndex,
    isTransitioning,
    progress,
    isPaused,
    goToSlide,
    goToNext,
    goToPrev,
    pause,
    resume,
    canGoNext,
    canGoPrev,
  };
}
