/**
 * Carousel Component
 * Premium carousel with smooth animations, drag support, and accessibility
 */

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import { cn } from "@/shared/utils";
import { CarouselItem } from "./CarouselItem";
import { CarouselNavigation } from "./CarouselNavigation";
import { CarouselDots } from "./CarouselDots";
import { CarouselProgress } from "./CarouselProgress";
import { useCarousel } from "./useCarousel";
import type { CarouselProps } from "./types";

// Swipe threshold for drag navigation
const SWIPE_THRESHOLD = 50;
const SWIPE_VELOCITY = 500;

export function Carousel({
  items,
  autoplay = true,
  autoplayDelay = 6000,
  pauseOnHover = true,
  loop = true,
  initialIndex = 0,
  onSlideChange,
  className,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const {
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
  } = useCarousel({
    items,
    autoplay,
    autoplayDelay,
    pauseOnHover,
    loop,
    initialIndex,
    onSlideChange,
  });

  // Handle drag end for swipe navigation
  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(false);
      
      const { offset, velocity } = info;
      const swipeThreshold = SWIPE_THRESHOLD;
      const velocityThreshold = SWIPE_VELOCITY;

      // Check if swipe is significant enough
      if (
        Math.abs(offset.x) > swipeThreshold ||
        Math.abs(velocity.x) > velocityThreshold
      ) {
        if (offset.x > 0 || velocity.x > velocityThreshold) {
          goToPrev();
        } else if (offset.x < 0 || velocity.x < -velocityThreshold) {
          goToNext();
        }
      }
    },
    [goToNext, goToPrev]
  );

  // Handle hover for autoplay pause
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) pause();
  }, [pause, pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) resume();
  }, [resume, pauseOnHover]);

  // Current item for display
  const currentItem = items[currentIndex];

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative w-full h-full",
        "flex flex-col items-center justify-center",
        "overflow-hidden",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="carousel"
      aria-label="Colección de Landing Pages"
    >
      {/* Counter Display */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-3 text-white/40 font-mono text-sm">
          <span className="text-white/80 text-lg font-medium">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="w-8 h-px bg-white/20" aria-hidden="true" />
          <span>{String(items.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Main Carousel Area */}
      <div className="relative w-full flex-1 flex items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Drag Container */}
        <motion.div
          className="relative w-full max-w-7xl cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ touchAction: "pan-y" }}
        >
          {/* Slides */}
          <div
            className="relative"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <CarouselItem
                  item={currentItem}
                  isActive={true}
                  index={currentIndex}
                  totalItems={items.length}
                  onClick={() => {
                    if (!isDragging && !isTransitioning) {
                      // Item already active, no action needed
                    }
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Side Navigation - Desktop */}
        <div className="hidden lg:block absolute left-4 xl:left-8 top-1/2 -translate-y-1/2">
          <motion.button
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={cn(
              "flex items-center justify-center",
              "w-14 h-14",
              "rounded-full",
              "bg-white/5 backdrop-blur-sm",
              "border border-white/10",
              "text-white/70",
              "transition-all duration-300",
              "hover:bg-white/10 hover:text-white hover:border-white/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              "disabled:opacity-30 disabled:cursor-not-allowed"
            )}
            aria-label="Slide anterior"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
        </div>

        <div className="hidden lg:block absolute right-4 xl:right-8 top-1/2 -translate-y-1/2">
          <motion.button
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            disabled={!canGoNext}
            className={cn(
              "flex items-center justify-center",
              "w-14 h-14",
              "rounded-full",
              "bg-white/5 backdrop-blur-sm",
              "border border-white/10",
              "text-white/70",
              "transition-all duration-300",
              "hover:bg-white/10 hover:text-white hover:border-white/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              "disabled:opacity-30 disabled:cursor-not-allowed"
            )}
            aria-label="Siguiente slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative w-full max-w-xl px-4 pb-6 sm:pb-8 md:pb-10">
        {/* Progress Bar */}
        {autoplay && (
          <div className="mb-4">
            <CarouselProgress progress={progress} isPlaying={!isPaused} />
          </div>
        )}

        {/* Mobile Navigation + Dots */}
        <div className="flex items-center justify-center gap-4">
          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <CarouselNavigation
              onPrev={goToPrev}
              onNext={goToNext}
              isPrevDisabled={!canGoPrev}
              isNextDisabled={!canGoNext}
            />
          </div>

          {/* Dots - Always visible */}
          <CarouselDots
            total={items.length}
            activeIndex={currentIndex}
            onDotClick={goToSlide}
          />
        </div>
      </div>

      {/* Keyboard hint - Screen reader only */}
      <p className="sr-only">
        Use las flechas izquierda y derecha del teclado para navegar entre slides
      </p>
    </section>
  );
}
