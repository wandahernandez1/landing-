import { TESTIMONIALS } from './constants'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 bg-[#020617]" aria-labelledby="testimonials-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Testimonios
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            La confianza de
            <br />
            <span className="text-gradient">millones</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.author} className="card rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-slate-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
