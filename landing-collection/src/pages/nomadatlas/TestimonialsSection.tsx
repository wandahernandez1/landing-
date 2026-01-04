import { useEffect, useRef } from 'react'
import { Star, Quote, CheckCircle, Globe, Users, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TESTIMONIALS } from './constants'

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Cards animation with quote float
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card')
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 60,
            rotation: index % 2 === 0 ? -3 : 3,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
          })

          // Quote icon floating animation
          const quoteIcon = card.querySelector('.quote-icon')
          gsap.to(quoteIcon, {
            y: -10,
            rotation: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          })
        })
      }

      // Social proof stats animation
      const stats = statsRef.current?.querySelectorAll('.stat-item')
      if (stats) {
        gsap.from(stats, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.12,
          ease: 'back.out(1.7)',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40 bg-gradient-section">
      <div className="container-custom">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-600">
            Comunidad
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl">
            Historias de{' '}
            <span className="text-gradient">nómadas</span>
          </h2>
        </header>

        {/* Social Proof Stats */}
        <div ref={statsRef} className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div className="stat-item stat-card">
            <Globe className="mx-auto mb-3 h-8 w-8 text-teal-600" />
            <p className="text-3xl font-bold text-sand-900">150+</p>
            <p className="text-sm text-sand-800/60">Países Visitados</p>
          </div>
          <div className="stat-item stat-card">
            <Users className="mx-auto mb-3 h-8 w-8 text-orange-500" />
            <p className="text-3xl font-bold text-sand-900">50K+</p>
            <p className="text-sm text-sand-800/60">Nómadas Activos</p>
          </div>
          <div className="stat-item stat-card">
            <MapPin className="mx-auto mb-3 h-8 w-8 text-teal-600" />
            <p className="text-3xl font-bold text-sand-900">500+</p>
            <p className="text-sm text-sand-800/60">Destinos Curados</p>
          </div>
          <div className="stat-item stat-card">
            <Star className="mx-auto mb-3 h-8 w-8 text-orange-500" />
            <p className="text-3xl font-bold text-sand-900">4.9</p>
            <p className="text-sm text-sand-800/60">Rating Promedio</p>
          </div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <article key={idx} className="testimonial-card card rounded-2xl p-8">
              <Quote className="quote-icon h-10 w-10 text-teal-500/30 mb-4" />
              
              <p className="mb-6 text-lg text-sand-800 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sand-900">{testimonial.author}</p>
                    <p className="text-sm text-sand-800/60">{testimonial.role}</p>
                  </div>
                  <span className="verified-badge">
                    <CheckCircle className="h-3 w-3" />
                    Verificado
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
