import { ArrowRight, Brain } from 'lucide-react'
import { COMPANY } from './constants'

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm text-gold-400">
          <Brain className="h-4 w-4" />
          Inteligencia Artificial para Real Estate
        </div>

        <h1 className="max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Decisiones de{' '}
          <span className="text-gradient">inversión</span>
          <br />
          basadas en datos
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-stone-400 md:text-xl">
          {COMPANY.name} es la plataforma de inteligencia artificial 
          para profesionales del sector inmobiliario. Valuación, análisis 
          y predicciones con precisión institucional.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
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

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: '$12B+', label: 'Assets Analizados' },
            { value: '98%', label: 'Precisión Valuación' },
            { value: '500+', label: 'Clientes Enterprise' },
            { value: '2.3M', label: 'Propiedades en DB' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-gold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
