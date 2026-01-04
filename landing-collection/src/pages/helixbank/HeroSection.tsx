import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, CreditCard, Shield, Zap, Globe, TrendingUp } from 'lucide-react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content timeline
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from('[data-hero-badge]', {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      .from('[data-hero-title] > *', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.3')
      .from('[data-hero-description]', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4')
      .from('[data-hero-buttons] > *', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.3')
      .from('[data-hero-stat]', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.2')
      .from('[data-trust-badge]', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.3')

      // Cyber orbs animation
      gsap.to('[data-cyber-orb-1]', {
        x: 50,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('[data-cyber-orb-2]', {
        x: -40,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Stats counter animation
      const stats = sectionRef.current?.querySelectorAll('[data-stat-value]')
      stats?.forEach((stat) => {
        const value = stat.getAttribute('data-value')
        if (value) {
          gsap.from(stat, {
            textContent: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            delay: 1
          })
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 neon-grid" />
      <div className="bg-glow absolute inset-0" />
      
      {/* Cyber orbs */}
      <div 
        data-cyber-orb-1
        className="cyber-orb absolute top-20 left-[15%] w-[400px] h-[400px] bg-cyan-500/20" 
      />
      <div 
        data-cyber-orb-2
        className="cyber-orb absolute bottom-20 right-[10%] w-[300px] h-[300px] bg-cyan-400/15" 
      />

      {/* Scan line effect */}
      <div className="scan-line" />
      
      <div className="container-custom relative z-10 py-20">
        <div ref={contentRef} className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div 
            data-hero-badge
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 pulse-indicator" />
            </span>
            <span className="text-sm text-cyan-300 font-medium">Licencia bancaria EU · Regulado</span>
          </div>

          {/* Title */}
          <h1 data-hero-title className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-8">
            <span className="block">Banca digital</span>
            <span className="text-gradient block">sin límites</span>
          </h1>

          {/* Description */}
          <p 
            data-hero-description
            className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl mb-12 leading-relaxed"
          >
            Tu dinero en <span className="text-cyan-400 font-semibold">50+ monedas</span>. Transferencias globales instantáneas. 
            Inversiones integradas. <span className="text-white">Todo en una app.</span>
          </p>

          {/* CTA Buttons */}
          <div data-hero-buttons className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group btn-primary flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Abrir Cuenta Gratis
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <button className="group btn-secondary flex items-center gap-3 rounded-xl px-8 py-4 text-base font-medium relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <CreditCard className="h-5 w-5" />
                Ver Tarjetas
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
            <div data-hero-stat className="stat-float text-center group">
              <span className="text-3xl md:text-4xl font-bold text-white block group-hover:text-cyan-400 transition-colors">
                <span data-stat-value data-value="5">5</span>M+
              </span>
              <p className="text-sm text-slate-500 mt-1">Clientes activos</p>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div data-hero-stat className="stat-float text-center group">
              <span className="text-3xl md:text-4xl font-bold text-white block group-hover:text-cyan-400 transition-colors">
                €<span data-stat-value data-value="50">50</span>B+
              </span>
              <p className="text-sm text-slate-500 mt-1">Transacciones</p>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div data-hero-stat className="stat-float text-center group">
              <span className="text-3xl md:text-4xl font-bold text-white block group-hover:text-cyan-400 transition-colors">
                <span data-stat-value data-value="150">150</span>+
              </span>
              <p className="text-sm text-slate-500 mt-1">Países</p>
            </div>
            <div className="h-10 w-px bg-slate-800 hidden md:block" />
            <div data-hero-stat className="stat-float text-center group hidden md:block">
              <span className="text-3xl md:text-4xl font-bold text-white block group-hover:text-cyan-400 transition-colors">
                0.<span data-stat-value data-value="3">3</span>s
              </span>
              <p className="text-sm text-slate-500 mt-1">Tiempo transfer.</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div data-trust-badge className="inline-flex items-center gap-2 rounded-full bg-slate-800/50 border border-slate-700 px-4 py-2">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span className="text-xs text-slate-400">SSL 256-bit</span>
            </div>
            <div data-trust-badge className="inline-flex items-center gap-2 rounded-full bg-slate-800/50 border border-slate-700 px-4 py-2">
              <Globe className="h-4 w-4 text-cyan-400" />
              <span className="text-xs text-slate-400">SWIFT & SEPA</span>
            </div>
            <div data-trust-badge className="inline-flex items-center gap-2 rounded-full bg-slate-800/50 border border-slate-700 px-4 py-2">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-xs text-slate-400">Instant transfers</span>
            </div>
            <div data-trust-badge className="inline-flex items-center gap-2 rounded-full bg-slate-800/50 border border-slate-700 px-4 py-2">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span className="text-xs text-slate-400">Crypto trading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
