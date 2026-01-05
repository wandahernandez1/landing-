import { useRef, useState } from 'react'
import { 
  CreditCard, Users, Mail, BarChart, Lock, Palette,
  ChevronRight, ChevronDown, Check, Folder, File, 
  Sparkles, ExternalLink
} from 'lucide-react'

// What's included tree structure
const INCLUDED_TREE = [
  {
    name: 'Authentication',
    icon: Lock,
    expanded: true,
    items: [
      'Social login (Google, GitHub, Twitter)',
      'Magic link authentication',
      'Session management',
      'Protected routes',
    ]
  },
  {
    name: 'Payments',
    icon: CreditCard,
    expanded: true,
    items: [
      'Stripe integration',
      'Subscription management',
      'Usage-based billing',
      'Invoice generation',
    ]
  },
  {
    name: 'User Management',
    icon: Users,
    expanded: false,
    items: [
      'User profiles',
      'Team workspaces',
      'Role-based access',
      'Account settings',
    ]
  },
  {
    name: 'Email System',
    icon: Mail,
    expanded: false,
    items: [
      'Transactional emails',
      'Email templates',
      'Resend integration',
      'Unsubscribe handling',
    ]
  },
  {
    name: 'Analytics',
    icon: BarChart,
    expanded: false,
    items: [
      'User analytics',
      'Revenue tracking',
      'Conversion funnels',
      'Custom events',
    ]
  },
  {
    name: 'UI Components',
    icon: Palette,
    expanded: false,
    items: [
      'Dashboard layouts',
      'Settings pages',
      'Billing portal',
      '50+ components',
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
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-orange-400">What's Included</p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Everything to{' '}<span className="text-gradient">launch fast</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Stop reinventing the wheel. Start with production-ready code.
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
                    <span className="text-xs text-slate-600 ml-auto">{folder.items.length} files</span>
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
                <span className="text-orange-400 font-medium">24 features</span> included • Ready to customize
              </p>
            </div>
          </div>

          {/* Right side - Tech stack & benefits */}
          <div className="space-y-8">
            
            {/* Built with */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400" />
                Built with modern stack
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
              <h3 className="text-lg font-semibold text-white mb-4">Why indie makers love it</h3>
              <div className="space-y-3">
                {[
                  { title: 'Ship in days, not months', desc: 'All the boring stuff is done' },
                  { title: 'Own your code', desc: 'No vendor lock-in, full access' },
                  { title: 'Battle-tested', desc: 'Used by 200+ shipped products' },
                  { title: 'Active community', desc: 'Discord with 500+ makers' },
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
              <span className="text-white font-medium">View full feature list</span>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-orange-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
