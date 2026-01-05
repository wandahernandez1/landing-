import { useRef, useState, useEffect } from 'react'
import { GitBranch, Play, CheckCircle2, Clock, Rocket, Globe, Box, Zap, Shield } from 'lucide-react'

// Pipeline stages for live demo
const PIPELINE_STAGES = [
  { id: 'push', name: 'Git Push', icon: GitBranch, duration: 800 },
  { id: 'build', name: 'Building', icon: Box, duration: 2000 },
  { id: 'test', name: 'Testing', icon: Shield, duration: 1500 },
  { id: 'deploy', name: 'Deploying', icon: Rocket, duration: 1200 },
  { id: 'live', name: 'Live!', icon: Globe, duration: 500 },
]

// Frameworks supported
const FRAMEWORKS = [
  { name: 'Next.js', logo: '▲', config: 'next.config.js detected → Using next build' },
  { name: 'Vite', logo: '⚡', config: 'vite.config.ts detected → Using vite build' },
  { name: 'Astro', logo: '🚀', config: 'astro.config.mjs detected → Using astro build' },
  { name: 'Nuxt', logo: '💚', config: 'nuxt.config.ts detected → Using nuxi build' },
  { name: 'Remix', logo: '💿', config: 'remix.config.js detected → Using remix build' },
  { name: 'SvelteKit', logo: '🔶', config: 'svelte.config.js detected → Using vite build' },
]

