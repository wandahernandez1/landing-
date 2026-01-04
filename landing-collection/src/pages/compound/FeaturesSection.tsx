import { FEATURES } from './constants'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 85%',
        },
      })

      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
        },
      })

      gsap.to('.icon-wrapper', {
        boxShadow: '0 0 30px rgba(234, 179, 8, 0.3)',
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 60%',
        },
      })
    }, sectionRef)

    const cards = document.querySelectorAll('.feature-card')
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent
      const card = mouseEvent.currentTarget as HTMLElement
      const rect = card.getBoundingClientRect()
      const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100
      const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove)
    })

    return () => {
      ctx.revert()
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove)
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-32 bg-navy-900" 
      aria-labelledby="features-title"
    >
      <div className="absolute inset-0 wealth-grid opacity-20" />

      <div className="container-custom relative z-10">
        <header className="section-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Servicios
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Growth integral para
            <br />
            <span className="text-gradient">tu empresa B2B</span>
          </h2>
        </header>

        <div className="features-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div 
              key={feature.title} 
              className="feature-card card card-spotlight rounded-2xl p-8"
            >
              <div className="icon-wrapper mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/20 transition-all duration-500">
                <feature.icon className="h-7 w-7 text-gold-500" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-navy-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
