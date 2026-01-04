import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PRICING_PLANS } from './constants'
import { cn } from '@/shared/utils/cn'

gsap.registerPlugin(ScrollTrigger)

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Cards animation - elegant entrance
      const cards = cardsRef.current?.querySelectorAll('article')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Feature lists fade-in
      const featureLists = cardsRef.current?.querySelectorAll('ul')
      if (featureLists) {
        featureLists.forEach((list) => {
          const items = list.querySelectorAll('li')
          gsap.fromTo(
            items,
            { opacity: 0, x: -10 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: list,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
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
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold-400">
            Membresía
          </p>
          <h2 className="text-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">
            Únete al círculo
          </h2>
        </header>

        <div ref={cardsRef} className="mx-auto grid max-w-5xl gap-px bg-ivory-50/10 md:grid-cols-3">
          {PRICING_PLANS.map((plan, idx) => (
            <article
              key={idx}
              className={cn(
                'bg-charcoal-950 p-10 flex flex-col transition-all duration-500',
                plan.popular && 'ring-1 ring-gold-400 relative'
              )}
            >
              {plan.popular && (
                <span className="premium-badge absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs uppercase tracking-widest text-charcoal-950 font-medium">
                  Recomendado
                </span>
              )}
              
              <h3 className="text-serif text-2xl tracking-wide text-ivory-50">{plan.name}</h3>
              <p className="mt-2 text-sm text-ivory-50/40">{plan.description}</p>
              
              <div className="mt-8 flex items-baseline gap-1">
                <span className="text-serif text-4xl text-ivory-50">{plan.price}</span>
                <span className="text-xs uppercase tracking-widest text-ivory-50/40">{plan.period}</span>
              </div>

              <ul className="mt-10 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0 mt-1" strokeWidth={1.5} />
                    <span className="text-sm text-ivory-50/60">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={cn(
                  'mt-10 rounded-none px-6 py-4 text-center text-xs uppercase tracking-widest transition-all duration-500',
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
