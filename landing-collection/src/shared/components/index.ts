/**
 * Shared Components Barrel Export
 */

// Base components
export { ScrollToTop } from "./ScrollToTop";

// Carousel system
export {
  Carousel,
  CarouselItem,
  CarouselNavigation,
  CarouselDots,
  CarouselProgress,
  useCarousel,
} from "./carousel";

export type {
  CarouselProps,
  CarouselItemProps,
  CarouselItemData,
  CarouselNavigationProps,
  CarouselDotsProps,
  CarouselProgressProps,
} from "./carousel";

// Showcase components
export {
  ShowcaseLayout,
  CinematicHero,
  MinimalScrollCue,
  ShowcaseCarousel,
} from "./showcase";
