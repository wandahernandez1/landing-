import { useRef } from 'react'
import { useLenis } from '@/shared/hooks'
import {
  ShowcaseLayout,
  ShowcaseCarousel,
  CinematicHero,
  MinimalScrollCue,
} from '@/shared/components/showcase'
import { LANDINGS } from '@/shared/constants'

export function HomePage() {
  const carouselSectionRef = useRef<HTMLElement>(null)

  // Initialize butter-smooth scroll
  const lenisRef = useLenis()

  // Scroll to carousel section with Lenis for ultra-smooth effect
  const scrollToCarousel = () => {
    const target = carouselSectionRef.current
    if (!target) return

    // Use Lenis if available for premium smooth scroll
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: 0,
        duration: 1.8, // Longer duration for more fluid effect
        easing: (t: number) => t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2, // Cubic ease-in-out
      })
    } else {
      // Fallback to native smooth scroll
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ShowcaseLayout>
      {/* Main content - Two fullscreen sections */}
      <main className="relative">
        {/* SECTION 1: Cinematic Hero - Fullscreen with dvh for mobile */}
        <section 
          className="section-fullscreen-center"
          aria-label="Introducción hero"
        >
          <CinematicHero
            label="Premium Collection"
            headline="Experiencias de Diseño"
            subheadline="Experiencias de landing cinemáticas elaboradas con intención y detalle."
          >
            <MinimalScrollCue onClick={scrollToCarousel} />
          </CinematicHero>
        </section>

        {/* SECTION 2: Carousel - Fullscreen with proper centering */}
        <section 
          ref={carouselSectionRef}
          className="section-fullscreen-center"
          aria-label="Galería de diseños"
        >
          <ShowcaseCarousel landings={LANDINGS} />
        </section>
      </main>
    </ShowcaseLayout>
  )
}
