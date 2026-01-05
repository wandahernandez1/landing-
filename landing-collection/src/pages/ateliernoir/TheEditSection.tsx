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
          <div className="image-editorial aspect-[4/5] lg:aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
              alt="The January Edit - Curated selection"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <span className="label block mb-4">The Edit</span>
            <h2 id="edit-title" className="display-medium mb-6">
              January: The Art of Stillness
            </h2>
            <div className="space-y-4">
              <p className="body-large">
                This month, we explore objects that invite pause. Pieces that ask 
                you to slow down, to notice the quality of light, the texture of 
                natural materials, the quiet beauty of intentional design.
              </p>
              <p className="body-small">
                From hand-thrown ceramics to linens woven on century-old looms, 
                each selection embodies the Japanese concept of Ma — the beauty 
                found in empty space and unhurried moments.
              </p>
            </div>
            <a 
              href="#"
              className="btn-text mt-8 inline-flex items-center gap-2 group"
            >
              Read the full edit
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
