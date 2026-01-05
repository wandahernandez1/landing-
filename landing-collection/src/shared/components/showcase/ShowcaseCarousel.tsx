/**
 * ShowcaseCarousel Component
 * Wrapper that integrates the Carousel with landing page data
 */

import { Carousel } from "../carousel";
import type { LandingConfig } from "@/shared/types";
import { cn } from "@/shared/utils";

interface ShowcaseCarouselProps {
  /** Array of landing configurations */
  landings: LandingConfig[];
  /** Enable autoplay */
  autoplay?: boolean;
  /** Autoplay delay in ms */
  autoplayDelay?: number;
  /** Additional CSS classes */
  className?: string;
}

export function ShowcaseCarousel({
  landings,
  autoplay = true,
  autoplayDelay = 6000,
  className,
}: ShowcaseCarouselProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <Carousel
        items={landings}
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        pauseOnHover={true}
        loop={true}
        initialIndex={0}
      />
    </div>
  );
}
