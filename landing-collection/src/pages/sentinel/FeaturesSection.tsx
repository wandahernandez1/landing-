import { FEATURES } from './constants'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Cards stagger animation
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

      // Icon glow animation on scroll
      gsap.to('.icon-wrapper', {
        boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 60%',
        },
      })
    }, sectionRef)

    // Mouse tracking for cards
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
      className="relative py-32 bg-navy-950" 
      aria-labelledby="features-title"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 security-grid opacity-20" />

      <div className="container-custom relative z-10">
        <header className="section-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Soluciones
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Seguridad de
            <br />
            <span className="text-gradient">nueva generación</span>
          </h2>
        </header>

        <div className="features-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div 
              key={feature.title} 
              className="feature-card card card-spotlight rounded-2xl p-8"
            >
              <div className="icon-wrapper mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20 transition-all duration-500">
                <feature.icon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-navy-300 leading-relaxed">{feature.description}</p>
              
              {/* Data stream effect */}
              <div className="absolute top-0 right-4 h-full w-px overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="data-stream h-8 w-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
