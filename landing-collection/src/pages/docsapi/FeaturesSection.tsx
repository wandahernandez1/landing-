import { Play, Send, Copy, Check, ChevronDown } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Interactive API playground demo
const ENDPOINTS = [
  { method: 'GET', path: '/users', description: 'List all users' },
  { method: 'POST', path: '/users', description: 'Create user' },
  { method: 'GET', path: '/users/{id}', description: 'Get user by ID' },
  { method: 'PUT', path: '/users/{id}', description: 'Update user' },
  { method: 'DELETE', path: '/users/{id}', description: 'Delete user' },
]

const SAMPLE_RESPONSE = `{
  "data": [
    {
      "id": "usr_1",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": "usr_2",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "created_at": "2024-01-16T14:22:00Z"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "per_page": 10
  }
}`

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedEndpoint, setSelectedEndpoint] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [showResponse, setShowResponse] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleTryIt = () => {
    setIsLoading(true)
    setShowResponse(false)
    setTimeout(() => {
      setIsLoading(false)
      setShowResponse(true)
    }, 800)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(SAMPLE_RESPONSE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const endpoint = ENDPOINTS[selectedEndpoint]

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 docs-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">Interactive Playground</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Try the API{' '}<span className="text-gradient">right now</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Your users test endpoints without leaving the docs
          </p>
        </header>

        {/* API Playground */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Endpoint selector */}
            <div className="border-b border-slate-800 p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <button 
                    onClick={() => {}}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-slate-800 text-white"
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        'px-2 py-1 rounded text-xs font-mono font-bold',
                        endpoint.method === 'GET' && 'bg-green-500/20 text-green-400',
                        endpoint.method === 'POST' && 'bg-blue-500/20 text-blue-400',
                        endpoint.method === 'PUT' && 'bg-yellow-500/20 text-yellow-400',
                        endpoint.method === 'DELETE' && 'bg-red-500/20 text-red-400',
                      )}>
                        {endpoint.method}
                      </span>
                      <span className="font-mono text-sm">{endpoint.path}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
                <button
                  onClick={handleTryIt}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Try it
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-500">{endpoint.description}</p>
            </div>

            {/* Endpoint list */}
            <div className="grid md:grid-cols-[200px_1fr] divide-x divide-slate-800">
              <div className="p-4 space-y-1">
                {ENDPOINTS.map((ep, idx) => (
                  <button
                    key={ep.path + ep.method}
                    onClick={() => { setSelectedEndpoint(idx); setShowResponse(false); }}
                    className={cn(
                      'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors',
                      selectedEndpoint === idx 
                        ? 'bg-violet-500/20 text-white' 
                        : 'text-slate-400 hover:bg-slate-800'
                    )}
                  >
                    <span className={cn(
                      'w-12 text-xs font-mono font-bold',
                      ep.method === 'GET' && 'text-green-400',
                      ep.method === 'POST' && 'text-blue-400',
                      ep.method === 'PUT' && 'text-yellow-400',
                      ep.method === 'DELETE' && 'text-red-400',
                    )}>
                      {ep.method}
                    </span>
                    <span className="text-sm truncate">{ep.path}</span>
                  </button>
                ))}
              </div>

              {/* Response panel */}
              <div className="p-4 min-h-[300px]">
                {showResponse ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono">200 OK</span>
                        <span className="text-xs text-slate-500">123ms</span>
                      </div>
                      <button onClick={handleCopy} className="flex items-center gap-1 text-xs text-slate-400 hover:text-white">
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="p-4 rounded-lg bg-slate-950 text-sm font-mono text-slate-300 overflow-auto max-h-[250px]">
                      {SAMPLE_RESPONSE}
                    </pre>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-500">
                    <div className="text-center">
                      <Play className="w-12 h-12 mx-auto mb-3 opacity-30" />
                      <p>Click "Try it" to see the response</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Auth Headers', desc: 'Pre-filled' },
              { label: 'Request Body', desc: 'JSON Editor' },
              { label: 'Response', desc: 'Syntax Highlighted' },
              { label: 'Code Samples', desc: '10+ Languages' },
            ].map((f) => (
              <div key={f.label} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                <p className="font-medium text-white">{f.label}</p>
                <p className="text-sm text-violet-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
