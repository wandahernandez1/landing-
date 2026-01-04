import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURES } from './constants'

gsap.registerPlugin(ScrollTrigger)

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

      // Cards stagger animation
      const cards = gridRef.current?.querySelectorAll('article')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mouse-x', `${x}%`)
    card.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="container-custom">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold-400">
            La Experiencia
          </p>
          <h2 className="text-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">
            Lujo sin compromiso
          </h2>
        </header>

        <div ref={gridRef} className="grid gap-px bg-ivory-50/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article 
              key={idx} 
              className="card bg-charcoal-950 p-10 md:p-12 cursor-default"
              onMouseMove={handleMouseMove}
            >
              <div className="icon-shimmer inline-block mb-8">
                <feature.icon className="h-8 w-8 text-gold-400" strokeWidth={1} />
              </div>
              <h3 className="text-serif mb-4 text-2xl tracking-wide text-ivory-50">
                {feature.title}
              </h3>
              <p className="text-ivory-50/50 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
