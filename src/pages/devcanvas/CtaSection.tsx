import { ArrowRight, Terminal, Code2, Braces, GitBranch, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { useCtaAnimation, useFloatingAnimation, usePulseAnimation } from '@/shared/hooks'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Use standardized hooks
  useCtaAnimation(sectionRef)
  useFloatingAnimation(sectionRef, '.floating-cta-icon')
  usePulseAnimation(sectionRef, '.icon-glow-pulse', { minOpacity: 0.3, maxOpacity: 0 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="cta-title"
    >
      <div className="bg-glow absolute inset-0" />
      
      {/* Dev Grid */}
      <div className="absolute inset-0 dev-grid opacity-20" />

      {/* Code Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="code-ring absolute w-[300px] h-[300px] rounded-full border border-violet-500/20" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="code-ring absolute w-[300px] h-[300px] rounded-full border border-violet-500/20" style={{ transform: 'translate(-50%, -50%)', animationDelay: '1s' }} />
        <div className="code-ring absolute w-[300px] h-[300px] rounded-full border border-violet-500/20" style={{ transform: 'translate(-50%, -50%)', animationDelay: '2s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code2 className="floating-cta-icon absolute top-[20%] left-[15%] w-6 h-6 text-violet-500/20" />
        <Braces className="floating-cta-icon absolute top-[30%] right-[20%] w-5 h-5 text-violet-500/15" />
        <GitBranch className="floating-cta-icon absolute bottom-[35%] left-[20%] w-5 h-5 text-violet-500/15" />
        <Terminal className="floating-cta-icon absolute bottom-[25%] right-[15%] w-6 h-6 text-violet-500/20" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Terminal Icon */}
          <div className="cta-icon relative w-20 h-20 mx-auto mb-8">
            <div className="icon-glow-pulse absolute inset-0 bg-violet-400 rounded-full opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl shadow-xl shadow-violet-500/30">
              <Terminal className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 id="cta-title" className="cta-title text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Crea tu portfolio{' '}
            <span className="text-gradient">ahora</span>
          </h2>
          
          <p className="cta-subtitle text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Únete a 10,000+ desarrolladores que ya usan DevCanvas 
            para mostrar su trabajo al mundo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="cta-button btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold"
            >
              <Terminal className="h-5 w-5" />
              Empezar a Crear
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="cta-button btn-secondary rounded-xl px-8 py-4 text-lg font-medium"
            >
              Ver Templates
            </a>
          </div>

          <p className="cta-note mt-6 text-sm text-slate-500">
            Sin tarjeta de crédito • Setup en 2 minutos
          </p>

          {/* Benefit Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { name: 'Integración GitHub', desc: 'Automático' },
              { name: 'SSL Incluido', desc: 'Gratis' },
              { name: 'CDN Global', desc: 'Ultra rápido' },
              { name: 'Dominio Custom', desc: 'Tu marca' },
            ].map((badge) => (
              <div 
                key={badge.name}
                className="benefit-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-violet-500/20"
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                <div className="text-left">
                  <span className="text-sm font-medium text-white block">{badge.name}</span>
                  <span className="text-xs text-slate-400">{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
