import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from './constants'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      
      <div className="container-custom relative">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-500">
            Devs
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Lo que dicen los{' '}
            <span className="text-gradient">developers</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <article key={idx} className="card rounded-2xl p-8">
              <Quote className="h-10 w-10 text-violet-500/30 mb-4" />
              
              <p className="mb-6 text-lg text-slate-300 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-violet-500 text-violet-500" />
                  ))}
                </div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
