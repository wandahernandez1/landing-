import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'
import { Mail, Fingerprint, Smartphone, Key, Shield, Globe, Check, ChevronRight } from 'lucide-react'

// Auth methods
const AUTH_METHODS = [
  { 
    id: 'magic-link', 
    name: 'Magic Links', 
    icon: Mail, 
    description: 'Passwordless email authentication',
    code: `await authless.sendMagicLink({
  email: user.email,
  redirectUrl: '/dashboard'
})`,
    features: ['No passwords', 'Secure links', 'Customizable email']
  },
  { 
    id: 'passkey', 
    name: 'Passkeys', 
    icon: Fingerprint, 
    description: 'WebAuthn biometric authentication',
    code: `await authless.createPasskey({
  userId: user.id,
  displayName: user.name
})`,
    features: ['Biometric', 'Device-bound', 'Phishing resistant']
  },
  { 
    id: 'sms', 
    name: 'SMS OTP', 
    icon: Smartphone, 
    description: 'Phone number verification',
    code: `await authless.sendSMS({
  phone: '+1234567890',
  template: 'verify'
})`,
    features: ['Global coverage', 'Auto-detect', 'Fraud prevention']
  },
  { 
    id: 'oauth', 
    name: 'Social OAuth', 
    icon: Globe, 
    description: 'Sign in with Google, GitHub, etc.',
    code: `<AuthlessButton provider="google">
  Sign in with Google
</AuthlessButton>`,
    features: ['20+ providers', 'One-click setup', 'Token refresh']
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedMethod, setSelectedMethod] = useState('magic-link')

  const currentMethod = AUTH_METHODS.find(m => m.id === selectedMethod) || AUTH_METHODS[0]

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 auth-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">Auth Methods</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Every method,{' '}<span className="text-gradient">one API</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Implement any auth strategy with a single integration
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Method selector */}
            <div className="lg:col-span-2 space-y-3">
              {AUTH_METHODS.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={cn(
                    'w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all',
                    selectedMethod === method.id
                      ? 'bg-zinc-800 border border-zinc-700'
                      : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
                  )}
                >
                  <div className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                    selectedMethod === method.id
                      ? 'bg-white text-black'
                      : 'bg-zinc-800 text-zinc-400'
                  )}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">{method.name}</p>
                    <p className="text-sm text-zinc-500">{method.description}</p>
                  </div>
                  <ChevronRight className={cn(
                    'w-5 h-5 transition-colors',
                    selectedMethod === method.id ? 'text-white' : 'text-zinc-700'
                  )} />
                </button>
              ))}
            </div>

            {/* Code preview */}
            <div className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <currentMethod.icon className="w-5 h-5 text-zinc-400" />
                  <span className="font-medium text-white">{currentMethod.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Code block */}
              <div className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-zinc-300 font-mono">{currentMethod.code}</code>
                </pre>
              </div>

              {/* Features */}
              <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900">
                <div className="flex flex-wrap gap-3">
                  {currentMethod.features.map((feature) => (
                    <span 
                      key={feature}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-sm text-zinc-400"
                    >
                      <Check className="w-3 h-3 text-green-400" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { icon: Shield, label: 'SOC 2 Type II' },
              { icon: Key, label: 'End-to-end encrypted' },
              { icon: Globe, label: 'GDPR compliant' },
            ].map((badge) => (
              <div 
                key={badge.label}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800"
              >
                <badge.icon className="w-5 h-5 text-zinc-500" />
                <span className="text-sm text-zinc-400">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
