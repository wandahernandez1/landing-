import { useRef } from 'react'
import { Instagram } from 'lucide-react'
import { INSTAGRAM_IMAGES } from './constants'
import { useSectionAnimation } from '@/shared/hooks'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useSectionAnimation(sectionRef)

  return (
    <section 
      ref={sectionRef}
      className="section-dark section-padding"
      aria-labelledby="cta-title"
    >
      <div className="container-editorial">
        {/* Newsletter */}
        <div className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
          <span className="label block mb-4">Únete al Atelier</span>
          <h2 id="cta-title" className="display-medium text-ivory-50 mb-6">
            Acceso anticipado a nuevas colecciones
          </h2>
          <p className="body-large mb-10">
            Sé el primero en descubrir ediciones limitadas, colaboraciones exclusivas 
            e historias de nuestros artesanos asociados.
          </p>

          {/* Newsletter Form */}
          <form 
            className="newsletter-input mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              aria-label="Correo electrónico"
              required
            />
            <button type="submit">
              Suscribirse
            </button>
          </form>

          <p className="text-charcoal-500 text-sm mt-6">
            Sin spam. Solo cosas hermosas, entregadas con cuidado.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="mb-10 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 label text-ivory-300 hover:text-ivory-50 transition-colors"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            @ateliernoir
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {INSTAGRAM_IMAGES.map((image, idx) => (
            <a 
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item"
            >
              <img
                src={image}
                alt={`Publicación de Instagram ${idx + 1}`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
