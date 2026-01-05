import { useRef } from 'react'
import { useCtaAnimation, useOrbAnimation, usePulseAnimation } from '@/shared/hooks'
import { ArrowRight, Shield, Zap, Globe, CreditCard } from 'lucide-react'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useCtaAnimation(sectionRef)
  useOrbAnimation(sectionRef, '[data-orb-1]', { duration: 6 })
  useOrbAnimation(sectionRef, '[data-orb-2]', { duration: 8 })
  usePulseAnimation(sectionRef, '[data-neon-line]', { minOpacity: 0.6, maxOpacity: 0.8 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-[#020617] overflow-hidden" 
      aria-labelledby="cta-title"
    >
      {/* Background effects */}
      <div className="absolute inset-0 neon-grid opacity-30" />
      <div className="bg-glow absolute inset-0" />
      
      {/* Animated orbs */}
      <div 
        data-orb-1
        className="cyber-orb absolute top-1/4 left-[20%] w-[300px] h-[300px] bg-cyan-500/15" 
      />
      <div 
        data-orb-2
        className="cyber-orb absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-cyan-400/10" 
      />
      
      <div className="container-custom relative">
        <div ref={contentRef} className="mx-auto max-w-4xl text-center">
          {/* Title */}
          <h2 
            data-cta-title
            id="cta-title" 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Tu cuenta en
            <br />
            <span className="text-gradient">5 minutos</span>
          </h2>

          {/* Description */}
          <p 
            data-cta-description
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Sin papeleos. Sin comisiones ocultas. Sin esperas.
            <br />
            <span className="text-cyan-400 font-semibold">La banca del futuro, hoy.</span>
          </p>

          {/* CTA Button */}
          <div data-cta-button className="mb-10">
            <button className="group btn-primary inline-flex items-center gap-3 rounded-xl px-10 py-5 text-lg font-semibold relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(6,182,212,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                <CreditCard className="h-6 w-6" />
                Abrir Cuenta Ahora
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Features */}
          <div 
            data-cta-features
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-400 mb-12"
          >
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                <Shield className="h-4 w-4 text-cyan-400" />
              </div>
              <span className="group-hover:text-cyan-300 transition-colors">Depósitos hasta €100,000</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                <Zap className="h-4 w-4 text-cyan-400" />
              </div>
              <span className="group-hover:text-cyan-300 transition-colors">Activación instantánea</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                <Globe className="h-4 w-4 text-cyan-400" />
              </div>
              <span className="group-hover:text-cyan-300 transition-colors">150+ países</span>
            </div>
          </div>

          {/* Neon divider line */}
          <div data-neon-line className="neon-line max-w-md mx-auto mb-12" />

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">SSL</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">256-bit</p>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">GDPR</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Compliant</p>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">PCI</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">DSS Level 1</p>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">SOC2</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Type II</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
