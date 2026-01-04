import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURES } from './constants'

gsap.registerPlugin(ScrollTrigger)

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent, card: HTMLElement) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }, [])

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

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.feature-card')
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        })

        // Icon bounce animation on hover
        cards.forEach((card) => {
          const icon = card.querySelector('.feature-icon')
          card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              y: -8,
              duration: 0.3,
              ease: 'power2.out',
            })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            })
          })
        })
      }
    }, sectionRef)

    // Mouse tracking for spotlight effect
    const cards = cardsRef.current?.querySelectorAll('.feature-card') as NodeListOf<HTMLElement>
    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>()
    
    cards?.forEach((card) => {
      const handler = (e: MouseEvent) => handleMouseMove(e, card)
      handlers.set(card, handler)
      card.addEventListener('mousemove', handler)
    })

    return () => {
      ctx.revert()
      cards?.forEach((card) => {
        const handler = handlers.get(card)
        if (handler) {
          card.removeEventListener('mousemove', handler)
        }
      })
    }
  }, [handleMouseMove])

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40 bg-sand-50">
      <div className="container-custom">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-600">
            Features
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl">
            Todo para tu{' '}
            <span className="text-gradient">aventura</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article key={idx} className="feature-card card card-spotlight rounded-2xl p-8">
              <div className="feature-icon icon-box mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-sand-900">
                {feature.title}
              </h3>
              <p className="text-sand-800/70 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
