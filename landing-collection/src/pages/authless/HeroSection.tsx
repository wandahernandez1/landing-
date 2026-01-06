import { ArrowRight, Key, Mail, Fingerprint, Copy, Check, Smartphone, Globe, Zap } from 'lucide-react'
import { useRef, useState } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// The hero focuses on ONE LINE OF CODE
const CODE_SNIPPET = `await authless.login(email)`

// Auth methods available
const AUTH_METHODS = [
  { id: 'magic', icon: Mail, label: 'Magic Link', code: 'await authless.sendMagicLink(email)' },
  { id: 'oauth', icon: Globe, label: 'OAuth 2.0', code: 'await authless.oauth("google")' },
  { id: 'passkey', icon: Fingerprint, label: 'Passkeys', code: 'await authless.passkey.login()' },
  { id: 'otp', icon: Smartphone, label: 'SMS OTP', code: 'await authless.sendOTP(phone)' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState('magic')
  const [_isTyping, _setIsTyping] = useState(false)
  const [demoEmail, setDemoEmail] = useState('')
  const [demoState, setDemoState] = useState<'input' | 'sending' | 'sent'>('input')
  
  useHeroAnimation(sectionRef)

  const activeMethod = AUTH_METHODS.find(m => m.id === selectedMethod)

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(activeMethod?.code || CODE_SNIPPET)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simulate sending magic link
  const handleDemo = () => {
    if (!demoEmail || demoState !== 'input') return
    setDemoState('sending')
    setTimeout(() => {
      setDemoState('sent')
    }, 1500)
  }

  // Reset demo
  const resetDemo = () => {
    setDemoState('input')
    setDemoEmail('')
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 auth-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            data-hero-badge
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2"
          >
            <Key className="h-4 w-4 text-zinc-400" />
            <span className="text-sm text-zinc-400">Autenticación sin contraseñas</span>
          </div>

          {/* Title emphasizing simplicity */}
          <h1 
            data-hero-title
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="block">Una línea.</span>
            <span className="block text-gradient">Cero contraseñas.</span>
          </h1>

          <p 
            data-hero-description
            className="mx-auto max-w-xl text-lg text-zinc-500 md:text-xl mb-10"
          >
            Eso es todo lo que necesitas. Magic links, OAuth, passkeys, SMS. 
            Auth que los usuarios aman, en una línea de código.
          </p>

          {/* The ONE LINE code block - hero of the hero */}
          <div data-hero-cta className="w-full max-w-2xl mx-auto mb-10">
            {/* Method selector */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {AUTH_METHODS.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                    selectedMethod === method.id
                      ? 'bg-zinc-700 text-white'
                      : 'bg-zinc-900 text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <method.icon className="w-4 h-4" />
                  {method.label}
                </button>
              ))}
            </div>

            {/* The code snippet */}
            <div className="relative group">
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                {/* Code header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-zinc-700" />
                      <span className="w-3 h-3 rounded-full bg-zinc-700" />
                      <span className="w-3 h-3 rounded-full bg-zinc-700" />
                    </div>
                    <span className="ml-2 text-xs text-zinc-600 font-mono">auth.ts</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-500 hover:text-white transition-colors rounded hover:bg-zinc-800"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-lg md:text-xl">
                  <span className="text-purple-400">await</span>
                  <span className="text-zinc-300"> authless.</span>
                  <span className="text-cyan-400">
                    {selectedMethod === 'magic' && 'sendMagicLink'}
                    {selectedMethod === 'oauth' && 'oauth'}
                    {selectedMethod === 'passkey' && 'passkey.login'}
                    {selectedMethod === 'otp' && 'sendOTP'}
                  </span>
                  <span className="text-zinc-400">(</span>
                  <span className="text-amber-400">
                    {selectedMethod === 'magic' && 'email'}
                    {selectedMethod === 'oauth' && '"google"'}
                    {selectedMethod === 'passkey' && ''}
                    {selectedMethod === 'otp' && 'phone'}
                  </span>
                  <span className="text-zinc-400">)</span>
                </div>
              </div>

              {/* That's it badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400">
                  Eso es todo. En serio.
                </span>
              </div>
            </div>
          </div>

          {/* Live demo */}
          <div className="w-full max-w-md mx-auto mb-10">
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <p className="text-sm text-zinc-500 mb-4">Pruébalo tú mismo:</p>
              
              {demoState === 'input' && (
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={demoEmail}
                    onChange={(e) => setDemoEmail(e.target.value)}
                    placeholder="Ingresa tu email..."
                    className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                  />
                  <button
                    onClick={handleDemo}
                    disabled={!demoEmail}
                    className="px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              )}
              
              {demoState === 'sending' && (
                <div className="flex items-center justify-center gap-3 py-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="text-zinc-300">Enviando magic link...</span>
                </div>
              )}
              
              {demoState === 'sent' && (
                <div className="text-center py-2">
                  <div className="w-12 h-12 mx-auto mb-3 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-white font-medium mb-1">¡Revisa tu bandeja de entrada!</p>
                  <p className="text-sm text-zinc-500 mb-3">Magic link enviado a {demoEmail}</p>
                  <button
                    onClick={resetDemo}
                    className="text-xs text-zinc-500 hover:text-white transition-colors"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* CTAs */}
          <div 
            data-hero-cta
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold">
              Obtener API Key
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#features" className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium">
              Leer Documentación
            </a>
          </div>

          {/* Stats */}
          <div 
            data-hero-stats
            className="flex flex-wrap items-center justify-center gap-8 text-zinc-500"
          >
            {[
              { icon: Zap, value: '10K+', label: 'Aplicaciones' },
              { value: '50M+', label: 'Auth/mes' },
              { value: '<50ms', label: 'Latencia' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl font-bold text-zinc-300">{stat.value}</span>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
