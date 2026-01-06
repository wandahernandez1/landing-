import { ArrowRight, Key, Copy, CheckCircle, Terminal, Book, MessageSquare } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// SDK quick start
const SDK_CODE = `npm install @authless/sdk

// Inicializar
import { Authless } from '@authless/sdk'

const auth = new Authless({
  projectId: 'tu-project-id'
})

// Enviar magic link
await auth.sendMagicLink({
  email: 'usuario@ejemplo.com'
})`

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(SDK_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 auth-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* Quick Start */}
        <div className="max-w-3xl mx-auto mb-20">
          <header className="text-center mb-10">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-zinc-400/20 rounded-full animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 border border-zinc-700 rounded-2xl">
                <Key className="h-10 w-10 text-zinc-300" />
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Get started in{' '}<span className="text-gradient">seconds</span>
            </h2>
            <p className="text-lg text-zinc-500">
              Add passwordless auth to your app with just a few lines of code
            </p>
          </header>

          {/* Code block */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-zinc-500" />
                <span className="text-sm text-zinc-400">Inicio Rápido</span>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar
                  </>
                )}
              </button>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm text-zinc-300 font-mono">{SDK_CODE}</code>
            </pre>
          </div>

          {/* Framework badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'Vue', 'Svelte', 'Node.js', 'Ruby', 'Python', 'Go'].map((fw) => (
              <span 
                key={fw}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-500"
              >
                {fw}
              </span>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Book, label: 'Documentación', desc: 'Referencia completa de API', href: '#' },
              { icon: Terminal, label: 'Ejemplos', desc: 'Aplicaciones de muestra', href: '#' },
              { icon: MessageSquare, label: 'Discord', desc: 'Obtén ayuda de la comunidad', href: '#' },
            ].map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className={cn(
                  'flex items-center gap-4 p-4 rounded-xl transition-all',
                  'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                  <resource.icon className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{resource.label}</p>
                  <p className="text-sm text-zinc-500">{resource.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="mx-auto max-w-xl text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              <Key className="h-5 w-5" />
              Comenzar Gratis
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium">
              Leer Documentación
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-600">
            Sin tarjeta de crédito • Tier gratis para siempre
          </p>
        </div>
      </div>
    </section>
  )
}
