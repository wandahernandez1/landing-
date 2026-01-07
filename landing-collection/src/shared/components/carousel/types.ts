/**
 * Carousel Types
 * Type definitions for the carousel component system
 */

import type { LandingConfig } from "@/shared/types";

/** Single carousel item data structure */
export interface CarouselItemData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  theme: string;
  path: string;
}

/** Carousel component props */
export interface CarouselProps {
  /** Array of landing configurations to display */
  items: LandingConfig[];
  /** Enable automatic slide advancement */
  autoplay?: boolean;
  /** Delay between auto-advances in milliseconds */
  autoplayDelay?: number;
  /** Pause autoplay on hover */
  pauseOnHover?: boolean;
  /** Enable infinite loop */
  loop?: boolean;
  /** Initial slide index */
  initialIndex?: number;
  /** Callback when slide changes */
  onSlideChange?: (index: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/** Carousel item component props */
export interface CarouselItemProps {
  /** Landing configuration data */
  item: LandingConfig;
  /** Whether this item is currently active */
  isActive: boolean;
  /** Item index in the carousel */
  index: number;
  /** Total number of items */
  totalItems: number;
}

/** Navigation component props */
export interface CarouselNavigationProps {
  /** Navigate to previous slide */
  onPrev: () => void;
  /** Navigate to next slide */
  onNext: () => void;
  /** Whether previous navigation is disabled */
  isPrevDisabled?: boolean;
  /** Whether next navigation is disabled */
  isNextDisabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/** Dots indicator component props */
export interface CarouselDotsProps {
  /** Total number of dots */
  total: number;
  /** Currently active dot index */
  activeIndex: number;
  /** Callback when dot is clicked */
  onDotClick: (index: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/** Progress bar props */
export interface CarouselProgressProps {
  /** Current progress (0-100) */
  progress: number;
  /** Whether autoplay is active */
  isPlaying: boolean;
  /** Additional CSS classes */
  className?: string;
}
