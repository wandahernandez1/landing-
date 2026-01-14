import { useRef, useState, useEffect } from 'react'
import { Terminal, GitBranch, Eye, Rocket, CheckCircle, ArrowRight, Copy, Check } from 'lucide-react'
import { useHeroAnimation } from '@/shared/hooks'

// Terminal command simulation
const DEPLOY_COMMANDS = [
  { cmd: '$ deployzero init', delay: 0 },
  { cmd: '✓ Proyecto detectado: Next.js 14', delay: 800, type: 'success' },
  { cmd: '$ git push origin main', delay: 1500 },
  { cmd: '→ Compilando...', delay: 2200, type: 'info' },
  { cmd: '✓ Build completado en 8.2s', delay: 3500, type: 'success' },
  { cmd: '→ Desplegando a la red edge...', delay: 4200, type: 'info' },
  { cmd: '✓ Desplegado en 50+ regiones', delay: 5500, type: 'success' },
  { cmd: '', delay: 6000 },
  { cmd: '🚀 En vivo en https://app.example.com', delay: 6500, type: 'highlight' },
]

// Pipeline stages
const PIPELINE_STAGES = [
  { id: 'commit', icon: GitBranch, label: 'Commit', duration: '0.2s' },
  { id: 'preview', icon: Eye, label: 'Vista previa', duration: '1.2s' },
  { id: 'build', icon: Terminal, label: 'Build', duration: '8.2s' },
  { id: 'deploy', icon: Rocket, label: 'Deploy', duration: '2.1s' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [terminalLines, setTerminalLines] = useState<typeof DEPLOY_COMMANDS>([])
  const [activeStage, setActiveStage] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  useHeroAnimation(sectionRef)

  // Terminal typing simulation
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []
    
    const runTerminal = () => {
      setTerminalLines([])
      setActiveStage(0)
      setIsTyping(true)
      
      DEPLOY_COMMANDS.forEach((command, index) => {
        const timeout = setTimeout(() => {
          setTerminalLines(prev => [...prev, command])
          
          // Update pipeline stage based on commands
          if (index === 2) setActiveStage(1)
          if (index === 3) setActiveStage(2)
          if (index === 5) setActiveStage(3)
          if (index === 8) {
            setActiveStage(4)
            setIsTyping(false)
          }
        }, command.delay)
        timeouts.push(timeout)
      })

      // Loop the animation
      const loopTimeout = setTimeout(() => {
        runTerminal()
      }, 10000)
      timeouts.push(loopTimeout)
    }

    runTerminal()
    
    return () => timeouts.forEach(t => clearTimeout(t))
  }, [])

  const copyCommand = () => {
    navigator.clipboard.writeText('npx deployzero init')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 terminal-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2"
            >
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Despliega en segundos, no en horas</span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">git push.</span>
              <span className="block text-gradient">Estás en producción.</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-gray-400 md:text-xl mb-8"
            >
              DeployZero convierte cada push en un deploy global. 
              Sin configuración, sin CI/CD complejo, sin esperas.
            </p>

            {/* Quick install command */}
            <div 
              data-hero-cta
              className="mb-8"
            >
              <button 
                onClick={copyCommand}
                className="inline-flex items-center gap-3 bg-gray-900/80 border border-cyan-500/30 rounded-xl px-4 py-3 cursor-pointer hover:border-cyan-500/50 transition-all group"
              >
                <code className="text-cyan-400 font-mono text-sm md:text-base">
                  npx deployzero init
                </code>
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                )}
              </button>
            </div>

            <div 
              data-hero-cta
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#pricing"
                className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center"
              >
                Despliega tu primera app
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://docs.deployzero.dev"
                className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center"
              >
                Leer la documentación
              </a>
            </div>

            {/* Trust indicators */}
            <div 
              data-hero-stats
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              {[
                { value: '2M+', label: 'Deploys/month' },
                { value: '<12s', label: 'Avg deploy' },
                { value: '99.99%', label: 'Uptime' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <span className="block text-2xl font-bold text-cyan-400">{stat.value}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div 
            data-hero-visual
            className="relative"
          >
            {/* Terminal Window */}
            <div className="code-block rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500 font-mono">deployzero — zsh</span>
                <div className="w-16" />
              </div>

              {/* Terminal Body */}
              <div className="p-4 md:p-6 font-mono text-sm min-h-[300px] bg-[#0a0f1a]">
                {terminalLines.map((line, i) => (
                  <div 
                    key={i} 
                    className={`mb-1 ${
                      line.type === 'success' ? 'text-green-400' :
                      line.type === 'info' ? 'text-cyan-400' :
                      line.type === 'highlight' ? 'text-yellow-400 font-semibold' :
                      'text-gray-300'
                    }`}
                  >
                    {line.cmd}
                  </div>
                ))}
                {isTyping && (
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                )}
              </div>
            </div>

            {/* Pipeline Progress */}
            <div className="mt-6 p-4 bg-gray-900/50 border border-cyan-500/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-300">Pipeline de Deploy</span>
                <span className="text-xs text-cyan-400">
                  {activeStage === 4 ? 'Completado' : 'En progreso...'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                {PIPELINE_STAGES.map((stage, index) => (
                  <div key={stage.id} className="flex flex-col items-center gap-2 relative">
                    <div 
                      className={`
                        w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500
                        ${index < activeStage ? 'bg-green-500/20 border border-green-500/50' :
                          index === activeStage && activeStage < 4 ? 'bg-cyan-500 pipeline-pulse' :
                          index === activeStage - 1 && activeStage === 4 ? 'bg-green-500/20 border border-green-500/50' :
                          'bg-gray-800 border border-gray-700'}
                      `}
                    >
                      {index < activeStage ? (
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                      ) : (
                        <stage.icon className={`w-5 h-5 md:w-6 md:h-6 ${
                          index === activeStage && activeStage < 4 ? 'text-white' : 'text-gray-500'
                        }`} />
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{stage.label}</span>
                    <span className="text-[10px] text-cyan-500/70">{stage.duration}</span>
                    
                    {/* Connector line */}
                    {index < PIPELINE_STAGES.length - 1 && (
                      <div 
                        className={`absolute top-5 left-full w-full h-0.5 -translate-y-1/2
                          ${index < activeStage ? 'bg-green-500/50' : 'bg-gray-700'}
                        `}
                        style={{ width: 'calc(100% - 2.5rem)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
