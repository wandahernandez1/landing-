import { useRef } from 'react'
import { Star, Quote, BadgeCheck, Building2, TrendingUp, Target } from 'lucide-react'
import { TESTIMONIALS } from './constants'
import { useSectionAnimation, useStaggerReveal, useFloatingAnimation } from '@/shared/hooks'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const socialProofRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '.testimonial-card')
  useFloatingAnimation(cardsRef, '.quote-icon')
  useStaggerReveal(socialProofRef, '.stat-card')

  const socialProofStats = [
    { icon: Building2, value: '2.3M+', label: 'Propiedades analizadas' },
    { icon: TrendingUp, value: '15K+', label: 'Valoraciones realizadas' },
    { icon: Target, value: '98.2%', label: 'Precisión IA promedio' },
  ]

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      
      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Casos de Éxito
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Resultados{' '}
            <span className="text-gradient">comprobados</span>
          </h2>
        </header>

        {/* Social Proof Stats */}
        <div ref={socialProofRef} className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {socialProofStats.map((stat, idx) => (
            <div 
              key={idx}
              className="social-proof-item card rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800/30 border border-forest-700/30">
                <stat.icon className="h-6 w-6 text-forest-500 icon-glow" />
              </div>
              <p className="text-2xl font-bold text-gold-400 stat-pulse" style={{ animationDelay: `${idx * 0.3}s` }}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <article key={idx} className="testimonial-card card rounded-2xl p-8 relative">
              <Quote className="quote-icon h-10 w-10 text-gold-500 mb-4 quote-float" style={{ animationDelay: `${idx * 0.5}s` }} />
              
              <p className="mb-6 text-lg text-stone-300 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="font-semibold text-white flex items-center gap-2">
                      {testimonial.author}
                      <span className="verified-badge inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] text-white">
                        <BadgeCheck className="h-3 w-3" />
                        Verificado
                      </span>
                    </p>
                    <p className="text-sm text-stone-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
