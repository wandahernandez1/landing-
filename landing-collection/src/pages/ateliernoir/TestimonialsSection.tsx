import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from './constants'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      
      <div className="container-custom relative">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold-400">
            Testimonios
          </p>
          <h2 className="text-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">
            Voces selectas
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <article key={idx} className="card rounded-none p-10">
              <Quote className="h-10 w-10 text-gold-400/20 mb-6" strokeWidth={1} />
              
              <p className="mb-8 text-lg text-ivory-50/80 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-serif text-lg text-ivory-50">{testimonial.author}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ivory-50/40">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
