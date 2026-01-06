import { useRef } from 'react'
import { Leaf, Globe, RefreshCw, Package } from 'lucide-react'
import { VALUES } from './constants'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

const ICON_MAP = {
  leaf: Leaf,
  globe: Globe,
  refresh: RefreshCw,
  package: Package,
}

export function PricingSection() {
  const headerRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useSectionAnimation(headerRef)
  useStaggerReveal(gridRef, 'article', { stagger: 0.12 })

  return (
    <section 
      id="values"
      className="section-padding"
      aria-labelledby="values-title"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <header ref={headerRef} className="text-center mb-16 md:mb-24">
          <span className="label block mb-4">Nuestros Valores</span>
          <h2 id="values-title" className="display-medium max-w-2xl mx-auto">
            Transparencia en todo lo que hacemos
          </h2>
          <p className="body-large max-w-xl mx-auto mt-6">
            Creemos que el lujo debe ser responsable. Cada decisión que tomamos 
            honra tanto la artesanía como el planeta.
          </p>
        </header>

        {/* Values Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALUES.map((value, idx) => {
            const IconComponent = ICON_MAP[value.icon as keyof typeof ICON_MAP]
            return (
              <article key={idx} className="value-card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-ivory-200">
                  <IconComponent className="w-5 h-5 text-charcoal-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                <p className="body-small">{value.description}</p>
              </article>
            )
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 md:mt-28 max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-charcoal-700">
            "No perseguimos tendencias. Creamos objetos dignos de convertirse en herencias."
          </p>
          <p className="label mt-8">— La Filosofía de Atelier Noir</p>
        </div>
      </div>
    </section>
  )
}
