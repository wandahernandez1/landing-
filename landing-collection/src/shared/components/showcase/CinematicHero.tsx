/**
 * CinematicHero Component
 * Premium hero section with cinematic typography
 */

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils";

interface CinematicHeroProps {
  /** Small label above headline */
  label?: string;
  /** Main headline text */
  headline: string;
  /** Secondary headline or subtext */
  subheadline?: string;
  /** Children elements (e.g., scroll cue) */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function CinematicHero({
  label,
  headline,
  subheadline,
  children,
  className,
}: CinematicHeroProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center",
        "text-center px-6",
        className
      )}
    >
      {/* Label */}
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "mb-6",
            "text-xs sm:text-sm font-medium uppercase tracking-[0.2em]",
            "text-white/40"
          )}
        >
          {label}
        </motion.p>
      )}

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={cn(
          // Fluid typography using clamp for proportional scaling
          "text-[clamp(2.5rem,8vw,3.5rem)]",
          "sm:text-[clamp(3rem,7vw,4rem)]",
          "md:text-[clamp(3.5rem,6.5vw,5rem)]",
          "lg:text-[clamp(4rem,5.5vw,6rem)]",
          "xl:text-[clamp(5rem,5vw,7rem)]",
          "2xl:text-[clamp(6rem,4.5vw,9rem)]",
          "font-bold tracking-tighter",
          "text-white",
          "leading-[0.9]"
        )}
      >
        {headline}
      </motion.h1>

      {/* Subheadline */}
      {subheadline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={cn(
            "mt-6 max-w-xl",
            // Fluid typography for subheadline
            "text-[clamp(0.875rem,2vw,1rem)]",
            "sm:text-[clamp(1rem,1.8vw,1.125rem)]",
            "md:text-[clamp(1.125rem,1.5vw,1.25rem)]",
            "text-white/50",
            "leading-relaxed"
          )}
        >
          {subheadline}
        </motion.p>
      )}

      {/* Children (scroll cue, CTA, etc.) */}
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
