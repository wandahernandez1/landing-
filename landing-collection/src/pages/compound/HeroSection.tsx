import { ArrowRight, TrendingUp, BarChart3, PieChart, DollarSign, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { y: -30, opacity: 0, duration: 0.8 })
        .from('.hero-title-line', { y: 60, opacity: 0, stagger: 0.15, duration: 1 }, '-=0.4')
        .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('.hero-stat', { y: 40, opacity: 0, stagger: 0.15, duration: 0.8 }, '-=0.3')
        .from('.trust-badge', { scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')

      // Floating icons
      gsap.to('.floating-icon', {
        y: -15,
        duration: 3,
        stagger: { each: 0.5, yoyo: true, repeat: -1 },
        ease: 'power1.inOut',
      })

      // Gold coins float
      gsap.to('.coin-icon', {
        y: -10,
        rotation: 10,
        duration: 4,
        stagger: { each: 0.6, yoyo: true, repeat: -1 },
        ease: 'power1.inOut',
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="bg-glow absolute inset-0" />
      
      {/* Wealth Grid */}
      <div className="absolute inset-0 wealth-grid opacity-30" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <TrendingUp className="floating-icon absolute top-[20%] left-[10%] w-10 h-10 text-gold-500/20" />
        <BarChart3 className="floating-icon absolute top-[25%] right-[15%] w-8 h-8 text-gold-500/15" />
        <PieChart className="floating-icon absolute bottom-[35%] left-[15%] w-7 h-7 text-gold-500/15" />
        <DollarSign className="coin-icon absolute bottom-[25%] right-[10%] w-10 h-10 text-gold-500/20" />
        <DollarSign className="coin-icon absolute top-[40%] left-[8%] w-6 h-6 text-gold-500/15" />
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-sm text-gold-400 font-medium">B2B Growth Agency</span>
            <span className="text-xs px-2 py-0.5 bg-gold-500/20 text-gold-400 rounded-full">Top Rated</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            <span className="hero-title-line block">Escala tu</span>
            <span className="hero-title-line block text-gradient">marketing B2B</span>
          </h1>

          <p className="hero-subtitle mx-auto max-w-2xl text-lg text-navy-300 md:text-xl mb-10">
            Estrategias data-driven, growth hacking y RevOps para empresas 
            B2B que quieren resultados medibles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="hero-cta btn-primary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold">
              <TrendingUp className="h-5 w-5" />
              Agendar Estrategia
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="hero-cta btn-secondary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium">
              <BarChart3 className="h-5 w-5" />
              Ver Casos de Éxito
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-navy-400">
            <div className="hero-stat text-center cursor-default">
              <span className="text-2xl font-bold text-gold-400 stat-pulse">$50M+</span>
              <p className="text-sm">Pipeline generado</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="hero-stat text-center cursor-default">
              <span className="text-2xl font-bold text-gold-400 stat-pulse">200+</span>
              <p className="text-sm">Clientes B2B</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="hero-stat text-center cursor-default">
              <span className="text-2xl font-bold text-gold-400 stat-pulse">10x</span>
              <p className="text-sm">ROI promedio</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Google Partner', 'HubSpot Certified', 'Salesforce Partner', 'LinkedIn Ads'].map((badge) => (
              <div 
                key={badge}
                className="trust-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/50 border border-gold-500/20"
              >
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span className="text-sm text-navy-300">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
