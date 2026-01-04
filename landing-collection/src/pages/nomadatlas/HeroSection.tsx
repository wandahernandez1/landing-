import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin, Plane, Compass, Globe, Mountain, Shield, Award, Users } from 'lucide-react'
import gsap from 'gsap'
import { COMPANY } from './constants'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const floatingIconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Initial states
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, ctaRef.current, statsRef.current, trustRef.current], {
        opacity: 0,
        y: 30,
      })

      // Animation sequence
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.3')
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.4')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.3')
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.2')
      .to(trustRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.4')

      // Floating icons animation
      if (floatingIconsRef.current) {
        const icons = floatingIconsRef.current.querySelectorAll('.floating-icon')
        icons.forEach((icon, index) => {
          gsap.to(icon, {
            y: gsap.utils.random(-20, 20),
            x: gsap.utils.random(-10, 10),
            rotation: gsap.utils.random(-10, 10),
            duration: gsap.utils.random(3, 5),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          })
        })
      }

      // Stats counter animation
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number')
      statNumbers?.forEach((stat) => {
        const endValue = parseInt(stat.getAttribute('data-value') || '0', 10)
        gsap.fromTo(stat, 
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 2,
            delay: 0.8,
            snap: { innerText: 1 },
            ease: 'power2.out',
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-20 md:pt-24 bg-gradient-hero bg-world-grid overflow-hidden">
      {/* Floating Travel Icons */}
      <div ref={floatingIconsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-icon absolute top-[15%] left-[10%] text-teal-500/20">
          <Plane className="h-12 w-12 md:h-16 md:w-16" />
        </div>
        <div className="floating-icon absolute top-[25%] right-[15%] text-orange-500/20">
          <Compass className="h-10 w-10 md:h-14 md:w-14" />
        </div>
        <div className="floating-icon absolute bottom-[30%] left-[8%] text-teal-500/15">
          <Globe className="h-14 w-14 md:h-20 md:w-20" />
        </div>
        <div className="floating-icon absolute top-[40%] right-[8%] text-orange-500/15">
          <Mountain className="h-12 w-12 md:h-16 md:w-16" />
        </div>
        <div className="floating-icon absolute bottom-[20%] right-[20%] text-teal-500/20">
          <MapPin className="h-10 w-10 md:h-12 md:w-12" />
        </div>
      </div>

      <div className="container-custom flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20 relative z-10">
        <div 
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-700"
        >
          <Plane className="h-4 w-4 animate-plane-fly" />
          +50,000 nómadas activos
        </div>

        <h1 
          ref={titleRef}
          className="max-w-4xl text-center text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Tu guía para{' '}
          <span className="text-gradient">vivir viajando</span>
        </h1>

        <p 
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-center text-lg text-sand-800/70 md:text-xl"
        >
          {COMPANY.name} es la plataforma todo-en-uno para nómadas digitales. 
          Destinos, visas, comunidad y planificación en un solo lugar.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium"
          >
            Explorar Gratis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium"
          >
            <MapPin className="h-5 w-5" />
            Ver Destinos
          </a>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-10">
          <div className="text-center">
            <p className="stat-number text-3xl font-bold text-teal-600 animate-stat-glow md:text-4xl" data-value="500">0</p>
            <p className="mt-1 text-sm text-sand-800/60">Destinos</p>
          </div>
          <div className="text-center">
            <p className="stat-number text-3xl font-bold text-teal-600 animate-stat-glow md:text-4xl" data-value="50">0</p>
            <p className="mt-1 text-sm text-sand-800/60">Países</p>
          </div>
          <div className="text-center">
            <p className="stat-number text-3xl font-bold text-orange-500 animate-stat-glow md:text-4xl" data-value="100">0</p>
            <p className="mt-1 text-sm text-sand-800/60">K+ Usuarios</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500 animate-stat-glow md:text-4xl">4.9</p>
            <p className="mt-1 text-sm text-sand-800/60">Rating</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div ref={trustRef} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <div className="trust-badge">
            <Shield className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-medium text-sand-800">Datos Seguros</span>
          </div>
          <div className="trust-badge">
            <Award className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-sand-800">Top Travel App 2025</span>
          </div>
          <div className="trust-badge">
            <Users className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-medium text-sand-800">Comunidad Verificada</span>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
          {[
            { city: 'Lisboa', country: 'Portugal', cost: '$2,100/mes' },
            { city: 'Bali', country: 'Indonesia', cost: '$1,400/mes' },
            { city: 'CDMX', country: 'México', cost: '$1,600/mes' },
            { city: 'Bangkok', country: 'Tailandia', cost: '$1,200/mes' },
          ].map((dest, idx) => (
            <div key={idx} className="card card-spotlight rounded-2xl p-4 text-center">
              <p className="font-semibold text-sand-900">{dest.city}</p>
              <p className="text-sm text-sand-800/60">{dest.country}</p>
              <p className="mt-2 text-sm font-medium text-teal-600">{dest.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
