import { useRef } from 'react'
import { ArrowRight, Building2, Home, MapPin, TrendingUp, CheckCircle2 } from 'lucide-react'
import { useCtaAnimation, useFloatingAnimation, useStaggerReveal } from '@/shared/hooks'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  const benefits = [
    'Demo personalizada',
    'Sin compromiso',
    'Onboarding incluido',
  ]

  // Standardized GSAP animations
  useCtaAnimation(sectionRef)
  useFloatingAnimation(floatingRef, '.float-property')
  useStaggerReveal(benefitsRef, 'div', {
    stagger: 0.1,
  })

  const floatingElements = [
    { Icon: Home, position: 'top-10 left-[10%]', delay: '0s' },
    { Icon: MapPin, position: 'top-20 right-[12%]', delay: '1s' },
    { Icon: TrendingUp, position: 'bottom-20 left-[15%]', delay: '2s' },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      {/* Floating Decorative Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingElements.map(({ Icon, position, delay }, idx) => (
          <div
            key={idx}
            className={`absolute ${position} float-property`}
            style={{ animationDelay: delay }}
          >
            <div className="p-3 rounded-xl bg-forest-800/20 border border-forest-700/30 backdrop-blur-sm">
              <Icon className="h-5 w-5 text-forest-400/60" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <div 
            ref={iconRef}
            className="icon-box mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl cta-glow-pulse"
          >
            <Building2 className="h-10 w-10 text-forest-500 icon-glow" />
          </div>

          <div ref={contentRef}>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transforma tus{' '}
              <span className="text-gradient">inversiones</span>
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-400 md:text-xl">
              Únete a los principales fondos y desarrolladoras que usan 
              Keystone AI para tomar decisiones basadas en datos.
            </p>
          </div>

          <div ref={ctaRef} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 font-medium"
            >
              Solicitar Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="btn-secondary rounded-xl px-8 py-4 font-medium"
            >
              Ver Case Studies
            </a>
          </div>

          {/* Benefit Badges */}
          <div ref={benefitsRef} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="benefit-bounce flex items-center gap-2 rounded-full bg-forest-900/30 border border-forest-800/40 px-4 py-2"
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                <CheckCircle2 className="h-4 w-4 text-forest-500" />
                <span className="text-sm text-stone-400">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
