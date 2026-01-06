import { useRef, useState } from 'react'
import { Shield, AlertTriangle, Zap, Bug, Key, Server, Database, Cloud, Check, ArrowRight } from 'lucide-react'

// Attack scenarios
const ATTACK_SCENARIOS = [
  {
    id: 'injection',
    name: 'Inyección SQL',
    icon: Bug,
    threat: 'Atacante intenta inyectar código SQL malicioso',
    request: "GET /api/users?id=1'; DROP TABLE users;--",
    response: 'BLOQUEADO: Inyección SQL detectada',
    protection: 'Coincidencia de patrones + detección ML',
    color: 'red'
  },
  {
    id: 'bruteforce',
    name: 'Ataque de Fuerza Bruta',
    icon: Key,
    threat: '10,000 intentos de login en 60 segundos',
    request: 'POST /api/login (repetido)',
    response: 'BLOQUEADO: Límite de tasa excedido',
    protection: 'Limitación de tasa inteligente',
    color: 'orange'
  },
  {
    id: 'ddos',
    name: 'Ataque DDoS',
    icon: Zap,
    threat: 'Inundación masiva de peticiones desde botnet',
    request: '1M peticiones/seg desde 50K IPs',
    response: 'MITIGADO: Tráfico filtrado',
    protection: 'Protección DDoS a nivel edge',
    color: 'yellow'
  },
]

// Compliance certifications
const COMPLIANCE_CERTS = [
  { name: 'SOC 2', type: 'Tipo II', status: 'certified', desc: 'Seguridad, Disponibilidad, Confidencialidad' },
  { name: 'HIPAA', type: 'BAA Disponible', status: 'certified', desc: 'Protección de datos de salud' },
  { name: 'PCI-DSS', type: 'Nivel 1', status: 'certified', desc: 'Industria de tarjetas de pago' },
  { name: 'GDPR', type: 'Conforme', status: 'certified', desc: 'Protección de datos UE' },
  { name: 'ISO 27001', type: 'Certificado', status: 'certified', desc: 'Seguridad de la información' },
  { name: 'FedRAMP', type: 'En Progreso', status: 'pending', desc: 'Gobierno de EE.UU.' },
]

// Architecture components
const ARCHITECTURE_FLOW = [
  { id: 'client', name: 'App Cliente', icon: Server, type: 'source' },
  { id: 'edge', name: 'APIShield Edge', icon: Shield, type: 'shield' },
  { id: 'api', name: 'Tu API', icon: Database, type: 'destination' },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeScenario, setActiveScenario] = useState(0)
  const [showArchDetails, setShowArchDetails] = useState(false)

  const scenario = ATTACK_SCENARIOS[activeScenario]

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40" aria-labelledby="features-title">
      <div className="absolute inset-0 security-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* SECTION 1: Attack Scenarios */}
        <div className="mb-40">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
              Protección en Acción
            </p>
            <h2 id="features-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mira cómo detenemos{' '}<span className="text-gradient">ataques</span>
            </h2>
          </header>

          <div className="max-w-5xl mx-auto">
            {/* Scenario tabs */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {ATTACK_SCENARIOS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScenario(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    i === activeScenario 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
                      : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <s.icon className="w-4 h-4" />
                  {s.name}
                </button>
              ))}
            </div>

            {/* Attack visualization */}
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/90 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Attack details */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{scenario.name}</h3>
                        <p className="text-sm text-slate-500">Ataque detectado</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <p className="text-xs text-red-400 mb-1">Amenaza</p>
                        <p className="text-sm text-slate-300">{scenario.threat}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-800/50">
                        <p className="text-xs text-slate-500 mb-1">Petición Maliciosa</p>
                        <code className="text-sm text-red-300 font-mono break-all">{scenario.request}</code>
                      </div>
                    </div>
                  </div>

                  {/* Response */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Respuesta APIShield</h3>
                        <p className="text-sm text-emerald-400">Protegido</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <p className="text-xs text-emerald-400 mb-1">Acción</p>
                        <p className="text-sm text-white font-medium">{scenario.response}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-800/50">
                        <p className="text-xs text-slate-500 mb-1">Método de Protección</p>
                        <p className="text-sm text-slate-300">{scenario.protection}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline animation bar */}
              <div className="h-1 bg-slate-800">
                <div className="h-full bg-linear-to-r from-red-500 via-yellow-500 to-emerald-500 animate-pulse" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Compliance Matrix */}
        <div className="mb-40">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cumplimiento en el que puedes confiar
            </h3>
            <p className="mt-4 text-slate-400">Cumple tus requisitos regulatorios con confianza</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {COMPLIANCE_CERTS.map((cert) => (
              <div 
                key={cert.name}
                className={`rounded-xl p-5 border transition-all ${
                  cert.status === 'certified' 
                    ? 'border-emerald-500/30 bg-emerald-950/20' 
                    : 'border-yellow-500/30 bg-yellow-950/20'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-slate-500">{cert.type}</p>
                  </div>
                  {cert.status === 'certified' ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-400 text-xs font-bold">WIP</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-slate-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Architecture Diagram */}
        <div>
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Integración simple
            </h3>
            <p className="mt-4 text-slate-400">APIShield se ubica entre tus clientes y tu API</p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 cursor-pointer transition-all hover:border-emerald-500/30"
              onClick={() => setShowArchDetails(!showArchDetails)}
            >
              {/* Architecture flow */}
              <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
                {ARCHITECTURE_FLOW.map((node, i) => (
                  <div key={node.id} className="flex items-center">
                    <div className={`flex flex-col items-center ${
                      node.type === 'shield' ? 'scale-110' : ''
                    }`}>
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${
                        node.type === 'shield' 
                          ? 'bg-emerald-500/20 border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/20' 
                          : 'bg-slate-800 border border-slate-700'
                      }`}>
                        <node.icon className={`w-8 h-8 ${
                          node.type === 'shield' ? 'text-emerald-400' : 'text-slate-400'
                        }`} />
                      </div>
                      <p className={`mt-3 text-sm font-medium ${
                        node.type === 'shield' ? 'text-emerald-400' : 'text-slate-400'
                      }`}>
                        {node.name}
                      </p>
                    </div>
                    {i < ARCHITECTURE_FLOW.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-slate-600 mx-2 md:mx-4" />
                    )}
                  </div>
                ))}
              </div>

              {/* Details panel */}
              {showArchDetails && (
                <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                  {[
                    { label: 'Latencia añadida', value: '<1ms', icon: Zap },
                    { label: 'Disponibilidad', value: '99.99%', icon: Cloud },
                    { label: 'PoPs Globales', value: '200+', icon: Server },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-lg bg-slate-800/50">
                      <stat.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-center text-xs text-slate-500 mt-4">
                Haz click para {showArchDetails ? 'ocultar' : 'mostrar'} detalles técnicos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
