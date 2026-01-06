import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { COLLECTIONS } from './constants'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

export function FeaturesSection() {
  const headerRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useSectionAnimation(headerRef)
  useStaggerReveal(gridRef, 'article', { stagger: 0.15 })

  return (
    <section 
      id="collections" 
      className="section-padding"
      aria-labelledby="collections-title"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <header ref={headerRef} className="mb-16 md:mb-24">
          <span className="label block mb-4">Colecciones</span>
          <h2 id="collections-title" className="display-medium max-w-2xl">
            Objetos que definen espacios, no los llenan
          </h2>
        </header>

        {/* Collection Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {COLLECTIONS.map((collection, idx) => (
            <article 
              key={collection.id}
              className={`collection-item group ${
                idx === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                idx === 0 ? 'aspect-4/5' : 'aspect-4/3'
              }`}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="overlay" />
                <div className="content text-ivory-50">
                  <span className="label text-ivory-200 block mb-2">
                    {collection.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl mb-4">
                    {collection.title}
                  </h3>
                  <span className="btn-text text-ivory-50 inline-flex items-center gap-2">
                    Explorar
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
