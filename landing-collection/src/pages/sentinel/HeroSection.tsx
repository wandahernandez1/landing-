import { ArrowRight, Shield, Lock, Eye, Zap, CheckCircle } from 'lucide-react'
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

      // Protection rings
      gsap.to('.protection-ring', {
        scale: 2,
        opacity: 0,
        duration: 2.5,
        stagger: { each: 0.8, repeat: -1 },
        ease: 'power1.out',
      })

      // Floating shields
      gsap.to('.floating-shield', {
        y: -15,
        duration: 3,
        stagger: { each: 0.5, yoyo: true, repeat: -1 },
        ease: 'power1.inOut',
      })

      // Radar scan
      gsap.to('.radar-line', {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center center',
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
      
      {/* Security Grid Background */}
      <div className="absolute inset-0 security-grid opacity-40" />

      {/* Animated Protection Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="protection-ring absolute w-[400px] h-[400px] rounded-full border border-cyan-500/20" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="protection-ring absolute w-[400px] h-[400px] rounded-full border border-cyan-500/20" style={{ transform: 'translate(-50%, -50%)', animationDelay: '0.8s' }} />
        <div className="protection-ring absolute w-[400px] h-[400px] rounded-full border border-cyan-500/20" style={{ transform: 'translate(-50%, -50%)', animationDelay: '1.6s' }} />
      </div>

      {/* Radar Scanner */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
        <div className="radar-line absolute w-full h-full">
          <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </div>

      {/* Floating Shield Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Shield className="floating-shield absolute top-[20%] left-[10%] w-8 h-8 text-cyan-500/20" />
        <Lock className="floating-shield absolute top-[30%] right-[15%] w-6 h-6 text-cyan-500/15" />
        <Eye className="floating-shield absolute bottom-[35%] left-[15%] w-7 h-7 text-cyan-500/15" />
        <Zap className="floating-shield absolute bottom-[25%] right-[10%] w-8 h-8 text-cyan-500/20" />
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
            <div className="relative">
              <Shield className="h-4 w-4 text-cyan-400" />
              <div className="absolute inset-0 shield-pulse rounded-full" />
            </div>
            <span className="text-sm text-cyan-300">Certificado SOC 2 Type II</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            <span className="hero-title-line block">Protección</span>
            <span className="hero-title-line block text-gradient">inteligente</span>
          </h1>

          <p className="hero-subtitle mx-auto max-w-2xl text-lg text-navy-300 md:text-xl mb-10">
            Ciberseguridad empresarial con IA predictiva. Detecta, responde y 
            neutraliza amenazas antes de que causen daño.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="hero-cta btn-primary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold">
              Solicitar Demo
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="hero-cta btn-secondary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium">
              <Eye className="h-5 w-5" />
              Ver Casos de Éxito
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-navy-400">
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-cyan-400">500+</span>
              <p className="text-sm">Empresas protegidas</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-cyan-400">99.99%</span>
              <p className="text-sm">Detección de amenazas</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-cyan-400">&lt;1s</span>
              <p className="text-sm">Tiempo de respuesta</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['ISO 27001', 'SOC 2', 'GDPR', 'PCI DSS'].map((badge) => (
              <div 
                key={badge}
                className="trust-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900/50 border border-cyan-500/20"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-navy-300">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
