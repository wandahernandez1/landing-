/**
 * CarouselProgress Component
 * Autoplay progress indicator bar
 */

import { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils";
import type { CarouselProgressProps } from "./types";

function CarouselProgressComponent({
  progress,
  isPlaying,
  className,
}: CarouselProgressProps) {
  return (
    <div
      className={cn(
        "relative w-full h-0.5 bg-white/10 rounded-full overflow-hidden",
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso del autoplay"
    >
      <motion.div
        className="absolute inset-y-0 left-0 bg-white/60 rounded-full"
        style={{ width: `${progress}%` }}
        animate={{
          opacity: isPlaying ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

export const CarouselProgress = memo(CarouselProgressComponent);
CarouselProgress.displayName = "CarouselProgress";
