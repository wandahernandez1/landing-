import { ArrowRight, Eye, Globe, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Sample scan results
const SCAN_PREVIEW = {
  url: '',
  totalIssues: 12,
  critical: 2,
  serious: 4,
  moderate: 6,
  score: 72,
}

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<typeof SCAN_PREVIEW | null>(null)

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return
    
    setIsScanning(true)
    setScanResult(null)
    
    // Simulate scan
    setTimeout(() => {
      setIsScanning(false)
      setScanResult({
        ...SCAN_PREVIEW,
        url,
        score: Math.floor(Math.random() * 30) + 60,
        critical: Math.floor(Math.random() * 4),
        serious: Math.floor(Math.random() * 6) + 2,
        moderate: Math.floor(Math.random() * 8) + 3,
      })
    }, 3000)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 a11y-grid opacity-20" />
      <div className="container-custom relative z-10">

        {/* Free Scan Tool */}
        <div className="mx-auto max-w-3xl mb-20">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Escaneo gratuito</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Pruébalo{' '}<span className="text-gradient">ahora</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Ingresa cualquier URL y obtén un reporte de accesibilidad instantáneo
            </p>
          </header>

          {/* URL Input */}
          <form onSubmit={handleScan} className="mb-8">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  disabled={isScanning}
                />
              </div>
              <button
                type="submit"
                disabled={isScanning || !url}
                className={cn(
                  'btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2',
                  (isScanning || !url) && 'opacity-50 cursor-not-allowed'
                )}
              >
                {isScanning ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Escaneando...
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5" />
                    Escanear
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Scan Progress */}
          {isScanning && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
                <div>
                  <p className="font-medium text-white">Escaneando {url}</p>
                  <p className="text-sm text-slate-500">Verificando criterios WCAG 2.1 Nivel AA...</p>
                </div>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: '60%' }} />
              </div>
            </div>
          )}

          {/* Scan Results */}
          {scanResult && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium text-white">Escaneo completado</span>
                </div>
                <span className="text-sm text-slate-500 font-mono">{scanResult.url}</span>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-slate-800/50">
                    <div className={cn(
                      'text-3xl font-bold',
                      scanResult.score >= 80 ? 'text-green-400' :
                      scanResult.score >= 60 ? 'text-amber-400' : 'text-red-400'
                    )}>
                      {scanResult.score}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Puntuación</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-red-500/10">
                    <div className="text-3xl font-bold text-red-400">{scanResult.critical}</div>
                    <div className="text-xs text-slate-500 mt-1">Críticos</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-amber-500/10">
                    <div className="text-3xl font-bold text-amber-400">{scanResult.serious}</div>
                    <div className="text-xs text-slate-500 mt-1">Graves</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-blue-500/10">
                    <div className="text-3xl font-bold text-blue-400">{scanResult.moderate}</div>
                    <div className="text-xs text-slate-500 mt-1">Moderados</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-300">Regístrate para ver problemas detallados y soluciones</span>
                  </div>
                  <a href="#pricing" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Ver planes →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main CTA */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-blue-400 rounded-full opacity-30 animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl shadow-xl shadow-blue-500/30">
              <Eye className="h-10 w-10 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            ¿Listo para hacer tu sitio accesible?
          </h3>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Únete a más de 5,000 equipos construyendo experiencias digitales inclusivas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              <Eye className="h-5 w-5" />
              Comenzar a Escanear
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium">
              Reservar una demo
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Plan gratuito para siempre • Compatible con WCAG 2.1 • Sin tarjeta de crédito
          </p>
        </div>
      </div>
    </section>
  )
}
