import { Star, Quote, BadgeCheck } from 'lucide-react'
import { TESTIMONIALS } from './constants'
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
      className="relative py-32 md:py-40"
      aria-labelledby="testimonials-title"
    >
      <div className="bg-glow absolute inset-0 rotate-180" />
      
      {/* Background */}
      <div className="absolute inset-0 dev-grid opacity-10" />
      
      <div className="container-custom relative z-10">
        <header className="testimonials-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">
            Desarrolladores
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Lo que dicen los{' '}
            <span className="text-gradient">desarrolladores</span>
          </h2>
        </header>

        <div className="testimonials-grid grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article 
              key={testimonial.author} 
              className="testimonial-card card card-spotlight rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Decorative code brackets */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-5">
                <span className="text-6xl font-mono text-violet-400">{'</>'}</span>
              </div>

              <Quote className="quote-icon h-8 w-8 text-violet-500/30 mb-4" aria-hidden="true" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-violet-400 text-violet-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-slate-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-violet-400">
                <BadgeCheck className="w-3 h-3" />
                Dev Verificado
              </div>
            </article>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="social-proof mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '10K+', label: 'Desarrolladores activos' },
            { value: '50K+', label: 'Portfolios creados' },
            { value: '99.9%', label: 'Uptime garantizado' },
            { value: '4.9★', label: 'Calificación promedio' },
          ].map((stat) => (
            <div key={stat.label} className="social-stat text-center">
              <div className="text-3xl font-bold text-violet-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
