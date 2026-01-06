import { useRef } from 'react'
import { useCtaAnimation, usePulseAnimation, useFloatingAnimation } from '@/shared/hooks'
import { ArrowRight, Heart, Apple, Play, Sparkles, Users, Trophy } from 'lucide-react'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useCtaAnimation(sectionRef)
  usePulseAnimation(sectionRef, '[data-cta-icon]', { minOpacity: 1, maxOpacity: 1 })
  useFloatingAnimation(sectionRef, '[data-float-1], [data-float-2]')

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 overflow-hidden" 
      aria-labelledby="cta-title"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          data-float-1
          className="absolute top-20 left-[10%] w-24 h-24 bg-white/10 rounded-full blur-xl"
        />
        <div 
          data-float-2
          className="absolute bottom-32 right-[15%] w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom relative">
        <div ref={contentRef} className="mx-auto max-w-4xl text-center">
          {/* Icon */}
          <div data-cta-icon className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-5 border border-white/20">
                <Heart className="h-12 w-12 text-white" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 
            data-cta-title
            id="cta-title" 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Comienza tu transformación
            <span className="block text-emerald-200 mt-2">hoy mismo</span>
          </h2>

          {/* Description */}
          <p 
            data-cta-description
            className="text-lg md:text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Únete a más de <span className="text-white font-semibold">2 millones de personas</span> que 
            ya están viviendo su mejor vida con Vitality.
          </p>

          {/* CTA Buttons */}
          <div data-cta-buttons className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="group inline-flex items-center gap-3 rounded-full bg-white text-emerald-600 px-8 py-4 text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
              <Apple className="h-6 w-6" />
              <span>Descargar en App Store</span>
              <ArrowRight className="h-5 w-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </button>
            <button className="group inline-flex items-center gap-3 rounded-full bg-transparent border-2 border-white/50 text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-1">
              <Play className="h-6 w-6" />
              <span>Disponible en Google Play</span>
            </button>
          </div>

          {/* Features list */}
          <div 
            data-cta-features
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-emerald-100"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-200" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-200" />
              <span>Comunidad activa</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-emerald-200" />
              <span>Resultados garantizados</span>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 border-2 border-emerald-600 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">+2,000,000</p>
                  <p className="text-emerald-200 text-sm">Usuarios activos</p>
                </div>
              </div>
              <div className="h-10 w-px bg-white/20 hidden md:block" />
              <div className="text-center">
                <p className="text-white font-semibold text-2xl">4.9 ★</p>
                <p className="text-emerald-200 text-sm">Calificación App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
