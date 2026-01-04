import { useEffect, useRef } from 'react'
import { ArrowRight, Diamond, Crown, Sparkles, Star, Gem } from 'lucide-react'
import { gsap } from 'gsap'
import { COMPANY } from './constants'

const FLOATING_ICONS = [
  { Icon: Diamond, top: '15%', left: '8%', size: 24, delay: 0 },
  { Icon: Crown, top: '25%', right: '10%', size: 20, delay: 0.5 },
  { Icon: Sparkles, top: '60%', left: '5%', size: 18, delay: 1 },
  { Icon: Star, top: '70%', right: '8%', size: 22, delay: 1.5 },
  { Icon: Gem, top: '40%', left: '12%', size: 16, delay: 2 },
]

const TRUST_BRANDS = [
  'Hermès',
  'Gucci',
  'Louis Vuitton',
  'Chanel',
  'Prada',
]

const STATS = [
  { value: '150+', label: 'Maisons' },
  { value: '12K', label: 'Miembros' },
  { value: '100%', label: 'Autenticidad' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Floating icons entrance
      if (floatingRef.current) {
        gsap.fromTo(
          floatingRef.current.children,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 0.15,
            scale: 1,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power2.out',
          }
        )
      }

      // Main content animation sequence
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          '-=0.3'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.2'
        )
        .fromTo(
          trustRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.4'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-20 md:pt-24 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      {/* Floating Luxury Icons */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        {FLOATING_ICONS.map(({ Icon, top, left, right, size }, idx) => (
          <div
            key={idx}
            className="floating-icon"
            style={{ top, left, right }}
          >
            <Icon 
              className="text-gold-400 sparkle" 
              size={size} 
              strokeWidth={1}
            />
          </div>
        ))}
      </div>
      
      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20">
        <p 
          ref={badgeRef}
          className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-400 opacity-0"
        >
          Curated Luxury Experience
        </p>

        <h1 ref={titleRef} className="max-w-4xl text-center opacity-0">
          <span className="text-serif block text-5xl tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
            {COMPANY.tagline}
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="mt-8 max-w-xl text-center text-lg text-ivory-50/60 leading-relaxed opacity-0"
        >
          Descubre una experiencia de moda sin precedentes. Piezas únicas 
          de las mejores maisons del mundo, curadas exclusivamente para ti.
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary flex items-center gap-3 rounded-none px-10 py-4 text-sm uppercase tracking-widest opacity-0"
          >
            Explorar
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="btn-secondary rounded-none px-10 py-4 text-sm uppercase tracking-widest opacity-0"
          >
            La Experiencia
          </a>
        </div>

        <div 
          ref={statsRef}
          className="mt-24 luxury-border rounded-none p-8 md:p-12 opacity-0"
        >
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center animate-stat-pulse" style={{ animationDelay: `${idx * 0.5}s` }}>
                <p className="text-serif text-3xl text-gold-400 md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-ivory-50/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div ref={trustRef} className="mt-16 opacity-0">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-ivory-50/30 mb-6">
            Maisons de Confianza
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {TRUST_BRANDS.map((brand, idx) => (
              <span 
                key={idx}
                className="trust-badge text-serif text-lg text-ivory-50/60 tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
