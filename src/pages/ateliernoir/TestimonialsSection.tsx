import { useRef } from 'react'
import { Star } from 'lucide-react'
import { PRESS_LOGOS, REVIEWS, CERTIFICATIONS } from './constants'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

export function TestimonialsSection() {
  const headerRef = useRef<HTMLElement>(null)
  const pressRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)

  useSectionAnimation(headerRef)
  useStaggerReveal(reviewsRef, 'article', { stagger: 0.15 })

  return (
    <section 
      id="testimonials"
      className="section-padding surface-elevated"
      aria-labelledby="testimonials-title"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <header ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="label block mb-4">Visto En</span>
          <h2 id="testimonials-title" className="display-medium max-w-xl mx-auto">
            Confianza de quienes valoran la artesanía
          </h2>
        </header>

        {/* Press Logos */}
        <div 
          ref={pressRef}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-20 md:mb-28"
        >
          {PRESS_LOGOS.map((press) => (
            <span 
              key={press.name}
              className="press-logo font-serif text-xl md:text-2xl tracking-wider"
              aria-label={press.name}
            >
              {press.logo}
            </span>
          ))}
        </div>

        {/* Reviews */}
        <div 
          ref={reviewsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review, idx) => (
            <article key={idx} className="review-card">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-charcoal-900 text-charcoal-900" 
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl leading-relaxed mb-8">
                "{review.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-charcoal-900">{review.author}</p>
                  <p className="text-sm text-charcoal-400">{review.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {CERTIFICATIONS.map((cert) => (
            <span 
              key={cert}
              className="badge-minimal"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
