import { useRef, useState } from 'react'
import { 
  CreditCard, Users, Mail, BarChart, Lock, Palette,
  ChevronRight, ChevronDown, Check, Folder, File, 
  Sparkles, ExternalLink
} from 'lucide-react'

// Estructura del árbol de lo incluido
const INCLUDED_TREE = [
  {
    name: 'Autenticación',
    icon: Lock,
    expanded: true,
    items: [
      'Login social (Google, GitHub, Twitter)',
      'Autenticación magic link',
      'Gestión de sesiones',
      'Rutas protegidas',
    ]
  },
  {
    name: 'Pagos',
    icon: CreditCard,
    expanded: true,
    items: [
      'Integración Stripe',
      'Gestión de suscripciones',
      'Facturación por uso',
      'Generación de facturas',
    ]
  },
  {
    name: 'Gestión de Usuarios',
    icon: Users,
    expanded: false,
    items: [
      'Perfiles de usuario',
      'Espacios de equipo',
      'Acceso basado en roles',
      'Configuración de cuenta',
    ]
  },
  {
    name: 'Sistema de Email',
    icon: Mail,
    expanded: false,
    items: [
      'Emails transaccionales',
      'Plantillas de email',
      'Integración Resend',
      'Manejo de desuscripción',
    ]
  },
  {
    name: 'Analytics',
    icon: BarChart,
    expanded: false,
    items: [
      'Analytics de usuarios',
      'Seguimiento de ingresos',
      'Embudos de conversión',
      'Eventos personalizados',
    ]
  },
  {
    name: 'Componentes UI',
    icon: Palette,
    expanded: false,
    items: [
      'Layouts de dashboard',
      'Páginas de configuración',
      'Portal de facturación',
      '50+ componentes',
    ]
  },
]

// Tech stack
const TECH_STACK = [
  { name: 'Next.js 14', icon: '▲', color: 'bg-white text-black' },
  { name: 'TypeScript', icon: 'TS', color: 'bg-blue-600 text-white' },
  { name: 'Tailwind', icon: '🌊', color: 'bg-cyan-500 text-white' },
  { name: 'Prisma', icon: '◮', color: 'bg-slate-800 text-white' },
  { name: 'Stripe', icon: '💳', color: 'bg-purple-600 text-white' },
  { name: 'Resend', icon: '✉️', color: 'bg-slate-800 text-white' },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['Authentication', 'Payments'])

  const toggleFolder = (name: string) => {
    setExpandedFolders(prev => 
      prev.includes(name) 
        ? prev.filter(f => f !== name)
        : [...prev, name]
    )
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40" aria-labelledby="features-title">
      <div className="absolute inset-0 maker-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-orange-400">Qué Incluye</p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Todo para{' '}<span className="text-gradient">lanzar rápido</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Deja de reinventar la rueda. Empieza con código listo para producción.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* File tree explorer */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Window header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-slate-500 ml-2">microsaas-starter/</span>
            </div>

            {/* File tree */}
            <div className="p-4 font-mono text-sm">
              {INCLUDED_TREE.map((folder) => (
                <div key={folder.name} className="mb-1">
                  {/* Folder row */}
                  <button
                    onClick={() => toggleFolder(folder.name)}
                    className="w-full flex items-center gap-2 py-1.5 px-2 rounded hover:bg-slate-800/50 transition-colors text-left"
                  >
                    {expandedFolders.includes(folder.name) ? (
                      <ChevronDown className="w-4 h-4 text-orange-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    )}
                    <Folder className={`w-4 h-4 ${expandedFolders.includes(folder.name) ? 'text-orange-400' : 'text-slate-500'}`} />
                    <span className="text-white">{folder.name}</span>
                    <span className="text-xs text-slate-600 ml-auto">{folder.items.length} archivos</span>
                  </button>

                  {/* Folder contents */}
                  {expandedFolders.includes(folder.name) && (
                    <div className="ml-4 pl-4 border-l border-slate-800">
                      {folder.items.map((item) => (
                        <div 
                          key={item}
                          className="flex items-center gap-2 py-1 px-2 text-slate-400 hover:text-white transition-colors"
                        >
                          <File className="w-4 h-4 text-slate-600" />
                          <span>{item}</span>
                          <Check className="w-3 h-3 text-green-500 ml-auto" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="px-4 py-3 border-t border-slate-800 bg-slate-900/50">
              <p className="text-xs text-slate-500">
                <span className="text-orange-400 font-medium">24 funciones</span> incluidas • Listas para personalizar
              </p>
            </div>
          </div>

          {/* Right side - Tech stack & benefits */}
          <div className="space-y-8">
            
            {/* Built with */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400" />
                Construido con stack moderno
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {TECH_STACK.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center font-bold text-sm`}>
                      {tech.icon}
                    </div>
                    <span className="text-xs text-slate-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why indie makers love it */}
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-950/30 to-slate-900/80 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Por qué los indie makers lo aman</h3>
              <div className="space-y-3">
                {[
                  { title: 'Lanza en días, no meses', desc: 'Todo lo aburrido ya está hecho' },
                  { title: 'Tu código, tu control', desc: 'Sin vendor lock-in, acceso completo' },
                  { title: 'Probado en batalla', desc: 'Usado por 200+ productos lanzados' },
                  { title: 'Comunidad activa', desc: 'Discord con 500+ makers' },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{benefit.title}</p>
                      <p className="text-sm text-slate-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick link */}
            <a 
              href="#pricing" 
              className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-orange-500/30 transition-all group"
            >
              <span className="text-white font-medium">Ver lista completa de funciones</span>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-orange-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
