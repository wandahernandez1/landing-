/**
 * CarouselItem Component
 * Individual slide with landing page preview card
 */

import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/shared/utils";
import type { CarouselItemProps } from "./types";

// Theme color mappings for visual variety
const themeColors: Record<string, { gradient: string; accent: string; glow: string }> = {
  "Purple Dark": {
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    accent: "bg-violet-500",
    glow: "shadow-violet-500/20",
  },
  "Emerald Light": {
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    accent: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
  },
  "Dark Cyan": {
    gradient: "from-cyan-500/20 via-teal-500/10 to-blue-500/20",
    accent: "bg-cyan-500",
    glow: "shadow-cyan-500/20",
  },
  "Navy Cyan": {
    gradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
    accent: "bg-blue-500",
    glow: "shadow-blue-500/20",
  },
  "Amber Indigo": {
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    accent: "bg-amber-500",
    glow: "shadow-amber-500/20",
  },
  "Navy Gold": {
    gradient: "from-yellow-500/20 via-amber-500/10 to-orange-500/20",
    accent: "bg-yellow-500",
    glow: "shadow-yellow-500/20",
  },
  "Violet Terminal": {
    gradient: "from-violet-500/20 via-indigo-500/10 to-purple-500/20",
    accent: "bg-violet-500",
    glow: "shadow-violet-500/20",
  },
  "Teal Orange": {
    gradient: "from-teal-500/20 via-cyan-500/10 to-orange-500/20",
    accent: "bg-teal-500",
    glow: "shadow-teal-500/20",
  },
  "Forest Gold": {
    gradient: "from-green-500/20 via-emerald-500/10 to-yellow-500/20",
    accent: "bg-green-600",
    glow: "shadow-green-500/20",
  },
  "Charcoal Ivory": {
    gradient: "from-neutral-500/20 via-stone-500/10 to-zinc-500/20",
    accent: "bg-neutral-400",
    glow: "shadow-neutral-400/20",
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
        "relative w-full max-w-4xl mx-auto",
        "cursor-pointer",
        !isActive && "pointer-events-none"
      )}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${item.name}`}
    >
      {/* Card Container */}
      <div
        className={cn(
          "relative overflow-hidden",
          "rounded-2xl sm:rounded-3xl",
          "bg-neutral-950/80 backdrop-blur-xl",
          "border border-white/[0.08]",
          "transition-all duration-500",
          isActive && "border-white/[0.12] shadow-2xl",
          isActive && colors.glow
        )}
      >
        {/* Gradient Background */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60",
            colors.gradient
          )}
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Header */}
          <header className="mb-6 sm:mb-8">
            {/* Industry Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5",
                  "px-3 py-1 rounded-full",
                  "text-xs font-medium uppercase tracking-wider",
                  "bg-white/5 text-white/60 border border-white/10"
                )}
              >
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                {item.industry}
              </span>
              <span className="text-xs text-white/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2">
              {item.name}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light">
              {item.tagline}
            </p>
          </header>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
            {item.description}
          </p>

          {/* Footer with CTA */}
          <footer className="flex items-center justify-between">
            {/* Theme indicator */}
            <div className="flex items-center gap-3">
              <span
                className={cn("w-2 h-2 rounded-full", colors.accent)}
                aria-hidden="true"
              />
              <span className="text-xs text-white/40 font-mono">
                {item.theme}
              </span>
            </div>

            {/* View Link */}
            <Link
              to={item.path}
              className={cn(
                "inline-flex items-center gap-2",
                "px-5 py-2.5 rounded-full",
                "bg-white text-black",
                "text-sm font-medium",
                "transition-all duration-300",
                "hover:bg-white/90 hover:scale-105",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              )}
              tabIndex={isActive ? 0 : -1}
              aria-label={`Ver landing page de ${item.name}`}
            >
              Explorar
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </footer>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}

export const CarouselItem = memo(CarouselItemComponent);
CarouselItem.displayName = "CarouselItem";
