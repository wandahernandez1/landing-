/**
 * CarouselDots Component
 * Elegant dot indicators with active state animation
 */

import { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils";
import type { CarouselDotsProps } from "./types";

function CarouselDotsComponent({
  total,
  activeIndex,
  onDotClick,
  className,
}: CarouselDotsProps) {
  return (
    <nav
      className={cn("flex items-center justify-center gap-2", className)}
      role="tablist"
      aria-label="Indicadores de slide"
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;
        
        return (
          <motion.button
            key={index}
            role="tab"
            aria-selected={isActive}
            aria-label={`Ir al slide ${index + 1}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onDotClick(index)}
            className={cn(
              "relative h-2 rounded-full",
              "transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              isActive
                ? "bg-white w-8"
                : "bg-white/20 w-2 hover:bg-white/40"
            )}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Active indicator glow */}
            {isActive && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-white"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </motion.button>
        );
      })}
    </nav>
  );
}

export const CarouselDots = memo(CarouselDotsComponent);
CarouselDots.displayName = "CarouselDots";
