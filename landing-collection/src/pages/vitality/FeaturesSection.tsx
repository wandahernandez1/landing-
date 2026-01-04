import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURES } from './constants'
import { ArrowRight, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('[data-feature-card]')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Icon bounce on scroll
      const icons = cardsRef.current?.querySelectorAll('[data-feature-icon]')
      icons?.forEach((icon) => {
        gsap.from(icon, {
          scale: 0,
          rotation: -180,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: icon,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      })

    }, sectionRef)

    // Mouse tracking for card spotlight
    const handleMouseMove = (e: MouseEvent) => {
      const cards = cardsRef.current?.querySelectorAll('[data-feature-card]')
      cards?.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}%`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}%`)
      })
    }

    cardsRef.current?.addEventListener('mousemove', handleMouseMove)

    return () => {
      ctx.revert()
      cardsRef.current?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-32 md:py-40 bg-white overflow-hidden" 
      aria-labelledby="features-title"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Diseñado para ti</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-600">
            Beneficios
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Todo para tu
            <br />
            <span className="text-gradient">transformación</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              data-feature-card
              className="group card card-spotlight rounded-3xl p-8 cursor-pointer"
            >
              <div 
                data-feature-icon
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-500"
              >
                <feature.icon className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </div>
              
              <h3 className="mb-3 text-xl font-semibold text-stone-900 group-hover:text-emerald-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-stone-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex items-center gap-2 text-emerald-600 font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-sm">Descubrir más</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Card number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors duration-300">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-4">¿Quieres conocer todas las funciones?</p>
          <button className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium relative z-10">
            <span className="relative z-10">Ver todas las funciones</span>
          </button>
        </div>
      </div>
    </section>
  )
}
