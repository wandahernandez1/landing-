/**
 * MinimalScrollCue Component
 * Elegant scroll down indicator with animation
 */

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/utils";

interface MinimalScrollCueProps {
  /** Click handler for scroll action */
  onClick?: () => void;
  /** Label text */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

export function MinimalScrollCue({
  onClick,
  label = "Explorar",
  className,
}: MinimalScrollCueProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-3",
        "text-white/40 hover:text-white/70",
        "transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-lg",
        "cursor-pointer",
        className
      )}
      whileHover={{ y: 4 }}
      aria-label={`${label} - desplazar hacia abajo`}
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em]">
        {label}
      </span>
      
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-5 h-5" aria-hidden="true" />
      </motion.div>
    </motion.button>
  );
}
