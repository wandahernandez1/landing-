import { useRef } from 'react'
import { useHeroAnimation, useFloatingAnimation, useOrbAnimation } from '@/shared/hooks'
import { Apple, Play, Leaf, Heart, Activity, TrendingUp } from 'lucide-react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useHeroAnimation(sectionRef)
  useFloatingAnimation(sectionRef, '[data-leaf]')
  useOrbAnimation(sectionRef, '[data-orb-1]', { duration: 8 })
  useOrbAnimation(sectionRef, '[data-orb-2]', { duration: 10 })

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Organic background orbs */}
      <div 
        data-orb-1
        className="organic-orb absolute top-20 left-[10%] w-[400px] h-[400px] bg-emerald-200/60" 
      />
      <div 
        data-orb-2
        className="organic-orb absolute bottom-20 right-[5%] w-[300px] h-[300px] bg-emerald-300/40" 
      />

      {/* Floating leaves decoration */}
      <div data-leaf className="absolute top-1/4 right-[20%] text-emerald-300/30">
        <Leaf className="h-12 w-12" />
      </div>
      <div data-leaf className="absolute bottom-1/3 left-[15%] text-emerald-400/20">
        <Leaf className="h-8 w-8" />
      </div>

      <div className="bg-pattern absolute inset-0 opacity-50" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={contentRef}>
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-100 px-5 py-2.5 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-emerald-700 font-semibold">#1 App de Fitness 2024</span>
            </div>

            <h1 data-hero-title className="text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl md:text-7xl lg:text-8xl mb-8">
              <span className="block">Transforma tu</span>
              <span className="text-gradient block">bienestar</span>
            </h1>

            <p data-hero-description className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
              Entrenamientos personalizados, nutrición inteligente y coaching IA 
              en tu bolsillo. <span className="text-emerald-600 font-medium">Tu mejor versión te espera.</span>
            </p>

            <div data-hero-buttons className="flex flex-wrap gap-4 mb-12">
              <button className="btn-primary group flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold relative z-10">
                <span className="relative z-10 flex items-center gap-3">
                  <Apple className="h-5 w-5" />
                  Descargar en App Store
                </span>
              </button>
              <button className="btn-secondary group flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium relative z-10">
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="h-5 w-5" />
                  Disponible en Google Play
                </span>
              </button>
            </div>

            <div className="flex items-center gap-8">
              <div data-hero-stat className="stat-glow group cursor-default p-2 rounded-xl transition-all duration-300">
                <span className="text-4xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">2M+</span>
                <p className="text-sm text-stone-500 mt-1">Usuarios activos</p>
              </div>
              <div className="h-12 w-px bg-stone-300" />
              <div data-hero-stat className="stat-glow group cursor-default p-2 rounded-xl transition-all duration-300">
                <span className="text-4xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">4.9★</span>
                <p className="text-sm text-stone-500 mt-1">Calificación promedio</p>
              </div>
              <div className="h-12 w-px bg-stone-300 hidden sm:block" />
              <div data-hero-stat className="stat-glow group cursor-default p-2 rounded-xl transition-all duration-300 hidden sm:block">
                <span className="text-4xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">150+</span>
                <p className="text-sm text-stone-500 mt-1">Países</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Pulse rings behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="pulse-ring w-[300px] h-[300px] rounded-full border-2 border-emerald-200" />
              <div className="pulse-ring absolute w-[400px] h-[400px] rounded-full border border-emerald-100" style={{ animationDelay: '1s' }} />
            </div>

            {/* Phone mockup */}
            <div 
              ref={phoneRef}
              className="relative w-72 h-[580px] rounded-[3rem] bg-stone-900 p-3 shadow-2xl phone-shine"
            >
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-emerald-400 to-emerald-600 flex flex-col items-center justify-center relative overflow-hidden">
                {/* App UI preview */}
                <div className="absolute top-8 left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <Activity className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-medium">Entrenamiento activo</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <Heart className="h-16 w-16 text-white/90 mx-auto mb-4 leaf-float" />
                  <span className="text-white text-4xl font-bold block">142</span>
                  <span className="text-white/80 text-sm">BPM</span>
                </div>

                <div className="absolute bottom-12 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/90 text-sm">Calorías quemadas</span>
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-white text-3xl font-bold">487</span>
                      <span className="text-white/70 text-sm mb-1">/ 600 kcal</span>
                    </div>
                    <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[81%] bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
