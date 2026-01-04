import { TESTIMONIALS } from './constants'
import { Star, Quote, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-header',
          start: 'top 85%',
        },
      })

      gsap.from('.testimonial-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 80%',
        },
      })

      gsap.to('.quote-icon', {
        y: -8,
        duration: 2.5,
        stagger: { each: 0.3, yoyo: true, repeat: -1 },
        ease: 'power1.inOut',
      })

      gsap.from('.social-stat', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.social-proof',
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 bg-amber-50" 
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        <header className="testimonials-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-600">
            Testimonios
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
            Historias de
            <br />
            <span className="text-gradient">éxito</span>
          </h2>
        </header>

        <div className="testimonials-grid grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.author} 
              className="testimonial-card card card-spotlight rounded-2xl p-8 bg-white relative overflow-hidden"
            >
              <Quote className="quote-icon absolute top-4 right-4 w-8 h-8 text-amber-200" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-indigo-900/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-500/20">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-indigo-950">{testimonial.author}</p>
                  <p className="text-sm text-indigo-900/60">{testimonial.role}</p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-green-600">
                <CheckCircle className="w-3 h-3" />
                Verificado
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="social-proof mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '1M+', label: 'Estudiantes' },
            { value: '10,000+', label: 'Cursos' },
            { value: '95%', label: 'Satisfacción' },
            { value: '50+', label: 'Países' },
          ].map((stat) => (
            <div key={stat.label} className="social-stat text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{stat.value}</div>
              <div className="text-sm text-indigo-900/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
