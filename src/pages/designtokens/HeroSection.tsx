import { ArrowRight, Palette, Code, RefreshCw, Figma } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Brand themes for the interactive switch
const BRAND_THEMES = [
  {
    name: 'Default',
    colors: { primary: '#ec4899', secondary: '#8b5cf6', background: '#0f172a', text: '#f8fafc' },
    radius: '0.5rem',
  },
  {
    name: 'Ocean',
    colors: { primary: '#0ea5e9', secondary: '#06b6d4', background: '#0c1929', text: '#e2e8f0' },
    radius: '0.75rem',
  },
  {
    name: 'Forest',
    colors: { primary: '#22c55e', secondary: '#84cc16', background: '#0a1a0f', text: '#ecfccb' },
    radius: '0.25rem',
  },
  {
    name: 'Sunset',
    colors: { primary: '#f97316', secondary: '#eab308', background: '#1c1210', text: '#fef3c7' },
    radius: '1rem',
  },
]

// Token categories for the morphing display
const TOKEN_CATEGORIES = ['colors', 'spacing', 'typography', 'shadows']

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTheme, setActiveTheme] = useState(0)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [isSyncing, setIsSyncing] = useState(false)

  const theme = BRAND_THEMES[activeTheme]

  useHeroAnimation(sectionRef)

  // Cycle through token categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategoryIndex(prev => (prev + 1) % TOKEN_CATEGORIES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Simulate sync animation when theme changes
  useEffect(() => {
    setIsSyncing(true)
    const timeout = setTimeout(() => setIsSyncing(false), 1000)
    return () => clearTimeout(timeout)
  }, [activeTheme])

  const handleThemeChange = (index: number) => {
    setActiveTheme(index)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        // Dynamic background based on active theme
        background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.colors.primary}15, transparent 70%), ${theme.colors.background}`,
      }}
    >
      <div className="absolute inset-0 design-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors duration-500"
              style={{ 
                borderColor: `${theme.colors.primary}40`,
                backgroundColor: `${theme.colors.primary}15`,
              }}
            >
              <Palette className="h-4 w-4" style={{ color: theme.colors.primary }} />
              <span className="text-sm" style={{ color: theme.colors.primary }}>Diseño ↔ Código sincronizados</span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ color: theme.colors.text }}
            >
              <span className="block">Un token.</span>
              <span 
                className="block transition-colors duration-500"
                style={{ color: theme.colors.primary }}
              >
                Todas las plataformas.
              </span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg md:text-xl mb-8 text-slate-400"
            >
              Cambia un color en Figma. Míralo actualizarse en React, iOS, Android y 
              la documentación de tu design system. Al instante. Sin trabajo manual.
            </p>

            {/* Theme Switcher */}
            <div 
              data-hero-cta
              className="mb-8 p-4 bg-slate-900/50 border border-slate-700/50 rounded-xl"
            >
              <p className="text-sm text-slate-400 mb-3">Prueba cambiando de marca:</p>
              <div className="flex items-center gap-2">
                {BRAND_THEMES.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => handleThemeChange(i)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      i === activeTheme 
                        ? 'ring-2 ring-offset-2 ring-offset-slate-900' 
                        : 'hover:bg-slate-800'
                    }`}
                    style={{
                      backgroundColor: i === activeTheme ? `${t.colors.primary}20` : undefined,
                      ['--tw-ring-color' as string]: i === activeTheme ? t.colors.primary : undefined,
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: t.colors.primary }}
                    />
                    <span className="text-sm text-slate-300">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div 
              data-hero-cta
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#pricing"
                className="flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center transition-all duration-500"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                  borderRadius: theme.radius,
                }}
              >
                Instalar Plugin de Figma
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center border transition-all duration-500"
                style={{ 
                  borderColor: `${theme.colors.primary}50`,
                  color: theme.colors.primary,
                  borderRadius: theme.radius,
                }}
              >
                <Figma className="h-5 w-5" />
                Ver demo
              </a>
            </div>

            {/* Stats */}
            <div 
              data-hero-stats
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              {[
                { value: '10K+', label: 'Equipos' },
                { value: '2M+', label: 'Tokens sincronizados' },
                { value: '5 min', label: 'Tiempo de setup' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <span 
                    className="block text-2xl font-bold transition-colors duration-500"
                    style={{ color: theme.colors.primary }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Token Preview */}
          <div 
            data-hero-visual
            className="relative"
          >
            {/* Figma ↔ Code Sync Visualization */}
            <div 
              className="rounded-2xl border overflow-hidden shadow-2xl transition-all duration-500"
              style={{ 
                borderColor: `${theme.colors.primary}20`,
                boxShadow: `0 25px 50px -12px ${theme.colors.primary}20`,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <Figma className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-300">tokens.json</span>
                </div>
                <div className={`flex items-center gap-2 transition-opacity ${isSyncing ? 'opacity-100' : 'opacity-0'}`}>
                  <RefreshCw className="h-4 w-4 animate-spin" style={{ color: theme.colors.primary }} />
                  <span className="text-xs" style={{ color: theme.colors.primary }}>Sincronizando...</span>
                </div>
              </div>

              {/* Token Content */}
              <div className="p-6 bg-slate-950/90 font-mono text-sm">
                <div className="space-y-4">
                  {/* Colors section */}
                  <div className={`transition-all duration-300 ${activeCategoryIndex === 0 ? 'opacity-100' : 'opacity-50'}`}>
                    <p className="text-slate-500 mb-2">// colors</p>
                    <div className="space-y-1 pl-2">
                      <p>
                        <span style={{ color: theme.colors.primary }}>"primary"</span>
                        <span className="text-slate-500">: </span>
                        <span className="text-green-400">"{theme.colors.primary}"</span>
                        <span className="text-slate-500">,</span>
                      </p>
                      <p>
                        <span style={{ color: theme.colors.primary }}>"secondary"</span>
                        <span className="text-slate-500">: </span>
                        <span className="text-green-400">"{theme.colors.secondary}"</span>
                        <span className="text-slate-500">,</span>
                      </p>
                    </div>
                  </div>

                  {/* Spacing section */}
                  <div className={`transition-all duration-300 ${activeCategoryIndex === 1 ? 'opacity-100' : 'opacity-50'}`}>
                    <p className="text-slate-500 mb-2">// spacing</p>
                    <div className="space-y-1 pl-2">
                      <p>
                        <span style={{ color: theme.colors.primary }}>"sm"</span>
                        <span className="text-slate-500">: </span>
                        <span className="text-green-400">"8px"</span>
                        <span className="text-slate-500">,</span>
                      </p>
                      <p>
                        <span style={{ color: theme.colors.primary }}>"md"</span>
                        <span className="text-slate-500">: </span>
                        <span className="text-green-400">"16px"</span>
                        <span className="text-slate-500">,</span>
                      </p>
                    </div>
                  </div>

                  {/* Border radius section */}
                  <div className={`transition-all duration-300 ${activeCategoryIndex === 2 ? 'opacity-100' : 'opacity-50'}`}>
                    <p className="text-slate-500 mb-2">// radius</p>
                    <div className="space-y-1 pl-2">
                      <p>
                        <span style={{ color: theme.colors.primary }}>"default"</span>
                        <span className="text-slate-500">: </span>
                        <span className="text-green-400">"{theme.radius}"</span>
                        <span className="text-slate-500">,</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Preview */}
              <div 
                className="p-6 border-t border-slate-700/50"
                style={{ backgroundColor: `${theme.colors.background}ee` }}
              >
                <p className="text-xs text-slate-500 mb-3">Vista Previa en Vivo</p>
                <div className="flex items-center gap-3">
                  <button 
                    className="px-4 py-2 text-sm font-medium transition-all duration-500"
                    style={{ 
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.background,
                      borderRadius: theme.radius,
                    }}
                  >
                    Botón Primario
                  </button>
                  <button 
                    className="px-4 py-2 text-sm font-medium border transition-all duration-500"
                    style={{ 
                      borderColor: theme.colors.primary,
                      color: theme.colors.primary,
                      borderRadius: theme.radius,
                    }}
                  >
                    Secundario
                  </button>
                </div>
              </div>
            </div>

            {/* Export Targets */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {['Tailwind', 'CSS', 'iOS', 'Android'].map((target) => (
                <div 
                  key={target}
                  className="p-3 bg-slate-900/80 border rounded-lg text-center transition-all duration-500"
                  style={{ 
                    borderColor: `${theme.colors.primary}20`,
                    borderRadius: theme.radius,
                  }}
                >
                  <Code className="w-4 h-4 mx-auto mb-1" style={{ color: theme.colors.primary }} />
                  <span className="text-xs text-slate-400">{target}</span>
                </div>
              ))}
            </div>

            {/* Floating elements */}
            <div 
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl transition-colors duration-500"
              style={{ backgroundColor: `${theme.colors.primary}20` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
