import { TESTIMONIALS } from './constants'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 bg-stone-50" aria-labelledby="testimonials-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-600">
            Testimonios
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Historias de
            <br />
            <span className="text-gradient">éxito real</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.author} className="card rounded-3xl p-8 bg-white">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-emerald-400 text-emerald-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-stone-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
