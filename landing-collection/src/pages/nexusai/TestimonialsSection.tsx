import { TESTIMONIALS } from './constants'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 bg-[#050010]" aria-labelledby="testimonials-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
            Testimonios
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Lo que dicen nuestros
            <br />
            <span className="text-gradient">clientes</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.author} className="card-glow rounded-2xl p-8">
              <Quote className="h-10 w-10 text-purple-500/30 mb-6" aria-hidden="true" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-neutral-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
