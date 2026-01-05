import { useRef } from 'react'
import { useSectionAnimation } from '@/shared/hooks'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useSectionAnimation(contentRef)

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col"
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Minimalist interior with curated objects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ivory-50/40" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-24"
      >
        {/* Badge */}
        <span className="badge-minimal mb-8 opacity-0 animate-fade-in-up">
          New Arrivals
        </span>

        {/* Headline */}
        <h1 
          id="hero-title"
          className="display-large max-w-4xl opacity-0 animate-fade-in-up delay-100"
        >
          The Art of Less
        </h1>

        {/* Subheadline */}
        <p className="body-large max-w-xl mt-8 opacity-0 animate-fade-in-up delay-200">
          Curated objects for considered living. Each piece chosen with intention, 
          crafted with care.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="relative pb-16 flex justify-center">
        <a 
          href="#collections" 
          className="scroll-indicator opacity-0 animate-fade-in delay-500"
          aria-label="Scroll to collections"
        >
          <span className="label">Scroll</span>
          <div className="scroll-line" />
        </a>
      </div>
    </section>
  )
}
