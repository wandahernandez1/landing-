import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'
import { CheckCircle, Circle, ArrowRight, Users, Target, Zap, Star } from 'lucide-react'

// Onboarding flow steps
const ONBOARDING_STEPS = [
  { 
    id: 1, 
    title: 'Welcome modal', 
    type: 'modal',
    description: 'Personalized welcome based on user segment',
    completion: 95 
  },
  { 
    id: 2, 
    title: 'Profile setup', 
    type: 'form',
    description: 'Collect key info for personalization',
    completion: 78 
  },
  { 
    id: 3, 
    title: 'Feature tour', 
    type: 'tooltip',
    description: 'Guided tour of core features',
    completion: 65 
  },
  { 
    id: 4, 
    title: 'First action', 
    type: 'checklist',
    description: 'Complete first meaningful action',
    completion: 52 
  },
  { 
    id: 5, 
    title: 'Invite team', 
    type: 'modal',
    description: 'Encourage viral growth',
    completion: 34 
  },
]

// Flow types
const FLOW_TYPES = [
  { id: 'product-led', label: 'Product-Led', icon: Target },
  { id: 'sales-led', label: 'Sales-Led', icon: Users },
  { id: 'hybrid', label: 'Hybrid', icon: Zap },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedFlow, setSelectedFlow] = useState('product-led')
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 onboard-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">Flow Builder</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Design your{' '}<span className="text-gradient">activation flow</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Build personalized onboarding journeys that convert
          </p>
        </header>

        {/* Flow type selector */}
        <div className="flex justify-center gap-3 mb-12">
          {FLOW_TYPES.map((flow) => (
            <button
              key={flow.id}
              onClick={() => setSelectedFlow(flow.id)}
              className={cn(
                'flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all',
                selectedFlow === flow.id
                  ? 'bg-indigo-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
              )}
            >
              <flow.icon className="w-4 h-4" />
              {flow.label}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Flow steps */}
            <div className="space-y-4">
              {ONBOARDING_STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    'relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all',
                    activeStep === step.id
                      ? 'bg-indigo-500/10 border border-indigo-500/30'
                      : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                  )}
                >
                  {/* Step number */}
                  <div className={cn(
                    'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold',
                    activeStep === step.id
                      ? 'bg-indigo-500 text-white'
                      : activeStep > step.id
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-slate-800 text-slate-500'
                  )}>
                    {activeStep > step.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {step.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{step.description}</p>
                    
                    {/* Completion rate */}
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 transition-all duration-500"
                          style={{ width: `${step.completion}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">{step.completion}%</span>
                    </div>
                  </div>

                  {/* Connector line */}
                  {idx < ONBOARDING_STEPS.length - 1 && (
                    <div className="absolute left-[1.75rem] top-14 w-px h-6 bg-slate-800" />
                  )}
                </div>
              ))}

              {/* Add step button */}
              <button className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-slate-800 text-slate-500 hover:border-indigo-500 hover:text-indigo-400 transition-colors">
                <Circle className="w-5 h-5" />
                Add step
              </button>
            </div>

            {/* Preview panel */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-sm font-medium text-white">Preview</span>
                <span className="text-xs text-slate-500">Step {activeStep} of {ONBOARDING_STEPS.length}</span>
              </div>
              
              {/* Mock app preview */}
              <div className="p-6">
                <div className="aspect-[4/3] rounded-lg bg-slate-950 border border-slate-800 p-4 relative overflow-hidden">
                  {/* Mock header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 mx-4 h-6 bg-slate-800 rounded" />
                  </div>
                  
                  {/* Mock content */}
                  <div className="grid grid-cols-4 gap-3 h-[calc(100%-3rem)]">
                    <div className="col-span-1 space-y-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-6 bg-slate-800 rounded" />
                      ))}
                    </div>
                    <div className="col-span-3 bg-slate-800/50 rounded-lg p-4">
                      {/* Onboarding element preview */}
                      {activeStep === 1 && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <div className="w-64 bg-slate-900 rounded-xl p-6 border border-indigo-500/30 shadow-xl">
                            <div className="text-center">
                              <Star className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
                              <h4 className="font-semibold text-white mb-2">Welcome aboard!</h4>
                              <p className="text-sm text-slate-400 mb-4">Let's get you set up in 2 minutes</p>
                              <button className="w-full py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeStep === 3 && (
                        <div className="absolute top-24 left-40 bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <span>Click here to create your first project</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-indigo-500" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 pb-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Completion', value: '67%', delta: '+12%' },
                  { label: 'Avg. Time', value: '4.2m', delta: '-30s' },
                  { label: 'Activation', value: '52%', delta: '+8%' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-slate-800/50">
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                    <p className="text-xs text-green-400 mt-1">{stat.delta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
