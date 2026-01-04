import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURES } from './constants'
import { ArrowRight, Cpu } from 'lucide-react'

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
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      // Cards stagger animation with 3D effect
      const cards = cardsRef.current?.querySelectorAll('[data-feature-card]')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          rotateX: 10,
          scale: 0.95,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Icon glow animation
      const icons = cardsRef.current?.querySelectorAll('[data-feature-icon]')
      icons?.forEach((icon) => {
        gsap.to(icon, {
          boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
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
      className="relative py-32 md:py-40 bg-slate-950 overflow-hidden" 
      aria-labelledby="features-title"
    >
      {/* Background grid */}
      <div className="absolute inset-0 neon-grid opacity-50" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[80px]" />

      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 mb-6">
            <Cpu className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Tecnología de vanguardia</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Productos
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Todo lo que necesitas
            <br />
            <span className="text-gradient">en un solo lugar</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1000px' }}>
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              data-feature-card
              className="group card card-spotlight neon-border rounded-2xl p-8 relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                data-feature-icon
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/30 transition-all duration-500 group-hover:border-cyan-400/50"
              >
                <feature.icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </div>
              
              <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex items-center gap-2 text-cyan-400 font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-sm">Descubrir</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Card index */}
              <div className="absolute top-6 right-6 text-4xl font-bold text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors duration-300 font-mono">
                0{index + 1}
              </div>

              {/* Data flow overlay */}
              <div className="absolute inset-0 data-flow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom neon line */}
        <div className="mt-20 neon-line max-w-xl mx-auto" />
      </div>
    </section>
  )
}