// Comparison data
const COMPARISON = {
  traditional: {
    label: 'Traditional CI/CD',
    steps: ['Configure Jenkins/CircleCI', 'Write YAML config', 'Set up Docker', 'Configure CDN', 'Manual SSL', 'Wait 15+ min'],
    time: '15-45 min',
    color: 'red'
  },
  deployzero: {
    label: 'DeployZero',
    steps: ['Connect repo', 'Push code', 'Done'],
    time: '< 30 sec',
    color: 'cyan'
  }
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentStage, setCurrentStage] = useState(-1)
  const [isRunning, setIsRunning] = useState(false)
  const [hoveredFramework, setHoveredFramework] = useState<number | null>(null)
  const [completedRuns, setCompletedRuns] = useState(0)

  // Run pipeline simulation
  const runPipeline = () => {
    if (isRunning) return
    setIsRunning(true)
    setCurrentStage(0)
    
    let stage = 0
    const runNextStage = () => {
      if (stage < PIPELINE_STAGES.length - 1) {
        setTimeout(() => {
          stage++
          setCurrentStage(stage)
          runNextStage()
        }, PIPELINE_STAGES[stage].duration)
      } else {
        setTimeout(() => {
          setIsRunning(false)
          setCompletedRuns(prev => prev + 1)
        }, PIPELINE_STAGES[stage].duration)
      }
    }
    runNextStage()
  }

  // Auto-run on mount
  useEffect(() => {
    const timer = setTimeout(runPipeline, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-32 md:py-40"
      aria-labelledby="features-title"
    >
      <div className="absolute inset-0 terminal-grid opacity-20" />

      <div className="container-custom relative z-10">
        
        {/* SECTION 1: Live Deploy Demo */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
              Live Demo
            </p>
            <h2 id="features-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Watch a deploy{' '}
              <span className="text-gradient">in real-time</span>
            </h2>
          </header>

          {/* Pipeline Visualization */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-cyan-500/20 bg-gray-900/80 p-8">
              {/* Pipeline header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${isRunning ? 'bg-cyan-400 animate-pulse' : currentStage === PIPELINE_STAGES.length - 1 ? 'bg-green-400' : 'bg-gray-600'}`} />
                  <span className="text-sm text-gray-400">
                    {isRunning ? 'Deploying...' : currentStage === PIPELINE_STAGES.length - 1 ? 'Deployed!' : 'Ready'}
                  </span>
                </div>
                <button
                  onClick={runPipeline}
                  disabled={isRunning}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isRunning 
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                      : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                  }`}
                >
                  <Play className="w-4 h-4" />
                  {isRunning ? 'Running...' : 'Run Deploy'}
                </button>
              </div>

              {/* Pipeline stages */}
              <div className="flex items-center justify-between mb-8">
                {PIPELINE_STAGES.map((stage, i) => (
                  <div key={stage.id} className="flex items-center">
                    <div className={`flex flex-col items-center transition-all duration-500 ${
                      i <= currentStage ? 'opacity-100' : 'opacity-40'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        i < currentStage ? 'bg-green-500/20 text-green-400' :
                        i === currentStage ? 'bg-cyan-500/20 text-cyan-400 ring-2 ring-cyan-400/50' :
                        'bg-gray-800 text-gray-500'
                      }`}>
                        {i < currentStage ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : i === currentStage && isRunning ? (
                          <stage.icon className="w-6 h-6 animate-pulse" />
                        ) : (
                          <stage.icon className="w-6 h-6" />
                        )}
                      </div>
                      <span className={`mt-2 text-xs font-medium ${
                        i <= currentStage ? 'text-white' : 'text-gray-500'
                      }`}>
                        {stage.name}
                      </span>
                    </div>
                    {i < PIPELINE_STAGES.length - 1 && (
                      <div className={`w-12 sm:w-20 h-0.5 mx-2 transition-all duration-500 ${
                        i < currentStage ? 'bg-green-500' : 'bg-gray-700'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Deploy stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">{completedRuns}</p>
                  <p className="text-xs text-gray-500">Deploys this session</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">~6s</p>
                  <p className="text-xs text-gray-500">Avg deploy time</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">100%</p>
                  <p className="text-xs text-gray-500">Success rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Visual Comparison */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Before & After
            </h3>
            <p className="mt-4 text-gray-400">The difference is night and day</p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-semibold text-red-400">{COMPARISON.traditional.label}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {COMPARISON.traditional.steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-red-500/20">
                <p className="text-sm text-gray-500">Total time</p>
                <p className="text-3xl font-bold text-red-400">{COMPARISON.traditional.time}</p>
              </div>
            </div>

            {/* DeployZero */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-cyan-400">{COMPARISON.deployzero.label}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {COMPARISON.deployzero.steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    {step}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-cyan-500/20">
                <p className="text-sm text-gray-500">Total time</p>
                <p className="text-3xl font-bold text-cyan-400">{COMPARISON.deployzero.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Framework Gallery */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your framework,{' '}
              <span className="text-gradient">auto-detected</span>
            </h3>
            <p className="mt-4 text-gray-400">Zero configuration. Just push.</p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {FRAMEWORKS.map((fw, i) => (
              <div
                key={fw.name}
                onMouseEnter={() => setHoveredFramework(i)}
                onMouseLeave={() => setHoveredFramework(null)}
                className="relative group"
              >
                <div className={`rounded-xl border p-6 text-center transition-all duration-300 cursor-pointer ${
                  hoveredFramework === i 
                    ? 'border-cyan-500/50 bg-cyan-500/10 scale-105' 
                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                }`}>
                  <span className="text-3xl block mb-2">{fw.logo}</span>
                  <span className="text-sm font-medium text-white">{fw.name}</span>
                </div>
                
                {/* Config tooltip */}
                {hoveredFramework === i && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-10 w-64 p-3 rounded-lg bg-gray-800 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
                    {fw.config}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Security & Compliance */}
        <div>
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enterprise-grade security
            </h3>
            <p className="mt-4 text-gray-400">Built for teams that can't compromise</p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { cert: 'SOC 2', desc: 'Type II certified', icon: '🛡️' },
              { cert: 'GDPR', desc: 'Fully compliant', icon: '🇪🇺' },
              { cert: 'ISO 27001', desc: 'Information security', icon: '🔐' },
            ].map((item) => (
              <div key={item.cert} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <p className="text-lg font-bold text-white">{item.cert}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
