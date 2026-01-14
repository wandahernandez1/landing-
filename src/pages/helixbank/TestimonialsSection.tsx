import { useRef } from 'react'
import { useSectionAnimation, useStaggerReveal, useFloatingAnimation } from '@/shared/hooks'
import { TESTIMONIALS } from './constants'
import { Star, Quote, BadgeCheck, TrendingUp } from 'lucide-react'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '[data-testimonial-card]')
  useFloatingAnimation(cardsRef, '[data-quote-icon]', { distance: 8 })

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 md:py-40 bg-[#020617] overflow-hidden" 
      aria-labelledby="testimonials-title"
    >
      {/* Background effects */}
      <div className="absolute inset-0 neon-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Más de 5 millones de usuarios</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Testimonios
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            La confianza de
            <br />
            <span className="text-gradient">millones</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.author} 
              data-testimonial-card
              className="group card card-spotlight rounded-2xl p-8 relative transition-all duration-500 hover:border-cyan-500/50"
            >
              <Quote 
                data-quote-icon
                className="absolute top-6 right-6 h-10 w-10 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors duration-300" 
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-cyan-400 text-cyan-400 transition-transform duration-300 group-hover:scale-110" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                    aria-hidden="true" 
                  />
                ))}
              </div>

              <blockquote className="text-slate-300 leading-relaxed mb-6 text-lg group-hover:text-white transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-lg ring-2 ring-cyan-500/20 ring-offset-2 ring-offset-slate-950 group-hover:ring-cyan-500/40 transition-all duration-300">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                    <BadgeCheck className="h-3 w-3 text-slate-900" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white flex items-center gap-2">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Card index */}
              <div className="absolute bottom-4 right-4 text-5xl font-bold text-cyan-500/5 font-mono">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div className="group stat-float">
            <p className="text-4xl md:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">4.9/5</p>
            <p className="text-sm text-slate-500 mt-2">App Store Rating</p>
          </div>
          <div className="w-px bg-slate-800 hidden md:block" />
          <div className="group stat-float">
            <p className="text-4xl md:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">€50B+</p>
            <p className="text-sm text-slate-500 mt-2">Transacciones</p>
          </div>
          <div className="w-px bg-slate-800 hidden md:block" />
          <div className="group stat-float">
            <p className="text-4xl md:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">99.9%</p>
            <p className="text-sm text-slate-500 mt-2">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
