import { ArrowRight, Search, CheckCircle2, XCircle, Globe, Code, FileText, TrendingUp, AlertTriangle } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

type Phase = 'idle' | 'scanning' | 'results'

interface SEOCheck {
  id: string
  label: string
  category: 'critical' | 'important' | 'minor'
  status: 'pass' | 'fail' | 'warning' | 'pending'
  detail?: string
}

const generateSEOResults = (): SEOCheck[] => [
  { id: 'title', label: 'Meta título presente', category: 'critical', status: Math.random() > 0.2 ? 'pass' : 'fail', detail: 'Título: 58 caracteres' },
  { id: 'description', label: 'Meta descripción óptima', category: 'critical', status: Math.random() > 0.3 ? 'pass' : 'warning', detail: 'Longitud: 142/160 caracteres' },
  { id: 'canonical', label: 'URL canónica configurada', category: 'critical', status: Math.random() > 0.1 ? 'pass' : 'fail' },
  { id: 'h1', label: 'Una sola etiqueta H1', category: 'critical', status: Math.random() > 0.2 ? 'pass' : 'fail' },
  { id: 'og', label: 'Open Graph tags completos', category: 'important', status: Math.random() > 0.4 ? 'pass' : 'warning', detail: 'Falta: og:image' },
  { id: 'twitter', label: 'Meta Twitter Card', category: 'important', status: Math.random() > 0.5 ? 'pass' : 'fail' },
  { id: 'jsonld', label: 'Schema JSON-LD presente', category: 'important', status: Math.random() > 0.4 ? 'pass' : 'fail' },
  { id: 'robots', label: 'Robots.txt válido', category: 'important', status: 'pass' },
  { id: 'sitemap', label: 'Sitemap.xml accesible', category: 'important', status: Math.random() > 0.2 ? 'pass' : 'fail' },
  { id: 'mobile', label: 'Viewport móvil configurado', category: 'critical', status: 'pass' },
  { id: 'https', label: 'HTTPS habilitado', category: 'critical', status: 'pass' },
  { id: 'images', label: 'Atributos alt en imágenes', category: 'minor', status: Math.random() > 0.6 ? 'pass' : 'warning', detail: '3 imágenes sin alt' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [url, setUrl] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const [checks, setChecks] = useState<SEOCheck[]>([])
  const [currentCheckIndex, setCurrentCheckIndex] = useState(0)
  const [score, setScore] = useState(0)
  
  useHeroAnimation(sectionRef)

  // Handle scan
  const handleScan = () => {
    if (!url.trim() || phase === 'scanning') return
    
    setPhase('scanning')
    setCurrentCheckIndex(0)
    const newChecks = generateSEOResults().map(c => ({ ...c, status: 'pending' as const }))
    setChecks(newChecks)
  }

  // Animate checks appearing one by one
  useEffect(() => {
    if (phase !== 'scanning') return
    
    if (currentCheckIndex >= checks.length) {
      // All checks done, calculate score
      const results = generateSEOResults()
      setChecks(results)
      const passed = results.filter(c => c.status === 'pass').length
      const total = results.length
      setScore(Math.round((passed / total) * 100))
      setPhase('results')
      return
    }

    const timer = setTimeout(() => {
      setCurrentCheckIndex(prev => prev + 1)
    }, 200)
    
    return () => clearTimeout(timer)
  }, [phase, currentCheckIndex, checks.length])

  // Reset
  const handleReset = () => {
    setPhase('idle')
    setChecks([])
    setUrl('')
    setScore(0)
    setCurrentCheckIndex(0)
  }

  // Count by status
  const passCount = checks.filter(c => c.status === 'pass').length
  const failCount = checks.filter(c => c.status === 'fail').length
  const warnCount = checks.filter(c => c.status === 'warning').length

  // Floating avatars data
  const floatingAvatars = [
    { name: "Alex M.", role: "Frontend Dev", position: "top-[15%] left-[15%]", delay: "0s", bg: "from-green-400 to-emerald-600", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Sarah K.", role: "SEO Expert", position: "top-[25%] right-[12%]", delay: "1s", bg: "from-blue-400 to-cyan-600", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
    { name: "David R.", role: "Tech Lead", position: "bottom-[25%] left-[10%]", delay: "2s", bg: "from-purple-400 to-violet-600", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { name: "Maria L.", role: "Full Stack", position: "top-[50%] right-[8%]", delay: "0.5s", bg: "from-orange-400 to-red-500", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    { name: "Carlos P.", role: "DevOps", position: "bottom-[15%] right-[18%]", delay: "1.5s", bg: "from-cyan-400 to-teal-600", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { name: "Anna F.", role: "UX Designer", position: "top-[70%] left-[20%]", delay: "2.5s", bg: "from-pink-400 to-rose-600", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
    { name: "Luis C.", role: "Backend Dev", position: "top-[40%] left-[5%]", delay: "3s", bg: "from-yellow-400 to-orange-500", avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" },
    { name: "Emma R.", role: "QA Engineer", position: "bottom-[40%] right-[25%]", delay: "0.8s", bg: "from-indigo-400 to-blue-600", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
    { name: "Jake T.", role: "Performance", position: "top-[35%] right-[30%]", delay: "1.2s", bg: "from-emerald-400 to-green-600", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
    { name: "Sophia L.", role: "Content SEO", position: "bottom-[60%] left-[25%]", delay: "2.8s", bg: "from-violet-400 to-purple-600", avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face" },
    { name: "Ryan W.", role: "React Dev", position: "top-[80%] right-[15%]", delay: "3.5s", bg: "from-blue-400 to-indigo-600", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face" },
    { name: "Mia P.", role: "Analytics", position: "bottom-[50%] left-[35%]", delay: "1.8s", bg: "from-red-400 to-pink-600", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
    { name: "Tom B.", role: "WordPress", position: "top-[60%] right-[35%]", delay: "4s", bg: "from-teal-400 to-cyan-600", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face" },
    { name: "Zoe M.", role: "Technical SEO", position: "bottom-[70%] right-[40%]", delay: "0.3s", bg: "from-lime-400 to-green-500", avatar: "https://images.unsplash.com/photo-1581013061174-1b90fcd3a2ea?w=150&h=150&fit=crop&crop=face" },
    { name: "Ben K.", role: "Vue.js Dev", position: "top-[20%] left-[35%]", delay: "2.2s", bg: "from-sky-400 to-blue-500", avatar: "https://images.unsplash.com/photo-1611976797400-76baea0de0d7?w=150&h=150&fit=crop&crop=face" },
    { name: "Lily R.", role: "Core Web V.", position: "bottom-[30%] left-[30%]", delay: "3.8s", bg: "from-rose-400 to-red-500", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" },
  ]

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 seo-grid opacity-30" />
      
      {/* Floating Avatars Carousel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingAvatars.map((avatar, index) => (
          <div
            key={index}
            className={`absolute ${avatar.position} animate-float-gentle opacity-0`}
            style={{ 
              animationDelay: avatar.delay,
              animationFillMode: 'forwards',
              animationDuration: '6s'
            }}
          >
            {/* Avatar with floating badge */}
            <div className="relative">
              {/* Main Avatar */}
              <div className="w-16 h-16 rounded-full shadow-xl border-2 border-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer group overflow-hidden">
                <img 
                  src={avatar.avatar} 
                  alt={`${avatar.name} - ${avatar.role}`}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback a iniciales si la imagen no carga
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <div className={`hidden w-full h-full rounded-full bg-gradient-to-br ${avatar.bg} flex items-center justify-center text-white font-bold text-lg absolute inset-0`}>
                  {avatar.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
              
              {/* Floating Info Badge */}
              <div className="absolute -top-8 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-slate-800/90 backdrop-blur-sm border border-green-500/30 rounded-lg px-3 py-2 shadow-xl">
                  <p className="text-xs font-medium text-white whitespace-nowrap">{avatar.name}</p>
                  <p className="text-[10px] text-green-400">{avatar.role}</p>
                  <p className="text-[10px] text-slate-400">Auditando...</p>
                </div>
                {/* Arrow pointing to avatar */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800/90 border-b border-r border-green-500/30 transform rotate-45 -translate-y-1" />
              </div>
            </div>
          </div>
        ))}
        
        {/* Connecting Lines (optional) */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Animated connection lines */}
          <g stroke="url(#connectionGradient)" strokeWidth="1" fill="none">
            <path d="M 12% 20% Q 50% 10% 85% 30%" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 85% 30% Q 70% 50% 20% 60%" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M 8% 65% Q 30% 40% 80% 45%" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            data-hero-badge
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2"
          >
            <Search className="h-4 w-4 text-green-400" />
            <span className="text-sm text-green-300">Auditoría SEO gratuita e instantánea</span>
          </div>

          {/* Title */}
          <h1 
            data-hero-title
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="block">¿Tu sitio está</span>
            <span className="block text-gradient">listo para SEO?</span>
          </h1>

          <p 
            data-hero-description
            className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl mb-10"
          >
            Ingresa tu URL y obtén una auditoría SEO técnica instantánea. 
            Sin registro.
          </p>

          {/* Scanner UI */}
          <div data-hero-cta className="w-full max-w-3xl mx-auto">
            {phase === 'idle' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Globe className="absolute left-4 w-5 h-5 text-slate-500 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                      placeholder="Ingresa la URL de tu sitio web..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900/80 border border-green-500/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-lg"
                    />
                  </div>
                  <button
                    onClick={handleScan}
                    disabled={!url.trim()}
                    className="btn-primary flex items-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold disabled:opacity-50 whitespace-nowrap"
                  >
                    <Search className="h-4 w-4" />
                    Auditar
                  </button>
                </div>
                
                {/* Example URLs */}
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                  <span>Probar:</span>
                  {['vercel.com', 'stripe.com', 'linear.app'].map((example) => (
                    <button
                      key={example}
                      onClick={() => setUrl(example)}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Scanning / Results */}
            {(phase === 'scanning' || phase === 'results') && (
              <div className="rounded-2xl border border-green-500/20 bg-slate-900/80 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/80">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-slate-400">{url}</span>
                  </div>
                  {phase === 'results' && (
                    <button
                      onClick={handleReset}
                      className="text-xs text-green-400 hover:text-green-300"
                    >
                      Escanear otro
                    </button>
                  )}
                </div>

                {/* Score display (results only) */}
                {phase === 'results' && (
                  <div className="p-6 border-b border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`text-5xl font-bold ${
                          score >= 80 ? 'text-green-400' :
                          score >= 50 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {score}
                        </div>
                        <div className="text-left">
                          <p className="text-white font-medium">Puntuación SEO</p>
                          <p className="text-sm text-slate-500">
                            {score >= 80 ? '¡Excelente!' : score >= 50 ? 'Hay espacio para mejorar' : 'Necesita atención'}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="text-center">
                          <span className="block text-xl font-bold text-green-400">{passCount}</span>
                          <span className="text-slate-500">Aprobados</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-xl font-bold text-yellow-400">{warnCount}</span>
                          <span className="text-slate-500">Advertencias</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-xl font-bold text-red-400">{failCount}</span>
                          <span className="text-slate-500">Fallidos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Checklist */}
                <div className="p-4 max-h-[350px] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(phase === 'scanning' ? checks.slice(0, currentCheckIndex) : checks).map((check) => (
                      <div 
                        key={check.id}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          check.status === 'pass' ? 'bg-green-500/10' :
                          check.status === 'warning' ? 'bg-yellow-500/10' :
                          check.status === 'fail' ? 'bg-red-500/10' :
                          'bg-slate-800/50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          check.status === 'pass' ? 'bg-green-500' :
                          check.status === 'warning' ? 'bg-yellow-500' :
                          check.status === 'fail' ? 'bg-red-500' :
                          'bg-slate-600'
                        }`}>
                          {check.status === 'pass' && <CheckCircle2 className="w-3 h-3 text-white" />}
                          {check.status === 'warning' && <AlertTriangle className="w-3 h-3 text-white" />}
                          {check.status === 'fail' && <XCircle className="w-3 h-3 text-white" />}
                          {check.status === 'pending' && <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />}
                        </div>
                        <div className="flex-1 text-left">
                          <span className={`text-sm ${
                            check.status === 'pass' ? 'text-slate-400' : 'text-white'
                          }`}>
                            {check.label}
                          </span>
                          {check.detail && check.status !== 'pass' && (
                            <p className="text-xs text-slate-500 mt-0.5">{check.detail}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {phase === 'scanning' && (
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
                      <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                      Analizando {currentCheckIndex}/{checks.length}...
                    </div>
                  )}
                </div>

                {/* CTA after results */}
                {phase === 'results' && (
                  <div className="p-4 border-t border-slate-700/50 bg-slate-800/30">
                    <a
                      href="#pricing"
                      className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold"
                    >
                      <TrendingUp className="h-5 w-5" />
                      Obtener Reporte Completo + Sugerencias
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          {phase === 'idle' && (
            <div 
              data-hero-stats
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400"
            >
              {[
                { icon: Search, value: '50K+', label: 'Sitios auditados' },
                { icon: TrendingUp, value: '+42%', label: 'Aumento promedio de tráfico' },
                { icon: Code, value: '2K+', label: 'Desarrolladores confían en nosotros' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="text-xl font-bold text-green-400">{stat.value}</span>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
