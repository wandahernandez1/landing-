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
  useLenis()

  // Scroll to carousel section
  const scrollToCarousel = () => {
    carouselSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ShowcaseLayout>
      {/* Main content - Two fullscreen sections */}
      <main className="relative">
        {/* SECTION 1: Cinematic Hero - Fullscreen with dvh for mobile */}
        <section 
          className="section-fullscreen-center"
          aria-label="Hero introduction"
        >
          <CinematicHero
            label="Curated Digital Collection"
            headline="Design Experiences"
            subheadline="Ten cinematic landing experiences crafted with intention and detail."
          >
            <MinimalScrollCue onClick={scrollToCarousel} />
          </CinematicHero>
        </section>

        {/* SECTION 2: Carousel - Fullscreen with proper centering */}
        <section 
          ref={carouselSectionRef}
          className="section-fullscreen-center"
          aria-label="Design showcase gallery"
        >
          <ShowcaseCarousel landings={LANDINGS} />
        </section>
      </main>
    </ShowcaseLayout>
  )
}
