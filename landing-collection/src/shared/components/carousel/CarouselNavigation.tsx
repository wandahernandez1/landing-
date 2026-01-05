/**
 * CarouselNavigation Component
 * Elegant arrow navigation for carousel
 */

import { memo } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/utils";
import type { CarouselNavigationProps } from "./types";

function CarouselNavigationComponent({
  onPrev,
  onNext,
  isPrevDisabled = false,
  isNextDisabled = false,
  className,
}: CarouselNavigationProps) {
  return (
    <nav
      className={cn("flex items-center gap-3", className)}
      aria-label="Navegación del carrusel"
    >
      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrev}
        disabled={isPrevDisabled}
        className={cn(
          "relative flex items-center justify-center",
          "w-12 h-12 sm:w-14 sm:h-14",
          "rounded-full",
          "bg-white/5 backdrop-blur-sm",
          "border border-white/10",
          "text-white/70",
          "transition-all duration-300",
          "hover:bg-white/10 hover:text-white hover:border-white/20",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5"
        )}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
      </motion.button>

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={isNextDisabled}
        className={cn(
          "relative flex items-center justify-center",
          "w-12 h-12 sm:w-14 sm:h-14",
          "rounded-full",
          "bg-white/5 backdrop-blur-sm",
          "border border-white/10",
          "text-white/70",
          "transition-all duration-300",
          "hover:bg-white/10 hover:text-white hover:border-white/20",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5"
        )}
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
      </motion.button>
    </nav>
  );
}

export const CarouselNavigation = memo(CarouselNavigationComponent);
CarouselNavigation.displayName = "CarouselNavigation";
