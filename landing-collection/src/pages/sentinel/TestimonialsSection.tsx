import { TESTIMONIALS } from './constants'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 bg-[#010410]" aria-labelledby="testimonials-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Casos de Éxito
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Confianza de
            <br />
            <span className="text-gradient">líderes globales</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.author} className="card rounded-2xl p-8">
              <Quote className="h-8 w-8 text-cyan-500/30 mb-4" aria-hidden="true" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-navy-200 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-navy-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
