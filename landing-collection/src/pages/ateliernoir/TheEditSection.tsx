import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useSectionAnimation } from '@/shared/hooks'

export function TheEditSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useSectionAnimation(sectionRef)

  return (
    <section 
      id="edit"
      ref={sectionRef}
      className="section-padding surface-elevated"
      aria-labelledby="edit-title"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="image-editorial aspect-4/5 lg:aspect-3/4">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
              alt="La Selección de Enero - Colección curada"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <span className="label block mb-4">La Selección</span>
            <h2 id="edit-title" className="display-medium mb-6">
              Enero: El Arte de la Quietud
            </h2>
            <div className="space-y-4">
              <p className="body-large">
                Este mes, exploramos objetos que invitan a la pausa. Piezas que te piden 
                que desaceleres, que notes la calidad de la luz, la textura de los 
                materiales naturales, la belleza silenciosa del diseño intencional.
              </p>
              <p className="body-small">
                Desde cerámicas hechas a mano hasta linos tejidos en telares centenarios, 
                cada selección encarna el concepto japonés de Ma — la belleza 
                encontrada en el espacio vacío y los momentos sin prisa.
              </p>
            </div>
            <a 
              href="#"
              className="btn-text mt-8 inline-flex items-center gap-2 group"
            >
              Leer la selección completa
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
