/**
 * CarouselItem Component
 * Individual slide with landing page preview card featuring background image
 */

import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  // New 15 landing themes
  "Cyan Dark": {
    gradient: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
    accent: "bg-cyan-500",
    glow: "shadow-cyan-500/20",
    overlay: "from-cyan-950/30 via-transparent to-transparent",
  },
  "Rose Pink": {
    gradient: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
    accent: "bg-rose-500",
    glow: "shadow-rose-500/20",
    overlay: "from-rose-950/30 via-transparent to-transparent",
  },
  "Emerald Dark": {
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    accent: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
    overlay: "from-emerald-950/30 via-transparent to-transparent",
  },
  "Orange Amber": {
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    accent: "bg-orange-500",
    glow: "shadow-orange-500/20",
    overlay: "from-orange-950/30 via-transparent to-transparent",
  },
  "Pink Fuchsia": {
    gradient: "from-pink-500/20 via-fuchsia-500/10 to-purple-500/20",
    accent: "bg-pink-500",
    glow: "shadow-pink-500/20",
    overlay: "from-pink-950/30 via-transparent to-transparent",
  },
  "Teal Dark": {
    gradient: "from-teal-500/20 via-cyan-500/10 to-emerald-500/20",
    accent: "bg-teal-500",
    glow: "shadow-teal-500/20",
    overlay: "from-teal-950/30 via-transparent to-transparent",
  },
  "Purple Violet": {
    gradient: "from-purple-500/20 via-violet-500/10 to-indigo-500/20",
    accent: "bg-purple-500",
    glow: "shadow-purple-500/20",
    overlay: "from-purple-950/30 via-transparent to-transparent",
  },
  "Blue Sky": {
    gradient: "from-blue-500/20 via-sky-500/10 to-cyan-500/20",
    accent: "bg-blue-500",
    glow: "shadow-blue-500/20",
    overlay: "from-blue-950/30 via-transparent to-transparent",
  },
  "Red Alert": {
    gradient: "from-red-500/20 via-rose-500/10 to-orange-500/20",
    accent: "bg-red-500",
    glow: "shadow-red-500/20",
    overlay: "from-red-950/30 via-transparent to-transparent",
  },
  "Green Dark": {
    gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
    accent: "bg-green-500",
    glow: "shadow-green-500/20",
    overlay: "from-green-950/30 via-transparent to-transparent",
  },
  "Indigo Dark": {
    gradient: "from-indigo-500/20 via-violet-500/10 to-purple-500/20",
    accent: "bg-indigo-500",
    glow: "shadow-indigo-500/20",
    overlay: "from-indigo-950/30 via-transparent to-transparent",
  },
  "Slate Minimal": {
    gradient: "from-slate-500/20 via-zinc-500/10 to-neutral-500/20",
    accent: "bg-slate-400",
    glow: "shadow-slate-400/20",
    overlay: "from-slate-900/30 via-transparent to-transparent",
  },
  "Blue Enterprise": {
    gradient: "from-blue-500/20 via-indigo-500/10 to-cyan-500/20",
    accent: "bg-blue-500",
    glow: "shadow-blue-500/20",
    overlay: "from-blue-950/30 via-transparent to-transparent",
  },
  "Violet Slate": {
    gradient: "from-violet-500/20 via-purple-500/10 to-slate-500/20",
    accent: "bg-violet-500",
    glow: "shadow-violet-500/20",
    overlay: "from-violet-950/30 via-transparent to-transparent",
  },
  "Emerald Minimal": {
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    accent: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
    overlay: "from-emerald-950/30 via-transparent to-transparent",
  },
};

function CarouselItemComponent({
  item,
  isActive,
  index,
}: CarouselItemProps) {
  const colors = themeColors[item.theme] || themeColors["Purple Dark"];
  const navigate = useNavigate();
  const dragStartPos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  // Handle card click - navigate to landing page
  const handleCardClick = () => {
    // Only navigate if it wasn't a drag
    if (!isDragging.current && isActive) {
      // Scroll to top before navigation
      window.scrollTo(0, 0);
      navigate(item.path);
    }
  };

  // Track drag start position
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    isDragging.current = false;
  };

  // Detect if it was a drag or a click
  const handlePointerUp = (e: React.PointerEvent) => {
    const dx = Math.abs(e.clientX - dragStartPos.current.x);
    const dy = Math.abs(e.clientY - dragStartPos.current.y);
    // If moved more than 10px, consider it a drag
    isDragging.current = dx > 10 || dy > 10;
  };

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
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={handleCardClick}
      className={cn(
        "relative w-full mx-auto",
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
          // Aspect ratio - cinematic 16:9
          "aspect-video",
          // Full width of container
          "w-full",
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
            "absolute inset-0 bg-linear-to-t",
            colors.overlay
          )}
          aria-hidden="true"
        />

        {/* Additional bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/40 to-transparent"
          aria-hidden="true"
        />

        {/* Content Container - Positioned at bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
          {/* Header */}
          <header className="mb-3 sm:mb-4 lg:mb-[clamp(0.75rem,1.5vw,1.25rem)]">
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
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight mb-1 sm:mb-2 drop-shadow-lg">
              {item.name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-light drop-shadow-md">
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

            {/* Visual CTA indicator - the whole card is clickeable */}
            <span
              className={cn(
                "inline-flex items-center gap-1.5 sm:gap-2",
                "px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full",
                "bg-white text-black",
                "text-xs sm:text-sm font-medium",
                "transition-all duration-300",
                "group-hover:bg-white/90 group-hover:scale-105"
              )}
            >
              Explorar
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            </span>
          </footer>
        </div>

        {/* Subtle shine effect on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            "bg-linear-to-tr from-transparent via-white/5 to-transparent",
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
