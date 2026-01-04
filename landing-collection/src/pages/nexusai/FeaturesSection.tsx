import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURES } from './constants'

gsap.registerPlugin(ScrollTrigger)

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('[data-features-header] > *', {
        scrollTrigger: {
          trigger: '[data-features-header]',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('[data-feature-card]')
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        })
      }

      // Card hover mouse tracking
      const handleMouseMove = (e: MouseEvent) => {
        const cards = document.querySelectorAll('[data-feature-card]')
        cards.forEach((card) => {
          const rect = (card as HTMLElement).getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
          ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
        })
      }

      document.addEventListener('mousemove', handleMouseMove)
      return () => document.removeEventListener('mousemove', handleMouseMove)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-32 md:py-40 bg-[#030014] overflow-hidden" 
      aria-labelledby="features-title"
    >
      {/* Background Elements */}
      <div className="bg-glow-bottom absolute inset-0" aria-hidden="true" />
      <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <header data-features-header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
            Características
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Todo lo que necesitas para
            <br />
            <span className="text-gradient">escalar tu negocio</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            Herramientas de IA de última generación diseñadas para transformar 
            la forma en que trabajas.
          </p>
        </header>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              data-feature-card
              className="card group rounded-3xl p-8 md:p-10"
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="icon-box mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-purple-400" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explorar</span>
                <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
