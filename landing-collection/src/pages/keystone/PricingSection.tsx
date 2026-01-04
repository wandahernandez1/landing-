import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { PRICING_PLANS } from './constants'
import { cn } from '@/shared/utils/cn'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Cards 3D animation with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.pricing-card')
        cards.forEach((card, index) => {
          const isPopular = card.classList.contains('popular')
          
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 80,
              rotateY: index === 0 ? -15 : index === 2 ? 15 : 0,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              scale: isPopular ? 1.02 : 1,
              duration: 0.9,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          )

          // Animate feature list items with stagger
          const features = card.querySelectorAll('.feature-item')
          gsap.fromTo(
            features,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.08,
              delay: 0.3 + index * 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="container-custom">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Planes
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Inversión{' '}
            <span className="text-gradient">inteligente</span>
          </h2>
        </header>

        <div ref={cardsRef} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3" style={{ perspective: '1000px' }}>
          {PRICING_PLANS.map((plan, idx) => (
            <article
              key={idx}
              className={cn(
                'pricing-card card card-3d rounded-2xl p-8 flex flex-col',
                plan.popular && 'popular ring-2 ring-gold-500 relative'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-forest-600 to-gold-500 px-3 py-1 text-xs font-medium text-white popular-pulse">
                  Recomendado
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-stone-400">{plan.description}</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className={cn(
                  "text-4xl font-bold text-white",
                  plan.popular && "stat-pulse"
                )}>
                  {plan.price}
                </span>
                <span className="text-stone-500">{plan.period}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item flex items-start gap-3">
                    <Check className="h-5 w-5 text-forest-500 shrink-0 mt-0.5" />
                    <span className="text-stone-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={cn(
                  'mt-8 rounded-xl px-6 py-3 text-center font-medium transition-all',
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                )}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
