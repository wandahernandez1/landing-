import { useRef } from 'react'
import { ArrowRight, Globe, Plane, Compass, MapPin, CheckCircle } from 'lucide-react'
import { useCtaAnimation, useRotationAnimation, useFloatingAnimation } from '@/shared/hooks'

const BENEFITS = [
  'Acceso a 500+ destinos curados',
  'Comunidad de nómadas global',
  'Guías de visa actualizadas',
  'Soporte prioritario 24/7',
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useCtaAnimation(sectionRef)
  useRotationAnimation(iconRef, '.globe-icon', { duration: 20 })
  useFloatingAnimation(floatingRef, '.floating-icon')

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-gradient-section overflow-hidden">
      {/* Floating Decorative Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-[10%] left-[5%] text-teal-500/10">
          <Plane className="h-16 w-16 md:h-24 md:w-24" />
        </div>
        <div className="floating-element absolute top-[20%] right-[10%] text-orange-500/10">
          <Compass className="h-14 w-14 md:h-20 md:w-20" />
        </div>
        <div className="floating-element absolute bottom-[15%] left-[10%] text-orange-500/10">
          <MapPin className="h-12 w-12 md:h-18 md:w-18" />
        </div>
        <div className="floating-element absolute bottom-[25%] right-[5%] text-teal-500/10">
          <Globe className="h-20 w-20 md:h-28 md:w-28" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={contentRef} className="mx-auto max-w-4xl text-center">
          <div 
            ref={iconRef} 
            className="icon-box mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl animate-glow-pulse"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Globe className="globe-icon h-10 w-10 text-teal-600" />
          </div>

          <h2 className="animate-item text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl">
            El mundo te{' '}
            <span className="text-gradient">espera</span>
          </h2>
          
          <p className="animate-item mx-auto mt-6 max-w-2xl text-lg text-sand-800/70 md:text-xl">
            Únete a la comunidad de nómadas digitales más grande del mundo. 
            Tu próxima aventura comienza aquí.
          </p>

          {/* Benefit Badges */}
          <div ref={badgesRef} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={idx} 
                className="benefit-badge inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-2 text-sm text-teal-700"
              >
                <CheckCircle className="h-4 w-4 text-teal-600" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="animate-item mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 font-medium"
            >
              Comenzar Aventura
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="btn-secondary rounded-xl px-8 py-4 font-medium"
            >
              Ver Destinos
            </a>
          </div>

          <p className="animate-item mt-6 text-sm text-sand-800/50">
            Gratis para empezar • Sin tarjeta requerida
          </p>
        </div>
      </div>
    </section>
  )
}
