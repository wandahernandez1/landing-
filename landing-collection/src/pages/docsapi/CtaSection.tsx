import { ArrowRight, FileText, Copy, Check, Terminal } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

const IMPORT_STEPS = [
  { id: 'url', label: 'URL de Spec', placeholder: 'https://api.example.com/openapi.json' },
  { id: 'file', label: 'Subir Archivo', placeholder: 'openapi.yaml' },
]

const COMMANDS = {
  npm: 'npx @docsapi/cli init',
  yarn: 'yarn dlx @docsapi/cli init',
  pnpm: 'pnpm dlx @docsapi/cli init',
}

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [importMethod, setImportMethod] = useState<'url' | 'file'>('url')
  const [pkgManager, setPkgManager] = useState<'npm' | 'yarn' | 'pnpm'>('npm')
  const [copied, setCopied] = useState(false)
  const [specUrl, setSpecUrl] = useState('')

  const handleCopy = () => {
    navigator.clipboard.writeText(COMMANDS[pkgManager])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 docs-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-violet-400/30 rounded-full animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl shadow-xl shadow-violet-500/30">
              <FileText className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Importa tu{' '}<span className="text-gradient">spec de OpenAPI</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Apunta a tu spec. Generamos documentación hermosa en segundos.
          </p>
        </header>

        {/* Import wizard */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Method tabs */}
            <div className="flex border-b border-slate-800">
              {IMPORT_STEPS.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setImportMethod(step.id as 'url' | 'file')}
                  className={cn(
                    'flex-1 px-4 py-3 text-sm font-medium transition-colors',
                    importMethod === step.id
                      ? 'text-white border-b-2 border-violet-500 bg-violet-500/10'
                      : 'text-slate-400 hover:text-white'
                  )}
                >
                  {step.label}
                </button>
              ))}
            </div>

            <div className="p-6">
              {importMethod === 'url' ? (
                <div className="space-y-4">
                  <input
                    type="url"
                    value={specUrl}
                    onChange={(e) => setSpecUrl(e.target.value)}
                    placeholder="https://api.example.com/openapi.json"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                  />
                  <button className="w-full btn-primary rounded-xl py-3 flex items-center justify-center gap-2">
                    Importar y Generar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-violet-500/50 transition-colors cursor-pointer">
                    <FileText className="w-12 h-12 mx-auto mb-3 text-slate-500" />
                    <p className="text-slate-400">Arrastra tu spec de OpenAPI aquí</p>
                    <p className="text-sm text-slate-500 mt-1">.json or .yaml</p>
                  </div>
                  <button className="w-full btn-primary rounded-xl py-3 flex items-center justify-center gap-2">
                    Subir y Generar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CLI option */}
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-slate-500 text-sm">O usa la CLI</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800">
              <Terminal className="w-4 h-4 text-slate-500" />
              {(['npm', 'yarn', 'pnpm'] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setPkgManager(pm)}
                  className={cn(
                    'px-3 py-1 rounded text-xs font-medium transition-colors',
                    pkgManager === pm
                      ? 'bg-violet-500/20 text-violet-400'
                      : 'text-slate-500 hover:text-white'
                  )}
                >
                  {pm}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between p-4">
              <code className="text-violet-400 font-mono">{COMMANDS[pkgManager]}</code>
              <button onClick={handleCopy} className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Supported formats */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['OpenAPI 3.1', 'OpenAPI 3.0', 'Swagger 2.0', 'AsyncAPI'].map((format) => (
            <span key={format} className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-400">
              {format}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
