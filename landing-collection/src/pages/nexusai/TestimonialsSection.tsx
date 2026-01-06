import { useRef } from 'react'
import { TESTIMONIALS } from './constants'
import { Star, Quote, BadgeCheck } from 'lucide-react'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Standardized GSAP animations
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '[data-testimonial-card]', {
    stagger: 0.15,
  })

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 bg-[#050010] overflow-hidden" 
      aria-labelledby="testimonials-title"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-2 mb-6">
            <BadgeCheck className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Verificado por más de 10,000 usuarios</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
            Testimonios
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lo que dicen nuestros
            <br />
            <span className="text-gradient">clientes</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.author} 
              data-testimonial-card
              className="group card-glow rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.03]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative">
                <Quote 
                  data-quote-icon
                  className="h-10 w-10 text-purple-500/30 mb-6 transition-colors duration-300 group-hover:text-purple-500/50" 
                  aria-hidden="true" 
                />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-purple-400 text-purple-400 transition-transform duration-300" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                    aria-hidden="true" 
                  />
                ))}
              </div>

              <blockquote className="text-neutral-300 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-semibold ring-2 ring-purple-500/20 ring-offset-2 ring-offset-[#050010]">
                    {testimonial.author.charAt(0)}
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#050010]" />
                </div>
                <div>
                  <p className="font-semibold text-white flex items-center gap-2">
                    {testimonial.author}
                    <BadgeCheck className="h-4 w-4 text-purple-400" />
                  </p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Card index indicator */}
              <div className="absolute top-4 right-4 text-xs font-mono text-purple-500/30">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div className="group">
            <p className="text-3xl md:text-4xl font-bold text-white group-hover:text-gradient transition-all duration-300">4.9/5</p>
            <p className="text-sm text-neutral-500 mt-1">Calificación promedio</p>
          </div>
          <div className="w-px bg-white/10 hidden md:block" />
          <div className="group">
            <p className="text-3xl md:text-4xl font-bold text-white group-hover:text-gradient transition-all duration-300">10,000+</p>
            <p className="text-sm text-neutral-500 mt-1">Usuarios activos</p>
          </div>
          <div className="w-px bg-white/10 hidden md:block" />
          <div className="group">
            <p className="text-3xl md:text-4xl font-bold text-white group-hover:text-gradient transition-all duration-300">50M+</p>
            <p className="text-sm text-neutral-500 mt-1">Tareas automatizadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
