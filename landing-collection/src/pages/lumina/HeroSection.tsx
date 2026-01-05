import { ArrowRight, Play, BookOpen, Lightbulb, GraduationCap, Award } from 'lucide-react'
import { useRef } from 'react'
import { useHeroAnimation, useFloatingAnimation, usePulseAnimation } from '@/shared/hooks'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Use standardized hooks
  useHeroAnimation(sectionRef)
  useFloatingAnimation(sectionRef, '.floating-icon')
  usePulseAnimation(sectionRef, '.light-bulb', { minOpacity: 0.5, maxOpacity: 1 })

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-amber-50 to-white"
    >
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <BookOpen className="floating-icon absolute top-[20%] left-[10%] w-8 h-8 text-amber-300/40" />
        <Lightbulb className="floating-icon light-bulb absolute top-[25%] right-[15%] w-10 h-10 text-amber-400/50" />
        <GraduationCap className="floating-icon absolute bottom-[35%] left-[15%] w-7 h-7 text-indigo-300/40" />
        <Award className="floating-icon absolute bottom-[25%] right-[10%] w-8 h-8 text-amber-300/40" />
      </div>

      {/* Knowledge Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="knowledge-particle absolute w-2 h-2 bg-amber-400/30 rounded-full"
            style={{ 
              left: `${20 + i * 15}%`, 
              animationDelay: `${i * 1.5}s`,
              bottom: '-10px'
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 border border-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm text-amber-700 font-medium">+1M estudiantes activos</span>
            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Nuevo</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-indigo-950 sm:text-6xl md:text-7xl mb-6">
            <span className="hero-title-line block">Aprende</span>
            <span className="hero-title-line block text-gradient">sin límites</span>
          </h1>

          <p className="hero-subtitle mx-auto max-w-2xl text-lg text-indigo-900/70 md:text-xl mb-10">
            Cursos adaptativos con IA, mentores expertos y certificaciones 
            reconocidas. Tu próximo nivel profesional te espera.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="hero-cta btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold">
              Explorar Cursos
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="hero-cta btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium">
              <Play className="h-5 w-5" />
              Ver Demo
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-indigo-900/60">
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-amber-600">10,000+</span>
              <p className="text-sm">Cursos</p>
            </div>
            <div className="h-8 w-px bg-amber-200" />
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-amber-600">500+</span>
              <p className="text-sm">Mentores</p>
            </div>
            <div className="h-8 w-px bg-amber-200" />
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-amber-600">4.9★</span>
              <p className="text-sm">Rating</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Forbes Top 10', 'Google Partner', 'AWS Certified', 'ISO 9001'].map((badge) => (
              <div 
                key={badge}
                className="trust-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-amber-200 shadow-sm"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-indigo-900/70">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
