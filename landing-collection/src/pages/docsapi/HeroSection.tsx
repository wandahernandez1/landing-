import { ArrowRight, FileText, Play, Code2, Send, Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Interactive API Playground in the hero
const DEMO_ENDPOINTS = [
  { method: 'GET', path: '/users', description: 'Listar todos los usuarios' },
  { method: 'POST', path: '/users', description: 'Crear un nuevo usuario' },
  { method: 'GET', path: '/users/:id', description: 'Obtener usuario por ID' },
  { method: 'PUT', path: '/users/:id', description: 'Actualizar usuario' },
  { method: 'DELETE', path: '/users/:id', description: 'Eliminar usuario' },
]

const SAMPLE_RESPONSE = {
  GET: {
    data: [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ],
    meta: { total: 2, page: 1 }
  },
  POST: {
    id: 3,
    name: "New User",
    email: "new@example.com",
    created_at: "2024-01-15T10:30:00Z"
  },
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedEndpoint, setSelectedEndpoint] = useState(DEMO_ENDPOINTS[0])
  const [isExecuting, setIsExecuting] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  
  useHeroAnimation(sectionRef)

  // Execute API call (simulated)
  const executeRequest = () => {
    setIsExecuting(true)
    setResponse(null)
    
    setTimeout(() => {
      const sampleData = selectedEndpoint.method === 'POST' 
        ? SAMPLE_RESPONSE.POST 
        : SAMPLE_RESPONSE.GET
      setResponse(JSON.stringify(sampleData, null, 2))
      setIsExecuting(false)
    }, 800)
  }

  // Copy response
  const copyResponse = () => {
    if (response) {
      navigator.clipboard.writeText(response)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Method colors
  const getMethodColor = (method: string) => {
    const colors: Record<string, string> = {
      GET: 'bg-green-500/20 text-green-400',
      POST: 'bg-blue-500/20 text-blue-400',
      PUT: 'bg-yellow-500/20 text-yellow-400',
      DELETE: 'bg-red-500/20 text-red-400',
    }
    return colors[method] || 'bg-slate-500/20 text-slate-400'
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 docs-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2"
            >
              <FileText className="h-4 w-4 text-violet-400" />
              <span className="text-sm text-violet-300">Plataforma de Documentación de APIs</span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">Prueba la API</span>
              <span className="block text-gradient">antes de registrarte.</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              Documentación interactiva que los desarrolladores quieren usar. 
              Playground en vivo, generación de código y búsqueda instantánea.
            </p>

            {/* What's included */}
            <div 
              data-hero-cta
              className="mb-8 grid grid-cols-2 gap-3"
            >
              {[
                'Importar OpenAPI',
                'Playground interactivo',
                'Snippets de código',
                'Control de versiones',
              ].map((feature) => (
                <div 
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Check className="w-4 h-4 text-violet-400" />
                  {feature}
                </div>
              ))}
            </div>

            <div 
              data-hero-stats
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center">
                Crea Tu Documentación
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#features" className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center">
                <Play className="h-5 w-5" />
                Ver Ejemplos
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-slate-400">
              {[
                { value: '50K+', label: 'Docs de API' },
                { value: '2M+', label: 'Vistas/mes' },
                { value: '5K+', label: 'Equipos dev' },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-xl font-bold text-violet-400">{stat.value}</span>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Playground */}
          <div 
            data-hero-visual
            className="relative"
          >
            <div className="rounded-2xl border border-violet-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-violet-500/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-violet-400" />
                  <span className="text-sm text-slate-300">Playground de API</span>
                </div>
                <span className="text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded">LIVE</span>
              </div>

              {/* Endpoint selector */}
              <div className="p-4 border-b border-slate-700/50">
                <p className="text-xs text-slate-500 mb-3">Selecciona un endpoint</p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {DEMO_ENDPOINTS.map((endpoint) => (
                    <button
                      key={`${endpoint.method}-${endpoint.path}`}
                      onClick={() => {
                        setSelectedEndpoint(endpoint)
                        setResponse(null)
                      }}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                        selectedEndpoint.path === endpoint.path && selectedEndpoint.method === endpoint.method
                          ? 'bg-violet-500/20 border border-violet-500/30'
                          : 'bg-slate-800/50 hover:bg-slate-800 border border-transparent'
                      }`}
                    >
                      <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <span className="font-mono text-sm text-slate-300 flex-1">{endpoint.path}</span>
                      <span className="text-xs text-slate-500 hidden sm:block">{endpoint.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Request section */}
              <div className="p-4 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${getMethodColor(selectedEndpoint.method)}`}>
                      {selectedEndpoint.method}
                    </span>
                    <span className="font-mono text-sm text-slate-300">https://api.example.com{selectedEndpoint.path}</span>
                  </div>
                  <button
                    onClick={executeRequest}
                    disabled={isExecuting}
                    className="btn-primary flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold disabled:opacity-50"
                  >
                    {isExecuting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    Probar
                  </button>
                </div>
              </div>

              {/* Response section */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-500">Respuesta</span>
                  {response && (
                    <button
                      onClick={copyResponse}
                      className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copied ? '¡Copiado!' : 'Copiar'}
                    </button>
                  )}
                </div>
                
                <div className="bg-slate-950 rounded-lg p-4 min-h-[150px] max-h-[200px] overflow-y-auto">
                  {isExecuting ? (
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-3 h-3 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                      Ejecutando solicitud...
                    </div>
                  ) : response ? (
                    <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">
                      <code>
                        <span className="text-slate-500">// 200 OK</span>
                        {'\n'}
                        {response}
                      </code>
                    </pre>
                  ) : (
                    <div className="text-sm text-slate-600">
                      Haz clic en "Probar" para ver la respuesta
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-800/30">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Users API v2.0</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    12 endpoints
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-violet-500 text-white text-xs font-medium rounded-full shadow-lg shadow-violet-500/30">
              Interactivo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
