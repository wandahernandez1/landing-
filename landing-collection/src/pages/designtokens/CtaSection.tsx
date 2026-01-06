import { ArrowRight, Figma, Github, Play, ExternalLink, Palette } from 'lucide-react'
import { useRef, useState } from 'react'

// Integration logos
const INTEGRATIONS = [
  { name: 'Figma', icon: '◈', color: 'bg-purple-500/20 text-purple-400' },
  { name: 'Sketch', icon: '◇', color: 'bg-orange-500/20 text-orange-400' },
  { name: 'GitHub', icon: '⬡', color: 'bg-slate-500/20 text-slate-400' },
  { name: 'GitLab', icon: '◎', color: 'bg-orange-500/20 text-orange-400' },
  { name: 'npm', icon: '▣', color: 'bg-red-500/20 text-red-400' },
  { name: 'VS Code', icon: '⬢', color: 'bg-blue-500/20 text-blue-400' },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden" aria-labelledby="cta-title">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 design-grid opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Main CTA */}
          <div className="text-center mb-16">
            {/* Animated icon */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-400/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400/60" />
              </div>
              <div className="absolute inset-2 flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-xl shadow-pink-500/30">
                <Palette className="h-10 w-10 text-white" />
              </div>
            </div>

            <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              ¿Listo para unificar tu{' '}<span className="text-gradient">design system?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Únete a 50,000+ diseñadores que han optimizado su flujo de diseño a código. 
              Comienza gratis, escala cuando estés listo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a 
                href="#pricing" 
                className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold group"
              >
                <Figma className="w-5 h-5" />
                Instalar Plugin de Figma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setShowVideo(true)}
                className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-medium"
              >
                <Play className="w-5 h-5" />
                Ver Demo (2 min)
              </button>
            </div>

            <p className="text-sm text-slate-500">
              Gratis para siempre para individuales • Sin tarjeta de crédito
            </p>
          </div>

          {/* Integrations */}
          <div className="mb-16">
            <p className="text-center text-sm text-slate-500 mb-6">Funciona con tus herramientas favoritas</p>
            <div className="flex flex-wrap justify-center gap-4">
              {INTEGRATIONS.map((integration) => (
                <div
                  key={integration.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-pink-500/30 transition-all`}
                >
                  <span className={`text-xl ${integration.color.split(' ')[1]}`}>{integration.icon}</span>
                  <span className="text-slate-400">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Documentation */}
            <a 
              href="#"
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-pink-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📖</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">Documentación</h3>
                <p className="text-sm text-slate-500">Aprende cómo configurar y usar DesignTokens</p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-pink-400 transition-colors" />
            </a>

            {/* GitHub */}
            <a 
              href="#"
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-pink-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">Código Abierto</h3>
                <p className="text-sm text-slate-500">Contribuye o déjanos una estrella en GitHub</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800 text-sm text-slate-400">
                ⭐ 4.2k
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div className="max-w-4xl w-full mx-4 aspect-video bg-slate-900 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-pink-400 mx-auto mb-4" />
              <p className="text-slate-400">Reproductor de video placeholder</p>
              <button 
                onClick={() => setShowVideo(false)}
                className="mt-4 text-sm text-slate-500 hover:text-white"
              >
                Presiona en cualquier lugar para cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
