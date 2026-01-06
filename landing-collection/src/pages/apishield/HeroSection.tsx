import { ArrowRight, Shield, Lock, AlertTriangle, Globe, FileText } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Simulated attack origins for the world map
const ATTACK_ORIGINS = [
  { id: 1, x: 25, y: 35, country: 'US', type: 'DDoS', blocked: true },
  { id: 2, x: 48, y: 30, country: 'EU', type: 'Inyección SQL', blocked: true },
  { id: 3, x: 75, y: 45, country: 'CN', type: 'Fuerza Bruta', blocked: true },
  { id: 4, x: 65, y: 55, country: 'IN', type: 'Límite de Tasa', blocked: true },
  { id: 5, x: 85, y: 60, country: 'AU', type: 'Bot', blocked: true },
  { id: 6, x: 35, y: 70, country: 'BR', type: 'Relleno de Credenciales', blocked: true },
  { id: 7, x: 55, y: 25, country: 'RU', type: 'XSS', blocked: true },
]

// Live threat log
const THREAT_LOG = [
  { ip: '192.168.1.***', type: 'Inyección SQL', status: 'blocked', time: 'Ahora mismo' },
  { ip: '10.0.0.***', type: 'Límite de Tasa Excedido', status: 'blocked', time: 'Hace 2s' },
  { ip: '172.16.0.***', type: 'Patrón Sospechoso', status: 'blocked', time: 'Hace 5s' },
  { ip: '203.0.113.***', type: 'Bot Detectado', status: 'blocked', time: 'Hace 8s' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [threatsBlocked, setThreatsBlocked] = useState(847291)
  const [activeAttacks, setActiveAttacks] = useState<number[]>([])
  const [visibleLog, setVisibleLog] = useState(THREAT_LOG.slice(0, 3))

  useHeroAnimation(sectionRef)

  // Simulate live threat counter
  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 5) + 1)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  // Simulate attacks appearing on map
  useEffect(() => {
    const interval = setInterval(() => {
      const randomAttack = Math.floor(Math.random() * ATTACK_ORIGINS.length)
      setActiveAttacks(prev => {
        const newAttacks = [...prev, randomAttack]
        if (newAttacks.length > 3) newAttacks.shift()
        return newAttacks
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Rotate threat log
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLog(prev => {
        const newLog = [...prev]
        newLog.pop()
        newLog.unshift({
          ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.***`,
          type: ['Inyección SQL', 'DDoS', 'Bot', 'Límite de Tasa'][Math.floor(Math.random() * 4)],
          status: 'blocked',
          time: 'Ahora mismo'
        })
        return newLog
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 security-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2"
            >
              <Shield className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Seguridad API Empresarial</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block text-gradient tabular-nums">{threatsBlocked.toLocaleString()}</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2">amenazas bloqueadas hoy</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              APIShield protege tus APIs de ataques, abusos y actores maliciosos en tiempo real. 
              Ve cada amenaza. Blóquealas todas.
            </p>

            {/* Live Threat Counter */}
            <div 
              data-hero-cta
              className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Shield className="h-8 w-8 text-emerald-400" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-emerald-300 text-sm font-medium">Todos los sistemas protegidos</p>
                  <p className="text-slate-500 text-xs">Última amenaza bloqueada hace 2 segundos</p>
                </div>
              </div>
            </div>

            <div 
              data-hero-cta
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center"
              >
                Solicitar Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#whitepaper"
                className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center"
              >
                <FileText className="h-5 w-5" />
                Whitepaper de Seguridad
              </a>
            </div>

            {/* Compliance Badges */}
            <div 
              data-hero-stats
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {['SOC 2', 'GDPR', 'HIPAA', 'PCI DSS'].map((badge) => (
                <div 
                  key={badge}
                  className="px-3 py-1 bg-slate-800/50 border border-emerald-500/20 rounded-lg"
                >
                  <span className="text-xs text-emerald-400 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Threat Map */}
          <div 
            data-hero-visual
            className="relative"
          >
            {/* World Map with Attacks */}
            <div className="relative rounded-2xl border border-emerald-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-emerald-500/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-emerald-500/10">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Monitor Global de Amenazas</span>
                </div>
                <span className="text-xs text-emerald-400 font-mono">LIVE</span>
              </div>

              {/* Map Area */}
              <div className="relative h-64 bg-slate-950/50 p-4">
                {/* Simplified world map outline */}
                <svg viewBox="0 0 100 60" className="w-full h-full opacity-20">
                  <path 
                    d="M15,20 Q20,15 30,18 T50,15 T70,20 T85,18 M10,35 Q25,30 40,35 T60,32 T80,38 M20,45 Q35,42 50,48 T70,45"
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="0.5"
                  />
                </svg>

                {/* Attack Points */}
                {ATTACK_ORIGINS.map((attack, i) => (
                  <div
                    key={attack.id}
                    className={`absolute transition-all duration-500 ${
                      activeAttacks.includes(i) ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                    }`}
                    style={{
                      left: `${attack.x}%`,
                      top: `${attack.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className={`relative ${activeAttacks.includes(i) ? 'animate-pulse' : ''}`}>
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      {activeAttacks.includes(i) && (
                        <>
                          <div className="absolute inset-0 w-8 h-8 -translate-x-2 -translate-y-2 border border-red-500/50 rounded-full animate-ping" />
                          <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">
                              {attack.type}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                {/* Shield in center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <Shield className="w-12 h-12 text-emerald-500" />
                    <div className="absolute inset-0 w-16 h-16 -translate-x-2 -translate-y-2 border-2 border-emerald-500/30 rounded-full" />
                    <div className="absolute inset-0 w-20 h-20 -translate-x-4 -translate-y-4 border border-emerald-500/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Live Threat Log */}
              <div className="p-4 bg-slate-800/30 border-t border-emerald-500/10">
                <div className="space-y-2">
                  {visibleLog.map((log, i) => (
                    <div 
                      key={i}
                      className={`flex items-center justify-between text-xs font-mono transition-all duration-300 ${
                        i === 0 ? 'opacity-100' : 'opacity-60'
                      }`}
                    >
                      <span className="text-slate-500">{log.ip}</span>
                      <span className="text-red-400">{log.type}</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        BLOQUEADO
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 bg-slate-900/80 border border-emerald-500/20 rounded-xl text-center">
                <span className="block text-lg font-bold text-emerald-400">2.4M</span>
                <span className="text-[10px] text-slate-500">Pet/hora</span>
              </div>
              <div className="p-3 bg-slate-900/80 border border-emerald-500/20 rounded-xl text-center">
                <span className="block text-lg font-bold text-emerald-400">99.99%</span>
                <span className="text-[10px] text-slate-500">Disponibilidad</span>
              </div>
              <div className="p-3 bg-slate-900/80 border border-emerald-500/20 rounded-xl text-center">
                <span className="block text-lg font-bold text-emerald-400">&lt;5ms</span>
                <span className="text-[10px] text-slate-500">Latencia</span>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-linear-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
