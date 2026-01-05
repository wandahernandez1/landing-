import { ArrowRight, Users, Target, Check, Sparkles, ChevronRight, Gift } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Meta onboarding - the visitor completes their own onboarding on this landing page
const ONBOARDING_STEPS = [
  { 
    id: 'welcome', 
    title: 'Welcome! 👋', 
    description: 'Click to start your journey',
    action: 'Got it!',
    reward: 'First step completed!'
  },
  { 
    id: 'scroll', 
    title: 'Explore the page', 
    description: 'Scroll down to see more',
    action: null, // Auto-complete on scroll
    reward: 'Great exploring!'
  },
  { 
    id: 'interact', 
    title: 'Try the demo', 
    description: 'Complete at least one step',
    action: null,
    reward: 'You got it!'
  },
  { 
    id: 'cta', 
    title: 'Ready to start?', 
    description: 'Click the CTA to finish',
    action: 'Start Free Trial',
    reward: '🎉 Onboarding complete!'
  },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const [currentTooltip, setCurrentTooltip] = useState<string | null>('welcome')
  const [showReward, setShowReward] = useState<string | null>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  
  useHeroAnimation(sectionRef)

  // Calculate progress
  const progress = Math.round((completedSteps.length / ONBOARDING_STEPS.length) * 100)

  // Complete a step
  const completeStep = (stepId: string) => {
    if (completedSteps.includes(stepId)) return
    
    setCompletedSteps(prev => [...prev, stepId])
    const step = ONBOARDING_STEPS.find(s => s.id === stepId)
    if (step?.reward) {
      setShowReward(step.reward)
      setTimeout(() => setShowReward(null), 2000)
    }
    
    // Move to next incomplete step
    const nextStep = ONBOARDING_STEPS.find(s => !completedSteps.includes(s.id) && s.id !== stepId)
    setCurrentTooltip(nextStep?.id || null)
  }

  // Track scroll for step 2
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 200) {
        setHasScrolled(true)
        completeStep('scroll')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled, completedSteps])

  // Demo steps for the product preview
  const [demoSteps, setDemoSteps] = useState([
    { id: 'd1', label: 'Create workspace', complete: false },
    { id: 'd2', label: 'Invite team members', complete: false },
    { id: 'd3', label: 'Set up first flow', complete: false },
    { id: 'd4', label: 'Launch! 🚀', complete: false },
  ])

  const toggleDemoStep = (id: string) => {
    setDemoSteps(prev => prev.map(s => s.id === id ? { ...s, complete: !s.complete } : s))
    // Complete "interact" step when user interacts with demo
    if (!completedSteps.includes('interact')) {
      completeStep('interact')
    }
  }

  const demoProgress = Math.round((demoSteps.filter(s => s.complete).length / demoSteps.length) * 100)

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 onboard-grid opacity-30" />
      
      {/* Reward Toast */}
      {showReward && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
          <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{showReward}</span>
          </div>
        </div>
      )}
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        {/* Progress bar at top */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-indigo-400">Your onboarding</span>
            <span className="text-xs text-slate-500">{progress}% complete</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Welcome tooltip */}
            {currentTooltip === 'welcome' && (
              <div 
                data-hero-badge
                className="mb-6 inline-block"
              >
                <div className="relative p-4 bg-indigo-500/20 border border-indigo-500/30 rounded-xl animate-pulse-subtle">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-indigo-400" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-white">Welcome! 👋</p>
                      <p className="text-xs text-indigo-300">Click to start your journey</p>
                    </div>
                    <button
                      onClick={() => completeStep('welcome')}
                      className="ml-2 px-3 py-1 bg-indigo-500 text-white text-xs font-medium rounded-lg hover:bg-indigo-400 transition-colors"
                    >
                      Got it!
                    </button>
                  </div>
                  <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-indigo-500/30" />
                </div>
              </div>
            )}

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">This landing page</span>
              <span className="block text-gradient">onboards you.</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              See the tooltips? The progress bar? The rewards? 
              That's what you can build for your users.
            </p>

            {/* Completed steps display */}
            <div 
              data-hero-cta
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {ONBOARDING_STEPS.map((step) => {
                  const isComplete = completedSteps.includes(step.id)
                  const isCurrent = currentTooltip === step.id
                  return (
                    <div 
                      key={step.id}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${
                        isComplete 
                          ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' 
                          : isCurrent
                          ? 'bg-slate-800 text-white border border-indigo-500/50 animate-pulse'
                          : 'bg-slate-800/50 text-slate-500 border border-slate-700/50'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        isComplete ? 'bg-indigo-500' : 'bg-slate-700'
                      }`}>
                        {isComplete && <Check className="w-3 h-3 text-white" />}
                      </div>
                      {step.title.replace(' 👋', '')}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CTA with tooltip for final step */}
            <div className="relative inline-block">
              {currentTooltip === 'cta' && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="p-2 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-xs text-indigo-300 animate-bounce">
                    👆 Click to complete onboarding!
                  </div>
                </div>
              )}
              <a 
                href="#pricing" 
                onClick={() => completeStep('cta')}
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Stats */}
            <div 
              data-hero-stats
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { value: '+67%', label: 'Avg. activation' },
                { value: '-43%', label: 'Churn reduction' },
                { value: '1K+', label: 'SaaS teams' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <span className="text-xl font-bold text-indigo-400">{stat.value}</span>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Checklist */}
          <div 
            data-hero-visual
            className="relative"
          >
            {/* Tooltip for interact step */}
            {currentTooltip === 'interact' && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                <div className="p-2 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-xs text-indigo-300 animate-bounce">
                  👇 Try clicking a checkbox!
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-indigo-500/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-indigo-400" />
                  <span className="text-sm text-slate-300">Getting Started</span>
                </div>
                <span className="text-xs text-indigo-400">{demoProgress}% complete</span>
              </div>

              {/* Progress */}
              <div className="px-4 py-3 border-b border-slate-700/50">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${demoProgress}%` }}
                  />
                </div>
              </div>

              {/* Checklist */}
              <div className="p-4 space-y-2">
                {demoSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => toggleDemoStep(step.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                      step.complete 
                        ? 'bg-indigo-500/10 border border-indigo-500/30' 
                        : 'bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      step.complete ? 'bg-indigo-500' : 'bg-slate-700 border border-slate-600'
                    }`}>
                      {step.complete && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`flex-1 text-sm ${
                      step.complete ? 'text-slate-400 line-through' : 'text-white'
                    }`}>
                      {step.label}
                    </span>
                    {!step.complete && <ChevronRight className="w-4 h-4 text-slate-500" />}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-800/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Users className="w-4 h-4" />
                    <span>1,234 users completed today</span>
                  </div>
                  {demoProgress === 100 && (
                    <span className="text-xs text-indigo-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      All done!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
          50% { transform: translateX(-50%) translateY(5px); }
          100% { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
