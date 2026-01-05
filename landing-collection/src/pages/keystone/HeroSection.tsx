import { useRef } from 'react'
import { ArrowRight, Brain, Building, Home, MapPin, Key, Search, Shield, Award, Users } from 'lucide-react'
import { COMPANY } from './constants'
import { useHeroAnimation, useFloatingAnimation, useCountUp } from '@/shared/hooks'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const floatingIconsRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useHeroAnimation(sectionRef)
  useFloatingAnimation(floatingIconsRef, '.floating-icon')
  useCountUp(statsRef, '.stat-number', { duration: 2 })

  const floatingIcons = [
    { Icon: Building, className: 'top-20 left-[10%] float-property', delay: '0s' },
    { Icon: Home, className: 'top-40 right-[12%] float-property-delayed', delay: '1s' },
    { Icon: MapPin, className: 'bottom-40 left-[8%] float-property-slow', delay: '2s' },
    { Icon: Key, className: 'top-32 right-[8%] float-property', delay: '1.5s' },
    { Icon: Search, className: 'bottom-32 right-[15%] float-property-delayed', delay: '0.5s' },
  ]

  const stats = [
    { value: '$12B+', label: 'Assets Analizados' },
    { value: '98%', label: 'Precisión Valuación' },
    { value: '500+', label: 'Clientes Enterprise' },
    { value: '2.3M', label: 'Propiedades en DB' },
  ]

  const trustBadges = [
    { Icon: Shield, label: 'SOC 2 Certified' },
    { Icon: Award, label: 'Top PropTech 2024' },
    { Icon: Users, label: '+500 Enterprise' },
  ]

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-20 md:pt-24 blueprint-grid overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      {/* Floating Property Icons */}
      <div ref={floatingIconsRef} className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, className }, idx) => (
          <div
            key={idx}
            className={`absolute ${className}`}
            style={{ animationDelay: floatingIcons[idx].delay }}
          >
            <div className="p-3 rounded-xl bg-forest-800/20 border border-forest-700/30 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-forest-400 icon-glow" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20">
        <div 
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm text-gold-400"
        >
          <Brain className="h-4 w-4 map-ping-pulse" />
          Inteligencia Artificial para Real Estate
        </div>

        <h1 
          ref={titleRef}
          className="max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Decisiones de{' '}
          <span className="text-gradient">inversión</span>
          <br />
          basadas en datos
        </h1>

        <p 
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-center text-lg text-stone-400 md:text-xl"
        >
          {COMPANY.name} es la plataforma de inteligencia artificial 
          para profesionales del sector inmobiliario. Valuación, análisis 
          y predicciones con precisión institucional.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium"
          >
            Solicitar Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="btn-secondary rounded-xl px-8 py-3.5 font-medium"
          >
            Ver Soluciones
          </a>
        </div>

        {/* Trust Badges */}
        <div ref={trustRef} className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="trust-badge flex items-center gap-2 rounded-full bg-stone-900/50 border border-stone-800 px-4 py-2"
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              <badge.Icon className="h-4 w-4 text-forest-500" />
              <span className="text-xs text-stone-400">{badge.label}</span>
            </div>
          ))}
        </div>

        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-3xl font-bold text-gold-400 md:text-4xl stat-pulse" style={{ animationDelay: `${idx * 0.2}s` }}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-stone-500 group-hover:text-stone-400 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
