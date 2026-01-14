import { useRef } from 'react'
import { ArrowRight, Sparkles, Zap, Shield, Clock } from 'lucide-react'
import { useCtaAnimation, useOrbAnimation } from '@/shared/hooks'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const orbsRef = useRef<HTMLDivElement>(null)

  // Standardized GSAP animations
  useCtaAnimation(sectionRef)
  useOrbAnimation(orbsRef, '[data-orb]')

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-[#050010] overflow-hidden" 
      aria-labelledby="cta-title"
    >
      {/* Animated orbs background */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
        <div 
          data-orb
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" 
        />
        <div 
          data-orb
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-500/20 rounded-full blur-[80px]" 
        />
        <div 
          data-orb
          className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-fuchsia-500/15 rounded-full blur-[60px]" 
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      
      <div className="container-custom relative">
        <div ref={contentRef} className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            data-cta-badge
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 px-5 py-2.5"
          >
            <Sparkles data-sparkle className="h-5 w-5 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Oferta especial por tiempo limitado</span>
          </div>

          {/* Title */}
          <h2 
            data-cta-title
            id="cta-title" 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Comienza tu transformación
            <br />
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              hoy mismo
            </span>
          </h2>

          {/* Description */}
          <p 
            data-cta-description
            className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Únete a más de <span className="text-white font-semibold">10,000 empresas</span> que ya están 
            potenciando su productividad con inteligencia artificial de última generación.
          </p>

          {/* CTA Button */}
          <div data-cta-button className="mb-10">
            <button className="group relative btn-primary inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-3">
                Comenzar Gratis
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Features list */}
          <div 
            data-cta-features
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                <Shield className="h-4 w-4 text-green-400" />
              </div>
              <span className="group-hover:text-neutral-300 transition-colors">Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Clock className="h-4 w-4 text-purple-400" />
              </div>
              <span className="group-hover:text-neutral-300 transition-colors">Prueba gratuita de 14 días</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <span className="group-hover:text-neutral-300 transition-colors">Configuración en 5 minutos</span>
            </div>
          </div>

          {/* Trust logos placeholder */}
          <div className="mt-16 pt-12 border-t border-white/5">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-6">
              Empresas que confían en nosotros
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 hover:opacity-60 transition-opacity duration-500">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
                <span key={company} className="text-lg md:text-xl font-semibold text-neutral-500">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
