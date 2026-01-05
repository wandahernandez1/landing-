/**
 * CarouselItem Component
 * Individual slide with landing page preview card featuring background image
 */

import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/shared/utils";
import type { CarouselItemProps } from "./types";

// Theme color mappings for visual variety
const themeColors: Record<string, { gradient: string; accent: string; glow: string; overlay: string }> = {
  "Purple Dark": {
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    accent: "bg-violet-500",
    glow: "shadow-violet-500/20",
    overlay: "from-violet-950/30 via-transparent to-transparent",
  },
  "Emerald Light": {
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    accent: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
    overlay: "from-emerald-950/30 via-transparent to-transparent",
  },
  "Dark Cyan": {
    gradient: "from-cyan-500/20 via-teal-500/10 to-blue-500/20",
    accent: "bg-cyan-500",
    glow: "shadow-cyan-500/20",
    overlay: "from-cyan-950/30 via-transparent to-transparent",
  },
  "Navy Cyan": {
    gradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
    accent: "bg-blue-500",
    glow: "shadow-blue-500/20",
    overlay: "from-blue-950/30 via-transparent to-transparent",
  },
  "Amber Indigo": {
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    accent: "bg-amber-500",
    glow: "shadow-amber-500/20",
    overlay: "from-amber-950/30 via-transparent to-transparent",
  },
  "Navy Gold": {
    gradient: "from-yellow-500/20 via-amber-500/10 to-orange-500/20",
    accent: "bg-yellow-500",
    glow: "shadow-yellow-500/20",
    overlay: "from-yellow-950/30 via-transparent to-transparent",
  },
  "Violet Terminal": {
    gradient: "from-violet-500/20 via-indigo-500/10 to-purple-500/20",
    accent: "bg-violet-500",
    glow: "shadow-violet-500/20",
    overlay: "from-violet-950/30 via-transparent to-transparent",
  },
  "Teal Orange": {
    gradient: "from-teal-500/20 via-cyan-500/10 to-orange-500/20",
    accent: "bg-teal-500",
    glow: "shadow-teal-500/20",
    overlay: "from-teal-950/30 via-transparent to-transparent",
  },
  "Forest Gold": {
    gradient: "from-green-500/20 via-emerald-500/10 to-yellow-500/20",
    accent: "bg-green-600",
    glow: "shadow-green-500/20",
    overlay: "from-green-950/30 via-transparent to-transparent",
  },
  "Charcoal Ivory": {
    gradient: "from-neutral-500/20 via-stone-500/10 to-zinc-500/20",
    accent: "bg-neutral-400",
    glow: "shadow-neutral-400/20",
    overlay: "from-neutral-900/30 via-transparent to-transparent",
  },
};

function CarouselItemComponent({
  item,
  isActive,
  index,
  onClick,
}: CarouselItemProps) {
  const colors = themeColors[item.theme] || themeColors["Purple Dark"];

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isActive ? 1 : 0.4,
        scale: isActive ? 1 : 0.9,
        y: isActive ? 0 : 20,
      }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onClick={onClick}
      className={cn(
        "relative w-full mx-auto",
        "cursor-pointer",
        !isActive && "pointer-events-none"
      )}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${item.name}`}
    >
      {/* Card Container - Larger and more prominent */}
      <div
        className={cn(
          "relative overflow-hidden",
          "rounded-2xl sm:rounded-3xl",
          // Larger responsive sizing
          "aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1]",
          "w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl",
          "bg-neutral-950",
          "border border-white/10",
          "transition-all duration-500",
          isActive && "border-white/20 shadow-2xl",
          isActive && colors.glow
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={item.image}
            alt={`Preview de ${item.name}`}
            className={cn(
              "w-full h-full object-cover object-top",
              "transition-transform duration-700 ease-out",
              isActive && "scale-105"
            )}
            loading="lazy"
          />
        </div>

        {/* Gradient Overlay for readability */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t",
            colors.overlay
          )}
          aria-hidden="true"
        />

        {/* Additional bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          aria-hidden="true"
        />

        {/* Content Container - Positioned at bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* Header */}
          <header className="mb-4 sm:mb-6">
            {/* Industry Badge */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5",
                  "px-2 sm:px-3 py-0.5 sm:py-1 rounded-full",
                  "text-[10px] sm:text-xs font-medium uppercase tracking-wider",
                  "bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm"
                )}
              >
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" aria-hidden="true" />
                {item.industry}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-1 sm:mb-2 drop-shadow-lg">
              {item.name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 font-light drop-shadow-md">
              {item.tagline}
            </p>
          </header>

          {/* Description - Hidden on mobile, visible on larger screens */}
          <p className="hidden sm:block text-xs sm:text-sm md:text-base text-white/50 leading-relaxed mb-4 md:mb-6 max-w-xl lg:max-w-2xl">
            {item.description}
          </p>

          {/* Footer with CTA */}
          <footer className="flex items-center justify-between">
            {/* Theme indicator */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className={cn("w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full", colors.accent)}
                aria-hidden="true"
              />
              <span className="text-[10px] sm:text-xs text-white/40 font-mono">
                {item.theme}
              </span>
            </div>

            {/* View Link */}
            <Link
              to={item.path}
              className={cn(
                "inline-flex items-center gap-1.5 sm:gap-2",
                "px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full",
                "bg-white text-black",
                "text-xs sm:text-sm font-medium",
                "transition-all duration-300",
                "hover:bg-white/90 hover:scale-105",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              )}
              tabIndex={isActive ? 0 : -1}
              aria-label={`Ver landing page de ${item.name}`}
            >
              Explorar
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            </Link>
          </footer>
        </div>

        {/* Subtle shine effect on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            "bg-gradient-to-tr from-transparent via-white/5 to-transparent",
            isActive && "group-hover:opacity-100"
          )}
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}

export const CarouselItem = memo(CarouselItemComponent);
CarouselItem.displayName = "CarouselItem";
