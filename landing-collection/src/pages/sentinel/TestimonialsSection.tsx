import { TESTIMONIALS } from './constants'
import { Star, Quote, ShieldCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Cards with floating effect
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

      // Quote icons floating
      gsap.to('.quote-icon', {
        y: -8,
        duration: 2.5,
        stagger: { each: 0.3, yoyo: true, repeat: -1 },
        ease: 'power1.inOut',
      })

      // Stats animation
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
      className="relative py-32 bg-[#010410]" 
      aria-labelledby="testimonials-title"
    >
      {/* Background */}
      <div className="absolute inset-0 security-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />

      <div className="container-custom relative z-10">
        <header className="testimonials-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Casos de Éxito
          </p>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Confianza de
            <br />
            <span className="text-gradient">líderes globales</span>
          </h2>
        </header>

        <div className="testimonials-grid grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.author} 
              className="testimonial-card card card-spotlight rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Decorative shield */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-5">
                <ShieldCheck className="w-full h-full text-cyan-400" />
              </div>

              <Quote className="quote-icon h-8 w-8 text-cyan-500/30 mb-4" aria-hidden="true" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-navy-200 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm">
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
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-cyan-400">
                <ShieldCheck className="w-3 h-3" />
                Verificado
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="social-proof mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '10M+', label: 'Amenazas bloqueadas' },
            { value: '500+', label: 'Empresas protegidas' },
            { value: '99.99%', label: 'Uptime garantizado' },
            { value: '24/7', label: 'Monitoreo continuo' },
          ].map((stat) => (
            <div key={stat.label} className="social-stat text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-navy-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
