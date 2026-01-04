import { useEffect, useRef } from 'react'
import { ArrowRight, Gem, Diamond, Sparkles, Crown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BENEFITS = [
  { text: 'Acceso Exclusivo', icon: Crown },
  { text: 'Envío Premium', icon: Diamond },
  { text: 'Garantía Total', icon: Sparkles },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      // Floating decorative elements
      if (floatingRef.current) {
        gsap.fromTo(
          floatingRef.current.children,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 0.1,
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Icon with glow animation
      tl.fromTo(
        iconRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'back.out(1.7)' 
        }
      )

      // Content animation
      const contentElements = contentRef.current?.children
      if (contentElements) {
        tl.fromTo(
          contentElements,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.7, 
            stagger: 0.12, 
            ease: 'power3.out' 
          },
          '-=0.4'
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      {/* Floating Decorative Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <Diamond 
          className="floating-icon text-gold-400" 
          style={{ top: '20%', left: '10%' }}
          size={20}
          strokeWidth={1}
        />
        <Sparkles 
          className="floating-icon text-gold-400" 
          style={{ top: '30%', right: '15%' }}
          size={18}
          strokeWidth={1}
        />
        <Crown 
          className="floating-icon text-gold-400" 
          style={{ bottom: '25%', left: '8%' }}
          size={22}
          strokeWidth={1}
        />
        <Diamond 
          className="floating-icon text-gold-400" 
          style={{ bottom: '20%', right: '10%' }}
          size={16}
          strokeWidth={1}
        />
      </div>
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <div ref={iconRef} className="inline-block mb-10 animate-subtle-glow rounded-full p-4">
            <Gem className="h-12 w-12 text-gold-400 sparkle" strokeWidth={1} />
          </div>

          <div ref={contentRef}>
            <h2 className="text-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">
              Elevate your style
            </h2>
            
            <p className="mx-auto mt-8 max-w-xl text-lg text-ivory-50/50 leading-relaxed">
              Únete a una comunidad selecta que aprecia la verdadera artesanía 
              y el lujo auténtico. Tu experiencia comienza aquí.
            </p>

            {/* Benefit Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {BENEFITS.map((benefit, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-ivory-50/10 text-xs uppercase tracking-widest text-ivory-50/60 transition-all duration-300 hover:border-gold-400/30 hover:text-ivory-50/80"
                >
                  <benefit.icon className="h-3 w-3 text-gold-400" strokeWidth={1.5} />
                  {benefit.text}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="#pricing"
                className="btn-primary flex items-center gap-3 rounded-none px-12 py-4 text-sm uppercase tracking-widest"
              >
                Membership
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="btn-secondary rounded-none px-12 py-4 text-sm uppercase tracking-widest"
              >
                Ver Colección
              </a>
            </div>

            <p className="mt-10 text-xs uppercase tracking-widest text-ivory-50/30">
              Membresía limitada • Acceso por invitación
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
