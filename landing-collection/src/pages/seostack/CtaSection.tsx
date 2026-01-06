import { ArrowRight, Search, Loader2, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Mock SEO quick wins
const QUICK_WINS = [
  { title: 'Agregar meta descripciones', pages: 12, impact: 'high', effort: 'low' },
  { title: 'Corregir enlaces rotos', pages: 8, impact: 'high', effort: 'medium' },
  { title: 'Optimizar alt de imágenes', pages: 45, impact: 'medium', effort: 'low' },
  { title: 'Mejorar títulos de páginas', pages: 6, impact: 'high', effort: 'low' },
  { title: 'Agregar datos estructurados', pages: 15, impact: 'medium', effort: 'medium' },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [seoScore, setSeoScore] = useState(0)

  const handleScan = () => {
    if (!url) return
    setIsScanning(true)
    setScanComplete(false)
    
    // Simulate scan
    setTimeout(() => {
      setIsScanning(false)
      setScanComplete(true)
      setSeoScore(Math.floor(Math.random() * 30) + 50) // Score between 50-80
    }, 2500)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 seo-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* URL Scanner */}
        <div className="max-w-3xl mx-auto mb-20">
          <header className="text-center mb-10">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-30 animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-xl shadow-green-500/30">
                <Search className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Auditoría SEO{' '}<span className="text-gradient">gratuita</span>
            </h2>
            <p className="text-lg text-slate-400">
              Obtén información instantánea sobre la salud SEO de tu sitio
            </p>
          </header>

          {/* URL Input */}
          <div className="relative mb-8">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Ingresa la URL de tu sitio web..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <button
                onClick={handleScan}
                disabled={isScanning || !url}
                className="btn-primary rounded-xl px-8 py-4 font-semibold flex items-center gap-2 disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Escaneando...
                  </>
                ) : (
                  <>
                    Analizar
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Scan Results */}
          {scanComplete && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden animate-fade-in">
              {/* Score header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Puntuación SEO General</p>
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      'text-5xl font-bold',
                      seoScore >= 80 ? 'text-green-400' :
                      seoScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                    )}>
                      {seoScore}
                    </span>
                    <span className="text-slate-500">/100</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 mb-1">Problemas Encontrados</p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-red-400">
                      <XCircle className="w-4 h-4" /> 5
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <AlertTriangle className="w-4 h-4" /> 12
                    </span>
                    <span className="flex items-center gap-1 text-green-400">
                      <CheckCircle className="w-4 h-4" /> 28
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick wins */}
              <div className="p-6">
                <h3 className="font-semibold text-white mb-4">Mejoras Rápidas</h3>
                <div className="space-y-3">
                  {QUICK_WINS.map((win, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          'w-2 h-2 rounded-full',
                          win.impact === 'high' ? 'bg-green-400' : 'bg-yellow-400'
                        )} />
                        <span className="text-slate-300">{win.title}</span>
                        <span className="text-xs text-slate-600">{win.pages} páginas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          'text-xs px-2 py-1 rounded-full',
                          win.effort === 'low' ? 'bg-green-500/20 text-green-400' :
                          win.effort === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        )}>
                          esfuerzo {win.effort === 'low' ? 'bajo' : win.effort === 'medium' ? 'medio' : 'alto'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-slate-800 bg-green-500/5">
                <div className="flex items-center justify-between">
                  <p className="text-slate-400">
                    Regístrate para ver los {45} problemas y obtener recomendaciones
                  </p>
                  <a href="#pricing" className="btn-primary rounded-xl px-6 py-3 font-semibold">
                    Ver Reporte Completo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {!scanComplete && (
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-6">
              Únete a más de 5,000 desarrolladores mejorando su SEO
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Plugin Next.js', 'Sync Search Console', 'Seguimiento de Rankings', 'Análisis de Competencia'].map((item) => (
                <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-green-500/20">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
