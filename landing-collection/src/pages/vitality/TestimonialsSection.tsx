import { useRef } from 'react'
import { useSectionAnimation, useStaggerReveal, useFloatingAnimation, useCountUp } from '@/shared/hooks'
import { TESTIMONIALS } from './constants'
import { Star, Quote, TrendingUp, Award } from 'lucide-react'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '[data-testimonial-card]')
  useFloatingAnimation(cardsRef, '[data-quote]')
  useCountUp(sectionRef, '[data-stat-number]', { duration: 2 })

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 md:py-40 bg-stone-50 overflow-hidden" 
      aria-labelledby="testimonials-title"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-200 rounded-full blur-[100px] opacity-30" />

      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-emerald-200 px-4 py-2 mb-6 shadow-sm">
            <Award className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">+2M transformaciones</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-600">
            Testimonios
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Historias de
            <br />
            <span className="text-gradient">éxito real</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.author} 
              data-testimonial-card
              className="testimonial-card group card rounded-3xl p-8 bg-white relative"
            >
              <Quote 
                data-quote
                className="absolute top-6 right-6 h-10 w-10 text-emerald-100 transition-colors duration-300 group-hover:text-emerald-200" 
                aria-hidden="true" 
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-emerald-400 text-emerald-400 transition-transform duration-300 group-hover:scale-110" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                    aria-hidden="true" 
                  />
                ))}
              </div>

              <blockquote className="text-stone-700 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg ring-4 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300">
                    {testimonial.author.charAt(0)}
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Result badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-medium text-emerald-700">Resultados verificados</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors duration-300">
              <span data-stat-number>97</span>%
            </p>
            <p className="text-sm text-stone-500 mt-2">Satisfacción</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors duration-300">
              <span data-stat-number>85</span>%
            </p>
            <p className="text-sm text-stone-500 mt-2">Alcanzan sus metas</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors duration-300">
              <span data-stat-number>4.9</span>★
            </p>
            <p className="text-sm text-stone-500 mt-2">Rating App Store</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors duration-300">
              <span data-stat-number>30</span> días
            </p>
            <p className="text-sm text-stone-500 mt-2">Primeros resultados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
