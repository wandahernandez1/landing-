import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PRICING_PLANS } from './constants'
import { Check, Crown, Shield, Zap, CreditCard } from 'lucide-react'
import { cn } from '@/shared/utils'

gsap.registerPlugin(ScrollTrigger)

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('[data-pricing-card]')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Feature list animation
      const features = cardsRef.current?.querySelectorAll('[data-pricing-feature]')
      if (features) {
        gsap.from(features, {
          opacity: 0,
          x: -15,
          stagger: 0.03,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="relative py-32 md:py-40 bg-slate-950 overflow-hidden" 
      aria-labelledby="pricing-title"
    >
      {/* Background effects */}
      <div className="absolute inset-0 neon-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 mb-6">
            <CreditCard className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Sin comisiones ocultas</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Planes
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elige tu cuenta
            <br />
            <span className="text-gradient">ideal</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              data-pricing-card
              className={cn(
                'group card card-spotlight rounded-2xl p-8 relative transition-all duration-500',
                plan.popular && 'border-cyan-500 pricing-popular lg:scale-105 lg:-translate-y-4'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-5 py-1.5 text-sm font-semibold text-slate-900 flex items-center gap-2 shadow-lg shadow-cyan-500/30">
                  <Crown className="h-4 w-4" />
                  Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {plan.price}
                </span>
                {plan.period && <span className="text-slate-400 ml-1">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li 
                    key={feature} 
                    data-pricing-feature
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center group-hover/item:border-cyan-400 transition-colors duration-300">
                      <Check className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    </div>
                    <span className="text-slate-300 group-hover/item:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'w-full rounded-xl py-4 font-semibold transition-all duration-300 relative overflow-hidden',
                  plan.popular 
                    ? 'btn-primary group-hover:shadow-lg group-hover:shadow-cyan-500/30' 
                    : 'btn-secondary'
                )}
              >
                <span className="relative z-10">{plan.cta}</span>
              </button>

              {/* Card index */}
              <div className="absolute bottom-4 right-4 text-6xl font-bold text-cyan-500/5 font-mono">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-slate-500">
            <Shield className="h-5 w-5 text-cyan-500" />
            <span className="text-sm">Depósitos hasta €100K</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Zap className="h-5 w-5 text-cyan-500" />
            <span className="text-sm">Activación inmediata</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Crown className="h-5 w-5 text-cyan-500" />
            <span className="text-sm">Cancela cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  )
}
