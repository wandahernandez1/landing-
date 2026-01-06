import { ArrowRight, Shield, Lock, Eye, Zap, CheckCircle } from 'lucide-react'
import { useRef } from 'react'
import { useCtaAnimation, useFloatingAnimation, usePulseAnimation } from '@/shared/hooks'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Use standardized hooks
  useCtaAnimation(sectionRef)
  useFloatingAnimation(sectionRef, '.floating-icon')
  usePulseAnimation(sectionRef, '.shield-glow', { minOpacity: 0.3, maxOpacity: 0 })
  usePulseAnimation(sectionRef, '.cta-ring', { minOpacity: 0.2, maxOpacity: 0 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-[#010410] overflow-hidden" 
      aria-labelledby="cta-title"
    >
      <div className="bg-glow absolute inset-0" />
      
      {/* Security Grid */}
      <div className="absolute inset-0 security-grid opacity-20" />

      {/* Protection Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="cta-ring absolute w-[300px] h-[300px] rounded-full border border-cyan-500/20" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="cta-ring absolute w-[300px] h-[300px] rounded-full border border-cyan-500/20" style={{ transform: 'translate(-50%, -50%)', animationDelay: '1s' }} />
        <div className="cta-ring absolute w-[300px] h-[300px] rounded-full border border-cyan-500/20" style={{ transform: 'translate(-50%, -50%)', animationDelay: '2s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Lock className="floating-icon absolute top-[20%] left-[15%] w-6 h-6 text-cyan-500/20" />
        <Eye className="floating-icon absolute top-[30%] right-[20%] w-5 h-5 text-cyan-500/15" />
        <Zap className="floating-icon absolute bottom-[35%] left-[20%] w-5 h-5 text-cyan-500/15" />
        <Shield className="floating-icon absolute bottom-[25%] right-[15%] w-6 h-6 text-cyan-500/20" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Shield Icon */}
          <div className="cta-shield relative w-20 h-20 mx-auto mb-8">
            <div className="shield-glow absolute inset-0 bg-cyan-400 rounded-full opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl shadow-xl shadow-cyan-500/30">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 id="cta-title" className="cta-title text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Protege tu organización
            <br />
            <span className="text-gradient">hoy</span>
          </h2>

          <p className="cta-subtitle text-lg text-navy-300 mb-10 max-w-xl mx-auto">
            Agenda una demo personalizada y descubre cómo Sentinel puede proteger tu infraestructura.
          </p>

          <button className="cta-button btn-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold">
            <Shield className="h-5 w-5" />
            Solicitar Demo Gratis
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="cta-note mt-6 text-sm text-navy-500">
            Sin compromiso · Evaluación de seguridad incluida
          </p>

          {/* Compliance Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { name: 'ISO 27001', desc: 'Certificado' },
              { name: 'SOC 2 Tipo II', desc: 'Auditado' },
              { name: 'GDPR', desc: 'Cumplimiento' },
              { name: 'PCI DSS', desc: 'Nivel 1' },
            ].map((badge) => (
              <div 
                key={badge.name}
                className="compliance-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900/50 border border-cyan-500/20"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <div className="text-left">
                  <span className="text-sm font-medium text-white block">{badge.name}</span>
                  <span className="text-xs text-navy-400">{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
