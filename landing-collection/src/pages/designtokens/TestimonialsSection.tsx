import { Code2, GitBranch, Layers } from 'lucide-react'
import { useRef, useState } from 'react'

// Company logos using design systems
const DESIGN_TEAMS = [
  { name: 'Figma', users: '50K+', icon: '◈' },
  { name: 'Linear', users: '12K+', icon: '◇' },
  { name: 'Notion', users: '28K+', icon: '▢' },
  { name: 'Vercel', users: '18K+', icon: '▲' },
  { name: 'Stripe', users: '15K+', icon: '⬡' },
  { name: 'Airbnb', users: '8K+', icon: '◎' },
]

// Before/After comparison
const COMPARISON = {
  before: {
    title: 'Sin DesignTokens',
    time: '2-3 días',
    issues: [
      'Copiar y pegar valores manualmente',
      'Convenciones de nombres inconsistentes',
      'Los colores difieren entre diseño y código',
      'Sin control de versiones para cambios de diseño',
    ]
  },
  after: {
    title: 'Con DesignTokens',
    time: '5 minutos',
    benefits: [
      'Auto-sincronización de Figma a código',
      'Estructura de tokens estandarizada',
      'Única fuente de verdad',
      'Historial de diseño rastreado en Git',
    ]
  }
}

// Use cases
const USE_CASES = [
  {
    icon: Layers,
    title: 'Sistemas multi-marca',
    description: 'Gestiona tokens para múltiples marcas desde un archivo Figma. Cambia temas con una sola variable.',
    stat: '4x más rápido',
    statLabel: 'cambio de tema'
  },
  {
    icon: GitBranch,
    title: 'Versionado de diseño',
    description: 'Rastrea cada cambio de diseño con Git. Retrocede a cualquier punto. Revisa tokens en PRs.',
    stat: '100%',
    statLabel: 'visibilidad de cambios'
  },
  {
    icon: Code2,
    title: 'Handoff a desarrolladores',
    description: '¿Cuál es el código hex? Los desarrolladores importan tokens directamente. Cero errores de traducción.',
    stat: '0',
    statLabel: 'reuniones de handoff'
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeComparison, setActiveComparison] = useState<'before' | 'after'>('after')

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40" aria-labelledby="testimonials-title">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 design-grid opacity-10" />
      <div className="container-custom relative z-10">

        {/* Trusted by */}
        <div className="mb-32">
          <p className="text-center text-sm text-slate-500 mb-8">Utilizado por equipos de design systems en</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {DESIGN_TEAMS.map((team) => (
              <div 
                key={team.name}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/30 transition-all"
              >
                <span className="text-2xl text-pink-400">{team.icon}</span>
                <div>
                  <span className="text-white font-medium block">{team.name}</span>
                  <span className="text-xs text-slate-500">{team.users} diseñadores</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-400">La Diferencia</p>
            <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              De días a{' '}<span className="text-gradient">minutos</span>
            </h2>
          </header>

          {/* Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveComparison('before')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeComparison === 'before'
                    ? 'bg-red-500/20 text-red-400'
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                😩 Antes
              </button>
              <button
                onClick={() => setActiveComparison('after')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeComparison === 'after'
                    ? 'bg-green-500/20 text-green-400'
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                🎉 Después
              </button>
            </div>
          </div>

          {/* Comparison panels */}
          <div className="max-w-2xl mx-auto">
            {activeComparison === 'before' ? (
              <div className="rounded-2xl border border-red-500/30 bg-red-950/10 p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{COMPARISON.before.title}</h3>
                  <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                    {COMPARISON.before.time} para sincronizar
                  </div>
                </div>
                <ul className="space-y-4">
                  {COMPARISON.before.issues.map((issue) => (
                    <li key={issue} className="flex items-center gap-3 text-slate-400">
                      <span className="text-red-400">✗</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-2xl border border-green-500/30 bg-green-950/10 p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{COMPARISON.after.title}</h3>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                    {COMPARISON.after.time} to sync
                  </div>
                </div>
                <ul className="space-y-4">
                  {COMPARISON.after.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-slate-300">
                      <span className="text-green-400">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-400">Casos de Uso</p>
            <h3 className="text-3xl font-bold tracking-tight">
              Creado para equipos de diseño modernos
            </h3>
          </header>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {USE_CASES.map((useCase) => (
              <div 
                key={useCase.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 hover:border-pink-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                <p className="text-slate-400 text-sm mb-6">{useCase.description}</p>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-2xl font-bold text-pink-400">{useCase.stat}</span>
                  <span className="text-sm text-slate-500 ml-2">{useCase.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-slate-800">
          {[
            { value: '50K+', label: 'Equipos de diseño' },
            { value: '2M+', label: 'Tokens sincronizados/día' },
            { value: '99.9%', label: 'Tasa de precisión' },
            { value: '<100ms', label: 'Tiempo de sincronización' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
