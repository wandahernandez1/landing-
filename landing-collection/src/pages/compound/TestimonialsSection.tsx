import { TESTIMONIALS } from './constants'
import { Star, Quote, BadgeCheck } from 'lucide-react'
import { useRef } from 'react'
import { useTestimonialsAnimation } from '@/shared/hooks'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Use standardized hook
  useTestimonialsAnimation(sectionRef)

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 bg-navy-950" 
      aria-labelledby="testimonials-title"
    >
      <div className="absolute inset-0 wealth-grid opacity-10" />

      <div className="container-custom relative z-10">
        <header className="testimonials-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Resultados
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Lo que dicen nuestros
            <br />
            <span className="text-gradient">clientes</span>
          </h2>
        </header>

        <div className="testimonials-grid grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.author} 
              className="testimonial-card card card-spotlight rounded-2xl p-8 relative overflow-hidden"
            >
              <Quote className="quote-icon h-8 w-8 text-gold-500/30 mb-4" aria-hidden="true" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-navy-200 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-semibold text-sm">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-navy-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-gold-500">
                <BadgeCheck className="w-3 h-3" />
                Verificado
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="social-proof mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '$50M+', label: 'Pipeline generado' },
            { value: '200+', label: 'Clientes B2B' },
            { value: '10x', label: 'ROI promedio' },
            { value: '95%', label: 'Retención' },
          ].map((stat) => (
            <div key={stat.label} className="social-stat text-center">
              <div className="text-3xl font-bold text-gold-400 mb-1 stat-pulse">{stat.value}</div>
              <div className="text-sm text-navy-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
