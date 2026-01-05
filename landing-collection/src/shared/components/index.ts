/**
 * Shared Components Barrel Export
 */

// Base components
export { ScrollToTop } from "./ScrollToTop";
export { BackToHome } from "./BackToHome";

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
