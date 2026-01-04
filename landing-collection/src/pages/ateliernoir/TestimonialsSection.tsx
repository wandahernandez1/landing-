import { useEffect, useRef } from 'react'
import { Star, Quote, Crown, Users, Package, ThumbsUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TESTIMONIALS } from './constants'

gsap.registerPlugin(ScrollTrigger)

const SOCIAL_STATS = [
  { icon: Users, value: '12,000+', label: 'Clientes Elite' },
  { icon: Package, value: '50,000+', label: 'Productos Entregados' },
  { icon: ThumbsUp, value: '99.8%', label: 'Satisfacción' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Testimonial cards animation
      const cards = cardsRef.current?.querySelectorAll('article')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Quote icons animation
      const quotes = cardsRef.current?.querySelectorAll('.quote-icon')
      if (quotes) {
        gsap.fromTo(
          quotes,
          { opacity: 0, scale: 0.5, rotation: -10 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Social proof stats animation
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item')
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      
      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold-400">
            Testimonios
          </p>
          <h2 className="text-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">
            Voces selectas
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <article key={idx} className="card rounded-none p-10 relative">
              {/* VIP Badge */}
              <div className="absolute top-4 right-4">
                <span className="vip-badge inline-flex items-center gap-1 px-2 py-1 rounded-sm text-charcoal-950">
                  <Crown className="h-3 w-3" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-wider font-medium">VIP</span>
                </span>
              </div>

              <Quote className="quote-icon h-10 w-10 text-gold-400/20 mb-6" strokeWidth={1} />
              
              <div className="quote-line mb-4" />
              
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

        {/* Social Proof Stats */}
        <div ref={statsRef} className="mt-20 luxury-border rounded-none p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12">
            {SOCIAL_STATS.map((stat, idx) => (
              <div key={idx} className="stat-item text-center">
                <stat.icon className="mx-auto h-6 w-6 text-gold-400/60 mb-4" strokeWidth={1} />
                <p className="text-serif text-3xl text-gold-400 md:text-4xl animate-stat-pulse" style={{ animationDelay: `${idx * 0.3}s` }}>
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-ivory-50/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
