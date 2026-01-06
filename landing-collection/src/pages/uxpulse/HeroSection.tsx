import { ArrowRight, MousePointer2, Eye, Play, Pause } from 'lucide-react'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Simulated heatmap data points - representing clicks on this landing page
const HEATMAP_POINTS = [
  { x: 50, y: 25, intensity: 0.9, clicks: 847 },
  { x: 48, y: 27, intensity: 0.7, clicks: 523 },
  { x: 52, y: 24, intensity: 0.6, clicks: 412 },
  { x: 30, y: 65, intensity: 0.95, clicks: 1203 }, // CTA button area
  { x: 32, y: 66, intensity: 0.8, clicks: 891 },
  { x: 70, y: 65, intensity: 0.5, clicks: 234 }, // Secondary CTA
  { x: 50, y: 85, intensity: 0.4, clicks: 156 },
  { x: 15, y: 10, intensity: 0.3, clicks: 89 }, // Logo area
]

// Session replay mock data
const SESSION_EVENTS = [
  { time: '0:00', action: 'Carga de Página', element: '/', type: 'navigation' },
  { time: '0:02', action: 'Scroll', element: 'Sección Hero', type: 'scroll' },
  { time: '0:05', action: 'Movimiento Mouse', element: 'Título', type: 'hover' },
  { time: '0:08', action: 'Click', element: 'Comenzar Prueba Gratis', type: 'click' },
  { time: '0:12', action: 'Rage Click', element: 'Botón Cargando', type: 'rage' },
  { time: '0:15', action: 'Scroll', element: 'Características', type: 'scroll' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [showHeatmap, setShowHeatmap] = useState(true)
  const [activeEvent, setActiveEvent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [liveClicks, setLiveClicks] = useState(2847)

  useHeroAnimation(sectionRef)

  // Track mouse position for live heatmap effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }, [])

  // Simulate live click counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveClicks(prev => prev + Math.floor(Math.random() * 3))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Session replay animation
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveEvent(prev => (prev + 1) % SESSION_EVENTS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 data-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-2"
            >
              <Eye className="h-4 w-4 text-rose-400" />
              <span className="text-sm text-rose-300">Mira lo que realmente hacen tus usuarios</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">Esta página tiene un</span>
              <span className="block text-gradient">mapa de calor</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-slate-400">ahora mismo.</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              UXPulse te muestra exactamente dónde hacen click, scroll y dónde se frustran tus usuarios. 
              ¿El mapa de calor que ves? Está rastreando esta página. En tiempo real.
            </p>

            {/* Problem Statement */}
            <div 
              data-hero-cta
              className="mb-8 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl"
            >
              <p className="text-rose-300 text-sm">
                <span className="font-semibold">Ahora mismo:</span> El 23% de tus usuarios hacen rage-click en botones rotos. 
                Simplemente no sabes cuáles.
              </p>
            </div>

            <div 
              data-hero-cta
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#pricing"
                className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center"
              >
                Mira tu primer mapa de calor
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center"
              >
                <Play className="h-5 w-5" />
                Ver grabación de sesión
              </a>
            </div>

            {/* Live Stats */}
            <div 
              data-hero-stats
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-rose-400 tabular-nums">
                  {liveClicks.toLocaleString()}
                </span>
                <span className="text-sm text-slate-500">Clicks hoy</span>
              </div>
              <div className="h-8 w-px bg-slate-700" />
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-rose-400">68%</span>
                <span className="text-sm text-slate-500">Profundidad de scroll</span>
              </div>
              <div className="h-8 w-px bg-slate-700" />
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-yellow-400">12</span>
                <span className="text-sm text-slate-500">Rage clicks</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Heatmap Demo */}
          <div 
            data-hero-visual
            className="relative"
          >
            {/* Browser Window with Heatmap */}
            <div 
              className="relative rounded-2xl border border-rose-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-rose-500/10"
              onMouseMove={handleMouseMove}
            >
              {/* Browser Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-rose-500/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-500 font-mono">uxpulse.dev</span>
                <button 
                  onClick={() => setShowHeatmap(!showHeatmap)}
                  className={`text-xs px-2 py-1 rounded ${showHeatmap ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-700 text-slate-400'}`}
                >
                  {showHeatmap ? 'Mapa de Calor ON' : 'Mapa de Calor OFF'}
                </button>
              </div>

              {/* Page Content with Heatmap Overlay */}
              <div className="relative h-80 bg-slate-950/50 p-6">
                {/* Mock page content */}
                <div className="space-y-4">
                  <div className="h-4 w-24 bg-slate-700/50 rounded" />
                  <div className="h-8 w-3/4 bg-slate-700/30 rounded" />
                  <div className="h-4 w-1/2 bg-slate-700/20 rounded" />
                  <div className="mt-8 flex gap-4">
                    <div className="h-10 w-32 bg-rose-500/30 rounded-lg" />
                    <div className="h-10 w-24 bg-slate-700/30 rounded-lg" />
                  </div>
                </div>

                {/* Heatmap Overlay */}
                {showHeatmap && (
                  <div className="absolute inset-0 pointer-events-none">
                    {HEATMAP_POINTS.map((point, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full heatmap-dot"
                        style={{
                          left: `${point.x}%`,
                          top: `${point.y}%`,
                          width: `${point.intensity * 80}px`,
                          height: `${point.intensity * 80}px`,
                          background: `radial-gradient(circle, rgba(244, 63, 94, ${point.intensity * 0.6}) 0%, transparent 70%)`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    ))}
                    
                    {/* Live mouse tracker */}
                    <div 
                      className="absolute w-6 h-6 transition-all duration-100"
                      style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <MousePointer2 className="w-5 h-5 text-rose-400" />
                      <div className="absolute top-0 left-0 w-4 h-4 bg-rose-500/30 rounded-full animate-ping" />
                    </div>
                  </div>
                )}
              </div>

              {/* Stats Bar */}
              <div className="px-4 py-3 bg-slate-800/50 border-t border-rose-500/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  <span className="text-rose-400 font-semibold">{liveClicks}</span> clicks rastreados
                </span>
                <span className="text-slate-400">
                  Scroll: <span className="text-rose-400">68%</span>
                </span>
                <span className="text-yellow-400">
                  ⚠️ 12 rage clicks
                </span>
              </div>
            </div>

            {/* Session Replay Mini Panel */}
            <div className="mt-4 p-4 bg-slate-900/80 border border-rose-500/20 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-300">Grabación de Sesión</span>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 hover:bg-slate-800 rounded"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Play className="w-4 h-4 text-rose-400" />
                  )}
                </button>
              </div>
              
              <div className="space-y-2">
                {SESSION_EVENTS.slice(0, 4).map((event, i) => (
                  <div 
                    key={i}
                    className={`flex items-center gap-3 text-xs p-2 rounded transition-all ${
                      i === activeEvent ? 'bg-rose-500/20 border border-rose-500/30' : 'opacity-50'
                    }`}
                  >
                    <span className="text-slate-500 font-mono w-10">{event.time}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                      event.type === 'click' ? 'bg-rose-500/30 text-rose-300' :
                      event.type === 'rage' ? 'bg-red-500/30 text-red-300' :
                      event.type === 'scroll' ? 'bg-blue-500/30 text-blue-300' :
                      'bg-slate-600/30 text-slate-400'
                    }`}>
                      {event.action}
                    </span>
                    <span className="text-slate-400 truncate">{event.element}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
