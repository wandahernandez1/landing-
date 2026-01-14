import { AlertTriangle, Code, FileText, ChevronRight, XCircle, Copy } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Sample error anatomy
const ERROR_EXAMPLE = {
  type: 'TypeError',
  message: "Cannot read properties of undefined (reading 'map')",
  file: 'src/components/ProductList.tsx',
  line: 42,
  column: 15,
  stack: [
    { file: 'ProductList.tsx', line: 42, fn: 'ProductList' },
    { file: 'react-dom.development.js', line: 16317, fn: 'renderWithHooks' },
    { file: 'react-dom.development.js', line: 16000, fn: 'mountIndeterminateComponent' },
  ],
  context: {
    before: [
      '  const { products } = data;',
      '  ',
      '  return (',
    ],
    error: '    {products.map((product) => (',
    after: [
      '      <ProductCard key={product.id} {...product} />',
      '    ))}',
      '  );',
    ],
  },
  breadcrumbs: [
    { time: '10:32:01', type: 'navigation', data: '/products' },
    { time: '10:32:02', type: 'fetch', data: 'GET /api/products → 500' },
    { time: '10:32:02', type: 'error', data: 'TypeError thrown' },
  ],
}

// Error grouping example
const ERROR_GROUPS = [
  { id: 1, message: "Cannot read properties of undefined", count: 1234, users: 89, trend: 'up' },
  { id: 2, message: "Network request failed", count: 567, users: 45, trend: 'down' },
  { id: 3, message: "ChunkLoadError: Loading chunk", count: 234, users: 23, trend: 'stable' },
  { id: 4, message: "ResizeObserver loop limit exceeded", count: 12345, users: 890, trend: 'ignored' },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTab, setSelectedTab] = useState<'anatomy' | 'grouping'>('anatomy')
  const [copiedStack, setCopiedStack] = useState(false)

  const copyStack = () => {
    const stackText = ERROR_EXAMPLE.stack.map(s => `  at ${s.fn} (${s.file}:${s.line})`).join('\n')
    navigator.clipboard.writeText(`${ERROR_EXAMPLE.type}: ${ERROR_EXAMPLE.message}\n${stackText}`)
    setCopiedStack(true)
    setTimeout(() => setCopiedStack(false), 2000)
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 error-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-red-400">Características</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Depura con{' '}<span className="text-gradient">contexto completo</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Ve exactamente qué pasó antes, durante y después de cada error
          </p>
        </header>

        {/* Tab buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedTab('anatomy')}
            className={cn(
              'px-6 py-3 rounded-xl font-medium transition-all',
              selectedTab === 'anatomy'
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:bg-slate-900'
            )}
          >
            Anatomía del Error
          </button>
          <button
            onClick={() => setSelectedTab('grouping')}
            className={cn(
              'px-6 py-3 rounded-xl font-medium transition-all',
              selectedTab === 'grouping'
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:bg-slate-900'
            )}
          >
            Agrupación Inteligente
          </button>
        </div>

        {/* Error Anatomy View */}
        {selectedTab === 'anatomy' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Error details */}
              <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="font-mono text-red-400">{ERROR_EXAMPLE.type}</span>
                  </div>
                  <button
                    onClick={copyStack}
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    {copiedStack ? '¡Copiado!' : 'Copiar stack'}
                  </button>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Message */}
                  <div>
                    <p className="text-white font-medium mb-1">{ERROR_EXAMPLE.message}</p>
                    <p className="text-sm text-slate-500 font-mono">
                      {ERROR_EXAMPLE.file}:{ERROR_EXAMPLE.line}:{ERROR_EXAMPLE.column}
                    </p>
                  </div>

                  {/* Source code context */}
                  <div className="rounded-xl bg-slate-800/50 overflow-hidden">
                    <div className="px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                      <Code className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-400 font-mono">{ERROR_EXAMPLE.file}</span>
                    </div>
                    <pre className="p-4 text-sm font-mono overflow-x-auto">
                      {ERROR_EXAMPLE.context.before.map((line, i) => (
                        <div key={i} className="text-slate-500">{line || ' '}</div>
                      ))}
                      <div className="text-red-400 bg-red-500/10 -mx-4 px-4">{ERROR_EXAMPLE.context.error}</div>
                      {ERROR_EXAMPLE.context.after.map((line, i) => (
                        <div key={i} className="text-slate-500">{line || ' '}</div>
                      ))}
                    </pre>
                  </div>

                  {/* Stack trace */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Stack Trace</h4>
                    <div className="space-y-1">
                      {ERROR_EXAMPLE.stack.map((frame, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-slate-600">at</span>
                          <span className="text-slate-300">{frame.fn}</span>
                          <span className="text-slate-600">(</span>
                          <span className="text-slate-400 font-mono">{frame.file}:{frame.line}</span>
                          <span className="text-slate-600">)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Breadcrumbs */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                <h4 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Breadcrumbs
                </h4>
                <div className="space-y-3">
                  {ERROR_EXAMPLE.breadcrumbs.map((crumb, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-xs text-slate-600 font-mono w-16 flex-shrink-0">{crumb.time}</span>
                      <div>
                        <span className={cn(
                          'px-2 py-0.5 rounded text-xs font-medium',
                          crumb.type === 'error' ? 'bg-red-500/20 text-red-400' :
                          crumb.type === 'fetch' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-blue-500/20 text-blue-400'
                        )}>
                          {crumb.type}
                        </span>
                        <p className="text-sm text-slate-400 mt-1">{crumb.data}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Reproducción de sesión completa disponible →
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Smart Grouping View */}
        {selectedTab === 'grouping' && (
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 bg-slate-900">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">Grupos de Errores</h3>
                  <span className="text-sm text-slate-500">Últimas 24 horas</span>
                </div>
              </div>
              <div className="divide-y divide-slate-800">
                {ERROR_GROUPS.map((error) => (
                  <div 
                    key={error.id}
                    className="px-6 py-4 flex items-center gap-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <AlertTriangle className={cn(
                      'w-5 h-5 flex-shrink-0',
                      error.trend === 'ignored' ? 'text-slate-600' :
                      error.trend === 'up' ? 'text-red-400' :
                      error.trend === 'down' ? 'text-green-400' : 'text-amber-400'
                    )} />
                    <div className="flex-1 min-w-0">
                      <p className="text-white truncate font-mono text-sm">{error.message}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {error.count.toLocaleString()} eventos • {error.users} usuarios afectados
                      </p>
                    </div>
                    {error.trend === 'ignored' ? (
                      <span className="px-2 py-1 rounded text-xs bg-slate-800 text-slate-500">Ignorado</span>
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-600" />
                    )}
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800">
                <p className="text-sm text-slate-500">
                  FrontendMonitor agrupa automáticamente errores similares por huella de stack trace
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
